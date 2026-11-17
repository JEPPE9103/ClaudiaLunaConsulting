import type { Metadata } from "next";
import { PrivacyContent } from "@/components/PrivacyContent";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Hur Claudia Luna Consulting hanterar personuppgifter från kontaktformulär och e-post.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <main id="main" className="bg-ivory">
      <div className="mx-auto max-w-3xl px-5 py-16 md:px-8 md:py-24">
        <PrivacyContent />
      </div>
    </main>
  );
}
