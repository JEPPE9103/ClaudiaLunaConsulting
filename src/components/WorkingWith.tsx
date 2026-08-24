"use client";

import { FadeIn } from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";

export function WorkingWith() {
  const { t } = useLanguage();
  const workingWith = t.workingWith;

  return (
    <section
      className="bg-ivory py-16 md:py-24"
      aria-labelledby="working-heading"
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <FadeIn>
          <h2
            id="working-heading"
            className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-charcoal sm:text-4xl"
          >
            {workingWith.headline}
          </h2>
        </FadeIn>

        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          {workingWith.items.map((item, index) => (
            <FadeIn key={item.title} delayMs={index * 50}>
              <article>
                <h3 className="text-lg font-semibold tracking-[-0.02em] text-charcoal">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted">
                  {item.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
