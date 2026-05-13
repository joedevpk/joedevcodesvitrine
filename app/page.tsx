import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import Bento from "@/components/sections/Bento";

// ✅ FIX IMPORTANT : chemin correct
import About from "@/components/sections/about/About";

import Skills from "@/components/sections/Skills";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="bg-white text-black overflow-x-hidden">

        {/* HERO - FIRST IMPACT */}
        <section id="hero">
          <Hero />
        </section>

        {/* VISUAL INTRO / BRAND */}
        <section id="bento">
          <Bento />
        </section>

        {/* ABOUT - PERSONAL BRANDING */}
        <section id="about">
          <About />
        </section>

        {/* SKILLS - TECH STACK */}
        <section id="skills">
          <Skills />
        </section>

        {/* SERVICES - OFFER */}
        <section id="services">
          <Services />
        </section>

        {/* PROJECTS - PROOF */}
        <section id="projects">
          <Projects />
        </section>

        {/* TESTIMONIALS - SOCIAL PROOF */}
        <section id="testimonials">
          <Testimonials />
        </section>

        {/* FAQ - OBJECTIONS */}
        <section id="faq">
          <FAQ />
        </section>

        {/* CONTACT - CONVERSION */}
        <section id="contact">
          <Contact />
        </section>

      </main>

      <Footer />
    </>
  );
}