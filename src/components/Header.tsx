"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { useLanguage } from "@/components/LanguageProvider";
import { cn } from "@/lib/cn";

export function Header() {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-transparent bg-ivory/90 backdrop-blur-sm transition-colors duration-300",
        (scrolled || open) && "border-line",
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5 md:px-8">
        <Link href="/#top" className="shrink-0 text-[15px] font-semibold tracking-tight">
          Claudia <span className="text-terracotta">Luna</span> Consulting
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
          {t.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith("#") ? `/${link.href}` : link.href}
              className="text-[11px] font-medium tracking-[0.16em] text-charcoal/70 uppercase transition-colors duration-300 hover:text-charcoal"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitcher />

          <Link
            href="/#contact"
            className="hidden rounded-full bg-charcoal px-4 py-2.5 text-[10px] font-semibold tracking-[0.14em] text-ivory uppercase transition-colors hover:bg-charcoal-soft sm:inline-flex"
          >
            {t.header.contactCta}
          </Link>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-charcoal lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.header.closeMenu : t.header.openMenu}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 block h-px w-full bg-current transition-transform duration-300",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[7px] block h-px w-full bg-current transition-opacity duration-300",
                  open && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-[14px] block h-px w-full bg-current transition-transform duration-300",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={cn("border-t border-line bg-ivory lg:hidden", open ? "block" : "hidden")}
      >
        <nav className="mx-auto flex max-w-6xl flex-col px-5 py-4" aria-label="Mobile">
          {t.navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href.startsWith("#") ? `/${link.href}` : link.href}
              className="border-b border-line py-4 text-[12px] font-medium tracking-[0.16em] text-charcoal uppercase"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-charcoal px-5 py-3.5 text-[11px] font-semibold tracking-[0.14em] text-ivory uppercase"
            onClick={() => setOpen(false)}
          >
            {t.header.contactCta}
          </Link>
        </nav>
      </div>
    </header>
  );
}
