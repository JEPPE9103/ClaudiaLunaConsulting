"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

export function Services() {
  const { t } = useLanguage();
  const services = t.services;

  return (
    <section
      id="services"
      className="bg-ivory py-16 md:py-24"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <p className="text-[11px] font-semibold tracking-[0.18em] text-terracotta uppercase">
            {services.label}
          </p>
          <h2
            id="services-heading"
            className="mt-3 max-w-xl text-3xl font-semibold tracking-[-0.03em] text-charcoal sm:text-4xl"
          >
            {services.headline}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-muted">
            {services.intro}
          </p>
        </FadeIn>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {services.items.map((item, index) => (
            <FadeIn key={item.number} delayMs={index * 50}>
              <article className="h-full rounded-[1.5rem] bg-sand px-6 py-8 md:px-8 md:py-10">
                <p className="text-[12px] font-semibold tracking-[0.16em] text-terracotta">
                  {item.number}
                </p>
                <h3 className="mt-4 text-xl font-semibold tracking-[-0.02em] text-charcoal md:text-[1.35rem]">
                  {item.title}
                </h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {item.examples.map((example) => (
                    <li
                      key={example}
                      className="rounded-full bg-ivory px-3 py-1.5 text-[12px] text-charcoal/80"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
