import { cn } from "@/lib/cn";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost" | "light";
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
    "group inline-flex items-center justify-center gap-2 rounded-full text-[11px] font-semibold tracking-[0.14em] uppercase transition-all duration-300";

  const variants = {
    solid:
      "bg-charcoal px-6 py-3.5 text-ivory hover:bg-charcoal-soft",
    outline:
      "border border-charcoal/20 px-6 py-3.5 text-charcoal hover:border-charcoal hover:bg-charcoal hover:text-ivory",
    ghost:
      "px-0 py-0 text-charcoal hover:text-terracotta hover:gap-3",
    light:
      "bg-ivory px-6 py-3.5 text-charcoal hover:bg-sand",
  };

  return (
    <a href={href} className={cn(base, variants[variant], className)}>
      <span>{children}</span>
      {arrow ? (
        <span
          aria-hidden="true"
          className="transition-transform duration-300 group-hover:translate-x-0.5"
        >
          →
        </span>
      ) : null}
    </a>
  );
}
