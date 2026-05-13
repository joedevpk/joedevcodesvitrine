"use client";

import { useEffect, useState } from "react";

import {
  AnimatePresence,
  motion,
  cubicBezier,
} from "framer-motion";

const ease = cubicBezier(0.22, 1, 0.36, 1);

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const html = document.documentElement;

    html.style.overflow = "hidden";

    let current = 0;

    const progressInterval = setInterval(() => {
      current += Math.random() * 18;

      if (current >= 100) {
        current = 100;
        clearInterval(progressInterval);
      }

      setProgress(current);
    }, 120);

    const timer = setTimeout(() => {
      setIsVisible(false);
      html.style.overflow = "auto";
    }, 2300);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
      html.style.overflow = "auto";
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
            filter: "blur(10px)",
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="fixed inset-0 z-[999999] flex items-center justify-center overflow-hidden bg-black"
        >

          <div className="absolute inset-0">

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.15, 0.3, 0.15],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl"
            />

          </div>

          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(to right, white 1px, transparent 1px),
                linear-gradient(to bottom, white 1px, transparent 1px)
              `,
              backgroundSize: "70px 70px",
            }}
          />

          <div className="relative flex flex-col items-center">

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
                ease,
              }}
              className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 backdrop-blur-2xl"
            >

              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-10px] rounded-full border border-white/10"
              />

              <motion.h1
                animate={{
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="text-xl font-black tracking-[0.4em] text-white"
              >
                JDC
              </motion.h1>

            </motion.div>

            <motion.p
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
              className="mt-10 text-[11px] uppercase tracking-[0.45em] text-white/40"
            >
              Loading Experience
            </motion.p>

            <div className="mt-6 h-[2px] w-[240px] overflow-hidden rounded-full bg-white/10">

              <motion.div
                animate={{
                  width: `${progress}%`,
                }}
                transition={{
                  ease: "easeOut",
                }}
                className="h-full bg-white"
              />

            </div>

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              className="mt-4 text-xs text-white/40"
            >
              {Math.floor(progress)}%
            </motion.p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
