// src/components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/themes/ThemeToggle";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },       // Skills আগে
  { name: "Projects", href: "#projects" },   // Projects পরে
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 120;
      navLinks.forEach((link) => {
        const id = link.href.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const navbarOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(targetId);
      window.history.pushState(null, "", href);
      setMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", "/");
  };

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`pointer-events-auto relative flex items-center justify-between gap-3 sm:gap-6 px-4 py-2 sm:py-2 rounded-full border transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-slate-900/90 border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-black/5 dark:shadow-black/20 backdrop-blur-xl"
            : "bg-white/75 dark:bg-slate-900/75 border-slate-200/70 dark:border-slate-800/70 shadow-lg shadow-black/2 backdrop-blur-lg"
        }`}
      >
        {/* Brand */}
        <Link
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-2 pl-2 py-1 group cursor-pointer"
        >
          <div className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600 dark:bg-cyan-400" />
          </div>

          <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-white">
            Sudip{" "}
            <span className="bg-linear-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent">
              Sarker
            </span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link, idx) => {
            const isTargetActive = activeSection === link.href.replace("#", "");
            const isHovered = hoveredIdx === idx;

            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`relative px-3.5 py-1.5 text-xs font-semibold transition-colors cursor-pointer ${
                  isTargetActive
                    ? "text-blue-600 dark:text-cyan-400"
                    : "text-slate-600 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white"
                }`}
              >
                {isTargetActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full bg-blue-50/70 dark:bg-blue-950/50 -z-10 border border-blue-200/50 dark:border-blue-900/40"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}

                {isHovered && !isTargetActive && (
                  <motion.span
                    layoutId="hoverNavPill"
                    className="absolute inset-0 rounded-full bg-slate-100 dark:bg-slate-800/80 -z-10"
                    transition={{ type: "spring", stiffness: 450, damping: 30 }}
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Right Controls */}
        <div className="flex items-center gap-2 pr-1">
          <div className="hidden md:block w-px h-4 bg-slate-200 dark:bg-slate-800 mx-1" />

          {/* 3-Mode Theme Toggle */}
          <ThemeToggle />

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
            aria-label="Open Menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-auto absolute top-16 inset-x-4 max-w-sm mx-auto p-4 rounded-3xl bg-white/95 dark:bg-slate-900/95 border border-slate-200 dark:border-slate-800 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => {
                const isTargetActive = activeSection === link.href.replace("#", "");

                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-2xl text-sm font-semibold transition cursor-pointer ${
                      isTargetActive
                        ? "bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-cyan-400"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}