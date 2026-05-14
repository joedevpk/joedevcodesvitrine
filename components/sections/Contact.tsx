"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  Send,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  // ✅ TON NUMÉRO WHATSAPP
  const whatsappNumber = "243816172056";

  const sendWhatsApp = () => {
    const text = `
  Bonjour 👋
  Je souhaite discuter d’un projet digital premium.
  Nom : ${name || "Non renseigné"}

  Projet :
  ${message || "Je souhaite créer un site moderne."}
  Merci 🙌
  `;

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.location.href = url;
  };
  

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-black py-32"
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(
              135deg,
              rgba(0,0,0,0.92),
              rgba(0,0,0,0.88)
            ),
            url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop")
          `,
        }}
      />

      {/* GRID */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-white/10 blur-3xl" />

      <div className="container-custom relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24 text-center"
        >

          {/* LABEL */}
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-2 backdrop-blur-xl">

            <Sparkles size={14} className="text-white" />

            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              Contact Premium
            </span>

          </div>

          <h2 className="text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
            Parlons de votre projet.
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-white/60">
            Une expérience simple, rapide et moderne.
            Contact direct via WhatsApp avec réponse rapide.
          </p>

        </motion.div>

        {/* GRID */}
        <div className="grid gap-10 lg:grid-cols-2">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >

            {/* LIGHT */}
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">

              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                WhatsApp Direct
              </p>

              <h3 className="max-w-md text-4xl font-black leading-tight text-white">
                Réponse instantanée & discussion rapide.
              </h3>

              <p className="mt-6 max-w-lg leading-relaxed text-white/60">
                Discutez directement de votre projet digital,
                branding, SaaS ou expérience web premium.
              </p>

              {/* FEATURES */}
              <div className="mt-10 space-y-5">

                {[
                  "Réponse rapide sous 24h",
                  "Discussion simple & professionnelle",
                  "Aucun formulaire compliqué",
                  "Expérience moderne & premium",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4"
                  >

                    <div className="h-2 w-2 rounded-full bg-green-400" />

                    <p className="text-sm text-white/70">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

              {/* CTA */}
              <button
                onClick={sendWhatsApp}
                className="group mt-12 flex items-center gap-4 rounded-full bg-green-500 px-8 py-5 font-semibold text-white transition duration-300 hover:scale-[1.03] hover:bg-green-400"
              >

                <MessageCircle size={20} />

                Discuter sur WhatsApp

                <ArrowUpRight
                  size={18}
                  className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

              </button>

            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative overflow-hidden rounded-[40px] border border-white/10 bg-white/5 p-10 backdrop-blur-2xl"
          >

            {/* GLOW */}
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">

              <p className="mb-8 text-xs font-semibold uppercase tracking-[0.35em] text-white/50">
                Message rapide
              </p>

              <div className="space-y-6">

                {/* NAME */}
                <div className="relative">

                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder=" "
                    className="peer w-full rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none transition duration-300 focus:border-white/30 focus:bg-white/10"
                  />

                  <label className="absolute left-5 top-2 text-xs uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case">

                    Votre nom

                  </label>
                </div>

                {/* MESSAGE */}
                <div className="relative">

                  <textarea
                    rows={7}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder=" "
                    className="peer w-full resize-none rounded-2xl border border-white/10 bg-white/5 p-5 text-white outline-none transition duration-300 focus:border-white/30 focus:bg-white/10"
                  />

                  <label className="absolute left-5 top-2 text-xs uppercase tracking-[0.2em] text-white/40 transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-sm peer-placeholder-shown:normal-case">

                    Décrivez votre projet

                  </label>
                </div>

                {/* BUTTON */}
                <button
                  onClick={sendWhatsApp}
                  className="group relative flex w-full items-center justify-center gap-4 overflow-hidden rounded-full bg-white py-5 font-semibold text-black transition duration-300 hover:scale-[1.02]"
                >

                  <span className="relative z-10 flex items-center gap-3">

                    Envoyer sur WhatsApp

                    <Send
                      size={18}
                      className="transition duration-300 group-hover:translate-x-1"
                    />

                  </span>

                  {/* HOVER LIGHT */}
                  <div className="absolute inset-0 -translate-x-full bg-black/5 transition duration-700 group-hover:translate-x-0" />

                </button>

                {/* SMALL TEXT */}
                <p className="text-center text-sm text-white/40">
                  Aucun email requis • Conversation directe • ⭐⭐⭐⭐⭐
                </p>

              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
