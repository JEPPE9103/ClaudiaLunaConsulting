import { footer, navLinks, site } from "@/data/content";

export function Footer() {
  return (
    <footer className="bg-navy text-ivory">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-10 px-5 py-10 md:flex-row md:items-start md:justify-between md:px-10 md:py-12 lg:px-14">
        <div>
          <p className="text-[12px] font-semibold tracking-[0.16em] uppercase">
            Claudia Luna Consulting
          </p>
          <p className="mt-2 text-[10px] tracking-[0.2em] text-ivory/55 uppercase">
            {site.descriptor}
          </p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-[10px] font-medium tracking-[0.16em] text-ivory/70 uppercase transition-colors hover:text-ivory"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <p className="text-xs text-ivory/45">{site.copyright}</p>
          <ul className="mt-3 flex gap-5 md:justify-end">
            {footer.legal.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[10px] font-medium tracking-[0.14em] text-ivory/45 uppercase transition-colors hover:text-ivory"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
