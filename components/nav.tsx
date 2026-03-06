"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Docs", href: "#waitlist" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className="sticky top-0 z-50 border-b transition-all duration-300"
      style={{
        background: scrolled ? "rgba(4,9,26,0.95)" : "rgba(4,9,26,0.85)",
        backdropFilter: scrolled ? "blur(28px)" : "blur(20px)",
        borderBottomColor: scrolled ? "rgba(255,255,255,0.10)" : "rgba(255,255,255,0.05)",
        boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2.5 flex-shrink-0 group"
          >
            <div className="w-8 h-8 rounded-lg bg-sky-500 flex items-center justify-center glow-sky-sm transition-all duration-300 group-hover:bg-sky-400">
              <Zap className="w-4.5 h-4.5 text-white" fill="white" size={18} />
            </div>
            <span className="text-[17px] font-bold text-ir-text tracking-tight">
              InfraReady
            </span>
          </a>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-ir-secondary hover:text-ir-text transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.infraready.io"
              className="text-sm font-medium text-ir-secondary hover:text-ir-text transition-colors duration-200 px-4 py-2 rounded-lg btn-ghost"
            >
              Sign in
            </a>
            <a
              href="#waitlist"
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg btn-sky"
            >
              Get early access
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-ir-secondary hover:text-ir-text hover:bg-white/5 transition-all duration-200"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden border-t border-white/5 py-4 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-ir-secondary hover:text-ir-text hover:bg-white/5 rounded-lg transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 space-y-2 border-t border-white/5 mt-3">
              <a
                href="https://app.infraready.io"
                className="block text-center text-sm font-medium text-ir-secondary py-2.5 rounded-lg btn-ghost"
              >
                Sign in
              </a>
              <a
                href="#waitlist"
                onClick={() => setMobileOpen(false)}
                className="block text-center text-sm font-semibold text-white py-2.5 rounded-lg btn-sky"
              >
                Get early access
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
