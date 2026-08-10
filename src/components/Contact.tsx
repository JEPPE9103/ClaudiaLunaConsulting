"use client";

import Image from "next/image";
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
  const headlineLines = contact.headline.split("\n");

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
      className="bg-ivory-warm py-20 md:py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <FadeIn className="lg:col-span-5">
          <div className="relative mb-8 hidden aspect-[5/3] overflow-hidden md:block lg:mb-10">
            <Image
              src="/images/contact-workspace.png"
              alt="Executive workspace detail with desk, notebook and city view"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-center"
            />
          </div>

          <h2
            id="contact-heading"
            className="font-serif text-3xl leading-[1.15] tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.6rem]"
          >
            {headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
            {contact.text}
          </p>
          <a
            href="#contact-form"
            className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-navy uppercase transition-all duration-300 hover:gap-3 hover:text-champagne"
          >
            {contact.cta} <span aria-hidden="true">→</span>
          </a>
        </FadeIn>

        <FadeIn className="lg:col-span-7" delayMs={80}>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">
            <div id="contact-form">
              {state === "success" ? (
                <div role="status" aria-live="polite" className="py-8">
                  <div className="gold-rule mb-6" />
                  <h3 className="font-serif text-2xl text-navy">Message sent</h3>
                  <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
                    Thank you for reaching out. Claudia will respond as soon as
                    possible.
                  </p>
                  <button
                    type="button"
                    className="mt-8 text-[11px] font-medium tracking-[0.18em] text-navy uppercase underline-offset-4 hover:underline"
                    onClick={() => setState("idle")}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} noValidate className="space-y-6">
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
                      "inline-flex items-center justify-center gap-2 bg-navy px-6 py-3.5 text-[11px] font-medium tracking-[0.18em] text-ivory uppercase transition-colors duration-300",
                      state === "submitting"
                        ? "cursor-wait opacity-70"
                        : "hover:bg-navy-soft",
                    )}
                  >
                    {state === "submitting" ? "Sending..." : "Send message"}
                  </button>
                </form>
              )}
            </div>

            <aside className="space-y-6 border-t border-line pt-8 lg:w-48 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
              <div>
                <p className="text-[10px] font-medium tracking-[0.18em] text-muted uppercase">
                  Email
                </p>
                <a
                  href={`mailto:${site.email}`}
                  className="mt-2 block break-all text-sm text-navy transition-colors hover:text-champagne"
                >
                  {site.email}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-medium tracking-[0.18em] text-muted uppercase">
                  LinkedIn
                </p>
                <a
                  href={site.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 text-sm text-navy transition-colors hover:text-champagne"
                >
                  Connect <span aria-hidden="true">→</span>
                </a>
              </div>
            </aside>
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
    "w-full border border-line bg-transparent px-3 py-3 text-sm text-navy placeholder:text-muted/50 focus:border-champagne focus:outline-none";

  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[10px] font-medium tracking-[0.18em] text-muted uppercase"
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
        <p id={`${id}-error`} className="mt-2 text-xs text-red-800/80" role="alert">
          {error}
        </p>
      ) : null}
    </div>
  );
}
