import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SkillsMarquee from "./components/SkillsMarquee";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SkillsMarquee />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}