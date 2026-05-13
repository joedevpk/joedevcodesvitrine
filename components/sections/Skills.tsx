"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

const SKILLS = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },

  { name: "Python", category: "Backend" },
  { name: "Django", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },

  { name: "GitHub", category: "DevOps" },
];

const categories = ["All", "Frontend", "Backend", "DevOps"];

export default function Skills() {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return SKILLS.filter((s) => {
      const matchCategory = active === "All" || s.category === active;
      const matchSearch = s.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [active, search]);

  return (
    <section className="py-28 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">
            Compétences techniques
          </h2>

          <p className="text-black/60 mt-4 max-w-2xl mx-auto">
            Filtre mes compétences par catégorie ou recherche en temps réel.
          </p>
        </motion.div>

        {/* CONTROLS */}
        <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">

          {/* SEARCH */}
          <input
            type="text"
            placeholder="Rechercher une compétence..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 rounded-xl border border-black/10 
                       bg-white/60 backdrop-blur-md w-full md:w-72
                       focus:outline-none focus:ring-2 focus:ring-black/20"
          />

          {/* FILTERS */}
          <div className="flex gap-2 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm border transition-all
                  ${
                    active === cat
                      ? "bg-black text-white"
                      : "bg-white/60 text-black hover:bg-black hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* COUNT */}
        <p className="text-center text-black/50 mt-6 text-sm">
          {filtered.length} compétence(s) trouvée(s)
        </p>

        {/* GRID */}
        <motion.div
          layout
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          {filtered.map((skill, index) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.03 }}
              whileHover={{
                scale: 1.12,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
              }}
              className="px-5 py-3 rounded-full border border-black/10
                         bg-white/70 backdrop-blur-xl
                         text-sm font-medium text-black
                         hover:bg-black hover:text-white
                         transition-all duration-300
                         cursor-default"
            >
              {skill.name}
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}