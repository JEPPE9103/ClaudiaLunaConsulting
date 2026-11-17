import { describe, expect, it } from "vitest";
import {
  buildContactEmail,
  CONTACT_LIMITS,
  escapeHtml,
  validateContactPayload,
} from "@/lib/contact";

const validPayload = {
  name: "Anna Andersson",
  company: "Exempel AB",
  email: "anna@example.com",
  message: "Vi behöver interim HR-stöd under Q2.",
  website: "",
  formStartedAt: Date.now() - 10_000,
};

describe("escapeHtml", () => {
  it("escapes HTML special characters", () => {
    expect(escapeHtml(`<script>alert("x")</script>`)).toBe(
      "&lt;script&gt;alert(&quot;x&quot;)&lt;/script&gt;",
    );
  });
});

describe("validateContactPayload", () => {
  it("accepts a valid payload", () => {
    const result = validateContactPayload(validPayload);
    expect(result.ok).toBe(true);
    if (result.ok) {
      expect(result.data.email).toBe("anna@example.com");
    }
  });

  it("rejects invalid email", () => {
    const result = validateContactPayload({
      ...validPayload,
      email: "not-an-email",
    });
    expect(result).toEqual({ ok: false, error: "invalid" });
  });

  it("rejects empty fields", () => {
    const result = validateContactPayload({
      ...validPayload,
      name: "  ",
      message: "",
    });
    expect(result).toEqual({ ok: false, error: "invalid" });
  });

  it("rejects short messages", () => {
    const result = validateContactPayload({
      ...validPayload,
      message: "Hej",
    });
    expect(result).toEqual({ ok: false, error: "message_short" });
  });

  it("rejects oversized input", () => {
    const result = validateContactPayload({
      ...validPayload,
      message: "a".repeat(CONTACT_LIMITS.message + 1),
    });
    expect(result).toEqual({ ok: false, error: "too_long" });
  });

  it("flags honeypot submissions as bots", () => {
    const result = validateContactPayload({
      ...validPayload,
      website: "http://spam.example",
    });
    expect(result).toEqual({ ok: false, error: "bot" });
  });

  it("flags submissions that are too fast", () => {
    const result = validateContactPayload({
      ...validPayload,
      formStartedAt: Date.now(),
    });
    expect(result).toEqual({ ok: false, error: "too_fast" });
  });
});

describe("buildContactEmail", () => {
  it("includes escaped content and site identification", () => {
    const submittedAt = new Date("2026-03-15T10:00:00.000Z");
    const email = buildContactEmail(
      {
        name: 'Anna <b>Test</b>',
        company: "Exempel AB",
        email: "anna@example.com",
        message: "Line 1\nLine 2",
      },
      submittedAt,
    );

    expect(email.subject).toContain("Anna <b>Test</b>");
    expect(email.html).toContain("Claudia Luna Consulting");
    expect(email.html).toContain("claudialunaconsulting.com");
    expect(email.html).toContain("Anna &lt;b&gt;Test&lt;/b&gt;");
    expect(email.html).not.toContain("<b>Test</b>");
    expect(email.html).toContain("2026-03-15T10:00:00.000Z");
    expect(email.text).toContain("anna@example.com");
    expect(email.text).toContain("Line 1\nLine 2");
  });
});
