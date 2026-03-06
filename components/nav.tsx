"use client";

import { useState, useEffect } from "react";
import { Zap, Menu, X } from "lucide-react";
import { APP_LINKS } from "@/lib/config";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
];

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <header
        className="max-w-6xl mx-auto rounded-2xl transition-all duration-300"
        style={{
          background: scrolled ? "rgba(4,9,26,0.92)" : "rgba(4,9,26,0.75)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          border: scrolled
            ? "1px solid rgba(255,255,255,0.12)"
            : "1px solid rgba(255,255,255,0.07)",
          boxShadow: scrolled
            ? "0 8px 40px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.05) inset"
            : "0 2px 16px rgba(0,0,0,0.2)",
        }}
      >
        <nav className="px-5 py-3">
          <div className="flex items-center justify-between h-10">
            {/* Logo */}
            <a href="/" className="flex items-center gap-2 flex-shrink-0 group cursor-pointer">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #7c3aed 0%, #5b21b6 100%)",
                  boxShadow: "0 0 14px rgba(124,58,237,0.45)",
                }}
              >
                <Zap className="w-3.5 h-3.5 text-white" fill="white" />
              </div>
              <span className="text-[15px] font-bold text-ir-text tracking-tight">
                InfraReady
              </span>
            </a>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-7">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-ir-muted hover:text-ir-text transition-colors duration-200 font-medium cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-2.5">
              <a
                href={APP_LINKS.signIn}
                className="text-[13px] font-medium text-ir-muted hover:text-ir-text transition-colors duration-200 px-3 py-1.5 rounded-lg cursor-pointer"
              >
                Sign in
              </a>
              <a
                href={APP_LINKS.getStarted}
                className="text-[13px] font-semibold text-white px-4 py-1.5 rounded-lg btn-sky cursor-pointer"
              >
                Get early access
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 rounded-lg text-ir-muted hover:text-ir-text hover:bg-white/5 transition-all duration-200 cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>

          {/* Mobile menu */}
          {mobileOpen && (
            <div className="md:hidden border-t border-white/[0.06] pt-3 pb-2 mt-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-3 py-2 text-[13px] font-medium text-ir-muted hover:text-ir-text hover:bg-white/5 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 space-y-1.5 border-t border-white/[0.06] mt-2">
                <a
                  href={APP_LINKS.signIn}
                  className="block text-center text-[13px] font-medium text-ir-muted py-2 rounded-lg hover:bg-white/5 transition-all duration-200 cursor-pointer"
                >
                  Sign in
                </a>
                <a
                  href={APP_LINKS.getStarted}
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-[13px] font-semibold text-white py-2 rounded-lg btn-sky cursor-pointer"
                >
                  Get early access
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>
    </div>
  );
}
