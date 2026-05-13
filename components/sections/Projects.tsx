"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Luxury Agency",
    category: "Site vitrine premium",
    desc: "Expérience digitale immersive avec identité visuelle haut de gamme.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Modern Dashboard",
    category: "SaaS Platform",
    desc: "Dashboard moderne conçu pour performance et expérience utilisateur.",
    image:
      "https://images.unsplash.com/photo-1558655146-9f40138edfeb?q=80&w=2000&auto=format&fit=crop",
  },

  {
    title: "Creative Studio",
    category: "Branding & UI/UX",
    desc: "Direction artistique minimaliste avec animations premium.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.from(cardsRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      stagger: 0.15,
      ease: "power4.out",

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-32"
      id="projects"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_40%)]" />

      {/* LIGHT GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="relative z-10 container-custom">

        {/* HEADER */}
        <div className="mb-24 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">

          <div className="max-w-3xl">

            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-black/40">
              Projets
            </p>

            <h2 className="text-5xl font-black leading-[1] tracking-tight text-black md:text-7xl">
              Réalisations digitales premium.
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60">
              Des expériences pensées pour combiner esthétique moderne,
              performance et impact visuel haut de gamme.
            </p>

          </div>

          {/* CTA */}
          <button className="group flex items-center gap-3 self-start rounded-full border border-black/10 bg-white px-7 py-4 text-sm font-semibold text-black transition duration-300 hover:border-black hover:bg-black hover:text-white">

            Voir tous les projets

            <ArrowUpRight
              size={18}
              className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />

          </button>
        </div>

        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-3">

          {projects.map((project, i) => (
            <motion.div
              key={i}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              whileHover={{
                y: -12,
                rotateX: 3,
                rotateY: -3,
              }}
              transition={{
                type: "spring",
                stiffness: 180,
                damping: 18,
              }}
              className="group perspective-[2000px]"
            >

              {/* CARD */}
              <div className="relative overflow-hidden rounded-[38px] border border-black/10 bg-white/70 backdrop-blur-2xl transition duration-500 hover:border-black/20 hover:shadow-[0_25px_80px_rgba(0,0,0,0.08)]">

                {/* IMAGE */}
                <div className="relative h-[460px] overflow-hidden">

                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  {/* OVERLAY */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* CATEGORY */}
                  <div className="absolute left-6 top-6 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] text-white backdrop-blur-xl">
                    {project.category}
                  </div>

                  {/* HOVER GLOW */}
                  <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute -bottom-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
                  </div>

                </div>

                {/* CONTENT */}
                <div className="relative p-8">

                  {/* TOP ROW */}
                  <div className="mb-6 flex items-start justify-between gap-4">

                    <div>

                      <h3 className="text-3xl font-bold tracking-tight text-black">
                        {project.title}
                      </h3>

                      <p className="mt-4 leading-relaxed text-black/60">
                        {project.desc}
                      </p>

                    </div>

                    {/* ICON */}
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 transition duration-300 group-hover:bg-black group-hover:text-white">

                      <ArrowUpRight size={20} />

                    </div>
                  </div>

                  {/* LINE */}
                  <div className="h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent" />

                </div>

                {/* BORDER LIGHT */}
                <div className="absolute inset-0 rounded-[38px] border border-white/30 opacity-0 transition duration-500 group-hover:opacity-100" />

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}