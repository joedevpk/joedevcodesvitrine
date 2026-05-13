"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Patrick Laurent",
    role: "CEO • Nova Startup",
    text: "Une expérience exceptionnelle. Le design est premium, moderne et parfaitement pensé pour notre image de marque.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Sarah Mitchell",
    role: "Business Owner",
    text: "Très professionnel du début à la fin. Notre site transmet enfin une vraie image haut de gamme.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop",
  },
  {
    name: "Kevin Dubois",
    role: "Creative Director",
    text: "Une collaboration fluide avec une attention incroyable aux détails et à l’expérience utilisateur.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
  },
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_45%)]" />

      <div className="relative z-10 container-custom">

        {/* HEADER */}
        <div className="mx-auto mb-24 max-w-3xl text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-black/40">
            Témoignages
          </p>

          <h2 className="text-5xl font-black leading-tight text-black md:text-6xl">
            Ce que disent nos clients.
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-black/60">
            Des expériences digitales premium conçues pour générer impact,
            crédibilité et performance.
          </p>

        </div>

        {/* GRID */}
        <div className="grid gap-8 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-[36px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl transition duration-500 hover:border-black/20 hover:shadow-[0_20px_80px_rgba(0,0,0,0.08)]"
            >

              {/* TOP GLOW */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-black/[0.03] blur-3xl" />
              </div>

              {/* STARS */}
              <div className="mb-8 flex gap-1 text-black">
                ★ ★ ★ ★ ★
              </div>

              {/* TEXT */}
              <p className="relative z-10 mb-10 text-lg leading-relaxed text-black/70">
                “{item.text}”
              </p>

              {/* USER */}
              <div className="relative z-10 flex items-center gap-4">

                {/* AVATAR */}
                <div className="h-14 w-14 overflow-hidden rounded-full border border-black/10">

                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-cover"
                  />

                </div>

                {/* INFO */}
                <div>

                  <h4 className="font-semibold tracking-tight text-black">
                    {item.name}
                  </h4>

                  <p className="text-sm text-black/50">
                    {item.role}
                  </p>

                </div>
              </div>

              {/* BOTTOM LINE */}
              <div className="mt-8 h-[1px] w-full bg-gradient-to-r from-black/10 via-black/5 to-transparent" />

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}