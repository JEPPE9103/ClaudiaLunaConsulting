type IconName = "europe" | "board" | "transform" | "people";

type IconProps = {
  name: IconName;
  className?: string;
};

export function LineIcon({ name, className = "h-6 w-6" }: IconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (name) {
    case "europe":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17M12 3.5c2.4 2.6 3.6 5.4 3.6 8.5s-1.2 5.9-3.6 8.5c-2.4-2.6-3.6-5.4-3.6-8.5s1.2-5.9 3.6-8.5z" />
        </svg>
      );
    case "board":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="4" y="5" width="16" height="14" rx="0.5" />
          <path d="M8 9h8M8 12h8M8 15h5" />
        </svg>
      );
    case "transform":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M4 16.5 9.5 7l4 6.5L16 10l4 6.5" />
          <path d="M4 18.5h16" />
        </svg>
      );
    case "people":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="9" cy="8" r="2.5" />
          <circle cx="16" cy="9" r="2" />
          <path d="M4.5 18c.8-2.4 2.6-3.6 4.5-3.6s3.7 1.2 4.5 3.6" />
          <path d="M13.2 14.6c1.1-.6 2.4-.8 3.8-.4 1.4.4 2.5 1.4 3 2.8" />
        </svg>
      );
  }
}
