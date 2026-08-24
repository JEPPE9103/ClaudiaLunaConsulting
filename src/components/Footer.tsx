"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { site } from "@/data/content";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-dark text-ivory">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 border-t border-line-light px-5 py-8 md:flex-row md:items-center md:justify-between md:px-8">
        <p className="text-sm font-semibold tracking-tight">
          Claudia <span className="text-terracotta-soft">Luna</span> Consulting
        </p>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-[12px] text-ivory/65">
            <li>
              <a
                href={site.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-ivory"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="transition-colors hover:text-ivory"
              >
                {t.footer.email}
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-ivory">
                {t.footer.privacy}
              </a>
            </li>
          </ul>
        </nav>

        <p className="text-xs text-ivory/45">{site.copyright}</p>
      </div>
    </footer>
  );
}
