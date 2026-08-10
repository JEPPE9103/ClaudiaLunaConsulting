import { About } from "@/components/About";
import { CaseStudies } from "@/components/CaseStudies";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Expertise } from "@/components/Expertise";
import { Hero } from "@/components/Hero";
import { Insights } from "@/components/Insights";
import { Statement } from "@/components/Statement";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Expertise />
      <Experience />
      <CaseStudies />
      <Statement />
      <About />
      <Insights />
      <Contact />
    </main>
  );
}
