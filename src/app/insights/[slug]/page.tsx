import type { Metadata } from "next";
import { InsightArticlePageClient } from "@/components/InsightArticle";
import { content, insightSlugs } from "@/data/content";

type InsightPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return insightSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = content.sv.insights.items.find((item) => item.slug === slug);

  if (!article) {
    return { title: "Insikt" };
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

export default function InsightArticlePage({ params }: InsightPageProps) {
  return <InsightArticlePageClient params={params} />;
}
