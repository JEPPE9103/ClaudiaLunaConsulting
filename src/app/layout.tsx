import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/data/content";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claudialunaconsulting.com"),
  title: {
    default: "Claudia Luna Consulting | Strategic HR Advisory Stockholm",
    template: "%s | Claudia Luna Consulting",
  },
  description:
    "People strategy for business transformation. Senior HR advisory helping organizations navigate transformation, organizational change and complex people challenges.",
  keywords: [
    "Claudia Luna Consulting",
    "HR Consulting Stockholm",
    "HR Transformation",
    "Strategic HR Advisory",
    "Organizational Transformation",
    "Employee Relations",
    "AI in HR",
    "People strategy",
    "Change management",
  ],
  authors: [{ name: "Claudia Luna" }],
  creator: "Claudia Luna Consulting",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: site.name,
    title: "Claudia Luna Consulting | Strategic HR Advisory",
    description:
      "Senior HR advisory helping organizations navigate transformation, organizational change and complex people challenges.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia Luna Consulting",
    description:
      "People strategy for business transformation. Senior HR advisory based in Stockholm.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${cormorant.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-charcoal">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-ivory focus:px-4 focus:py-2 focus:text-sm focus:text-navy"
        >
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
