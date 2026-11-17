import { beforeEach, describe, expect, it, vi } from "vitest";
import { CONTACT_LIMITS } from "@/lib/contact-limits";
import { resetRateLimitStore } from "@/lib/rate-limit";

const getMailConfig = vi.fn();
const sendContactEmail = vi.fn();

vi.mock("@/lib/mail", () => ({
  getMailConfig: () => getMailConfig(),
  sendContactEmail: (...args: unknown[]) => sendContactEmail(...args),
}));

import { POST } from "@/app/api/contact/route";

const validBody = {
  name: "Anna Andersson",
  company: "Exempel AB",
  email: "anna@example.com",
  message: "Vi behöver interim HR-stöd under Q2.",
  website: "",
  formStartedAt: Date.now() - 10_000,
};

function makeRequest(body: unknown, ip = "203.0.113.10") {
  return new Request("http://localhost/api/contact", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-forwarded-for": ip,
    },
    body: JSON.stringify(body),
  });
}

describe("POST /api/contact", () => {
  beforeEach(() => {
    resetRateLimitStore();
    getMailConfig.mockReset();
    sendContactEmail.mockReset();
    getMailConfig.mockReturnValue({
      apiKey: "re_test",
      toEmail: "claudialunaconsulting@gmail.com",
      fromEmail: "website@claudialunaconsulting.com",
    });
    sendContactEmail.mockResolvedValue({ ok: true, id: "email_123" });
  });

  it("sends a valid submission and returns success only after provider acceptance", async () => {
    const response = await POST(makeRequest(validBody));
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ ok: true });
    expect(sendContactEmail).toHaveBeenCalledTimes(1);
    expect(sendContactEmail).toHaveBeenCalledWith(
      {
        name: "Anna Andersson",
        company: "Exempel AB",
        email: "anna@example.com",
        message: "Vi behöver interim HR-stöd under Q2.",
      },
      expect.objectContaining({
        toEmail: "claudialunaconsulting@gmail.com",
        fromEmail: "website@claudialunaconsulting.com",
      }),
    );
  });

  it("returns provider failure without reporting success", async () => {
    sendContactEmail.mockResolvedValue({
      ok: false,
      reason: "provider_error",
    });

    const response = await POST(makeRequest(validBody, "203.0.113.20"));
    const json = await response.json();

    expect(response.status).toBe(502);
    expect(json).toEqual({ ok: false, error: "provider_error" });
  });

  it("returns not_configured when env is missing", async () => {
    getMailConfig.mockReturnValue(null);

    const response = await POST(makeRequest(validBody, "203.0.113.21"));
    const json = await response.json();

    expect(response.status).toBe(503);
    expect(json).toEqual({ ok: false, error: "not_configured" });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("rejects invalid email", async () => {
    const response = await POST(
      makeRequest({ ...validBody, email: "bad" }, "203.0.113.22"),
    );
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json).toEqual({ ok: false, error: "invalid" });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("rejects empty fields", async () => {
    const response = await POST(
      makeRequest(
        { ...validBody, name: "", company: "", message: "" },
        "203.0.113.23",
      ),
    );
    expect(response.status).toBe(400);
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("rejects oversized input", async () => {
    const response = await POST(
      makeRequest(
        {
          ...validBody,
          message: "a".repeat(CONTACT_LIMITS.message + 1),
        },
        "203.0.113.24",
      ),
    );
    const json = await response.json();

    expect(response.status).toBe(400);
    expect(json).toEqual({ ok: false, error: "too_long" });
  });

  it("silently accepts honeypot spam without sending", async () => {
    const response = await POST(
      makeRequest({ ...validBody, website: "spam" }, "203.0.113.25"),
    );
    const json = await response.json();

    expect(response.status).toBe(200);
    expect(json).toEqual({ ok: true });
    expect(sendContactEmail).not.toHaveBeenCalled();
  });

  it("rate limits repeated submissions from the same IP", async () => {
    const ip = "203.0.113.99";
    for (let i = 0; i < CONTACT_LIMITS.rateLimitMax; i += 1) {
      const ok = await POST(makeRequest(validBody, ip));
      expect(ok.status).toBe(200);
    }

    const blocked = await POST(makeRequest(validBody, ip));
    const json = await blocked.json();

    expect(blocked.status).toBe(429);
    expect(json).toEqual({ ok: false, error: "rate_limited" });
  });
});
