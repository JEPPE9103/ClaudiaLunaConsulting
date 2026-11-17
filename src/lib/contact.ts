import { CONTACT_LIMITS } from "@/lib/contact-limits";

export { CONTACT_LIMITS };

export type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
  formStartedAt?: unknown;
};

export type ValidatedContact = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export type ContactValidationError =
  | "invalid"
  | "too_long"
  | "message_short"
  | "bot"
  | "too_fast";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function asString(value: unknown) {
  return typeof value === "string" ? value : "";
}

export function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function validateContactPayload(
  payload: ContactPayload,
):
  | { ok: true; data: ValidatedContact }
  | { ok: false; error: ContactValidationError } {
  const honeypot = asString(payload.website).trim();
  if (honeypot) {
    return { ok: false, error: "bot" };
  }

  const formStartedAt = Number(payload.formStartedAt);
  if (
    Number.isFinite(formStartedAt) &&
    Date.now() - formStartedAt < CONTACT_LIMITS.minSubmitMs
  ) {
    return { ok: false, error: "too_fast" };
  }

  const name = asString(payload.name).trim();
  const company = asString(payload.company).trim();
  const email = asString(payload.email).trim();
  const message = asString(payload.message).trim();

  if (!name || !company || !email || !message || !EMAIL_RE.test(email)) {
    return { ok: false, error: "invalid" };
  }

  if (
    name.length > CONTACT_LIMITS.name ||
    company.length > CONTACT_LIMITS.company ||
    email.length > CONTACT_LIMITS.email ||
    message.length > CONTACT_LIMITS.message
  ) {
    return { ok: false, error: "too_long" };
  }

  if (message.length < CONTACT_LIMITS.minMessage) {
    return { ok: false, error: "message_short" };
  }

  return { ok: true, data: { name, company, email, message } };
}

export function buildContactEmail(data: ValidatedContact, submittedAt: Date) {
  const safe = {
    name: escapeHtml(data.name),
    company: escapeHtml(data.company),
    email: escapeHtml(data.email),
    message: escapeHtml(data.message).replaceAll("\n", "<br />"),
    timestamp: escapeHtml(submittedAt.toISOString()),
  };

  const subject = `Ny förfrågan från webbplatsen — ${data.name}`;

  const html = `
<!DOCTYPE html>
<html lang="sv">
  <body style="margin:0;padding:0;background:#f4f0e9;font-family:Arial,Helvetica,sans-serif;color:#292f31;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f0e9;padding:24px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" style="max-width:640px;background:#ffffff;border:1px solid #e5ded4;border-radius:16px;padding:28px;">
            <tr>
              <td>
                <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#b86f58;">Claudia Luna Consulting</p>
                <h1 style="margin:0 0 16px;font-size:22px;line-height:1.3;">Ny förfrågan från webbplatsen</h1>
                <p style="margin:0 0 20px;font-size:14px;line-height:1.6;color:#5f6668;">
                  Detta meddelande skickades via kontaktformuläret på claudialunaconsulting.com.
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="font-size:14px;line-height:1.6;">
                  <tr>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;width:120px;color:#5f6668;">Namn</td>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;"><strong>${safe.name}</strong></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;color:#5f6668;">Företag</td>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;">${safe.company}</td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;color:#5f6668;">E-post</td>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;"><a href="mailto:${safe.email}" style="color:#292f31;">${safe.email}</a></td>
                  </tr>
                  <tr>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;color:#5f6668;">Tidpunkt</td>
                    <td style="padding:8px 0;border-top:1px solid #e5ded4;">${safe.timestamp}</td>
                  </tr>
                </table>
                <div style="margin-top:20px;padding-top:16px;border-top:1px solid #e5ded4;">
                  <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:#5f6668;">Meddelande</p>
                  <p style="margin:0;font-size:15px;line-height:1.7;">${safe.message}</p>
                </div>
                <p style="margin:24px 0 0;font-size:12px;line-height:1.5;color:#5f6668;">
                  Svara direkt på detta mejl för att kontakta kunden (Reply-To är satt till kundens adress).
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`.trim();

  const text = [
    "Ny förfrågan från Claudia Luna Consulting webbplats",
    "",
    `Namn: ${data.name}`,
    `Företag: ${data.company}`,
    `E-post: ${data.email}`,
    `Tidpunkt: ${submittedAt.toISOString()}`,
    "",
    "Meddelande:",
    data.message,
    "",
    "Svara direkt på detta mejl för att kontakta kunden.",
  ].join("\n");

  return { subject, html, text };
}

export function getClientIp(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "unknown";
  }
  return request.headers.get("x-real-ip")?.trim() || "unknown";
}
