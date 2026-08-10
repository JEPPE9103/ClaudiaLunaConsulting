import { FadeIn } from "@/components/FadeIn";
import { insightsPlaceholder } from "@/data/content";

export function Insights() {
  return (
    <section
      id="insights"
      className="bg-ivory py-16 md:py-20"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <FadeIn>
          <div className="max-w-2xl border border-line px-6 py-10 md:px-10">
            <h2
              id="insights-heading"
              className="font-serif text-3xl tracking-[-0.02em] text-navy sm:text-4xl"
            >
              {insightsPlaceholder.headline}
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-5 text-base leading-relaxed text-muted">
              {insightsPlaceholder.text}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
