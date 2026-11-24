import { createFileRoute } from "@tanstack/react-router";
import { CursorGlow, ScrollProgress } from "@/components/motion";
import { About } from "@/components/portfolio/About";
import { Contact } from "@/components/portfolio/Contact";
import { Experience } from "@/components/portfolio/Experience";
import { Footer } from "@/components/portfolio/Footer";
import { Hero } from "@/components/portfolio/Hero";
import { Navbar } from "@/components/portfolio/Navbar";
import { Projects } from "@/components/portfolio/Projects";
import { Recognition } from "@/components/portfolio/Recognition";
import { Skills } from "@/components/portfolio/Skills";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <ScrollProgress />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Recognition />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
