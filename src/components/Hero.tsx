import { Button } from "@/components/Button";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { hero } from "@/data/content";

export function Hero() {
  const leadLines = hero.headlineLead.split("\n");

  return (
    <section
      id="top"
      className="bg-ivory"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto grid max-w-[1440px] lg:min-h-[calc(100vh-5.5rem)] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-14 md:px-10 md:py-20 lg:px-14 lg:py-24 xl:pr-20">
          <h1
            id="hero-heading"
            className="max-w-xl font-serif text-[2.6rem] leading-[1.08] tracking-[-0.02em] text-navy sm:text-5xl md:text-[3.5rem] lg:text-[3.75rem] xl:text-[4.25rem]"
          >
            {leadLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <em className="mt-1 block font-serif italic text-champagne">
              {hero.headlineAccent}
            </em>
          </h1>

          <div className="gold-rule mt-8" />

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-muted md:text-base">
            {hero.supporting}
          </p>

          <div className="mt-10">
            <Button href="#contact" variant="solid" arrow>
              {hero.cta}
            </Button>
          </div>
        </div>

        <div className="relative min-h-[22rem] sm:min-h-[28rem] lg:min-h-full">
          <PortraitPlaceholder
            fill
            priority
            className="absolute inset-0 min-h-[22rem] sm:min-h-[28rem]"
            label="Professional portrait of Claudia Luna, founder of Claudia Luna Consulting"
            objectPosition="center 18%"
          />
        </div>
      </div>

      <div className="border-y border-line bg-ivory-warm">
        <div className="mx-auto max-w-[1440px] px-5 py-5 md:px-10 lg:px-14">
          <ul className="flex flex-wrap items-center gap-y-3 text-[10px] font-medium tracking-[0.18em] text-navy/60 uppercase sm:justify-between sm:gap-0 sm:text-[11px]">
            {hero.focusAreas.map((area, index) => (
              <li key={area} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-3 hidden h-3 w-px bg-navy/15 sm:mx-4 sm:block lg:mx-6"
                    aria-hidden="true"
                  />
                ) : null}
                <span>
                  {index > 0 ? (
                    <span className="mr-3 text-navy/20 sm:hidden" aria-hidden="true">
                      |
                    </span>
                  ) : null}
                  {area}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
