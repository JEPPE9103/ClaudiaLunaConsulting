"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/content";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "border-b border-line bg-ivory/95 backdrop-blur-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 py-4 md:px-8 lg:px-10">
        <a href="#top" className="group shrink-0" aria-label={`${site.name} home`}>
          <div
            className={cn(
              "font-sans text-[13px] font-semibold leading-tight tracking-[0.14em] uppercase transition-colors",
              scrolled || open ? "text-navy" : "text-ivory",
            )}
          >
            <span className="block">Claudia Luna</span>
            <span className="block tracking-[0.22em]">Consulting</span>
          </div>
          <p
            className={cn(
              "mt-1 text-[9px] tracking-[0.2em] uppercase transition-colors",
              scrolled || open ? "text-muted" : "text-ivory/65",
            )}
          >
            {site.descriptorCompact}
          </p>
        </a>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Primary"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "text-[11px] font-medium tracking-[0.18em] uppercase transition-colors duration-300",
                scrolled
                  ? "text-ink/70 hover:text-navy"
                  : "text-ivory/75 hover:text-ivory",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className={cn(
              "hidden items-center border px-4 py-2.5 text-[10px] font-medium tracking-[0.18em] uppercase transition-colors duration-300 sm:inline-flex",
              scrolled
                ? "border-navy/35 text-navy hover:bg-navy hover:text-ivory"
                : "border-ivory/45 text-ivory hover:bg-ivory hover:text-navy",
            )}
          >
            Discuss an assignment
          </a>

          <button
            type="button"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center border transition-colors lg:hidden",
              scrolled || open
                ? "border-navy/25 text-navy"
                : "border-ivory/35 text-ivory",
            )}
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
          className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 md:px-8"
          aria-label="Mobile"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="border-b border-line py-4 text-[12px] font-medium tracking-[0.2em] uppercase text-navy"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-5 inline-flex items-center justify-center border border-navy px-5 py-3.5 text-[11px] font-medium tracking-[0.18em] uppercase text-navy transition-colors hover:bg-navy hover:text-ivory"
            onClick={() => setOpen(false)}
          >
            Discuss an assignment
          </a>
        </nav>
      </div>
    </header>
  );
}
