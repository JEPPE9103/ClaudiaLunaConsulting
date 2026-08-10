import { footer, navLinks, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16 lg:px-10">
        <div className="grid gap-10 border-b border-line-light pb-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-5">
            <p className="text-[13px] font-semibold tracking-[0.16em] uppercase">
              Claudia Luna Consulting
            </p>
            <p className="mt-3 text-[11px] tracking-[0.2em] uppercase text-ivory/55">
              {site.descriptor}
            </p>
          </div>

          <nav
            className="md:col-span-4"
            aria-label="Footer"
          >
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[11px] font-medium tracking-[0.16em] uppercase text-ivory/70 transition-colors hover:text-ivory"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-3 md:text-right">
            <ul className="space-y-3">
              {footer.legal.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-[11px] font-medium tracking-[0.16em] uppercase text-ivory/55 transition-colors hover:text-ivory"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-3 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-ivory/45">{site.copyright}</p>
          <p className="text-xs text-ivory/35">Stockholm</p>
        </div>
      </div>
    </footer>
  );
}
