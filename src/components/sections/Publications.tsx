// src/components/Publications.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Award, 
  Sparkles 
} from "lucide-react";
import { publications } from "@/data/portfolio";

const paperMeta: Record<number, { tags: string[]; impact: string }> = {
  0: {
    tags: ["SVM", "XGBoost", "Grid Search", "Healthcare"],
    impact: "Oncology diagnostic benchmark using hyperparameter-tuned models.",
  },
  1: {
    tags: ["CNN", "Grad-CAM", "Melanoma", "Explainable AI"],
    impact: "Dual-architecture deep network with clinical interpretability.",
  },
};

export default function Publications() {
  return (
    <section id="research" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background Precision Mesh Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-linear-to-r from-blue-600/10 via-indigo-500/5 to-cyan-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} />
          <span>Scientific Contributions</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          IEEE Publications
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Centered Cards Container (মাঝখান থেকে শুরু হবে) */}
      <div className="flex flex-wrap justify-center gap-6 items-stretch">
        {publications.map((pub, idx) => {
          const meta = paperMeta[idx] || {
            tags: ["Machine Learning", "IEEE Research"],
            impact: "Scientific machine learning research contribution.",
          };

          return (
            <motion.div
              key={pub.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="w-full sm:w-[320px] lg:w-[270px] group relative flex flex-col justify-between p-5 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* TOP SECTION */}
              <div className="space-y-3.5">
                {/* Meta Header */}
                <div className="flex items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800/80">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/70 dark:border-blue-900/50">
                    <Award size={12} className="text-blue-600 dark:text-cyan-400" />
                    <span>IEEE 2025</span>
                  </span>

                  <Link
                    href={pub.link}
                    target="_blank"
                    className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/40 transition-colors"
                    aria-label="View on IEEE Xplore"
                  >
                    <ArrowUpRight size={14} />
                  </Link>
                </div>

                {/* Paper Title */}
                <h3 className="font-extrabold text-sm sm:text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug line-clamp-3 min-h-[3.6rem]">
                  {pub.title}
                </h3>

                {/* Conference Proceedings & DOI */}
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 text-[11px] text-slate-600 dark:text-slate-400 min-h-[4.2rem] flex flex-col justify-between">
                  <p className="line-clamp-2 leading-tight">
                    <span className="font-semibold text-slate-800 dark:text-slate-200">Conf: </span>
                    {pub.conference}
                  </p>
                  <p className="font-mono text-[10px] text-slate-400 dark:text-slate-500 truncate pt-1">
                    DOI: {pub.doi}
                  </p>
                </div>

                {/* Methodology Micro-Pills */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {meta.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[10px] font-mono bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
                    >
                      <span className="w-1 h-1 rounded-full bg-blue-500 dark:bg-cyan-400" />
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* BOTTOM ACTION BAR */}
              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 font-mono text-[10px] text-emerald-600 dark:text-emerald-400 font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified
                </span>

                <Link
                  href={pub.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-600 dark:text-cyan-400 group-hover:underline"
                >
                  <span>Read Paper</span>
                  <ArrowUpRight size={12} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}