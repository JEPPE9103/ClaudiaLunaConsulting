"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

export function Experience() {
  const { t } = useLanguage();
  const credibility = t.credibility;

  return (
    <section
      id="experience"
      className="bg-dark py-16 text-ivory md:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <h2
            id="experience-heading"
            className="max-w-xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl"
          >
            {credibility.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {credibility.items.map((item, index) => (
            <FadeIn key={item.title} delayMs={index * 50}>
              <div className="border-t border-line-light pt-5">
                <h3 className="text-[11px] font-semibold tracking-[0.16em] uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/70">
                  {item.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
