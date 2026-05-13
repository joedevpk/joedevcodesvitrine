"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Smartphone,
  PenTool,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites vitrines",
    desc: "Des expériences web élégantes, immersives et optimisées pour convertir vos visiteurs.",
  },
  {
    icon: Smartphone,
    title: "Applications Web",
    desc: "Applications modernes, rapides et évolutives pensées pour la performance.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Interfaces premium conçues pour offrir une expérience utilisateur exceptionnelle.",
  },
  {
    icon: BarChart3,
    title: "SEO & Performance",
    desc: "Optimisation avancée pour améliorer vitesse, référencement et visibilité.",
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_40%)]" />

      <div className="relative z-10 container-custom">

        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-4xl text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-black/40">
            Services
          </p>

          <h2 className="text-5xl font-black leading-tight text-black md:text-6xl">
            Des solutions digitales pensées pour la performance.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Nous concevons des expériences digitales modernes, élégantes
            et performantes pour les marques ambitieuses.
          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -12 }}
                className="group relative overflow-hidden rounded-[36px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl transition duration-500 hover:border-black/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
              >

                {/* TOP GLOW */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-black/[0.04] blur-3xl" />
                </div>

                {/* ICON */}
                <div className="relative z-10 mb-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 bg-black text-white shadow-lg transition duration-500 group-hover:scale-110 group-hover:rounded-[20px]">

                  <Icon size={28} />

                </div>

                {/* TITLE */}
                <h3 className="relative z-10 mb-4 text-2xl font-bold tracking-tight text-black">
                  {service.title}
                </h3>

                {/* DESCRIPTION */}
                <p className="relative z-10 leading-relaxed text-black/60">
                  {service.desc}
                </p>

                {/* BOTTOM AREA */}
                <div className="relative z-10 mt-10 flex items-center justify-between">

                  <div className="h-[1px] w-full bg-gradient-to-r from-black/15 via-black/5 to-transparent transition-all duration-500 group-hover:from-black/30" />

                  <div className="ml-4 flex h-10 w-10 items-center justify-center rounded-full border border-black/10 transition duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">

                    <ArrowUpRight size={18} />

                  </div>
                </div>

                {/* BORDER LIGHT */}
                <div className="absolute inset-0 rounded-[36px] border border-white/40 opacity-0 transition duration-500 group-hover:opacity-100" />

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}