import { Resend } from "resend";
import { buildContactEmail, type ValidatedContact } from "@/lib/contact";

export type MailConfig = {
  apiKey: string;
  toEmail: string;
  fromEmail: string;
};

export function getMailConfig(): MailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim();
  const fromEmail = process.env.CONTACT_FROM_EMAIL?.trim();

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
  const resend = new Resend(config.apiKey);
  const email = buildContactEmail(data, submittedAt);

  try {
    const result = await resend.emails.send({
      from: `Claudia Luna Consulting <${config.fromEmail}>`,
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
