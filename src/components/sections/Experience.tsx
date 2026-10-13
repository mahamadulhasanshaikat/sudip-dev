// src/components/Experience.tsx
"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, 
  GraduationCap, 
  Award, 
  Calendar, 
  Building2, 
  BookOpen, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";
import { experiences, personalInfo } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 max-w-6xl mx-auto relative">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3">
          <Sparkles size={12} />
          <span>Track Record & Milestones</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Experience & Education
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        
        {/* ================= LEFT COLUMN: WORK EXPERIENCE (7 Cols) ================= */}
        <div className="lg:col-span-7 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                <Briefcase size={18} />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Professional Experience
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Engineering</span>
          </div>

          {/* Connected Timeline */}
          <div className="pt-2">
            {experiences.map((exp, idx) => {
              const isLast = idx === experiences.length - 1;

              return (
                <div key={idx} className="flex gap-4 sm:gap-6 group">
                  {/* Timeline Node + Connector Column */}
                  <div className="flex flex-col items-center">
                    {/* Glowing Pulse Node */}
                    <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-900 border-2 border-blue-600 dark:border-cyan-400 shadow-md shadow-blue-500/20 shrink-0 z-10 group-hover:scale-110 transition-transform">
                      <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-cyan-400" />
                      <span className="absolute -inset-1 rounded-full bg-blue-500/20 dark:bg-cyan-400/20 animate-ping opacity-75 group-hover:block" />
                    </div>

                    {/* Connecting Line */}
                    {!isLast && (
                      <div className="w-0.5 flex-1 bg-linear-to-b from-blue-600 via-cyan-400/40 to-slate-200 dark:to-slate-800 my-1 rounded-full" />
                    )}
                  </div>

                  {/* Experience Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className={`flex-1 ${isLast ? "pb-0" : "pb-8"}`}
                  >
                    <div className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 hover:border-blue-500/40 dark:hover:border-blue-500/40 backdrop-blur-xl transition-all">
                      
                      {/* Header */}
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h4 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                            {exp.role}
                          </h4>
                          <div className="flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                            <Building2 size={14} className="shrink-0" />
                            <span>{exp.company}</span>
                          </div>
                        </div>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60 shrink-0">
                          <Calendar size={12} className="text-slate-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2.5 my-5">
                        {(exp.highlights || exp.details).map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                            <div className="mt-1 text-blue-500 shrink-0">
                              <CheckCircle2 size={14} />
                            </div>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-slate-100/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/50 hover:bg-blue-50 dark:hover:bg-blue-950/50 hover:text-blue-600 dark:hover:text-cyan-300 transition-colors"
                          >
                            {s}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================= RIGHT COLUMN: EDUCATION (5 Cols) ================= */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80 dark:border-slate-800/80">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20">
                <GraduationCap size={18} />
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white">
                Academic Foundation
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">Credentials</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 backdrop-blur-xl relative overflow-hidden space-y-6"
          >
            {/* Ambient Corner Flare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-xl pointer-events-none" />

            {/* University & Degree */}
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-900/50 mb-2.5">
                {personalInfo.education.period}
              </div>
              <h4 className="font-extrabold text-lg text-slate-900 dark:text-white leading-snug">
                {personalInfo.education.degree}
              </h4>
              <p className="text-sm font-bold text-blue-600 dark:text-cyan-400 mt-1">
                {personalInfo.education.institution}
              </p>
            </div>

            {/* CGPA Clean Executive Block */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Cumulative Grade Point (CGPA)
                </span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-3xl font-black bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
                    {personalInfo.education.cgpa.split(" ")[0]}
                  </span>
                  <span className="text-xs font-mono text-slate-400">/ 4.00</span>
                </div>
              </div>

              <div className="p-2.5 rounded-xl bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400">
                <Award size={22} />
              </div>
            </div>

            {/* Academic Honor Badge */}
            <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/70 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-300">
              <Award size={18} className="shrink-0 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-semibold">
                {personalInfo.education.honors}
              </span>
            </div>

            {/* Undergraduate Research Thesis */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 dark:text-white">
                <BookOpen size={14} className="text-blue-500" />
                <span>B.Sc. Capstone Research</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed italic bg-slate-50/80 dark:bg-slate-950/40 p-3 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                &ldquo;Machine Learning for Breast Cancer Classification: A Comparative Study of Grid Search-Optimized SVM, Random Forest, and XGBoost&rdquo;
              </p>
            </div>

            {/* Key Focus Subjects */}
            <div className="pt-2">
              <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Core Domains
              </span>
              <div className="flex flex-wrap gap-1.5">
                {["Algorithms", "Data Structures", "System Design", "Microservices", "Machine Learning"].map((item) => (
                  <span
                    key={item}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}