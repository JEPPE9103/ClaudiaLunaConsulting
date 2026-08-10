type IconName =
  | "europe"
  | "board"
  | "transform"
  | "people"
  | "advisory"
  | "relations"
  | "interim"
  | "ai";

type IconProps = {
  name: IconName;
  className?: string;
};

export function LineIcon({ name, className = "h-7 w-7" }: IconProps) {
  const common = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.15,
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
          <path d="M4 7h7v7" />
          <path d="M11 7 4 14" />
          <path d="M13 10h7v7" />
          <path d="M20 10 13 17" />
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
    case "advisory":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <path d="M7 19V9.5L12 5l5 4.5V19" />
          <path d="M10 19v-5h4v5" />
        </svg>
      );
    case "relations":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="8" cy="10" r="2.4" />
          <circle cx="16" cy="10" r="2.4" />
          <path d="M4.5 18c.7-2.2 2.3-3.3 3.5-3.3S11 15.8 11.8 18" />
          <path d="M12.2 18c.7-2.2 2.3-3.3 3.8-3.3s3.1 1.1 3.8 3.3" />
          <path d="M10.2 10.2c.6-.5 1.4-.8 2.3-.8.8 0 1.5.2 2.1.6" />
        </svg>
      );
    case "interim":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <circle cx="12" cy="8" r="2.6" />
          <path d="M7 19c.9-2.8 2.7-4.2 5-4.2S16.1 16.2 17 19" />
          <path d="M18.5 8.5 20 7M18.5 11.5 20 13M5.5 8.5 4 7M5.5 11.5 4 13" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" {...common}>
          <rect x="5" y="6" width="14" height="12" rx="1" />
          <path d="M9 10.5h6M9 13.5h4" />
          <path d="M12 3.5v2.5M12 18v2.5" />
        </svg>
      );
  }
}
