import { FadeIn } from "@/components/FadeIn";
import { statement } from "@/data/content";

export function Statement() {
  return (
    <section
      className="border-y border-line bg-ivory-warm py-20 md:py-24"
      aria-label="Quote from Claudia Luna"
    >
      <div className="mx-auto max-w-4xl px-5 text-center md:px-10">
        <FadeIn>
          <div className="mx-auto gold-rule" />
          <blockquote className="mt-8">
            <p className="font-serif text-2xl leading-snug tracking-[-0.02em] text-navy sm:text-3xl md:text-4xl md:leading-[1.25]">
              “{statement.quote}”
            </p>
            <footer className="mt-8">
              <cite className="not-italic text-[11px] font-medium tracking-[0.2em] text-champagne uppercase">
                — {statement.attribution}
              </cite>
            </footer>
          </blockquote>
          <div className="mx-auto mt-8 gold-rule" />
        </FadeIn>
      </div>
    </section>
  );
}
