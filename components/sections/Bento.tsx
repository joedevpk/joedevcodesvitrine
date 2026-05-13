"use client";

import { motion } from "framer-motion";
import { Globe, Layers3, Zap, ShieldCheck, ArrowUpRight } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Bento() {
  return (
    <section className="relative overflow-hidden py-32 bg-white">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.06),transparent_50%)]" />

      {/* SOFT GLOW */}
      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={container}
          className="mx-auto mb-24 max-w-3xl text-center"
        >

          <motion.p
            variants={item}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-black/40"
          >
            Studio
          </motion.p>

          <motion.h2
            variants={item}
            className="text-5xl md:text-6xl font-black tracking-tight text-black"
          >
            Design, technologie & performance.
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-6 text-lg text-black/60"
          >
            Une approche premium inspirée des meilleurs produits SaaS modernes.
          </motion.p>

        </motion.div>

        {/* GRID */}
        <div className="grid gap-6 md:grid-cols-3 auto-rows-[260px]">

          {/* HERO CARD */}
          <motion.div
            whileHover={{ y: -12 }}
            transition={{ duration: 0.3 }}
            className="group relative col-span-2 overflow-hidden rounded-[40px] bg-black p-10 text-white shadow-2xl"
          >

            {/* IMAGE */}
            <div
              className="absolute inset-0 opacity-30 transition duration-700 group-hover:scale-110"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2000&auto=format&fit=crop')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/95 via-black/70 to-black/90" />

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-xl">
                  <Globe size={30} />
                </div>

                <h3 className="text-4xl font-black leading-tight">
                  Expériences digitales premium.
                </h3>

                <p className="mt-5 max-w-lg text-white/70">
                  Création de plateformes modernes avec design immersif et performance extrême.
                </p>
              </div>

              <div className="flex items-center justify-between">

                <div className="flex gap-10">
                  <div>
                    <h4 className="text-3xl font-bold">120+</h4>
                    <p className="text-white/50 text-sm">Clients</p>
                  </div>

                  <div>
                    <h4 className="text-3xl font-bold">250+</h4>
                    <p className="text-white/50 text-sm">Projets</p>
                  </div>
                </div>

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-xl transition duration-300 group-hover:rotate-45">
                  <ArrowUpRight size={22} />
                </div>

              </div>

            </div>
          </motion.div>

          {/* UI/UX */}
          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[40px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl transition hover:shadow-2xl"
          >

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Layers3 size={24} />
                </div>

                <h3 className="text-2xl font-bold">UI/UX Design</h3>

                <p className="mt-4 text-black/60">
                  Interfaces modernes centrées utilisateur et conversion.
                </p>
              </div>

            </div>
          </motion.div>

          {/* PERFORMANCE */}
          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative overflow-hidden rounded-[40px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl transition hover:shadow-2xl"
          >

            <div className="relative z-10 flex h-full flex-col justify-between">

              <div>
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <Zap size={24} />
                </div>

                <h3 className="text-2xl font-bold">Performance</h3>

                <p className="mt-4 text-black/60">
                  Optimisation poussée pour vitesse et SEO.
                </p>
              </div>

            </div>
          </motion.div>

          {/* LARGE CARD */}
          <motion.div
            variants={item}
            whileHover={{ y: -10 }}
            className="group relative col-span-2 overflow-hidden rounded-[40px] border border-black/10 bg-white/70 p-10 backdrop-blur-2xl transition hover:shadow-2xl"
          >

            <div className="relative z-10 flex h-full flex-col justify-between lg:flex-row lg:items-end">

              <div className="max-w-2xl">

                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-black text-white">
                  <ShieldCheck size={24} />
                </div>

                <h3 className="text-4xl font-black leading-tight">
                  Architecture scalable & moderne.
                </h3>

                <p className="mt-5 text-black/60">
                  Code propre, architecture maintenable et technologies prêtes production SaaS.
                </p>

              </div>

              <button className="mt-10 flex items-center gap-3 rounded-full border border-black/10 px-7 py-4 text-sm font-semibold transition hover:bg-black hover:text-white lg:mt-0">

                Explorer

                <ArrowUpRight size={18} />

              </button>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}