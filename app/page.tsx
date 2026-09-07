import HeroSection from "@/components/HeroSection";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div>
      <HeroSection
        name="Md. Muzahidul Islam"
        title="Software Engineer @ Kite Games Studio"
        description="Software craftsman based in Dhaka, Bangladesh, working with Next.js and Docker, with a background in game development."
      />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Contact />
    </div>
  );
}
