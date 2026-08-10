import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insights } from "@/data/content";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insights.items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = insights.items.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Insight" };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function InsightArticlePage({ params }: InsightPageProps) {
  const { slug } = await params;
  const article = insights.items.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-ivory">
      <article className="pb-20 md:pb-28">
        <div className="relative h-[42vh] min-h-[18rem] w-full overflow-hidden md:h-[52vh] md:min-h-[26rem]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/35 via-transparent to-transparent" />
        </div>

        <div className="mx-auto max-w-3xl px-5 pt-10 md:px-10 md:pt-14 lg:px-0">
          <p className="text-[10px] font-medium tracking-[0.2em] text-champagne uppercase">
            {article.category}
          </p>
          <div className="gold-rule mt-4" />
          <h1 className="mt-6 font-serif text-3xl leading-tight tracking-[-0.02em] text-navy sm:text-4xl md:text-[2.75rem]">
            {article.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            {article.description}
          </p>

          <div className="mt-10 space-y-6 border-t border-line pt-10">
            {article.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-relaxed text-ink/85 md:text-[1.05rem] md:leading-[1.8]"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/#insights"
              className="inline-flex items-center gap-2 text-[11px] font-medium tracking-[0.18em] text-navy uppercase transition-colors hover:text-champagne"
            >
              <span aria-hidden="true">←</span> Back to insights
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-navy px-5 py-3 text-[11px] font-medium tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-navy-soft"
            >
              Discuss an assignment <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}
