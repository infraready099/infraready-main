"use client";

import { ArrowRight, ChevronRight, Github } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const terminalLines = [
  { prefix: "$", text: "infraready deploy --env production", color: "text-slate-400" },
  { prefix: null, text: "", color: "" },
  { prefix: "→", text: "Connecting to AWS (012345678901)...", color: "text-sky-400" },
  { prefix: "✓", text: "IAM role verified", color: "text-emerald-400" },
  { prefix: "→", text: "Initializing OpenTofu modules...", color: "text-sky-400" },
  { prefix: "✓", text: "aws_vpc.main — created", color: "text-emerald-400" },
  { prefix: "✓", text: "aws_subnet.private[0] — created", color: "text-emerald-400" },
  { prefix: "✓", text: "aws_nat_gateway.main — created", color: "text-emerald-400" },
  { prefix: "→", text: "Provisioning RDS PostgreSQL (Multi-AZ)...", color: "text-sky-400" },
  { prefix: "✓", text: "aws_db_instance.main — created", color: "text-emerald-400" },
  { prefix: "→", text: "Deploying ECS Fargate cluster...", color: "text-sky-400" },
  { prefix: "✓", text: "aws_ecs_service.app — running (2/2)", color: "text-emerald-400" },
  { prefix: "→", text: "Configuring CloudFront CDN...", color: "text-sky-400" },
  { prefix: "✓", text: "aws_cloudfront_distribution — deployed", color: "text-emerald-400" },
  { prefix: null, text: "", color: "" },
  { prefix: "★", text: "Done in 18m 42s · Your app is live", color: "text-yellow-400" },
  { prefix: null, text: "https://d3xyz.cloudfront.net", color: "text-violet-400" },
];

const STARS = [
  { top: 4, left: 12, size: 1.5, dur: 3.2, delay: 0.0 },
  { top: 8, left: 78, size: 1, dur: 4.1, delay: 0.5 },
  { top: 15, left: 34, size: 2, dur: 2.8, delay: 1.1 },
  { top: 21, left: 91, size: 1, dur: 5.3, delay: 0.3 },
  { top: 7, left: 55, size: 1.5, dur: 3.7, delay: 1.8 },
  { top: 33, left: 22, size: 1, dur: 4.5, delay: 0.9 },
  { top: 44, left: 67, size: 2, dur: 2.5, delay: 2.1 },
  { top: 12, left: 88, size: 1, dur: 5.8, delay: 0.2 },
  { top: 56, left: 8, size: 1.5, dur: 3.4, delay: 1.4 },
  { top: 61, left: 45, size: 1, dur: 4.9, delay: 0.7 },
  { top: 72, left: 82, size: 2, dur: 2.9, delay: 2.4 },
  { top: 18, left: 3, size: 1, dur: 5.1, delay: 1.6 },
  { top: 87, left: 29, size: 1.5, dur: 3.6, delay: 0.4 },
  { top: 93, left: 71, size: 1, dur: 4.3, delay: 1.9 },
  { top: 38, left: 96, size: 2, dur: 2.7, delay: 0.8 },
  { top: 25, left: 14, size: 1, dur: 5.5, delay: 2.7 },
  { top: 49, left: 51, size: 1.5, dur: 3.1, delay: 1.2 },
  { top: 76, left: 63, size: 1, dur: 4.7, delay: 0.1 },
  { top: 64, left: 19, size: 2, dur: 3.9, delay: 2.0 },
  { top: 9, left: 42, size: 1, dur: 5.0, delay: 1.5 },
  { top: 31, left: 76, size: 1.5, dur: 2.6, delay: 0.6 },
  { top: 82, left: 37, size: 1, dur: 4.2, delay: 2.3 },
  { top: 53, left: 93, size: 2, dur: 3.3, delay: 1.0 },
  { top: 2, left: 61, size: 1, dur: 5.7, delay: 0.9 },
  { top: 67, left: 5, size: 1.5, dur: 4.0, delay: 1.7 },
  { top: 41, left: 84, size: 1, dur: 2.4, delay: 2.5 },
  { top: 90, left: 48, size: 2, dur: 5.4, delay: 0.3 },
  { top: 16, left: 26, size: 1, dur: 3.8, delay: 1.3 },
  { top: 79, left: 17, size: 1.5, dur: 4.6, delay: 2.2 },
  { top: 35, left: 59, size: 1, dur: 3.0, delay: 0.5 },
];

function AnimatedTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    if (visibleCount < terminalLines.length) {
      timeout = setTimeout(() => setVisibleCount((c) => c + 1), 350);
    } else {
      setShowCursor(true);
      timeout = setTimeout(() => {
        setShowCursor(false);
        setVisibleCount(0);
      }, 3500);
    }
    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <div className="px-4 py-3.5 space-y-0.5 text-left overflow-hidden">
      {terminalLines.slice(0, visibleCount).map((line, i) => {
        if (!line.prefix && !line.text) {
          return <div key={i} className="h-1.5" />;
        }
        if (!line.prefix && line.text) {
          return (
            <div key={i} className={`${line.color} font-mono terminal-line-enter text-[11px]`}>
              &nbsp;&nbsp;{line.text}
            </div>
          );
        }
        return (
          <div key={i} className="flex gap-2 font-mono terminal-line-enter text-[11px]">
            <span
              className={
                line.prefix === "$" ? "text-slate-500 flex-shrink-0 w-3"
                : line.prefix === "✓" ? "text-emerald-400 flex-shrink-0 w-3"
                : line.prefix === "★" ? "text-yellow-400 flex-shrink-0 w-3"
                : "text-sky-400 flex-shrink-0 w-3"
              }
            >
              {line.prefix}
            </span>
            <span className={line.color}>{line.text}</span>
          </div>
        );
      })}
      {(visibleCount < terminalLines.length || showCursor) && (
        <div className="flex gap-2 font-mono mt-0.5">
          <span className="text-slate-500 w-3">$</span>
          <span className="inline-block w-1.5 h-3.5 bg-sky-400 animate-pulse" />
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden hero-mesh"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {STARS.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.dur}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Grid lines */}
      <div className="hero-grid-lines absolute inset-0 pointer-events-none" aria-hidden="true" />

      {/* Glow orbs */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "600px",
          background: "radial-gradient(ellipse at center, rgba(14,165,233,0.10) 0%, rgba(167,139,250,0.05) 40%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute pointer-events-none hidden lg:block"
        style={{
          top: "10%",
          right: "-5%",
          width: "500px",
          height: "500px",
          background: "radial-gradient(ellipse at center, rgba(167,139,250,0.07) 0%, transparent 60%)",
          filter: "blur(60px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
        {/* ── Two-column layout on large screens ─────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: copy ──────────────────────────────────── */}
          <div className="flex flex-col items-start">

            {/* Beta badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-card mb-7 border border-white/10 cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              <span className="text-xs font-medium text-ir-secondary">
                Private beta ·{" "}
                <span className="text-ir-text font-semibold">50 spots left</span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-bold tracking-tight leading-[1.06] text-left"
            >
              <span className="block text-ir-text">Your AI-built app</span>
              <span className="block text-ir-text">deserves real</span>
              <span className="block gradient-text mt-1">AWS infra.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.18 }}
              className="mt-6 text-base sm:text-lg text-ir-secondary max-w-lg leading-relaxed text-left"
            >
              Connect GitHub. Link your AWS. InfraReady provisions{" "}
              <span className="text-ir-text font-medium">VPC, RDS, ECS, S3 + CloudFront</span>{" "}
              in under 20 minutes — in <span className="text-ir-text font-medium">your</span> account.
              No DevOps needed.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.26 }}
              className="mt-9 flex flex-col sm:flex-row items-start gap-3"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white btn-sky cursor-pointer"
              >
                Get early access
                <ArrowRight size={15} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium text-ir-secondary btn-ghost hover:text-ir-text cursor-pointer"
              >
                See how it works
                <ChevronRight size={15} />
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.34 }}
              className="mt-8 flex items-center gap-3"
            >
              <div className="flex -space-x-2">
                {[
                  { bg: "bg-sky-600", initials: "AK" },
                  { bg: "bg-violet-600", initials: "MT" },
                  { bg: "bg-emerald-600", initials: "SR" },
                  { bg: "bg-orange-600", initials: "JL" },
                ].map((avatar, i) => (
                  <div
                    key={i}
                    className={`w-7 h-7 rounded-full ${avatar.bg} border-2 border-[#04091A] flex items-center justify-center text-[10px] font-bold text-white`}
                  >
                    {avatar.initials}
                  </div>
                ))}
              </div>
              <p className="text-xs text-ir-secondary">
                Trusted by{" "}
                <span className="text-ir-text font-semibold">200+ founders</span>
                {" "}with AWS Activate
              </p>
            </motion.div>

            {/* GitHub badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-5 flex items-center gap-2"
            >
              <Github size={13} className="text-ir-muted" />
              <span className="text-xs text-ir-muted">GitHub OAuth · No credit card · Cancel anytime</span>
            </motion.div>
          </div>

          {/* ── RIGHT: terminal ─────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 32, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.25, 0, 0.25, 1] }}
            className="relative"
          >
            {/* Glow behind terminal */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(14,165,233,0.12) 0%, transparent 70%)",
                filter: "blur(20px)",
                transform: "scale(1.1)",
              }}
              aria-hidden="true"
            />

            {/* Terminal window */}
            <div
              className="relative terminal-window border border-white/[0.08] shadow-2xl animate-float"
              style={{ boxShadow: "0 24px 80px rgba(0,0,0,0.6), 0 0 0 1px rgba(14,165,233,0.1), inset 0 1px 0 rgba(255,255,255,0.05)" }}
            >
              {/* Titlebar */}
              <div className="terminal-titlebar border-b border-white/[0.06]">
                <span className="terminal-dot bg-red-500/80" />
                <span className="terminal-dot bg-yellow-500/80" />
                <span className="terminal-dot bg-emerald-500/80" />
                <span className="ml-3 text-[10px] text-slate-500 font-medium flex-1">
                  infraready — production deploy
                </span>
                <span className="flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  live
                </span>
              </div>
              <AnimatedTerminal />
            </div>

            {/* Floating stat badges */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.9 }}
              className="absolute -right-4 top-8 glass-card border border-white/10 rounded-xl px-3 py-2 hidden xl:block"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
            >
              <p className="text-xs font-bold text-emerald-400">~20 min</p>
              <p className="text-[10px] text-ir-muted">avg deploy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 1.05 }}
              className="absolute -left-4 bottom-10 glass-card border border-white/10 rounded-xl px-3 py-2 hidden xl:block"
              style={{ boxShadow: "0 8px 24px rgba(0,0,0,0.4)" }}
            >
              <p className="text-xs font-bold text-sky-400">0 creds stored</p>
              <p className="text-[10px] text-ir-muted">SOC2-ready</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Bottom trust strip ────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 lg:mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3"
        >
          {[
            { label: "11 OpenTofu modules", dot: "bg-sky-400" },
            { label: "Your AWS account", dot: "bg-emerald-400" },
            { label: "No vendor lock-in", dot: "bg-violet-400" },
            { label: "SOC2 baseline included", dot: "bg-orange-400" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-xs text-ir-muted">
              <span className={`w-1.5 h-1.5 rounded-full ${item.dot}`} />
              {item.label}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #04091a)" }}
      />
    </section>
  );
}
