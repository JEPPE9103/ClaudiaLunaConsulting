"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";
import { useLanguage } from "@/components/LanguageProvider";
import { getInsightBySlug } from "@/data/content";

type InsightArticleProps = {
  slug: string;
};

export function InsightArticle({ slug }: InsightArticleProps) {
  const { t, locale } = useLanguage();
  const article = getInsightBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-ivory">
      <article className="pb-20 md:pb-28">
        <div className="relative h-[36vh] min-h-[17rem] w-full overflow-hidden md:h-[44vh] md:min-h-[22rem]">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: article.imagePosition }}
          />
        </div>

        <div className="mx-auto max-w-3xl px-5 pt-10 md:px-8 md:pt-14">
          <p className="text-[10px] font-semibold tracking-[0.18em] text-terracotta uppercase">
            {article.category}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-charcoal sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            {article.description}
          </p>

          <div className="mt-10 space-y-6 border-t border-line pt-10">
            {article.body.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[16px] leading-relaxed text-charcoal/85"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-14 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.14em] text-charcoal uppercase transition-colors hover:text-terracotta"
            >
              <span aria-hidden="true">←</span> {t.insights.backHome}
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-charcoal px-5 py-3 text-[11px] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-charcoal-soft"
            >
              {t.insights.contactCta} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function InsightArticlePageClient({ params }: InsightPageProps) {
  const { slug } = use(params);
  return <InsightArticle slug={slug} />;
}
