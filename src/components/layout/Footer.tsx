// src/components/Footer.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowUp,
  Mail,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ size = 15 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  const [year, setYear] = useState<number | string>("2026");

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-[#070b14]/60 backdrop-blur-xl mt-20 pt-16 pb-12 overflow-hidden">
      {/* Precision Top Ambient Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-blue-500/40 to-transparent" />

      {/* Subtle Mesh Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-175 h-37.5 bg-linear-to-b from-blue-600/5 to-transparent rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-6">

        {/* Main Content Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/70 dark:border-slate-800/70">

          {/* Identity & Scope */}
          <div className="md:col-span-5 space-y-3.5">
            <Link
              href="#"
              className="text-xl font-black tracking-tight text-slate-900 dark:text-white inline-block group"
            >
              Sudip{" "}
              <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent group-hover:opacity-85 transition-opacity">
                Sarker
              </span>
            </Link>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Software Developer & ML Engineer specializing in resilient backend architectures, enterprise ERP modules, and intelligent diagnostic workflows.
            </p>

            {/* Live Indicator */}
            <div className="flex items-center gap-2 pt-1 text-xs font-mono text-slate-500 dark:text-slate-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for engineering roles</span>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <span className="inline-flex items-center gap-1">
                <MapPin size={11} className="text-blue-500" />
                Dhaka, BD
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 space-y-3 md:pl-6">
            <p className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              System Navigation
            </p>

            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-xs">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Online */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-[11px] font-bold font-mono uppercase tracking-wider text-slate-400 dark:text-slate-500">
              Elsewhere
            </p>

            <ul className="space-y-2 text-xs">
              <li>
                <Link
                  href={personalInfo.github}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group"
                >
                  <GithubIcon size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={11} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href={personalInfo.linkedin}
                  target="_blank"
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group"
                >
                  <LinkedinIcon size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </Link>
              </li>
              <li>
                <Link
                  href={`mailto:${personalInfo.email}`}
                  className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors group"
                >
                  <Mail size={14} />
                  <span>Email Inquiries</span>
                  <ArrowUpRight size={11} className="text-slate-400 group-hover:text-blue-500 transition-colors" />
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Alignment Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">

          <p className="font-mono text-[11px]">
            © {year} {personalInfo.name}. All rights reserved.
          </p>

          {/* 2nd Picture Style: </> Developed by MHS ↗ */}
          <Link
            href="https://mhstechlab.pages.dev/"
            target="_blank"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100/90 dark:bg-slate-800/90 border border-slate-200/90 dark:border-slate-700/80 hover:border-blue-500/50 dark:hover:border-blue-400/50 shadow-2xs transition-all"
          >
            {/* Blue </> Code Icon */}
            <svg
              width={14}
              height={14}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-blue-600 dark:text-blue-400"
            >
              <polyline points="16 18 22 12 16 6" />
              <polyline points="8 6 2 12 8 18" />
            </svg>

            <span className="font-mono text-xs text-slate-700 dark:text-slate-300">
              Developed by
            </span>

            <span className="font-mono text-xs font-bold text-slate-950 dark:text-white">
              MHS Tech Lab
            </span>

            <ArrowUpRight
              size={13}
              className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            />
          </Link>

          {/* Back to top + Version indicator */}
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10.5px] text-slate-400 dark:text-slate-500">
              v1.0.3 (Release)
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-slate-500 hover:text-blue-600 dark:hover:text-cyan-400 hover:border-blue-500/40 transition-colors cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}