"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { label: "Accueil", id: "home" },
  { label: "À propos", id: "about" },
  { label: "Services", id: "services" },
  { label: "Projets", id: "projects" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // SCROLL SPY
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPos = window.scrollY + 140;

      for (const item of navItems) {
        const section = document.getElementById(item.id);

        if (!section) continue;

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          setActive(item.id);
          break;
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // SMOOTH SCROLL
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const yOffset = -100;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-black/75 backdrop-blur-2xl"
            : "bg-transparent"
        }`}
      >
        <nav className="container-custom flex items-center justify-between py-5">

          {/* LOGO */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative"
          >
            <div className="absolute inset-0 rounded-full bg-white/10 blur-xl opacity-0 transition duration-500 group-hover:opacity-100" />

            <div className="relative flex items-center gap-3">

              <div className="h-3 w-3 rounded-full bg-white animate-pulse" />

              <div>


                <div className="flex items-center gap-3">

                   {/* AVATAR */}
                   <div className="relative h-9 w-9 overflow-hidden rounded-full border border-white/20">

                     <img
                       src="/images/profilee.jpg"
                       alt="Joe Dev"
                       className="h-full w-full object-cover"
                      />

                    </div>

                   {/* TEXT */}
                   <div className="leading-tight">

                     <h1 className="text-sm font-black tracking-[0.15em] text-white">
                         JOE DEV CODES
                     </h1>
                   </div>

                 </div>

                <p className="text-[10px] uppercase tracking-[0.35em] text-white/40">
                  Digital Studio
                </p>
              </div>

            </div>
          </button>

          {/* DESKTOP MENU */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-3 backdrop-blur-2xl">

              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`relative rounded-full px-5 py-3 text-sm font-medium transition-all duration-300 ${
                      active === item.id
                        ? "text-black"
                        : "text-white/60 hover:text-white"
                    }`}
                  >

                    {/* ACTIVE BG */}
                    {active === item.id && (
                      <motion.div
                        layoutId="navbar-active"
                        className="absolute inset-0 rounded-full bg-white"
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 30,
                        }}
                      />
                    )}

                    <span className="relative z-10">
                      {item.label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* CTA */}
            <button
              onClick={() => scrollToSection("contact")}
              className="group hidden items-center gap-3 rounded-full border border-white/10 bg-white px-6 py-3 text-sm font-semibold text-black transition duration-300 hover:scale-[1.03] md:flex"
            >

              Démarrer un projet

              <ArrowUpRight
                size={16}
                className="transition duration-300 group-hover:rotate-45"
              />

            </button>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white backdrop-blur-xl transition hover:bg-white/10 md:hidden"
            >
              <Menu size={22} />
            </button>

          </div>

        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md"
            />

            {/* PANEL */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
              }}
              className="fixed right-0 top-0 z-50 h-full w-[88%] overflow-hidden border-l border-white/10 bg-black p-6 text-white"
            >

              {/* BG GLOW */}
              <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-white/10 blur-3xl" />

              {/* HEADER */}
              <div className="relative mb-10 flex items-center justify-between border-b border-white/10 pb-5">

                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                    Navigation
                  </p>

                  <h2 className="mt-2 text-xl font-bold">
                    Menu
                  </h2>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:bg-white/10"
                >
                  <X size={20} />
                </button>

              </div>

              {/* MENU ITEMS */}
              <div className="relative flex flex-col gap-4">

                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    onClick={() => scrollToSection(item.id)}
                    className={`group relative overflow-hidden rounded-[28px] border p-6 text-left transition-all duration-300 ${
                      active === item.id
                        ? "border-white bg-white text-black"
                        : "border-white/10 bg-white/[0.03] text-white hover:border-white/30"
                    }`}
                  >

                    {/* NUMBER */}
                    <span
                      className={`absolute right-5 top-5 text-xs tracking-[0.2em] ${
                        active === item.id
                          ? "text-black/40"
                          : "text-white/30"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* LABEL */}
                    <div className="flex items-center justify-between">

                      <div>

                        <p
                          className={`text-lg font-semibold ${
                            active === item.id
                              ? "text-black"
                              : "text-white"
                          }`}
                        >
                          {item.label}
                        </p>

                        <div
                          className={`mt-3 h-[2px] transition-all duration-500 ${
                            active === item.id
                              ? "w-full bg-black"
                              : "w-0 bg-white group-hover:w-full"
                          }`}
                        />

                      </div>

                      <ArrowUpRight
                        size={20}
                        className={`transition duration-300 group-hover:rotate-45 ${
                          active === item.id
                            ? "text-black"
                            : "text-white/60"
                        }`}
                      />

                    </div>

                  </motion.button>
                ))}

              </div>

              {/* FOOTER */}
              <div className="absolute bottom-8 left-6 right-6 rounded-3xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-xl">

                <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                  Studio Digital Premium
                </p>

                <div className="mt-3 flex items-center justify-between">

                  <p className="text-sm text-white/70">
                    © 2026 Joe Dev Codes
                  </p>

                  <div className="h-2 w-2 rounded-full bg-white animate-pulse" />

                </div>

              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}