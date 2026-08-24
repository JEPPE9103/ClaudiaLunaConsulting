"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useLanguage } from "@/components/LanguageProvider";

export function Hero() {
  const { t } = useLanguage();
  const hero = t.hero;
  const [lead] = hero.headline.split(hero.headlineAccent);

  return (
    <section id="top" className="bg-ivory" aria-labelledby="hero-heading">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-12 md:px-8 md:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="inline-flex rounded-full border border-line bg-sand/60 px-3 py-1 text-[10px] font-medium tracking-[0.14em] text-charcoal/70 uppercase">
            {hero.pill}
          </p>

          <h1
            id="hero-heading"
            className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-[-0.03em] text-charcoal sm:text-5xl lg:text-[3.4rem]"
          >
            {lead}
            <span className="text-terracotta">{hero.headlineAccent}</span>
          </h1>

          <p className="mt-6 max-w-md text-lg font-medium leading-snug text-charcoal/80">
            {hero.supporting}
          </p>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted">
            {hero.body}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <Button href="#contact" arrow>
              {hero.primaryCta}
            </Button>
            <Button href="#services" variant="ghost" arrow>
              {hero.secondaryCta}
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-sand">
            <Image
              src="/images/claudia-luna-hero-v3.png"
              alt={hero.portraitAlt}
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 42vw"
              className="object-cover object-[center_15%]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
