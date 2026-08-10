import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { caseStudies } from "@/data/content";

export function CaseStudies() {
  return (
    <section
      id="selected-experience"
      className="bg-ivory py-20 md:py-24 lg:py-28"
      aria-labelledby="cases-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <FadeIn>
          <div>
            <h2
              id="cases-heading"
              className="font-serif text-3xl tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]"
            >
              {caseStudies.headline}
            </h2>
            <div className="gold-rule mt-5" />
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-3 md:gap-8 lg:gap-10">
          {caseStudies.items.map((item, index) => (
            <FadeIn key={item.id} delayMs={index * 70}>
              <article className="group flex h-full flex-col">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="img-zoom object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 font-serif text-[1.45rem] leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="mt-6 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-navy uppercase transition-all duration-300 group-hover:gap-3 group-hover:text-champagne"
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
