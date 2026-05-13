"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Sparkles,
  ShieldCheck,
  Download,
  Code2,
  Globe,
  Layers3,
  Zap,
} from "lucide-react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  // VIDEO INTERACTION
  const playVideo = async () => {
    try {
      await videoRef.current?.play();
    } catch (error) {
      console.error(error);
    }
  };

  const pauseVideo = () => {
    if (!videoRef.current) return;

    videoRef.current.pause();
    videoRef.current.currentTime = 0;
  };

  // SMOOTH SCROLL
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f8fafc] pt-36 pb-24"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_45%)]" />

      {/* LIGHT EFFECT */}
      <div className="absolute right-0 top-0 h-[700px] w-[700px] rounded-full bg-indigo-500/10 blur-3xl" />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: "70px 70px",
        }}
      />

      <div className="container-custom relative z-10">
        <div className="grid items-center gap-24 lg:grid-cols-2">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            {/* TOP BADGE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mb-8 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/90 px-5 py-3 shadow-lg backdrop-blur-xl"
            >
              <Sparkles size={14} className="text-indigo-600" />

              <span className="text-xs font-bold uppercase tracking-[0.35em] text-black/60">
                Full Stack Developer
              </span>
            </motion.div>

            {/* LOCATION */}
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.35em] text-black/40">
              Basé à Kinshasa • RDC
            </p>

            {/* NAME */}
            <h1 className="max-w-5xl text-6xl font-black leading-[0.9] tracking-[-0.06em] text-black md:text-7xl xl:text-[104px]">
              JOE DEV
            </h1>

            {/* TITLE */}
            <h2 className="mt-6 max-w-2xl text-2xl font-semibold leading-relaxed tracking-tight text-black/80 md:text-3xl">
              Développeur Web Full Stack spécialisé dans les
              expériences digitales premium et les plateformes SaaS modernes.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-black/60 md:text-xl">
              Je développe des applications web ultra modernes,
              rapides, sécurisées et performantes avec Next.js,
              React, TypeScript et Node.js pour startups,
              entreprises et marques ambitieuses.
            </p>

            {/* FEATURES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
                <ShieldCheck size={16} />

                <span className="text-sm font-semibold">
                  Sécurité avancée
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
                <Code2 size={16} />

                <span className="text-sm font-semibold">
                  Next.js Expert
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
                <Globe size={16} />

                <span className="text-sm font-semibold">
                  UI / UX Premium
                </span>
              </div>

              <div className="flex items-center gap-2 rounded-full border border-black/10 bg-white px-5 py-3 shadow-sm">
                <Zap size={16} />

                <span className="text-sm font-semibold">
                  Haute Performance
                </span>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-14 flex flex-wrap gap-5">

              {/* PRIMARY BUTTON */}
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative flex items-center gap-3 overflow-hidden rounded-full bg-black px-9 py-5 text-sm font-semibold text-white shadow-2xl transition-all duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10">
                  Voir mes projets
                </span>

                <ArrowUpRight
                  size={18}
                  className="relative z-10 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                <div className="absolute inset-0 -translate-x-full bg-white/10 transition duration-500 group-hover:translate-x-0" />
              </button>

              {/* CONTACT */}
              <button
                onClick={() => scrollToSection("contact")}
                className="group flex items-center gap-3 rounded-full border border-black/10 bg-white/90 px-9 py-5 text-sm font-semibold text-black shadow-lg backdrop-blur-xl transition-all duration-300 hover:scale-[1.03] hover:border-black hover:bg-black hover:text-white"
              >
                Me contacter

                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

              {/* CV BUTTON */}
              <button
                onClick={() => {
                  window.open("/api/cv", "_blank");
                }}
                className="group flex items-center gap-3 rounded-full border border-indigo-200 bg-indigo-50 px-9 py-5 text-sm font-semibold text-indigo-700 shadow-lg transition-all duration-300 hover:scale-[1.03] hover:bg-indigo-600 hover:text-white"
              >
                <Download size={18} />

                Télécharger CV

                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>

            {/* STATS */}
            <div className="mt-20 grid grid-cols-3 gap-8 border-t border-black/10 pt-10">

              <motion.div whileHover={{ y: -4 }}>
                <h3 className="text-5xl font-black tracking-tight text-black">
                  20+
                </h3>

                <p className="mt-2 text-sm text-black/50">
                  Projets réalisés
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }}>
                <h3 className="text-5xl font-black tracking-tight text-black">
                  10+
                </h3>

                <p className="mt-2 text-sm text-black/50">
                  Technologies maîtrisées
                </p>
              </motion.div>

              <motion.div whileHover={{ y: -4 }}>
                <h3 className="text-5xl font-black tracking-tight text-black">
                  98%
                </h3>

                <p className="mt-2 text-sm text-black/50">
                  Performance Lighthouse
                </p>
              </motion.div>

            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: "easeOut",
            }}
            className="relative"
          >

            {/* MAIN CARD */}
            <div
              onMouseEnter={playVideo}
              onMouseLeave={pauseVideo}
              className="group relative h-[760px] overflow-hidden rounded-[42px] border border-black/10 bg-white/70 shadow-[0_30px_120px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            >

              {/* IMAGE */}
              <Image
                src="/images/profile.jpg"
                alt="Joe Dev"
                fill
                priority
                className="object-cover transition duration-700 group-hover:scale-105"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* TOP STATUS */}
              <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-xl">

                <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />

                <span className="text-xs font-semibold uppercase tracking-[0.3em] text-white">
                  Disponible
                </span>

              </div>

              {/* CENTER BUTTON */}
              <div className="absolute inset-0 flex items-center justify-center">

                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-2xl transition duration-500 group-hover:scale-110">

                  <Play
                    size={28}
                    fill="white"
                    className="ml-1 text-white"
                  />

                </div>

              </div>

              {/* BOTTOM CARD */}
              <div className="absolute bottom-0 left-0 w-full p-8">

                <div className="rounded-[30px] border border-white/10 bg-white/10 p-7 backdrop-blur-2xl">

                  <div className="flex items-end justify-between gap-6">

                    <div>

                      <p className="mb-3 text-xs font-bold uppercase tracking-[0.3em] text-white/60">
                        Développement Premium
                      </p>

                      <h4 className="max-w-md text-3xl font-semibold leading-snug tracking-tight text-white">
                        Création de solutions digitales modernes,
                        performantes et sécurisées.
                      </h4>

                    </div>

                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/10 transition duration-300 group-hover:rotate-45">

                      <ArrowUpRight
                        size={24}
                        className="text-white"
                      />

                    </div>

                  </div>

                </div>

              </div>
            </div>

            {/* FLOATING CARD */}
            <motion.div
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-10 -left-10 rounded-[30px] border border-black/10 bg-white/90 p-7 shadow-[0_20px_80px_rgba(0,0,0,0.12)] backdrop-blur-2xl"
            >

              <div className="flex items-center gap-3">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <Layers3 size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
                    Performance
                  </p>

                  <h4 className="text-4xl font-black tracking-tight text-black">
                    98%
                  </h4>
                </div>

              </div>

              <p className="mt-4 max-w-[220px] text-sm leading-relaxed text-black/60">
                Optimisation Lighthouse,
                SEO avancé et expérience utilisateur premium.
              </p>

            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}