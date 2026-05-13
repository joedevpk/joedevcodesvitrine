"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  Sparkles,
  Layers3,
} from "lucide-react";

export default function About() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-32"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_40%)]" />

      {/* GLOW */}
      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-black/[0.03] blur-3xl" />

      <div className="relative z-10 container-custom">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >

            {/* LABEL */}
            <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-black/10 bg-white/70 px-5 py-2 backdrop-blur-xl">
              <div className="h-2 w-2 rounded-full bg-black" />
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-black/50">
                À propos
              </span>
            </div>

            {/* TITLE */}
            <h2 className="max-w-2xl text-5xl font-black leading-[1] tracking-tight text-black md:text-6xl">
              Une vision moderne du digital.
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-black/60">
              Nous créons des expériences digitales modernes, immersives et orientées performance
              pour des marques ambitieuses.
            </p>

            {/* FEATURES */}
            <div className="mt-12 space-y-5">

              {/* ITEM 1 */}
              <div className="group flex items-start gap-5 rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <Sparkles size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black">
                    Design premium orienté conversion
                  </h4>
                  <p className="mt-2 text-sm text-black/60">
                    Interfaces pensées pour impact visuel et conversion maximale.
                  </p>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="group flex items-start gap-5 rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <Layers3 size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black">
                    Développement scalable
                  </h4>
                  <p className="mt-2 text-sm text-black/60">
                    Architecture moderne, rapide et maintenable.
                  </p>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="group flex items-start gap-5 rounded-2xl border border-black/10 bg-white/70 p-5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white">
                  <BadgeCheck size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-black">
                    Expérience haut de gamme
                  </h4>
                  <p className="mt-2 text-sm text-black/60">
                    Micro-interactions et fluidité Apple-like.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA FIXED + PREMIUM */}
            <button
              onClick={() => scrollTo("contact")}
              className="group relative mt-12 flex items-center gap-3 overflow-hidden rounded-full bg-black px-8 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-[1.03] active:scale-95"
            >
              <span className="relative z-10">
                Découvrir notre approche
              </span>

              <ArrowUpRight
                size={18}
                className="relative z-10 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
              />

              {/* shine effect */}
              <span className="absolute inset-0 -translate-x-full bg-white/10 transition duration-500 group-hover:translate-x-0" />
            </button>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >

            <div className="group relative h-[650px] overflow-hidden rounded-[40px] border border-black/10 bg-white/70 backdrop-blur-2xl">

              <img
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2000&auto=format&fit=crop"
                alt="About"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent" />

              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100">
                <div className="absolute bottom-0 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />
              </div>
            </div>

            {/* FLOAT CARD */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="absolute -bottom-8 -left-8 rounded-[28px] border border-black/10 bg-white/80 p-7 backdrop-blur-2xl shadow-xl"
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/40">
                Expérience
              </p>

              <h4 className="text-4xl font-black text-black">
                +5 ans
              </h4>

              <p className="mt-3 max-w-[220px] text-sm text-black/60">
                Expérience dans la création de produits digitaux premium.
              </p>

              <div className="mt-6 h-[1px] w-20 bg-black/10" />
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}