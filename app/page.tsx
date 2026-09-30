import { About } from "@/components/portfolio/About";
import { ContactCTA } from "@/components/portfolio/ContactCTA";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Intro } from "@/components/portfolio/Intro";
import { Navbar } from "@/components/portfolio/Navbar";
import { Process } from "@/components/portfolio/Process";
import { ProjectShowcase } from "@/components/portfolio/ProjectShowcase";
import { Services } from "@/components/portfolio/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <ProjectShowcase />
        <Services />
        <Process />
        <About />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
