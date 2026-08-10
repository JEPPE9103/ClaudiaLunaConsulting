import { FadeIn } from "@/components/FadeIn";
import { PortraitPlaceholder } from "@/components/PortraitPlaceholder";
import { about, site } from "@/data/content";

export function About() {
  return (
    <section
      id="about"
      className="bg-ivory py-20 md:py-28 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-5 md:px-8 lg:grid-cols-12 lg:gap-16 lg:px-10">
        <FadeIn className="lg:col-span-5">
          <PortraitPlaceholder
            aspect="editorial"
            className="w-full max-w-md lg:max-w-none"
            label="About portrait placeholder for Claudia Luna"
          />
        </FadeIn>

        <FadeIn className="lg:col-span-7" delayMs={100}>
          <p className="mb-4 text-[11px] font-medium tracking-[0.24em] uppercase text-champagne">
            About
          </p>
          <h2
            id="about-heading"
            className="max-w-xl font-serif text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-5xl"
          >
            {about.headline}
          </h2>
          <div className="mt-8 space-y-5 max-w-2xl">
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
            className="mt-10 inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] uppercase text-navy transition-colors hover:text-champagne"
          >
            Connect on LinkedIn <span aria-hidden="true">→</span>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
