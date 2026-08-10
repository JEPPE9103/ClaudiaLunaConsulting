import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { LineIcon } from "@/components/LineIcon";
import { experienceStrip } from "@/data/content";

export function Experience() {
  const headlineLines = experienceStrip.headline.split("\n");

  return (
    <section
      id="experience"
      className="bg-navy text-ivory"
      aria-labelledby="experience-heading"
    >
      <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-16 md:px-10 md:py-20 lg:px-14 lg:py-24">
          <FadeIn>
            <h2
              id="experience-heading"
              className="max-w-md font-serif text-3xl leading-[1.15] tracking-[-0.02em] sm:text-4xl md:text-[2.75rem]"
            >
              {headlineLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <div className="gold-rule mt-6 bg-champagne" />
          </FadeIn>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 sm:gap-0">
            {experienceStrip.items.map((item, index) => (
              <FadeIn key={item.title} delayMs={index * 70}>
                <div
                  className={[
                    "flex gap-4 py-5 sm:px-5 sm:py-6",
                    index % 2 === 1 ? "sm:border-l sm:border-line-light" : "",
                    index >= 2 ? "sm:border-t sm:border-line-light" : "",
                    index % 2 === 0 ? "sm:pl-0" : "",
                  ].join(" ")}
                >
                  <LineIcon
                    name={item.icon}
                    className="mt-0.5 h-6 w-6 shrink-0 text-champagne"
                  />
                  <div>
                    <h3 className="text-[11px] font-medium tracking-[0.16em] uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                      {item.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

        <div className="relative min-h-[20rem] overflow-hidden sm:min-h-[24rem] lg:min-h-full">
          <Image
            src="/images/experience-architecture.png"
            alt="Modern European office architecture at dusk"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
