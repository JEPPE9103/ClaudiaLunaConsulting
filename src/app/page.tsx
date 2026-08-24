import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WorkingWith } from "@/components/WorkingWith";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <Services />
      <Experience />
      <WorkingWith />
      <Contact />
    </main>
  );
}
