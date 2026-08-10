"use client";

import { FormEvent, useState } from "react";
import { FadeIn } from "@/components/FadeIn";
import { contact, site } from "@/data/content";
import { cn } from "@/lib/cn";

type FormState = "idle" | "submitting" | "success" | "error";

type FieldErrors = {
  name?: string;
  company?: string;
  email?: string;
  message?: string;
};

function validate(form: {
  name: string;
  company: string;
  email: string;
  message: string;
}): FieldErrors {
  const errors: FieldErrors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.company.trim()) errors.company = "Please enter your company.";
  if (!form.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }
  if (!form.message.trim()) {
    errors.message = "Please tell us how we can help.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Please provide a little more detail.";
  }
  return errors;
}

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState<string | null>(null);

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
      setFormError(
        "Something went wrong. Please try again or email directly.",
      );
    }
  }

  return (
    <section
      id="contact"
      className="bg-ivory-warm py-20 md:py-28 lg:py-32"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-7xl gap-14 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <FadeIn className="lg:col-span-5">
          <p className="mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-champagne">
            Contact
          </p>
          <h2
            id="contact-heading"
            className="font-serif text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-5xl"
          >
            {contact.headline}
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {contact.text}
          </p>
          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-navy transition-colors hover:text-champagne"
          >
            {contact.cta} <span aria-hidden="true">→</span>
          </a>

          <div className="mt-10 space-y-4 border-t border-line pt-8">
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted">
                Email
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 inline-block text-navy transition-colors hover:text-champagne"
              >
                {site.email}
              </a>
            </div>
            <div>
              <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted">
                LinkedIn
              </p>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-navy transition-colors hover:text-champagne"
              >
                Connect on LinkedIn <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </FadeIn>

        <FadeIn className="lg:col-span-7" delayMs={90}>
          <div
            id="contact-form"
            className="border border-line bg-ivory p-6 sm:p-8 md:p-10"
          >
            {state === "success" ? (
              <div role="status" aria-live="polite" className="py-10 text-center">
                <div className="mx-auto mb-6 h-px w-12 bg-champagne" />
                <h3 className="font-serif text-2xl text-navy">Message sent</h3>
                <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-muted">
                  Thank you for reaching out. Claudia will respond as soon as
                  possible.
                </p>
                <button
                  type="button"
                  className="mt-8 text-[11px] font-medium tracking-[0.18em] uppercase text-navy underline-offset-4 hover:underline"
                  onClick={() => setState("idle")}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field
                    id="name"
                    label="Name"
                    name="name"
                    autoComplete="name"
                    error={errors.name}
                  />
                  <Field
                    id="company"
                    label="Company"
                    name="company"
                    autoComplete="organization"
                    error={errors.company}
                  />
                </div>
                <Field
                  id="email"
                  label="Email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  error={errors.email}
                />
                <Field
                  id="message"
                  label="How can I help?"
                  name="message"
                  as="textarea"
                  error={errors.message}
                />

                {formError ? (
                  <p
                    role="alert"
                    className="border border-red-900/20 bg-red-50 px-4 py-3 text-sm text-red-900/80"
                  >
                    {formError}
                  </p>
                ) : null}

                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className={cn(
                    "inline-flex w-full items-center justify-center gap-2 border border-navy bg-navy px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase text-ivory transition-colors sm:w-auto",
                    state === "submitting"
                      ? "cursor-wait opacity-70"
                      : "hover:bg-navy-soft",
                  )}
                >
                  {state === "submitting" ? "Sending..." : "Send message"}
                  {state !== "submitting" ? (
                    <span aria-hidden="true">→</span>
                  ) : null}
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
    "w-full border-0 border-b border-line bg-transparent px-0 py-3 text-sm text-navy placeholder:text-muted/50 focus:border-champagne focus:outline-none";

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[10px] font-medium tracking-[0.2em] uppercase text-muted"
      >
        {label}
      </label>
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          className={cn(shared, "mt-2 resize-y")}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          autoComplete={autoComplete}
          className={cn(shared, "mt-2")}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${id}-error` : undefined}
        />
      )}
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-xs text-red-800/80" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
