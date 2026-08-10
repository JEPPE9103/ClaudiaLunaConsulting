import { FadeIn } from "@/components/FadeIn";
import { LineIcon } from "@/components/LineIcon";
import { expertise } from "@/data/content";
import { cn } from "@/lib/cn";

export function Expertise() {
  return (
    <section
      id="expertise"
      className="bg-ivory py-20 md:py-24 lg:py-28"
      aria-labelledby="expertise-heading"
    >
      <div className="mx-auto max-w-[1440px] px-5 md:px-10 lg:px-14">
        <FadeIn>
          <div className="flex flex-col items-center text-center">
            <h2
              id="expertise-heading"
              className="font-serif text-3xl tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]"
            >
              {expertise.headline}
            </h2>
            <div className="gold-rule mt-5" />
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-5 lg:gap-0">
          {expertise.items.map((item, index) => (
            <FadeIn key={item.id} delayMs={index * 60}>
              <article
                className={cn(
                  "group flex h-full flex-col lg:px-5 xl:px-6",
                  index > 0 && "lg:border-l lg:border-line",
                )}
              >
                <LineIcon name={item.icon} className="h-7 w-7 text-champagne" />
                <h3 className="mt-6 whitespace-pre-line font-serif text-[1.35rem] leading-snug text-navy">
                  {item.title}
                </h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
                <a
                  href={item.href}
                  className="mt-7 inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.18em] text-navy uppercase transition-all duration-300 group-hover:gap-3 group-hover:text-champagne"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
