"use client";

import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

const navItems = [
  { label: "Accueil", id: "home" },
  { label: "À propos", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projets", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Footer() {
  const router = useRouter();

  // SCROLL SMOOTH (sections page)
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="relative overflow-hidden border-t border-black/10 bg-white">

      {/* BACKGROUND PREMIUM */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-[0.12]"
        style={{
          backgroundImage: `
            linear-gradient(135deg, rgba(0,0,0,0.94), rgba(15,15,15,0.90)),
            url("https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2400&auto=format&fit=crop")
          `,
        }}
      />

      {/* GRID EFFECT */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, black 1px, transparent 1px),
            linear-gradient(to bottom, black 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* GLOW */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-black/[0.03] blur-3xl" />

      <div className="relative z-10 container-custom py-24">

        {/* TOP GRID */}
        <div className="grid gap-6 md:grid-cols-4">

          {/* BRAND */}
          <div className="rounded-[32px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-2xl">

            <div className="mb-6 flex items-center gap-2">
              <div className="h-3 w-3 rounded-full bg-black" />
              <div className="h-3 w-3 rounded-full border border-black/20" />
              <div className="h-3 w-3 rounded-full border border-black/20" />
            </div>

            <h2 className="text-2xl font-black tracking-tight">
              JOE DEV CODES
            </h2>

            <p className="mt-6 text-sm leading-relaxed text-black/60">
              Création d’expériences digitales premium, sites vitrines modernes
              et interfaces performantes pour marques ambitieuses.
            </p>
          </div>

          {/* NAVIGATION */}
          <div className="rounded-[32px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl">

            <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-black/40">
              Navigation
            </h3>

            <ul className="space-y-4 text-sm text-black/60">

              {navItems.map((item) => (
                <li key={item.id}>

                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="group flex items-center gap-2 transition hover:translate-x-1 hover:text-black"
                  >
                    {item.label}

                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition group-hover:opacity-100"
                    />
                  </button>

                </li>
              ))}

            </ul>
          </div>

          {/* SERVICES */}
          <div className="rounded-[32px] border border-black/10 bg-white/70 p-8 backdrop-blur-2xl">

            <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-black/40">
              Services
            </h3>

            <ul className="space-y-4 text-sm text-black/60">
              <li>Sites vitrines premium</li>
              <li>Applications web</li>
              <li>UI/UX Design</li>
              <li>SEO & Performance</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="relative overflow-hidden rounded-[32px] border border-black/10 bg-black p-8 text-white">

            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="relative z-10">

              <h3 className="mb-8 text-[11px] font-semibold uppercase tracking-[0.35em] text-white/50">
                Collaboration
              </h3>

              <p className="text-sm text-white/70">
                Construisons ensemble une expérience digitale moderne et performante.
              </p>

              <button
                onClick={() => scrollToSection("contact")}
                className="group mt-8 flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-black transition hover:scale-[1.03]"
              >
                Démarrer un projet

                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>

            </div>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 rounded-[32px] border border-black/10 bg-white/70 p-6 backdrop-blur-2xl">

          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <p className="text-sm text-black/50">
              © 2026 Joe Dev Codes — Tous droits réservés.
            </p>

            <div className="flex gap-8 text-sm text-black/50">

              {/* LEGAL LINKS (FIXED) */}
              <button
                onClick={() => router.push("/mentions-legales")}
                className="hover:text-black"
              >
                Mentions légales
              </button>

              <button
                onClick={() => router.push("/confidentialite")}
                className="hover:text-black"
              >
                Confidentialité
              </button>

            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}