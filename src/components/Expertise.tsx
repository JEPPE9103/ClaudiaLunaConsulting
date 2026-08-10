import { FadeIn } from "@/components/FadeIn";
import { expertise } from "@/data/content";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-ivory py-20 md:py-28 lg:py-32"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-champagne">
              Expertise
            </p>
            <h2
              id="expertise-heading"
              className="font-serif text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-5xl"
            >
              {expertise.headline}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-0 border-t border-line md:mt-20 md:grid-cols-3">
          {expertise.items.map((item, index) => (
            <FadeIn key={item.number} delayMs={index * 80}>
              <article
                className={`group flex h-full flex-col border-line py-10 md:border-r md:px-8 md:py-12 lg:px-10 ${
                  index === 0 ? "md:pl-0" : ""
                } ${index === expertise.items.length - 1 ? "md:border-r-0 md:pr-0" : ""} border-b md:border-b-0`}
              >
                <p className="text-[11px] font-medium tracking-[0.22em] text-champagne">
                  {item.number}
                </p>
                <h3 className="mt-5 font-serif text-2xl text-navy md:text-[1.7rem]">
                  {item.title}
                </h3>
                <ul className="mt-7 flex flex-1 flex-col gap-3">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="border-l border-champagne/40 pl-4 text-sm leading-relaxed text-muted"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={item.href}
                  className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-navy transition-colors group-hover:text-champagne"
                >
                  Read more <span aria-hidden="true">→</span>
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
