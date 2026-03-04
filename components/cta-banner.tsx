"use client";

import { ArrowRight, Sparkles } from "lucide-react";

export default function CtaBanner() {
  return (
    <section
      id="waitlist"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(14,165,233,0.06) 0%, rgba(4,9,26,0) 40%, rgba(167,139,250,0.06) 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(14,165,233,0.06) 0%, transparent 70%)",
        }}
      />

      {/* Decorative border lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Pill badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-sky-500/20 mb-8">
          <Sparkles size={13} className="text-sky-400" />
          <span className="text-sm font-medium text-sky-400">
            Limited availability · Private beta
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ir-text tracking-tight leading-[1.1]">
          Ready to stop{" "}
          <span className="gradient-text">fighting DevOps?</span>
        </h2>

        {/* Sub */}
        <p className="mt-6 text-lg text-ir-secondary max-w-xl mx-auto leading-relaxed">
          Join{" "}
          <span className="text-ir-text font-semibold">200+ founders</span> on
          the waitlist. The first 50 get{" "}
          <span className="text-emerald-400 font-semibold">
            Starter free for 3 months.
          </span>
        </p>

        {/* Email form */}
        <form
          onSubmit={(e) => e.preventDefault()}
          className="mt-10 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            placeholder="you@startup.io"
            required
            className="flex-1 px-5 py-3.5 rounded-xl text-sm text-ir-text placeholder-ir-muted outline-none transition-all duration-200 focus:border-sky-500/50 focus:shadow-glow-sky-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          />
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white btn-sky flex-shrink-0"
          >
            Get early access
            <ArrowRight size={15} />
          </button>
        </form>

        <p className="mt-4 text-xs text-ir-muted">
          No credit card required. Cancel anytime. Your AWS account, always.
        </p>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
          {[
            { icon: "🔒", label: "We never touch your AWS credentials" },
            { icon: "📦", label: "Your infra, your S3 state bucket" },
            { icon: "🚀", label: "Production-ready in 20 minutes" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5">
              <span className="text-base">{item.icon}</span>
              <span className="text-xs text-ir-muted font-medium">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
