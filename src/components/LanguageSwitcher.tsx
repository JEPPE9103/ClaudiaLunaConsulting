"use client";

import { useLanguage } from "@/components/LanguageProvider";
import type { Locale } from "@/data/content";
import { cn } from "@/lib/cn";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  function select(next: Locale) {
    setLocale(next);
  }

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.14em] uppercase",
        className,
      )}
      role="group"
      aria-label="Language"
    >
      <button
        type="button"
        onClick={() => select("sv")}
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          locale === "sv"
            ? "bg-charcoal text-ivory"
            : "text-charcoal/55 hover:text-charcoal",
        )}
        aria-pressed={locale === "sv"}
      >
        SV
      </button>
      <span className="text-charcoal/30" aria-hidden="true">
        /
      </span>
      <button
        type="button"
        onClick={() => select("en")}
        className={cn(
          "rounded-full px-2 py-1 transition-colors",
          locale === "en"
            ? "bg-charcoal text-ivory"
            : "text-charcoal/55 hover:text-charcoal",
        )}
        aria-pressed={locale === "en"}
      >
        EN
      </button>
    </div>
  );
}
