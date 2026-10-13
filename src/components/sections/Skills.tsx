// src/components/Skills.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Terminal, 
  Layers, 
  Database, 
  Cpu, 
  Sparkles,
  CheckCircle2,
  Code2
} from "lucide-react";
import { skillsCategories } from "@/data/portfolio";

const categoryConfig = [
  {
    icon: <Terminal size={17} />,
    accent: "from-blue-600 to-cyan-500",
    badgeBg: "bg-blue-50 dark:bg-blue-950/70",
    badgeText: "text-blue-600 dark:text-cyan-400",
    badgeBorder: "border-blue-200/70 dark:border-blue-900/60",
    subtitle: "Core Programming & Scripts",
  },
  {
    icon: <Layers size={17} />,
    accent: "from-indigo-600 to-purple-500",
    badgeBg: "bg-indigo-50 dark:bg-indigo-950/70",
    badgeText: "text-indigo-600 dark:text-indigo-400",
    badgeBorder: "border-indigo-200/70 dark:border-indigo-900/60",
    subtitle: "Full-Stack & Mobile Frameworks",
  },
  {
    icon: <Database size={17} />,
    accent: "from-emerald-600 to-teal-500",
    badgeBg: "bg-emerald-50 dark:bg-emerald-950/70",
    badgeText: "text-emerald-600 dark:text-emerald-400",
    badgeBorder: "border-emerald-200/70 dark:border-emerald-900/60",
    subtitle: "Storage, RDBMS & DevOps",
  },
  {
    icon: <Cpu size={17} />,
    accent: "from-amber-600 to-orange-500",
    badgeBg: "bg-amber-50 dark:bg-amber-950/70",
    badgeText: "text-amber-600 dark:text-amber-400",
    badgeBorder: "border-amber-200/70 dark:border-amber-900/60",
    subtitle: "Enterprise Architecture & ML",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background Precision Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-linear-to-r from-blue-600/10 via-indigo-500/5 to-cyan-400/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} />
          <span>Core Capabilities & Tech Stack</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Technical Arsenal
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* 4 Balanced Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillsCategories.map((cat, idx) => {
          const cfg = categoryConfig[idx % categoryConfig.length];

          return (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Top Details */}
              <div>
                {/* Header Icon & Count Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-2.5 rounded-2xl ${cfg.badgeBg} ${cfg.badgeText} border ${cfg.badgeBorder} shadow-2xs group-hover:scale-105 transition-transform`}>
                    {cfg.icon}
                  </div>
                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                    {cat.skills.length} tools
                  </span>
                </div>

                {/* Title & Domain Subtitle */}
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                  {cat.title}
                </h3>
                <p className="text-[11px] font-medium text-slate-400 dark:text-slate-500 mb-5">
                  {cfg.subtitle}
                </p>

                {/* Tech Pills (Tight, Clean Micro-Pills) */}
                <div className="flex flex-wrap gap-1.5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-slate-50 dark:bg-slate-950/70 text-slate-700 dark:text-slate-300 border border-slate-200/70 dark:border-slate-800 hover:border-blue-400 dark:hover:border-cyan-400/60 hover:bg-white dark:hover:bg-slate-800/90 hover:text-blue-600 dark:hover:text-cyan-300 transition-all cursor-default"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 dark:bg-cyan-400/80" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Clean Status Strip */}
              <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400 dark:text-slate-500">
                <span className="flex items-center gap-1">
                  <Code2 size={12} className="text-slate-400" />
                  <span>Production Stack</span>
                </span>
                <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  Verified
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}