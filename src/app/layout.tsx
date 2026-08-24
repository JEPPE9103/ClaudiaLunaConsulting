import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SkipLink } from "@/components/SkipLink";
import { site } from "@/data/content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://claudialunaconsulting.com"),
  title: {
    default: "Claudia Luna Consulting | Senior HR-rådgivning Stockholm",
    template: "%s | Claudia Luna Consulting",
  },
  description:
    "Senior HR-kompetens när din organisation behöver det som mest. Strategiskt och operativt HR-stöd inom transformation, employee relations, interim ledarskap och digital HR.",
  keywords: [
    "Claudia Luna Consulting",
    "HR-konsult Stockholm",
    "Interim HR",
    "HR Transformation",
    "Strategisk HR-rådgivning",
    "Employee Relations",
    "Organisatorisk förändring",
    "AI i HR",
  ],
  authors: [{ name: "Claudia Luna" }],
  creator: "Claudia Luna Consulting",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    alternateLocale: ["en_GB"],
    siteName: site.name,
    title: "Claudia Luna Consulting | Senior HR-rådgivning",
    description:
      "Strategiskt och operativt HR-stöd för organisationer som navigerar förändring, tillväxt och komplexa people-frågor.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Claudia Luna Consulting",
    description:
      "Senior HR-kompetens för organisationer som navigerar förändring, tillväxt och komplexa people-frågor.",
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
      lang="sv"
      className={`${manrope.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-ivory font-sans text-charcoal">
        <LanguageProvider>
          <SkipLink />
          <Header />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
