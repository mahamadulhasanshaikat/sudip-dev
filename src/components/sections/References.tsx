// src/components/References.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Languages, 
  GraduationCap, 
  Mail, 
  Phone, 
  Sparkles, 
  CheckCircle2, 
  Building2,
  Copy,
  Check,
  Award,
  Globe2
} from "lucide-react";
import { languages, references } from "@/data/portfolio";

export default function LanguagesReferences() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  };

  return (
    <section id="endorsements" className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* Background Precision Ambient Mesh Glow with pulse */}
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[380px] bg-linear-to-r from-blue-600/15 via-indigo-500/10 to-cyan-400/15 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Section Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} className="animate-pulse" />
          <span>Communication & Academic Endorsements</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Languages & References
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </motion.div>

      {/* Bento Grid Layout (5:7 Ratio) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
        
        {/* ================= LEFT COLUMN: LANGUAGE PROFICIENCY (5 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -4 }}
          className="lg:col-span-5 flex flex-col justify-between p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300 group"
        >
          <div>
            {/* Header */}
            <div className="flex items-center justify-between pb-3 mb-6 border-b border-slate-100 dark:border-slate-800/80">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-2xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50 group-hover:rotate-6 transition-transform">
                  <Languages size={18} />
                </div>
                <div>
                  <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                    Language Skills
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">Global Communication</p>
                </div>
              </div>

              <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-slate-700/60">
                2 Languages
              </span>
            </div>

            {/* Language Cards */}
            <div className="space-y-4">
              
              {/* Bengali Card */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 hover:border-emerald-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 font-bold text-xs flex items-center justify-center">
                      অ
                    </span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">Bengali</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/60">
                    Native / Primary
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                  First language — natural fluency across engineering, technical, and academic discourse.
                </p>
              </motion.div>

              {/* English Card */}
              <motion.div 
                whileHover={{ scale: 1.01 }}
                className="p-4 rounded-2xl bg-slate-50/80 dark:bg-slate-950/60 border border-slate-200/70 dark:border-slate-800/70 hover:border-blue-500/40 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-600 dark:text-cyan-400 font-bold text-xs flex items-center justify-center">
                      EN
                    </span>
                    <span className="font-bold text-sm text-slate-900 dark:text-white">English</span>
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/60">
                    CEFR C1 Advanced
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed mb-3">
                  Professional working proficiency across global enterprise teams and international scientific research.
                </p>
                
                {/* Micro Sub-skill breakdown pills */}
                <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-slate-200/60 dark:border-slate-800/60">
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Listening: C1
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Reading: C1
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                    Speaking: B2
                  </span>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Bottom Verification Footer */}
          <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="flex items-center gap-1.5">
              <Globe2 size={13} className="text-slate-400" />
              <span>International Standard</span>
            </span>
            <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1">
              <CheckCircle2 size={12} />
              Verified Fluency
            </span>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: ACADEMIC REFERENCES (7 Cols) ================= */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-5">
          {references.map((ref, idx) => {
            const initials = ref.name
              .split(" ")
              .filter((n) => !n.includes("."))
              .map((n) => n[0])
              .join("")
              .slice(0, 2)
              .toUpperCase();

            return (
              <motion.div
                key={ref.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.12 }}
                whileHover={{ y: -4 }}
                className="group relative flex-1 flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md hover:shadow-xl hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl transition-all duration-300"
              >
                {/* Reference Details */}
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-3.5">
                      {/* Avatar Initials Badge */}
                      <div className="w-11 h-11 rounded-2xl bg-linear-to-tr from-blue-600 via-indigo-600 to-cyan-400 text-white font-black text-sm flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0 group-hover:scale-105 transition-transform">
                        {initials || "SEU"}
                      </div>
                      
                      <div>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                          {ref.name}
                        </h4>
                        <p className="text-xs sm:text-sm font-semibold text-blue-600 dark:text-cyan-400 mt-0.5">
                          {ref.designation}
                        </p>
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono font-medium bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/50">
                      <GraduationCap size={13} />
                      Academic Mentor
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-4 pl-0.5">
                    <Building2 size={14} className="shrink-0 text-slate-400" />
                    <span>{ref.department}, {ref.institution}</span>
                  </div>
                </div>

                {/* Direct Action Contacts Bar */}
                <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  {/* Email with Click-to-Copy Tooltip */}
                  <div className="flex items-center gap-2">
                    <Link
                      href={`mailto:${ref.email}`}
                      className="inline-flex items-center gap-1.5 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                    >
                      <Mail size={13} className="text-blue-500" />
                      <span>{ref.email}</span>
                    </Link>

                    <button
                      onClick={() => handleCopy(ref.email)}
                      className="p-1 rounded-md text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                      title="Copy Email"
                    >
                      {copiedEmail === ref.email ? (
                        <Check size={12} className="text-emerald-500" />
                      ) : (
                        <Copy size={12} />
                      )}
                    </button>
                  </div>

                  {/* Phone CTA or Direct Status */}
                  {ref.phone ? (
                    <Link
                      href={`tel:${ref.phone}`}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 transition-colors"
                    >
                      <Phone size={12} className="text-emerald-500" />
                      <span>{ref.phone}</span>
                    </Link>
                  ) : (
                    <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500 px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-950">
                      Office / Dept. Direct
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}