// app/layout.tsx
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/themes/theme-provider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sudip Sarker | Software Developer & ML Engineer",
  description: "Software Developer & ML Engineer specializing in enterprise backend architectures, ERP modules, and intelligent diagnostic systems.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 min-h-screen">
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}