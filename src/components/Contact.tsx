"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/content";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

export function Contact() {
  const { t } = useLanguage();
  const contact = t.contact;
  const formCopy = contact.form;

  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

  function validate(form: {
    name: string;
    company: string;
    email: string;
    message: string;
  }): FieldErrors {
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
    } else if (form.message.trim().length < 10) {
      next.message = formCopy.errors.messageShort;
    }
    return next;
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError(null);

    const formData = new FormData(event.currentTarget);
    const payload = {
      name: String(formData.get("name") ?? ""),
      company: String(formData.get("company") ?? ""),
      email: String(formData.get("email") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const nextErrors = validate(payload);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setState("error");
      return;
    }

    setState("submitting");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setState("success");
      event.currentTarget.reset();
      setErrors({});
    } catch {
      setState("error");
      setFormError(formCopy.errors.generic);
    }
  }

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
              <form onSubmit={onSubmit} noValidate className="space-y-5">
                <Field
                  id="name"
                  label={formCopy.name}
                  name="name"
                  autoComplete="name"
                  error={errors.name}
                />
                <Field
                  id="company"
                  label={formCopy.company}
                  name="company"
                  autoComplete="organization"
                  error={errors.company}
                />
                <Field
                  id="email"
                  label={formCopy.email}
                  name="email"
                  type="email"
                  autoComplete="email"
                  error={errors.email}
                />
                <Field
                  id="message"
                  label={formCopy.message}
                  name="message"
                  as="textarea"
                  error={errors.message}
                />

                {formError ? (
                  <p
                    role="alert"
                    className="rounded-xl border border-red-200/20 bg-red-950/30 px-4 py-3 text-sm text-red-100"
                  >
                    {formError}
                  </p>
                ) : null}

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
  error?: string;
};

function Field({
  id,
  label,
  name,
  type = "text",
  autoComplete,
  as = "input",
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
