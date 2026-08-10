import { Button } from "@/components/Button";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { hero } from "@/data/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[90vh] overflow-hidden bg-navy text-ivory"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_20%,rgba(184,151,106,0.12),transparent_45%),radial-gradient(ellipse_at_80%_0%,rgba(246,242,235,0.06),transparent_40%)]" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-navy-soft/40 lg:block" />

      <div className="relative mx-auto flex min-h-[90vh] max-w-7xl flex-col px-5 pb-10 pt-28 md:px-8 md:pt-32 lg:px-10 lg:pb-12">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <p className="mb-6 text-[11px] font-medium tracking-[0.28em] uppercase text-champagne-soft">
              Stockholm · Senior HR Advisory
            </p>
            <h1
              id="hero-heading"
              className="max-w-xl font-serif text-[2.55rem] leading-[1.08] tracking-[-0.02em] text-ivory sm:text-5xl md:text-6xl lg:text-[4.15rem]"
            >
              {hero.headlineLead}
              <br />
              <em className="font-serif italic text-champagne-soft">
                {hero.headlineAccent}
              </em>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-ivory/70 sm:text-lg">
              {hero.supporting}
            </p>
            <div className="mt-10">
              <Button href="#contact" variant="outline-light" arrow>
                {hero.cta}
              </Button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto w-full max-w-md lg:ml-auto lg:max-w-none">
              <PortraitPlaceholder
                aspect="editorial"
                className="border-ivory/15 bg-navy-soft/60 shadow-[0_30px_80px_rgba(0,0,0,0.28)]"
                label="Portrait placeholder for Claudia Luna"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-ivory/15 pt-6 lg:mt-16">
          <ul className="flex flex-wrap items-center gap-x-0 gap-y-3 text-[10px] font-medium tracking-[0.2em] uppercase text-ivory/55 sm:text-[11px]">
            {hero.focusAreas.map((area, index) => (
              <li key={area} className="flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-3 hidden h-3 w-px bg-ivory/25 sm:mx-4 sm:block md:mx-5"
                    aria-hidden="true"
                  />
                ) : null}
                <span className={index > 0 ? "sm:ml-0 ml-0" : undefined}>
                  {index > 0 ? (
                    <span className="mr-3 text-ivory/25 sm:hidden" aria-hidden="true">
                      ·
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
