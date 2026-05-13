"use client";

import { useState } from "react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import { Plus } from "lucide-react";

const ease = cubicBezier(0.22, 1, 0.36, 1);

const faqItems = [
  {
    question: "Combien de temps pour créer un site ?",
    answer:
      "La plupart des projets premium sont livrés entre 1 et 3 semaines selon la complexité.",
  },
  {
    question: "Travaillez-vous avec des startups ?",
    answer:
      "Oui, j’accompagne startups, entreprises et entrepreneurs dans leurs projets digitaux.",
  },
  {
    question: "Le SEO est-il inclus ?",
    answer:
      "Oui, chaque projet est optimisé pour les performances, le référencement et l’expérience utilisateur.",
  },
  {
    question: "Puis-je discuter directement sur WhatsApp ?",
    answer:
      "Oui, la communication directe via WhatsApp permet des échanges rapides et efficaces.",
  },
  {
    question: "Le site sera-t-il responsive ?",
    answer:
      "Oui, chaque interface est pensée mobile-first avec une expérience premium sur tous les appareils.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-32"
    >

      {/* BACKGROUND GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_60%)]" />

      {/* SOFT GLOW SPOT */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <div className="mb-24 text-center">

          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.4em] text-black/40">
            FAQ
          </p>

          <h2 className="text-5xl font-black tracking-tight md:text-6xl">
            Questions fréquentes.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-black/60">
            Tout ce que vous devez savoir avant de démarrer votre projet digital premium.
          </p>

        </div>

        {/* FAQ LIST */}
        <div className="mx-auto max-w-4xl space-y-6">

          {faqItems.map((item, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  duration: 0.5,
                  ease,
                }}
                className="group overflow-hidden rounded-[32px] border border-black/10 bg-white/70 backdrop-blur-2xl transition hover:border-black/20 hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
              >

                {/* QUESTION */}
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between p-8 text-left"
                >

                  <h3 className="text-xl font-semibold text-black transition group-hover:translate-x-1">
                    {item.question}
                  </h3>

                  {/* ICON */}
                  <motion.div
                    animate={{
                      rotate: isOpen ? 45 : 0,
                      scale: isOpen ? 1.1 : 1,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white transition group-hover:border-black/20"
                  >
                    <Plus size={18} />
                  </motion.div>

                </button>

                {/* ANSWER */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      transition={{
                        duration: 0.4,
                        ease,
                      }}
                    >

                      <div className="px-8 pb-8">

                        {/* DIVIDER */}
                        <div className="mb-6 h-px w-full bg-gradient-to-r from-transparent via-black/10 to-transparent" />

                        <p className="max-w-3xl leading-relaxed text-black/60">
                          {item.answer}
                        </p>

                      </div>

                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}