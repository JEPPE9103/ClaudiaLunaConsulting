import { cn } from "@/lib/cn";

type PortraitPlaceholderProps = {
  className?: string;
  label?: string;
  aspect?: "portrait" | "editorial";
};

export function PortraitPlaceholder({
  className,
  label = "Professional portrait placeholder",
  aspect = "portrait",
}: PortraitPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border border-line bg-ivory-warm",
        aspect === "portrait" ? "aspect-[3/4]" : "aspect-[4/5]",
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 editorial-grid opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy/[0.06]" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="h-px w-12 bg-champagne/70" />
        <p className="font-serif text-lg text-ink/70 sm:text-xl">Claudia Luna</p>
        <p className="max-w-[14rem] text-[10px] font-medium uppercase tracking-[0.22em] text-muted">
          Insert professional portrait
        </p>
        <div className="h-px w-12 bg-champagne/70" />
      </div>
    </div>
  );
}
