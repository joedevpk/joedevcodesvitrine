"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { label: "Projets réalisés", value: "15+" },
  { label: "Années d’apprentissage", value: "3+" },
  { label: "Technologies maîtrisées", value: "10+" },
];

const specialties = [
  "Frontend moderne",
  "Backend scalable",
  "UI/UX Design",
  "API Development",
  "Performance Web",
  "Architecture SaaS",
];

export default function About() {
  return (
    <section
      className="py-28 bg-gradient-to-b
                 from-white via-gray-50 to-white
                 dark:from-black dark:via-zinc-950 dark:to-black
                 overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-7xl">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2
            className="text-4xl md:text-6xl
                       font-black tracking-tight
                       text-black dark:text-white"
          >
            À propos de moi
          </h2>

          <p
            className="mt-6 max-w-2xl mx-auto
                       text-black/60 dark:text-white/60
                       text-base md:text-lg leading-relaxed"
          >
            Développeur Full Stack passionné par la création
            d’expériences digitales modernes, élégantes
            et performantes.
          </p>
        </motion.div>

        {/* MAIN GRID */}
        <div
          className="mt-20 grid lg:grid-cols-2
                     gap-14 items-center"
        >

          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >

            {/* GLOW */}
            <div
              className="absolute inset-0
                         bg-gradient-to-tr
                         from-violet-500/20
                         via-fuchsia-500/20
                         to-cyan-500/20
                         blur-3xl rounded-full"
            />

            {/* IMAGE CARD */}
            <div
              className="relative w-[320px] h-[420px]
                         rounded-[32px]
                         overflow-hidden
                         border border-black/10
                         dark:border-white/10
                         bg-white/50 dark:bg-white/5
                         backdrop-blur-2xl
                         shadow-2xl"
            >

              {/* TON IMAGE */}
              <Image
                src="/logo.jpg"
                alt="Joe Dev"
                fill
                priority
                className="object-cover"
              />

              {/* OVERLAY */}
              <div
                className="absolute inset-0
                           bg-gradient-to-t
                           from-black/50
                           via-black/10
                           to-transparent"
              />

              {/* BOTTOM INFO */}
              <div
                className="absolute bottom-0 left-0
                           w-full p-6 text-white"
              >
                <h3 className="text-2xl font-bold">
                  Joe Dev
                </h3>

                <p className="text-sm text-white/80 mt-1">
                  Full Stack Developer
                </p>
              </div>

            </div>

          </motion.div>

          {/* CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >

            {/* STATS */}
            <div
              className="grid grid-cols-1 sm:grid-cols-3
                         gap-5 mb-10"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-6 rounded-2xl
                             bg-white dark:bg-white/5
                             border border-black/10
                             dark:border-white/10
                             shadow-sm backdrop-blur-xl"
                >
                  <h3
                    className="text-3xl font-black
                               text-black dark:text-white"
                  >
                    {stat.value}
                  </h3>

                  <p
                    className="mt-2 text-sm
                               text-black/60 dark:text-white/60"
                  >
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* DESCRIPTION */}
            <div
              className="rounded-3xl p-8
                         bg-white/70 dark:bg-white/5
                         border border-black/10
                         dark:border-white/10
                         backdrop-blur-2xl shadow-sm"
            >
              <p
                className="text-black/80 dark:text-white/70
                           leading-relaxed text-base md:text-lg"
              >
                Je suis un{" "}
                <span className="font-semibold text-black dark:text-white">
                  développeur Full Stack
                </span>{" "}
                spécialisé dans la création
                d’applications modernes et performantes.
                <br />
                <br />

                J’utilise des technologies comme{" "}
                <span className="font-medium">
                  React, Next.js, TypeScript,
                  Node.js et PostgreSQL
                </span>{" "}
                pour construire des produits digitaux
                rapides, élégants et scalables.
                <br />
                <br />

                Mon objectif est de créer des expériences
                premium inspirées des meilleures startups SaaS.
              </p>
            </div>

            {/* SPECIALTIES */}
            <div className="mt-10">

              <h3
                className="text-xl font-bold mb-5
                           text-black dark:text-white"
              >
                Spécialités
              </h3>

              <div className="flex flex-wrap gap-3">
                {specialties.map((item, index) => (
                  <motion.span
                    key={index}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="
                      px-5 py-2.5 rounded-full
                      bg-black text-white
                      dark:bg-white dark:text-black
                      text-sm font-medium
                      shadow-sm cursor-default
                    "
                  >
                    {item}
                  </motion.span>
                ))}
              </div>

            </div>

          </motion.div>

        </div>

        {/* VISION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-24 text-center max-w-4xl mx-auto"
        >
          <h3
            className="text-3xl font-bold
                       text-black dark:text-white"
          >
            Ma vision
          </h3>

          <p
            className="mt-6 text-lg leading-relaxed
                       text-black/60 dark:text-white/60"
          >
            Concevoir des produits digitaux élégants,
            rapides et intelligents qui apportent
            une vraie valeur aux utilisateurs
            et aux entreprises modernes.
          </p>
        </motion.div>

      </div>
    </section>
  );
}