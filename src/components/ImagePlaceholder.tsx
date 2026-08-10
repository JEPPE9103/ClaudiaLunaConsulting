import { cn } from "@/lib/cn";

type ImagePlaceholderProps = {
  className?: string;
  label: string;
  tone?: "light" | "dark" | "warm";
};

export function ImagePlaceholder({
  className,
  label,
  tone = "light",
}: ImagePlaceholderProps) {
  const tones = {
    light: "bg-[#ebe6dc] text-navy/55 border-line",
    dark: "bg-navy-soft text-ivory/50 border-line-light",
    warm: "bg-[#e7e0d4] text-navy/50 border-line",
  };

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden border",
        tones[tone],
        className,
      )}
      role="img"
      aria-label={label}
    >
      <div className="absolute inset-0 editorial-grid opacity-60" />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        <div className="h-px w-10 bg-champagne/80" />
        <p className="max-w-[12rem] text-[10px] font-medium uppercase tracking-[0.2em]">
          {label}
        </p>
        <div className="h-px w-10 bg-champagne/80" />
      </div>
    </div>
  );
}
