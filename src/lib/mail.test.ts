import { beforeEach, describe, expect, it, vi } from "vitest";

const sendMock = vi.fn();

vi.mock("resend", () => ({
  Resend: class {
    emails = {
      send: sendMock,
    };
  },
}));

import {
  extractEmailAddress,
  formatFromAddress,
  getMailConfig,
  sendContactEmail,
} from "@/lib/mail";

describe("extractEmailAddress / formatFromAddress", () => {
  it("accepts a bare email address", () => {
    expect(extractEmailAddress("website@claudialunaconsulting.com")).toBe(
      "website@claudialunaconsulting.com",
    );
    expect(formatFromAddress("website@claudialunaconsulting.com")).toBe(
      "Claudia Luna Consulting <website@claudialunaconsulting.com>",
    );
  });

  it("extracts email from a named from value without double-wrapping", () => {
    expect(
      extractEmailAddress(
        "Claudia Luna Consulting <website@claudialunaconsulting.com>",
      ),
    ).toBe("website@claudialunaconsulting.com");
    expect(
      formatFromAddress(
        "Claudia Luna Consulting <website@claudialunaconsulting.com>",
      ),
    ).toBe("Claudia Luna Consulting <website@claudialunaconsulting.com>");
  });

  it("strips wrapping quotes", () => {
    expect(extractEmailAddress('"website@claudialunaconsulting.com"')).toBe(
      "website@claudialunaconsulting.com",
    );
  });

  it("rejects invalid values", () => {
    expect(extractEmailAddress("Claudia Luna Consulting")).toBeNull();
    expect(formatFromAddress("not-an-email")).toBeNull();
  });
});

describe("getMailConfig", () => {
  beforeEach(() => {
    delete process.env.RESEND_API_KEY;
    delete process.env.CONTACT_TO_EMAIL;
    delete process.env.CONTACT_FROM_EMAIL;
  });

  it("returns null when configuration is incomplete", () => {
    process.env.RESEND_API_KEY = "re_test";
    expect(getMailConfig()).toBeNull();
  });

  it("returns config when all variables are present", () => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.CONTACT_TO_EMAIL = "claudialunaconsulting@gmail.com";
    process.env.CONTACT_FROM_EMAIL = "website@claudialunaconsulting.com";

    expect(getMailConfig()).toEqual({
      apiKey: "re_test",
      toEmail: "claudialunaconsulting@gmail.com",
      fromEmail: "website@claudialunaconsulting.com",
    });
  });

  it("normalizes a named CONTACT_FROM_EMAIL env value", () => {
    process.env.RESEND_API_KEY = "re_test";
    process.env.CONTACT_TO_EMAIL = "claudialunaconsulting@gmail.com";
    process.env.CONTACT_FROM_EMAIL =
      "Claudia Luna Consulting <website@claudialunaconsulting.com>";

    expect(getMailConfig()?.fromEmail).toBe(
      "website@claudialunaconsulting.com",
    );
  });
});

describe("sendContactEmail", () => {
  beforeEach(() => {
    sendMock.mockReset();
  });

  it("sends to the configured recipient with visitor Reply-To", async () => {
    sendMock.mockResolvedValue({ data: { id: "email_abc" }, error: null });

    const result = await sendContactEmail(
      {
        name: "Anna Andersson",
        company: "Exempel AB",
        email: "anna@example.com",
        message: "Vi behöver interim HR-stöd under Q2.",
      },
      {
        apiKey: "re_test",
        toEmail: "claudialunaconsulting@gmail.com",
        fromEmail: "website@claudialunaconsulting.com",
      },
    );

    expect(result).toEqual({ ok: true, id: "email_abc" });
    expect(sendMock).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ["claudialunaconsulting@gmail.com"],
        replyTo: "anna@example.com",
        from: "Claudia Luna Consulting <website@claudialunaconsulting.com>",
      }),
    );
  });

  it("maps provider errors to failure", async () => {
    sendMock.mockResolvedValue({
      data: null,
      error: { name: "validation_error", message: "Invalid from" },
    });

    const result = await sendContactEmail(
      {
        name: "Anna Andersson",
        company: "Exempel AB",
        email: "anna@example.com",
        message: "Vi behöver interim HR-stöd under Q2.",
      },
      {
        apiKey: "re_test",
        toEmail: "claudialunaconsulting@gmail.com",
        fromEmail: "website@claudialunaconsulting.com",
      },
    );

    expect(result).toEqual({ ok: false, reason: "provider_error" });
  });
});
