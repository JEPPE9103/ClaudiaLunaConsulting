import { FadeIn } from "@/components/FadeIn";
import { caseStudies } from "@/data/content";

export function CaseStudies() {
  return (
    <section
      id="selected-experience"
      className="bg-ivory-warm py-20 md:py-28 lg:py-32"
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <FadeIn>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-champagne">
                Selected work
              </p>
              <h2
                id="cases-heading"
                className="font-serif text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-5xl"
              >
                {caseStudies.headline}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted md:text-right">
              Illustrative engagements. Client identities and confidential details
              are omitted.
            </p>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-6 md:mt-16 md:grid-cols-3 md:gap-0 md:border-t md:border-line">
          {caseStudies.items.map((item, index) => (
            <FadeIn key={item.id} delayMs={index * 80}>
              <article
                className={`group flex h-full flex-col border border-line bg-ivory p-7 transition-colors duration-300 hover:border-navy/25 md:border-0 md:border-r md:bg-transparent md:px-8 md:py-12 lg:px-10 ${
                  index === 0 ? "md:pl-0" : ""
                } ${
                  index === caseStudies.items.length - 1
                    ? "md:border-r-0 md:pr-0"
                    : ""
                }`}
              >
                <p className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted">
                  Case {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-5 font-serif text-2xl leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-5 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="mt-8 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-navy transition-colors group-hover:text-champagne"
                >
                  View case <span aria-hidden="true">→</span>
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
