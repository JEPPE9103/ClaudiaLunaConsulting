import { NextResponse } from "next/server";
import {
  getClientIp,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact";
import { getMailConfig, sendContactEmail } from "@/lib/mail";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const ip = getClientIp(request);
    const rate = checkRateLimit(ip);
    if (!rate.allowed) {
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.max(1, Math.ceil((rate.retryAfterMs ?? 60_000) / 1000)),
            ),
          },
        },
      );
    }

    const body = (await request.json()) as ContactPayload;
    const validated = validateContactPayload(body);

    if (!validated.ok) {
      if (validated.error === "bot" || validated.error === "too_fast") {
        // Appear successful to bots without sending.
        return NextResponse.json({ ok: true });
      }

      return NextResponse.json(
        { ok: false, error: validated.error },
        { status: 400 },
      );
    }

    const config = getMailConfig();
    if (!config) {
      console.error("[contact] missing mail configuration");
      return NextResponse.json(
        { ok: false, error: "not_configured" },
        { status: 503 },
      );
    }

    const sent = await sendContactEmail(validated.data, config);
    if (!sent.ok) {
      return NextResponse.json(
        { ok: false, error: sent.reason },
        { status: 502 },
      );
    }

    console.info("[contact] accepted by provider", {
      hasId: Boolean(sent.id),
      companyLength: validated.data.company.length,
      messageLength: validated.data.message.length,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "unable_to_process" },
      { status: 500 },
    );
  }
}
