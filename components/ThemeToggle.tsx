"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="
        px-4 py-2 rounded-xl
        border border-gray-300 dark:border-gray-700
        text-sm font-medium
        bg-white dark:bg-black
        text-black dark:text-white
        transition
      "
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}