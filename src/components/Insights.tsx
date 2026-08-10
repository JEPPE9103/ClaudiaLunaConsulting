import { FadeIn } from "@/components/FadeIn";
import { insightsPlaceholder } from "@/data/content";

export function Insights() {
  return (
    <section
      id="insights"
      className="border-y border-line bg-ivory py-20 md:py-24"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <FadeIn>
          <div className="max-w-2xl">
            <p className="mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-champagne">
              Insights
            </p>
            <h2
              id="insights-heading"
              className="font-serif text-3xl tracking-[-0.02em] text-navy sm:text-4xl"
            >
              {insightsPlaceholder.headline}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted">
              {insightsPlaceholder.text}
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
