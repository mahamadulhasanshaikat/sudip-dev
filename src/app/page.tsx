// app/page.tsx
import ScrollProgress from "@/components/sections/ScrollProgress";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Publications from "@/components/sections/Publications";
import Certifications from "@/components/sections/Certifications";
import Activities from "@/components/sections/Activities";
import References from "@/components/sections/References";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ScrollProgress />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <Publications />
      <Certifications />
      <Activities />
      <References />
      <Contact />
    </main>
  );
}