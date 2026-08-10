import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";
import { insights } from "@/data/content";

export function Insights() {
  return (
    <section
      id="insights"
      className="bg-ivory-warm py-20 md:py-24 lg:py-28"
      aria-labelledby="insights-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <FadeIn>
          <div className="max-w-3xl">
            <h2
              id="insights-heading"
              className="font-serif text-3xl tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]"
            >
              {insights.headline}
            </h2>
            <div className="gold-rule mt-5" />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {insights.intro}
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 border-t border-line md:mt-16">
          {insights.items.map((item, index) => (
            <FadeIn key={item.slug} delayMs={index * 50}>
              <article className="group grid gap-6 border-b border-line py-10 md:grid-cols-12 md:items-center md:gap-10 md:py-12">
                <Link
                  href={`/insights/${item.slug}`}
                  className="relative aspect-[16/10] overflow-hidden md:col-span-4 lg:col-span-3"
                >
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 28vw"
                    className="img-zoom object-cover object-center"
                  />
                </Link>

                <div className="md:col-span-8 lg:col-span-9">
                  <p className="text-[10px] font-medium tracking-[0.2em] text-champagne uppercase">
                    {item.category}
                  </p>
                  <h3 className="mt-3 max-w-2xl font-serif text-2xl leading-snug text-navy md:text-[1.85rem]">
                    <Link
                      href={`/insights/${item.slug}`}
                      className="transition-colors duration-300 hover:text-champagne"
                    >
                      {item.title}
                    </Link>
                  </h3>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-[15px]">
                    {item.description}
                  </p>
                  <Link
                    href={`/insights/${item.slug}`}
                    className="mt-5 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-navy uppercase transition-all duration-300 group-hover:gap-3 group-hover:text-champagne"
                  >
                    Read insight <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
