import { FadeIn } from "@/components/FadeIn";
import { LineIcon } from "@/components/LineIcon";
import { experienceStrip } from "@/data/content";
import { cn } from "@/lib/cn";

export function Experience() {
  return (
    <section
      id="experience"
      className="bg-navy py-20 text-ivory md:py-24 lg:py-28"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 lg:px-10">
        <FadeIn>
          <div className="max-w-3xl">
            <p className="mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-champagne-soft">
              Experience
            </p>
            <h2
              id="experience-heading"
              className="font-serif text-3xl leading-tight tracking-[-0.02em] sm:text-4xl md:text-5xl"
            >
              {experienceStrip.headline}
            </h2>
          </div>
        </FadeIn>

        <div className="mt-14 grid gap-8 border-t border-line-light pt-10 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-0 lg:pt-0">
          {experienceStrip.items.map((item, index) => (
            <FadeIn key={item.title} delayMs={index * 70}>
              <div
                className={cn(
                  "flex h-full flex-col gap-5 lg:border-r lg:border-line-light lg:px-7 lg:py-10",
                  index === 0 && "lg:pl-0",
                  index === experienceStrip.items.length - 1 &&
                    "lg:border-r-0 lg:pr-0",
                )}
              >
                <LineIcon
                  name={item.icon}
                  className="h-6 w-6 text-champagne-soft"
                />
                <div>
                  <h3 className="text-[12px] font-medium tracking-[0.2em] uppercase">
                    {item.title}
                  </h3>
                  <p className="mt-3 max-w-[16rem] text-sm leading-relaxed text-ivory/65">
                    {item.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
