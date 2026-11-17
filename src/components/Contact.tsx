"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/content";
import { cn } from "@/lib/cn";
import { CONTACT_LIMITS } from "@/lib/contact-limits";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

type FormValues = {
  name: string;
  company: string;
  email: string;
  message: string;
};

const emptyForm: FormValues = {
  name: "",
  company: "",
  email: "",
  message: "",
};

export function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;
  const formCopy = contact.form;
  const honeypotId = useId();
  const formStartedAt = useRef(0);
  const submittingRef = useRef(false);

  useEffect(() => {
    formStartedAt.current = Date.now();
  }, []);

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [values, setValues] = useState<FormValues>(emptyForm);

  function validate(form: FormValues): FieldErrors {
    const next: FieldErrors = {};
    if (!form.name.trim()) next.name = formCopy.errors.name;
    if (!form.company.trim()) next.company = formCopy.errors.company;
    if (!form.email.trim()) {
      next.email = formCopy.errors.emailRequired;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      next.email = formCopy.errors.emailInvalid;
    }
    if (!form.message.trim()) {
      next.message = formCopy.errors.messageRequired;
    } else if (form.message.trim().length < CONTACT_LIMITS.minMessage) {
      next.message = formCopy.errors.messageShort;
    } else if (form.message.trim().length > CONTACT_LIMITS.message) {
      next.message = formCopy.errors.messageLong;
    }
    return next;
  }

  function mapApiError(code: string | undefined) {
    switch (code) {
      case "rate_limited":
        return formCopy.errors.rateLimited;
      case "not_configured":
        return formCopy.errors.notConfigured;
      default:
        return formCopy.errors.generic;
    }
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submittingRef.current || state === "submitting") return;

    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
      formStartedAt: formStartedAt.current,
    };

    setValues({
      name: payload.name,
      company: payload.company,
      email: payload.email,
      message: payload.message,
    });

    const nextErrors = validate(payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      return;
    }

    submittingRef.current = true;
    setState("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = (await response.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;

      if (!response.ok || !data?.ok) {
        setState("error");
        setFormError(mapApiError(data?.error));
        return;
      }

      setState("success");
      setValues(emptyForm);
      setErrors({});
      formStartedAt.current = Date.now(); // reset timer for a subsequent send
    } catch {
      setState("error");
      setFormError(formCopy.errors.generic);
    } finally {
      submittingRef.current = false;
    }
  }

  const showLinkedIn = Boolean(site.linkedIn);

  return (
    <section
      id="contact"
      className="bg-dark py-16 text-ivory md:py-24"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16">
        <FadeIn className="lg:col-span-5">
          <h2
            id="contact-heading"
            className="text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            {contact.headline}
          </h2>
          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ivory/70">
            {contact.text}
          </p>

          <div className="mt-8 space-y-4">
            <div>
              <p className="text-[10px] font-semibold tracking-[0.16em] text-ivory/50 uppercase">
                {contact.emailLabel}
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-1 inline-block text-sm transition-colors hover:text-terracotta-soft"
              >
                {site.email}
              </a>
            </div>
            {showLinkedIn ? (
              <div>
                <p className="text-[10px] font-semibold tracking-[0.16em] text-ivory/50 uppercase">
                  {contact.linkedInLabel}
                </p>
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-sm transition-colors hover:text-terracotta-soft"
                >
                  {contact.linkedInCta} <span aria-hidden="true">→</span>
                </a>
              </div>
            ) : null}
          </div>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-charcoal uppercase transition-colors hover:bg-sand"
          >
            {contact.cta}
          </a>
        </FadeIn>

        <FadeIn className="lg:col-span-7" delayMs={80}>
          <div id="contact-form">
            {state === "success" ? (
              <div
                role="status"
                aria-live="polite"
                className="rounded-[1.5rem] bg-charcoal-soft/40 p-8"
              >
                <h3 className="text-xl font-semibold">{formCopy.successTitle}</h3>
                <p className="mt-3 max-w-sm text-sm leading-relaxed text-ivory/70">
                  {formCopy.successText}
                </p>
                <button
                  type="button"
                  className="mt-6 text-[11px] font-semibold tracking-[0.14em] uppercase underline-offset-4 hover:underline"
                  onClick={() => setState("idle")}
                >
                  {formCopy.sendAnother}
                </button>
              </div>
            ) : (
              <form
                onSubmit={onSubmit}
                noValidate
                className="relative space-y-5"
              >
                <Field
                  id="name"
                  label={formCopy.name}
                  name="name"
                  autoComplete="name"
                  maxLength={CONTACT_LIMITS.name}
                  value={values.name}
                  onChange={(value) =>
                    setValues((current) => ({ ...current, name: value }))
                  }
                  error={errors.name}
                />
                <Field
                  id="company"
                  label={formCopy.company}
                  name="company"
                  autoComplete="organization"
                  maxLength={CONTACT_LIMITS.company}
                  value={values.company}
                  onChange={(value) =>
                    setValues((current) => ({ ...current, company: value }))
                  }
                  error={errors.company}
                />
                <Field
                  id="email"
                  label={formCopy.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={CONTACT_LIMITS.email}
                  value={values.email}
                  onChange={(value) =>
                    setValues((current) => ({ ...current, email: value }))
                  }
                  error={errors.email}
                />
                <Field
                  id="message"
                  label={formCopy.message}
                  name="message"
                  as="textarea"
                  maxLength={CONTACT_LIMITS.message}
                  value={values.message}
                  onChange={(value) =>
                    setValues((current) => ({ ...current, message: value }))
                  }
                  error={errors.message}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden opacity-0"
                >
                  <label htmlFor={honeypotId}>Website</label>
                  <input
                    id={honeypotId}
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {formError ? (
                  <div
                    role="alert"
                    className="rounded-xl border border-red-200/20 bg-red-950/30 px-4 py-3 text-sm text-red-100"
                  >
                    <p>{formError}</p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 inline-block text-[11px] font-semibold tracking-[0.12em] uppercase underline-offset-4 hover:underline"
                    >
                      {formCopy.emailFallback}
                    </a>
                  </div>
                ) : null}

                <p className="text-xs leading-relaxed text-ivory/50">
                  {formCopy.privacyNote}{" "}
                  <a
                    href="/privacy"
                    className="underline-offset-4 hover:text-ivory hover:underline"
                  >
                    {formCopy.privacyLink}
                  </a>
                </p>

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className={cn(
                    "inline-flex items-center justify-center rounded-full bg-ivory px-6 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-charcoal uppercase transition-colors",
                    state === "submitting"
                      ? "cursor-wait opacity-70"
                      : "hover:bg-sand",
                  )}
                >
                  {state === "submitting" ? formCopy.sending : formCopy.submit}
                </button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

type FieldProps = {
  id: string;
  label: string;
  name: string;
  type?: string;
  autoComplete?: string;
  as?: "input" | "textarea";
  maxLength?: number;
  value: string;
  onChange: (value: string) => void;
  error?: string;
};

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  as = "input",
  maxLength,
  value,
  onChange,
  error,
}: FieldProps) {
  const shared =
    "w-full rounded-xl border border-line-light bg-transparent px-4 py-3 text-sm text-ivory placeholder:text-ivory/30 focus:border-terracotta-soft focus:outline-none";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-semibold tracking-[0.16em] text-ivory/55 uppercase"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={4}
          maxLength={maxLength}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={cn(shared, "resize-y")}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          maxLength={maxLength}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          className={shared}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-200" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
