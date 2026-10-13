// src/components/Projects.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ArrowUpRight,
  Code2,
  ChevronDown,
  ChevronUp
} from "lucide-react";
import { projects } from "@/data/portfolio";

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

const INITIAL_DISPLAY_COUNT = 4;

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = showAll ? projects : projects.slice(0, INITIAL_DISPLAY_COUNT);
  const hasMore = projects.length > INITIAL_DISPLAY_COUNT;

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background Precision Ambient Mesh */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[350px] bg-linear-to-r from-blue-600/10 via-indigo-500/5 to-cyan-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} />
          <span>Selected Engineering Works</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Featured Projects
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Responsive Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((proj, idx) => (
            <motion.div
              key={proj.title}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="group relative flex flex-col justify-between p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Card Content Top */}
              <div>
                {/* Card Meta Header */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-cyan-300 border border-blue-200/70 dark:border-blue-900/50">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
                      {proj.category}
                    </span>

                    {proj.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-amber-600 dark:text-amber-400 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/40">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Action Links (GitHub + External) */}
                  <div className="flex items-center gap-1.5">
                    <Link
                      href={proj.github || proj.link}
                      target="_blank"
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:border-blue-500/40 transition-all"
                      aria-label="View Code"
                    >
                      <GithubIcon size={15} />
                    </Link>

                    <Link
                      href={proj.link}
                      target="_blank"
                      className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/40 transition-all"
                      aria-label="Live Demo"
                    >
                      <ArrowUpRight size={15} />
                    </Link>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-lg sm:text-xl text-slate-900 dark:text-white mb-2.5 group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                  {proj.description}
                </p>
              </div>

              {/* Bottom Tech Pills & Footer */}
              <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 space-y-4">
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-950/40 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Card Action Indicator */}
                <div className="flex items-center justify-between text-xs font-mono text-slate-400 dark:text-slate-500 pt-1">
                  <span className="flex items-center gap-1.5">
                    <Code2 size={13} className="text-slate-400" />
                    <span>Production Ready</span>
                  </span>

                  <Link
                    href={proj.link}
                    target="_blank"
                    className="font-semibold text-blue-600 dark:text-cyan-400 group-hover:underline inline-flex items-center gap-0.5"
                  >
                    <span>Explore Repository</span>
                    <ArrowUpRight size={13} />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* "See More / View All" Toggle Button */}
      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-cyan-400/50 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 text-xs sm:text-sm font-semibold shadow-md shadow-black/3 backdrop-blur-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>
              {showAll ? "Show Less" : `View All Projects (${projects.length})`}
            </span>
            {showAll ? (
              <ChevronUp size={16} className="group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>
        </div>
      )}
    </section>
  );
}