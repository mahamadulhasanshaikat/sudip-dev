// src/components/Certifications.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Award, 
  ArrowUpRight, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck,
  Building2
} from "lucide-react";
import { certifications } from "@/data/portfolio";

// Platform specific metadata for badges
const issuerTags: Record<string, string> = {
  "IBM SkillsBuild": "IBM",
  "Duke University (Coursera)": "Coursera",
  "Cisco Networking Academy": "Cisco",
  "Pantech Prolabs India": "Pantech",
  "Great Learning Academy": "Great Learning",
  "LinkedIn Learning": "LinkedIn",
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 max-w-6xl mx-auto relative">
      {/* Background Precision Ambient Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-linear-to-r from-blue-600/10 via-indigo-500/5 to-cyan-400/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} />
          <span>Professional Credentials</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Certifications & Badges
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* 3-Column Responsive Balanced Bento Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {certifications.map((cert, idx) => {
          const platform = issuerTags[cert.issuer] || "Verified";

          return (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06 }}
              className="group relative flex flex-col justify-between p-6 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-md shadow-black/3 hover:border-blue-500/40 dark:hover:border-cyan-400/40 backdrop-blur-xl hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
            >
              {/* Top Section */}
              <div>
                {/* Meta Bar */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="p-2 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50 group-hover:scale-105 transition-transform">
                      <ShieldCheck size={16} />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
                      {platform}
                    </span>
                  </div>

                  <span className="text-[11px] font-mono text-slate-400 dark:text-slate-500">
                    {cert.year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-extrabold text-base text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors leading-snug line-clamp-2 min-h-[2.75rem] mb-2">
                  {cert.title}
                </h3>

                {/* Issuer with subtle styling */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mb-5">
                  <Building2 size={13} className="shrink-0 text-slate-400" />
                  <span className="truncate">{cert.issuer}</span>
                </div>
              </div>

              {/* Bottom Verification Footer */}
              <div className="pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                <div className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-600 dark:text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                  <span>Credential Active</span>
                </div>

                <Link
                  href={cert.link}
                  target="_blank"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-cyan-400 group-hover:underline"
                >
                  <span>Verify</span>
                  <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}