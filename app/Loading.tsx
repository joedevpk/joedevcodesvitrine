"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  cubicBezier,
} from "framer-motion";

const ease = cubicBezier(0.22, 1, 0.36, 1);

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // bloque le scroll pendant le loader
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsVisible(false);
      document.body.style.overflow = "auto";
    }, 2200);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.05,
            filter: "blur(12px)",
          }}
          transition={{
            duration: 1,
            ease,
          }}
          className="fixed inset-0 z-[9999] overflow-hidden bg-black"
        >

          {/* BACKGROUND IMAGE */}
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: `
                url("https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop")
              `,
            }}
          />

          {/* DARK OVERLAY */}
          <div className="absolute inset-0 bg-black/70" />

          {/* GRID */}
          <div
            className="absolute inset-0 opacity-[0.05]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* GLOW */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
          />

          {/* CONTENT */}
          <div className="relative z-10 flex h-full flex-col items-center justify-center">

            {/* LOGO */}
            <motion.div
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className="relative"
            >

              {/* RING */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-20px] rounded-full border border-white/10"
              />

              {/* CENTER */}
              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-3xl">

                {/* INNER GLOW */}
                <div className="absolute inset-0 rounded-full bg-white/5 blur-2xl" />

                {/* LOGO TEXT */}
                <motion.h1
                  animate={{
                    opacity: [0.6, 1, 0.6],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="relative text-lg font-black tracking-[0.35em] text-white"
                >
                  JDC
                </motion.h1>

              </div>
            </motion.div>

            {/* LOADING BAR */}
            <div className="mt-16 h-[2px] w-[220px] overflow-hidden rounded-full bg-white/10">

              <motion.div
                initial={{
                  x: "-100%",
                }}
                animate={{
                  x: "100%",
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="h-full w-1/2 bg-white"
              />

            </div>

            {/* TEXT */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 1,
                ease,
              }}
              className="mt-10 text-center"
            >

              <p className="text-xs font-semibold uppercase tracking-[0.45em] text-white/40">
                Loading Experience
              </p>

              <motion.p
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="mt-4 text-sm text-white/60"
              >
                Initialisation de l’interface premium...
              </motion.p>

            </motion.div>

          </div>

          {/* BOTTOM SIGNATURE */}
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 1,
            }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >

            <p className="text-[10px] uppercase tracking-[0.35em] text-white/25">
              Joe Dev Codes — Digital Experience
            </p>

          </motion.div>

        </motion.div>
      )}
    </AnimatePresence>
  );
}