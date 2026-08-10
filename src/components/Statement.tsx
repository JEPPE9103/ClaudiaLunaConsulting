import { FadeIn } from "@/components/FadeIn";
import { statement } from "@/data/content";

export function Statement() {
  return (
    <section
      className="relative overflow-hidden bg-navy-deep py-24 text-ivory md:py-32 lg:py-36"
      aria-label="Quote from Claudia Luna"
    >
      <div className="pointer-events-none absolute inset-0 opacity-[0.07]">
        <div className="absolute left-1/2 top-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(184,151,106,0.45),transparent_55%)]" />
      </div>
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        <FadeIn>
          <div className="mx-auto mb-10 h-px w-16 bg-champagne/70" />
          <blockquote>
            <p className="font-serif text-3xl leading-snug tracking-[-0.02em] text-ivory sm:text-4xl md:text-5xl md:leading-[1.2]">
              “{statement.quote}”
            </p>
            <footer className="mt-10">
              <cite className="not-italic text-[11px] font-medium tracking-[0.24em] uppercase text-champagne-soft">
                — {statement.attribution}
              </cite>
            </footer>
          </blockquote>
          <div className="mx-auto mt-10 h-px w-16 bg-champagne/70" />
        </FadeIn>
      </div>
    </section>
  );
}
