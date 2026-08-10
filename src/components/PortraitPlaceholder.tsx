import Image from "next/image";
import { cn } from "@/lib/cn";

type PortraitPlaceholderProps = {
  className?: string;
  label?: string;
  fill?: boolean;
  /** Object position for editorial crop */
  objectPosition?: string;
  priority?: boolean;
};

export function PortraitPlaceholder({
  className,
  label = "Professional portrait of Claudia Luna",
  fill = false,
  objectPosition = "center 20%",
  priority = false,
}: PortraitPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-[#e8e2d7]",
        !fill && "aspect-[4/5] w-full",
        fill && "h-full min-h-[28rem] w-full",
        className,
      )}
    >
      <Image
        src="/images/claudia-luna-portrait.png"
        alt={label}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 100vw, 50vw"
        className="object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
