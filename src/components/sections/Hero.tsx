// src/components/sections/Hero.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  Mail, 
  FileText, 
  MapPin, 
  CheckCircle2 
} from "lucide-react";
import { personalInfo, projects, publications } from "@/data/portfolio";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Hero() {
  const publicationCount = `${publications.length}+`;
  const projectCount = `${projects.length}+`;

  return (
    <section 
      id="about" 
      className="scroll-mt-24 relative min-h-[92vh] flex items-center justify-center pt-32 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 px-4 sm:px-6 max-w-6xl mx-auto overflow-hidden"
    >
      {/* Precision Ambient Light Flares */}
      <div className="absolute top-20 left-10 w-137.5 h-85 bg-linear-to-tr from-blue-600/15 via-indigo-500/10 to-transparent rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-125 h-80 bg-linear-to-bl from-cyan-400/15 via-blue-500/10 to-transparent rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="w-full flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-14">
        
        {/* ================= LEFT CONTENT COLUMN ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-900/90 border border-slate-200/80 dark:border-slate-800/80 text-[11px] sm:text-xs font-mono font-medium shadow-2xs backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-slate-800 dark:text-slate-200 font-semibold">Open for Opportunities</span>
            <span className="text-slate-300 dark:text-slate-700">•</span>
            <span className="text-blue-600 dark:text-cyan-400 font-semibold">{personalInfo.role}</span>
          </div>

          {/* Primary Engineering Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] font-black text-slate-900 dark:text-white tracking-tight leading-[1.12]">
            Engineering scalable{" "}
            <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-400 bg-clip-text text-transparent">
              enterprise backends
            </span>{" "}
            & AI diagnostic systems.
          </h1>

          {/* Role Identity */}
          <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-200 flex items-center justify-center lg:justify-start gap-2">
            <span className="font-bold">{personalInfo.name}</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent font-bold">
              {personalInfo.role}
            </span>
          </p>

          {/* Bio */}
          <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl mx-auto lg:mx-0">
            {personalInfo.bio}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-cyan-400 dark:hover:text-slate-950 text-xs sm:text-sm font-semibold shadow-md shadow-black/10 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              <span>Explore Projects</span>
              <ArrowUpRight size={15} />
            </Link>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/50 text-xs sm:text-sm font-semibold shadow-2xs hover:-translate-y-0.5 active:translate-y-0 transition-all backdrop-blur-md"
            >
              <Mail size={15} />
              <span>Get In Touch</span>
            </Link>

            <Link
              href={personalInfo.portfolio}
              target="_blank"
              className="inline-flex items-center gap-1.5 px-4 py-3 rounded-xl border border-transparent hover:border-slate-200 dark:hover:border-slate-800 bg-slate-100/60 dark:bg-slate-900/40 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white text-xs sm:text-sm font-semibold transition-all"
            >
              <FileText size={15} />
              <span>Resume</span>
            </Link>
          </div>

          {/* 3-Column Metrics Strip (সবগুলো সংখ্যা Black & Uniform) */}
          <div className="pt-6 sm:pt-8 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg mx-auto lg:mx-0">
            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                {publicationCount}
              </p>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                IEEE Papers
              </p>
            </div>

            <div className="text-center lg:text-left border-x border-slate-200/80 dark:border-slate-800/80 px-2 sm:px-4">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                {projectCount}
              </p>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                Core Systems
              </p>
            </div>

            <div className="text-center lg:text-left">
              <p className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white font-mono tracking-tight">
                1+ Yrs
              </p>
              <p className="text-[10px] sm:text-[11px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                Experience
              </p>
            </div>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: Framed Portrait ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="relative shrink-0 w-full max-w-72.5 sm:max-w-81.25 flex justify-center"
        >
          <div className="absolute -inset-1 bg-linear-to-b from-blue-500/20 via-indigo-500/10 to-cyan-400/20 rounded-[28px] blur-xl -z-10" />

          <div className="w-full rounded-[26px] bg-white/95 dark:bg-slate-900/95 border border-slate-200/90 dark:border-slate-800/90 shadow-2xl backdrop-blur-2xl p-3 space-y-3">
            <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 group">
              <Image
                src="/profile.jpg"
                alt={personalInfo.name}
                fill
                priority
                sizes="(max-width: 640px) 290px, 325px"
                className="object-cover object-top group-hover:scale-103 transition-transform duration-700 ease-out"
              />

              <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between px-3 py-1.5 rounded-xl bg-slate-950/70 dark:bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
                <span className="text-[11px] font-medium flex items-center gap-1.5">
                  <MapPin size={11} className="text-cyan-400" />
                  {personalInfo.location}
                </span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500" />
                </span>
              </div>
            </div>

            <div className="px-1.5 py-1 flex items-center justify-between">
              <div>
                <h3 className="font-extrabold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                  <span>{personalInfo.name}</span>
                  <CheckCircle2 size={13} className="text-blue-500 fill-blue-500/20" />
                </h3>
                <p className="text-[10.5px] font-mono text-slate-500 dark:text-slate-400">
                  Enterprise & ML Engineer
                </p>
              </div>

              <div className="flex items-center gap-1.5">
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-slate-950 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  aria-label="GitHub"
                >
                  <GithubIcon size={14} />
                </Link>

                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  className="p-2 rounded-xl bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-2xs"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon size={14} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}