"use client";

import { useLanguage } from "@/components/LanguageProvider";

export function SkipLink() {
  const { t } = useLanguage();

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:text-charcoal"
    >
      {t.a11y.skipToContent}
    </a>
  );
}
