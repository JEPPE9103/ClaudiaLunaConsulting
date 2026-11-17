"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/content";

export function PrivacyContent() {
  const { t } = useLanguage();
  const privacy = t.privacy;

  return (
    <article>
      <p className="text-[11px] font-semibold tracking-[0.18em] text-terracotta uppercase">
        {privacy.updatedLabel}: {privacy.updatedDate}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-charcoal sm:text-4xl">
        {privacy.title}
      </h1>
      <p className="mt-5 text-[15px] leading-relaxed text-muted">{privacy.intro}</p>

      <div className="mt-10 space-y-8">
        {privacy.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-lg font-semibold text-charcoal">
              {section.heading}
            </h2>
            <p className="mt-2 text-[15px] leading-relaxed text-muted">
              {section.body}
            </p>
          </section>
        ))}
      </div>

      <p className="mt-12 text-sm text-muted">
        <Link
          href="/"
          className="font-medium text-charcoal underline-offset-4 hover:underline"
        >
          {privacy.backHome}
        </Link>
        <span className="mx-2 text-muted/50">·</span>
        <a
          href={`mailto:${site.email}`}
          className="underline-offset-4 hover:underline"
        >
          {site.email}
        </a>
      </p>
    </article>
  );
}
