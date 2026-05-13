"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

export default function PageWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 24, filter: "blur(12px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ opacity: 0, y: -24, filter: "blur(12px)" }}
        transition={{
          duration: 0.55,
          ease: [0.22, 1, 0.36, 1], // easing type "Apple-like"
        }}
        className="will-change-transform"
      >
        {children}
      </motion.main>
    </AnimatePresence>
  );
}