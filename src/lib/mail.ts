import { Resend } from "resend";
import { buildContactEmail, type ValidatedContact } from "@/lib/contact";

export type MailConfig = {
  apiKey: string;
  toEmail: string;
  fromEmail: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function stripWrappingQuotes(value: string) {
  const trimmed = value.replace(/[\u200B-\u200D\uFEFF]/g, "").trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1).trim();
  }
  return trimmed;
}

/**
 * Accepts a bare address or `Name <email@domain>` and returns the bare email.
 * Prevents invalid double-wrapped Resend `from` values when the env already
 * includes a display name.
 */
export function extractEmailAddress(raw: string): string | null {
  const value = stripWrappingQuotes(raw);
  if (!value) return null;

  const named = value.match(/^(.*?)<([^<>]+)>\s*$/);
  const email = (named ? named[2] : value).trim();

  if (!EMAIL_RE.test(email)) {
    return null;
  }

  return email;
}

export function formatFromAddress(
  fromEmail: string,
  displayName = "Claudia Luna Consulting",
) {
  const email = extractEmailAddress(fromEmail);
  if (!email) return null;
  return `${displayName} <${email}>`;
}

export function getMailConfig(): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = extractEmailAddress(process.env.CONTACT_TO_EMAIL ?? "");
  const fromEmail = extractEmailAddress(process.env.CONTACT_FROM_EMAIL ?? "");

  if (!apiKey || !toEmail || !fromEmail) {
    return null;
  }

  return { apiKey, toEmail, fromEmail };
}

export type SendContactResult =
  | { ok: true; id?: string }
  | { ok: false; reason: "not_configured" | "provider_error" };

export async function sendContactEmail(
  data: ValidatedContact,
  config: MailConfig,
  submittedAt = new Date(),
): Promise<SendContactResult> {
  const from = formatFromAddress(config.fromEmail);
  if (!from) {
    console.error("[contact] invalid from address configuration", {
      fromHasAt: config.fromEmail.includes("@"),
      fromHasAngleBrackets: /[<>]/.test(config.fromEmail),
      fromLength: config.fromEmail.length,
    });
    return { ok: false, reason: "not_configured" };
  }

  const resend = new Resend(config.apiKey);
  const email = buildContactEmail(data, submittedAt);

  try {
    const result = await resend.emails.send({
      from,
      to: [config.toEmail],
      replyTo: data.email,
      subject: email.subject,
      html: email.html,
      text: email.text,
    });

    if (result.error) {
      console.error("[contact] provider rejected message", {
        name: result.error.name,
        message: result.error.message,
        fromDomain: config.fromEmail.split("@")[1] ?? null,
      });
      return { ok: false, reason: "provider_error" };
    }

    return { ok: true, id: result.data?.id };
  } catch (error) {
    console.error("[contact] provider request failed", {
      error: error instanceof Error ? error.name : "unknown",
    });
    return { ok: false, reason: "provider_error" };
  }
}
