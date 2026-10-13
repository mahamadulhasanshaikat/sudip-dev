// src/components/Activities.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Globe2, 
  Compass, 
  MessageSquare, 
  Sparkles, 
  Building2, 
  Award,
  CheckCircle2
} from "lucide-react";
import { activities } from "@/data/portfolio";

const activityMeta = [
  {
    icon: <Globe2 size={18} />,
    domain: "Global Tech Society",
    tag: "Networking & Research",
    accent: "text-blue-600 dark:text-cyan-400",
    bgSoft: "bg-blue-50 dark:bg-blue-950/70",
    borderSoft: "border-blue-200/70 dark:border-blue-900/60",
  },
  {
    icon: <Compass size={18} />,
    domain: "Youth & STEM Leadership",
    tag: "US Embassy & ILEP",
    accent: "text-indigo-600 dark:text-indigo-400",
    bgSoft: "bg-indigo-50 dark:bg-indigo-950/70",
    borderSoft: "border-indigo-200/70 dark:border-indigo-900/60",
  },
  {
    icon: <MessageSquare size={18} />,
    domain: "Diplomacy & Public Speaking",
    tag: "Model United Nations",
    accent: "text-emerald-600 dark:text-emerald-400",
    bgSoft: "bg-emerald-50 dark:bg-emerald-950/70",
    borderSoft: "border-emerald-200/70 dark:border-emerald-900/60",
  },
];

export default function Activities() {
  return (
    <section id="activities" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[320px] bg-linear-to-r from-blue-600/10 via-indigo-500/5 to-cyan-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} />
          <span>Extracurricular Leadership & Community</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Leadership & Activities
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* 3-Column Responsive Balanced Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch">
        {activities.map((act, idx) => {
          const meta = activityMeta[idx % activityMeta.length];

          return (
            <motion.div
              key={act.role}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* TOP CONTENT */}
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className={`p-2.5 rounded-2xl ${meta.bgSoft} ${meta.accent} border ${meta.borderSoft} shadow-2xs group-hover:scale-105 transition-transform`}>
                    {meta.icon}
                  </div>

                  <span className="text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                    {act.period}
                  </span>
                </div>

                {/* Role Title */}
                <h3 className="font-extrabold text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug mb-2">
                  {act.role}
                </h3>

                {/* Organization Pill/Box */}
                <div className="flex items-start gap-1.5 text-xs font-semibold text-blue-600 dark:text-cyan-400 mb-4 min-h-[2rem]">
                  <Building2 size={14} className="shrink-0 mt-0.5" />
                  <span className="leading-snug">{act.organization}</span>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {act.description}
                </p>
              </div>

              {/* BOTTOM FOOTER (Fills empty bottom space meaningfully) */}
              <div className="pt-5 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {meta.domain}
                </span>

                <span className="inline-flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-medium">
                  <CheckCircle2 size={12} />
                  <span>Contributed</span>
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}