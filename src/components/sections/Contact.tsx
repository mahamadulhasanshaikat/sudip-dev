// src/components/Contact.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Mail, 
  MapPin, 
  Send, 
  Sparkles, 
  Copy, 
  Check, 
  User, 
  MessageSquare,
  ArrowUpRight,
  Zap,
  Globe2,
  Clock
} from "lucide-react";
import { personalInfo } from "@/data/portfolio";

const inquiryTypes = [
  "Full-Time Role",
  "AI & ML Research",
  "Backend / ERP Project",
  "General Inquiry",
];

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState("Full-Time Role");
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setTimeout(() => setIsSent(false), 4000);
      setFormState({ name: "", email: "", message: "" });
    }, 1100);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto relative overflow-hidden">
      {/* 1. Animated Ambient Background Glow */}
      <motion.div 
        animate={{ 
          scale: [1, 1.08, 1],
          opacity: [0.12, 0.22, 0.12]
        }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-linear-to-r from-blue-600/15 via-indigo-500/10 to-cyan-400/15 rounded-full blur-[140px] pointer-events-none -z-10" 
      />

      {/* Section Header with Stagger Animation */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-cyan-300 border border-blue-200/60 dark:border-blue-900/50 mb-3 shadow-2xs">
          <Sparkles size={12} className="animate-pulse" />
          <span>Direct Communication</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
          Get In Touch
        </h2>
        <div className="w-12 h-1 bg-linear-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
      </motion.div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
        
        {/* ================= LEFT COLUMN: DETAILS & QUICK REACH (5 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-between space-y-6"
        >
          {/* Header & Subtext */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-medium bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border border-emerald-200/70 dark:border-emerald-800/60 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
              <span>Available for Hire</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug mb-3">
              Let&apos;s build something <br />
              <span className="bg-linear-to-r from-blue-600 via-indigo-500 to-cyan-500 bg-clip-text text-transparent">
                extraordinary together.
              </span>
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
              I am open to full-time Software Engineering roles, Odoo/ERP development, and applied Machine Learning research collaborations.
            </p>
          </div>

          {/* Interactive Cards (No phone number) */}
          <div className="space-y-3.5">
            {/* Email Card with Click-to-Copy */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm hover:border-blue-500/40 backdrop-blur-xl transition-all group flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/70 text-blue-600 dark:text-cyan-400 border border-blue-200/60 dark:border-blue-900/50 group-hover:scale-105 transition-transform">
                  <Mail size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Direct Email
                  </span>
                  <Link
                    href={`mailto:${personalInfo.email}`}
                    className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors"
                  >
                    {personalInfo.email}
                  </Link>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                title="Copy Email"
              >
                {copiedEmail ? (
                  <Check size={14} className="text-emerald-500" />
                ) : (
                  <Copy size={14} />
                )}
              </button>
            </motion.div>

            {/* Location & Timezone Card */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 text-indigo-600 dark:text-indigo-400 border border-indigo-200/60 dark:border-indigo-900/50">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Based In
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                GMT+6 (BST)
              </span>
            </motion.div>

            {/* Work Modality / Availability Card */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="p-4 rounded-2xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-sm backdrop-blur-xl flex items-center justify-between"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/50">
                  <Globe2 size={16} />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block font-semibold">
                    Work Modality
                  </span>
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200">
                    On-Site, Hybrid & Remote Sync
                  </p>
                </div>
              </div>

              <span className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 font-semibold border border-emerald-200/60 dark:border-emerald-800/60">
                Active
              </span>
            </motion.div>
          </div>

          {/* SLA Response Badge with Pulsing Beacon */}
          <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900/40 flex items-center gap-2.5 text-xs text-blue-900 dark:text-blue-300">
            <Zap size={15} className="text-blue-600 dark:text-cyan-400 shrink-0" />
            <span className="font-medium">
              Average response turnaround: <span className="font-bold">&lt; 12 hours</span>
            </span>
          </div>
        </motion.div>

        {/* ================= RIGHT COLUMN: INTERACTIVE FORM (7 Cols) ================= */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="h-full p-7 sm:p-9 rounded-3xl bg-white/90 dark:bg-slate-900/90 border border-slate-200/90 dark:border-slate-800/90 shadow-xl shadow-black/3 backdrop-blur-2xl flex flex-col justify-between">
            
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {/* Quick Topic Chips with Spring Indicator */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-wider font-semibold text-slate-500 dark:text-slate-400 block mb-2.5">
                  Select Inquiry Type
                </label>
                <div className="flex flex-wrap gap-2">
                  {inquiryTypes.map((topic) => {
                    const isSelected = selectedTopic === topic;
                    return (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                          isSelected
                            ? "text-white dark:text-slate-950 font-bold"
                            : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            layoutId="activeTopicBadge"
                            className="absolute inset-0 bg-slate-950 dark:bg-white rounded-xl -z-10 shadow-sm"
                            transition={{ type: "spring", stiffness: 450, damping: 30 }}
                          />
                        )}
                        <span>{topic}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Field */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Your Name
                </label>
                <div className="relative">
                  <User size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Your Email
                </label>
                <div className="relative">
                  <Mail size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div>
                <label className="text-xs font-bold text-slate-700 dark:text-slate-300 block mb-1.5">
                  Message
                </label>
                <div className="relative">
                  <MessageSquare size={15} className="absolute left-3.5 top-3.5 text-slate-400" />
                  <textarea
                    required
                    rows={4}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your role, project, or inquiry..."
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-50/80 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-hidden focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all resize-none"
                  />
                </div>
              </div>

              {/* Interactive Submit Button with Animated States */}
              <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-slate-950 text-white dark:bg-white dark:text-slate-950 hover:bg-blue-600 dark:hover:bg-cyan-400 dark:hover:text-slate-950 text-xs sm:text-sm font-semibold shadow-md transition-all cursor-pointer disabled:opacity-70"
              >
                <AnimatePresence mode="wait">
                  {isSubmitting ? (
                    <motion.span
                      key="submitting"
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      className="inline-flex items-center gap-2"
                    >
                      <span className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Transmitting message...</span>
                    </motion.span>
                  ) : isSent ? (
                    <motion.span
                      key="sent"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-1.5 text-emerald-400 font-bold"
                    >
                      <Check size={16} />
                      <span>Message Sent Successfully!</span>
                    </motion.span>
                  ) : (
                    <motion.span
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <span>Send Message</span>
                      <Send size={15} />
                    </motion.span>
                  )}
                </AnimatePresence>
              </motion.button>

            </form>
          </div>
        </motion.div>

      </div>
    </section>
  );
}