import { FadeIn } from "@/components/FadeIn";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      className="bg-ivory py-20 md:py-24 lg:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-16 lg:px-14">
        <FadeIn className="lg:col-span-5">
          <PortraitPlaceholder
            className="w-full max-w-md lg:max-w-none"
            label="Professional portrait of Claudia Luna, founder of Claudia Luna Consulting"
            objectPosition="center 22%"
          />
        </FadeIn>

        <FadeIn className="lg:col-span-7" delayMs={80}>
          <h2
            id="about-heading"
            className="max-w-xl font-serif text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]"
          >
            {about.headline}
          </h2>
          <div className="gold-rule mt-5" />
          <div className="mt-8 max-w-2xl space-y-5">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-base leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
          </div>
          <a
            href={site.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-navy uppercase transition-all duration-300 hover:gap-3 hover:text-champagne"
          >
            Connect on LinkedIn <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
