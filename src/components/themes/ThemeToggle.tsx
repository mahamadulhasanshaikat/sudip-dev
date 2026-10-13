// src/components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { motion } from "framer-motion";

const themeOptions = [
  { key: "light", label: "Light", icon: Sun },
  { key: "system", label: "System", icon: Monitor },
  { key: "dark", label: "Dark", icon: Moon },
];

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-24 h-8 rounded-full bg-slate-100 dark:bg-slate-800 animate-pulse" />;
  }

  // ডিফল্ট থিম হিসেবে 'system' নির্ধারণ
  const currentTheme = theme || "system";

  return (
    <div className="inline-flex items-center p-1 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/80 dark:border-slate-700/80 shadow-2xs backdrop-blur-md">
      {themeOptions.map(({ key, label, icon: Icon }) => {
        const isActive = currentTheme === key;

        return (
          <button
            key={key}
            type="button"
            onClick={() => setTheme(key)}
            className={`relative p-1.5 rounded-full transition-colors cursor-pointer ${
              isActive
                ? "text-blue-600 dark:text-cyan-400"
                : "text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
            }`}
            title={`${label} Mode`}
            aria-label={`${label} Mode`}
          >
            {isActive && (
              <motion.span
                layoutId="activeThemePill"
                className="absolute inset-0 rounded-full bg-white dark:bg-slate-900 shadow-xs border border-slate-200/60 dark:border-slate-700/60"
                transition={{ type: "spring", stiffness: 480, damping: 32 }}
              />
            )}
            <span className="relative z-10 block">
              <Icon size={14} />
            </span>
          </button>
        );
      })}
    </div>
  );
}