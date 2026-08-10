"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
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
        "sticky top-0 z-50 border-b border-line bg-ivory/95 backdrop-blur-sm transition-shadow duration-300",
        scrolled && "shadow-[0_1px_0_rgba(16,29,41,0.04)]",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-6 px-5 py-3.5 md:px-10 lg:px-14">
        <a href="#top" className="shrink-0" aria-label={`${site.name} home`}>
          <p className="text-[12px] font-semibold tracking-[0.16em] text-navy uppercase sm:text-[13px]">
            Claudia Luna
          </p>
          <p className="mt-0.5 text-[9px] tracking-[0.42em] text-navy/70 uppercase">
            — Consulting —
          </p>
          <p className="mt-1.5 text-[8px] tracking-[0.22em] text-muted uppercase">
            {site.descriptorCompact}
          </p>
        </a>

        <nav
          className="hidden items-center gap-7 xl:gap-9 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[10px] font-medium tracking-[0.2em] text-navy/70 uppercase transition-colors duration-300 hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden items-center bg-navy px-4 py-2.5 text-[10px] font-medium tracking-[0.16em] text-ivory uppercase transition-colors duration-300 hover:bg-navy-soft sm:inline-flex"
          >
            Discuss an assignment
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center border border-line text-navy transition-colors lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            <span className="sr-only">{open ? "Close" : "Menu"}</span>
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
        className={cn(
          "border-t border-line bg-ivory lg:hidden",
          open ? "block" : "hidden",
        )}
      >
        <nav
          className="mx-auto flex max-w-[1440px] flex-col px-5 py-5 md:px-10"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-line py-4 text-[11px] font-medium tracking-[0.2em] text-navy uppercase"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center bg-navy px-5 py-3.5 text-[11px] font-medium tracking-[0.16em] text-ivory uppercase transition-colors hover:bg-navy-soft"
            onClick={() => setOpen(false)}
          >
            Discuss an assignment
          </a>
        </nav>
      </div>
    </header>
  );
}
