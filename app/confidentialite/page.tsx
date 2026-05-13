"use client";

import { motion } from "framer-motion";
import {
  Shield,
  Database,
  Lock,
  Cookie,
  Mail,
  Eye,
  FileText,
} from "lucide-react";

const sections = [
  {
    icon: Database,
    title: "Collecte des données",
    text: `Nous collectons uniquement les informations strictement nécessaires dans le cadre de nos échanges professionnels via le formulaire de contact, à savoir : nom, adresse email et message.

Ces données sont fournies volontairement par l’utilisateur afin de permettre la prise de contact et la gestion des demandes liées à un projet digital. Aucune donnée sensible, bancaire ou médicale n’est demandée.`,
  },
  {
    icon: Shield,
    title: "Finalité de l’utilisation",
    text: `Les données collectées sont utilisées exclusivement pour assurer la communication entre l’utilisateur et l’éditeur du site.

Elles servent uniquement à répondre aux demandes envoyées via le formulaire de contact. Aucune utilisation commerciale, revente ou partage à des tiers n’est effectuée.`,
  },
  {
    icon: Lock,
    title: "Sécurité et stockage",
    text: `Les données sont stockées dans un environnement sécurisé et protégé contre tout accès non autorisé.

Des mesures techniques et organisationnelles sont mises en place afin de garantir leur confidentialité. Elles sont conservées uniquement pendant la durée nécessaire au traitement de la demande, puis supprimées de manière sécurisée.`,
  },
  {
    icon: Eye,
    title: "Confidentialité",
    text: `Toutes les informations transmises via ce site sont traitées de manière strictement confidentielle.

L’accès aux données est limité à l’éditeur du site. Aucun tiers externe ne peut consulter, exploiter ou modifier ces informations.`,
  },
  {
    icon: Cookie,
    title: "Cookies",
    text: `Le site peut utiliser des cookies strictement techniques afin d’assurer son bon fonctionnement et d’améliorer l’expérience utilisateur.

Ces cookies ne permettent pas l’identification personnelle de l’utilisateur. Aucun cookie publicitaire intrusif n’est utilisé.`,
  },
  {
    icon: Mail,
    title: "Contact",
    text: `Pour toute question relative à vos données personnelles, leur utilisation ou leur suppression, vous pouvez contacter l’éditeur du site à l’adresse suivante : contact@joedev.codes.

Toute demande est traitée dans un délai raisonnable.`,
  },
];

export default function Confidentialite() {
  return (
    <section className="relative overflow-hidden bg-white py-32">

      {/* 🌄 BACKGROUND IMAGE PREMIUM */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.08]"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2000&auto=format&fit=crop')",
        }}
      />

      {/* OVERLAY LAYER */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/97 to-white" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.05),transparent_65%)]" />

      <div className="container-custom relative z-10 max-w-4xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/70 px-5 py-2 backdrop-blur-xl">
            <FileText size={14} />
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-black/50">
              Confidentialité
            </span>
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight md:text-6xl">
            Politique de confidentialité
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-black/60">
            Nous accordons une importance essentielle à la protection de vos données personnelles.
            Cette politique explique de manière claire, transparente et accessible comment vos données
            sont collectées, utilisées et protégées.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="mt-20 space-y-6">

          {sections.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_90px_rgba(0,0,0,0.10)]"
              >

                {/* ICON */}
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-black text-white transition group-hover:scale-110">
                  <Icon size={20} />
                </div>

                {/* TITLE */}
                <h2 className="text-xl font-semibold text-black">
                  {item.title}
                </h2>

                {/* TEXT */}
                <p className="mt-4 whitespace-pre-line leading-relaxed text-black/60">
                  {item.text}
                </p>

                {/* GLOW EFFECT */}
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">
                  <div className="absolute -bottom-10 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-black/5 blur-3xl" />
                </div>

              </motion.div>
            );
          })}

        </div>

        {/* FOOTER NOTE */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-20 text-center text-sm text-black/40"
        >
          Dernière mise à jour : 2026 • Conforme RGPD et bonnes pratiques de protection des données
        </motion.div>

      </div>
    </section>
  );
}