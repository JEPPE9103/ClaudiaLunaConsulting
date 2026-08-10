import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "outline-light" | "ghost";
  className?: string;
  arrow?: boolean;
};

export function Button({
  href,
  children,
  variant = "solid",
  className,
  arrow = false,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 text-[11px] font-medium tracking-[0.16em] uppercase transition-all duration-300";

  const variants = {
    solid: "bg-navy text-ivory px-6 py-3.5 hover:bg-navy-soft",
    outline:
      "border border-navy/30 text-navy px-5 py-2.5 hover:border-navy hover:bg-navy hover:text-ivory",
    "outline-light":
      "border border-ivory/40 text-ivory px-5 py-2.5 hover:border-ivory hover:bg-ivory hover:text-navy",
    ghost:
      "text-navy/80 hover:text-champagne gap-3 px-0 py-0 hover:gap-3.5",
  };

  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      <span>{children}</span>
      {arrow ? (
        <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5">
          →
        </span>
      ) : null}
    </a>
  );
}
