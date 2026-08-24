"use client";

import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/content";

export function About() {
  const { t } = useLanguage();
  const about = t.about;

  return (
    <section
      id="about"
      className="bg-sand py-16 md:py-24"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 md:px-8 lg:grid-cols-2 lg:gap-16">
        <FadeIn>
          <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-[1.75rem] bg-ivory lg:max-w-none">
            <Image
              src="/images/claudia-luna-about-v3.png"
              alt={about.portraitAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-center"
            />
          </div>
        </FadeIn>

        <FadeIn delayMs={80}>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-terracotta uppercase">
            {about.label}
          </p>
          <h2
            id="about-heading"
            className="mt-3 max-w-md text-3xl font-semibold tracking-[-0.03em] text-charcoal sm:text-4xl"
          >
            {about.headline}
          </h2>
          <div className="mt-6 max-w-xl space-y-4">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-[15px] leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <p className="mt-6 max-w-xl text-[15px] font-medium leading-relaxed text-charcoal">
            {about.closing}
          </p>
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-charcoal uppercase transition-all duration-300 hover:gap-3 hover:text-terracotta"
          >
            {about.linkedInCta} <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
