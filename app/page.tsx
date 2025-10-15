import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Team from "@/components/sections/team";
import Projects from "@/components/sections/projects";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Team />
      <Projects />
      <CTA />
      <Footer />
    </main>
  );
}
