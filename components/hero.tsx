"use client";

import { ArrowRight, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const terminalLines = [
  { prefix: "$", text: "infraready deploy --env production", color: "text-slate-400" },
  { prefix: null, text: "", color: "" },
  { prefix: "→", text: "Connecting to AWS account (012345678901)...", color: "text-sky-400" },
  { prefix: "✓", text: "IAM role verified: infraready-deploy-role", color: "text-emerald-400" },
  { prefix: "→", text: "Initializing OpenTofu modules...", color: "text-sky-400" },
  { prefix: "✓", text: "Module: aws_vpc.main — created", color: "text-emerald-400" },
  { prefix: "✓", text: "Module: aws_subnet.private[0] — created", color: "text-emerald-400" },
  { prefix: "✓", text: "Module: aws_subnet.private[1] — created", color: "text-emerald-400" },
  { prefix: "✓", text: "Module: aws_nat_gateway.main — created", color: "text-emerald-400" },
  { prefix: "→", text: "Provisioning RDS PostgreSQL (Multi-AZ)...", color: "text-sky-400" },
  { prefix: "✓", text: "Module: aws_db_instance.main — created", color: "text-emerald-400" },
  { prefix: "→", text: "Deploying ECS Fargate cluster...", color: "text-sky-400" },
  { prefix: "✓", text: "Module: aws_ecs_cluster.main — created", color: "text-emerald-400" },
  { prefix: "✓", text: "Module: aws_ecs_service.app — running (2/2 tasks)", color: "text-emerald-400" },
  { prefix: "→", text: "Configuring CloudFront distribution...", color: "text-sky-400" },
  { prefix: "✓", text: "Module: aws_cloudfront_distribution — deployed", color: "text-emerald-400" },
  { prefix: null, text: "", color: "" },
  { prefix: "★", text: "Deployment complete in 18m 42s", color: "text-yellow-400" },
  { prefix: null, text: "Your app is live: https://d3xyz.cloudfront.net", color: "text-violet-400" },
];

function AnimatedTerminal() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (visibleCount < terminalLines.length) {
      timeout = setTimeout(() => {
        setVisibleCount((c) => c + 1);
      }, 400);
    } else {
      // All lines shown — show blinking cursor, then reset after 3s
      setShowCursor(true);
      timeout = setTimeout(() => {
        setShowCursor(false);
        setVisibleCount(0);
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [visibleCount]);

  return (
    <div className="px-5 py-4 space-y-0.5 text-left overflow-hidden">
      {terminalLines.slice(0, visibleCount).map((line, i) => {
        if (!line.prefix && !line.text) {
          return (
            <div
              key={i}
              className="h-2 animate-fade-in-line"
              style={{ animationDelay: "0ms" }}
            />
          );
        }
        if (!line.prefix && line.text) {
          return (
            <div
              key={i}
              className={`${line.color} font-mono terminal-line-enter`}
            >
              &nbsp;&nbsp;{line.text}
            </div>
          );
        }
        return (
          <div key={i} className="flex gap-2.5 font-mono terminal-line-enter">
            <span
              className={
                line.prefix === "$"
                  ? "text-slate-500 flex-shrink-0"
                  : line.prefix === "✓"
                  ? "text-emerald-400 flex-shrink-0"
                  : line.prefix === "★"
                  ? "text-yellow-400 flex-shrink-0"
                  : "text-sky-400 flex-shrink-0"
              }
            >
              {line.prefix}
            </span>
            <span className={line.color}>{line.text}</span>
          </div>
        );
      })}
      {/* Blinking cursor — shown while typing or after completion */}
      {(visibleCount < terminalLines.length || showCursor) && (
        <div className="flex gap-2.5 font-mono mt-1">
          <span className="text-slate-500">$</span>
          <span className="inline-block w-2 h-4 bg-sky-400 animate-pulse" />
        </div>
      )}
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden dot-grid"
      style={{ minHeight: "calc(100vh - 64px)" }}
    >
      {/* Radial glow behind heading */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(14,165,233,0.08) 0%, transparent 65%)",
        }}
      />

      {/* Second, deeper glow layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 30% at 50% 10%, rgba(167,139,250,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-24 lg:pt-28 lg:pb-32">
        <div className="flex flex-col items-center text-center">

          {/* Beta badge */}
          <div
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card mb-8 border border-white/10"
            style={{ animation: "fade-up 0.5s ease-out forwards", animationDelay: "0ms" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            <span className="text-sm font-medium text-ir-secondary">
              Private beta{" "}
              <span className="text-ir-text font-semibold">
                · 50 spots remaining
              </span>
            </span>
          </div>

          {/* Headline */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] max-w-4xl"
            style={{ animation: "fade-up 0.55s ease-out forwards", animationDelay: "80ms", opacity: 0 }}
          >
            <span className="block text-ir-text">Your AI-built app</span>
            <span className="block text-ir-text">deserves real</span>
            <span className="block gradient-text mt-1">
              AWS infrastructure.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="mt-8 text-base sm:text-lg text-ir-secondary max-w-2xl leading-relaxed"
            style={{ animation: "fade-up 0.55s ease-out forwards", animationDelay: "180ms", opacity: 0 }}
          >
            Connect GitHub. Link your AWS account. InfraReady provisions{" "}
            <span className="text-ir-text font-medium">
              VPC, RDS, ECS, S3, and CloudFront
            </span>{" "}
            in under 20 minutes — to{" "}
            <span className="text-ir-text font-medium">YOUR</span> account.
            No DevOps engineer needed.
          </p>

          {/* CTAs */}
          <div
            className="mt-10 flex flex-col sm:flex-row items-center gap-4"
            style={{ animation: "fade-up 0.55s ease-out forwards", animationDelay: "260ms", opacity: 0 }}
          >
            <a
              href="#waitlist"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-semibold text-white btn-sky glow-sky animate-glow-pulse"
            >
              Get early access
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-base font-medium text-ir-secondary btn-ghost hover:text-ir-text"
            >
              See how it works
              <ChevronRight size={16} />
            </a>
          </div>

          {/* Social proof */}
          <div
            className="mt-10 flex items-center gap-3"
            style={{ animation: "fade-up 0.55s ease-out forwards", animationDelay: "340ms", opacity: 0 }}
          >
            {/* Avatar stack */}
            <div className="flex -space-x-2.5">
              {[
                { bg: "bg-sky-600", initials: "AK" },
                { bg: "bg-violet-600", initials: "MT" },
                { bg: "bg-emerald-600", initials: "SR" },
                { bg: "bg-orange-600", initials: "JL" },
              ].map((avatar, i) => (
                <div
                  key={i}
                  className={`w-8 h-8 rounded-full ${avatar.bg} border-2 border-[#04091A] flex items-center justify-center text-xs font-semibold text-white`}
                >
                  {avatar.initials}
                </div>
              ))}
            </div>
            <p className="text-sm text-ir-secondary">
              Trusted by{" "}
              <span className="text-ir-text font-semibold">200+ founders</span>{" "}
              using AWS Activate
            </p>
          </div>

          {/* Terminal mockup */}
          <div
            className="mt-16 w-full max-w-2xl terminal-window glow-sky terminal-hero-wrapper"
            style={{ animationDelay: "420ms" }}
          >
            {/* Titlebar */}
            <div className="terminal-titlebar">
              <span className="terminal-dot bg-red-500/80" />
              <span className="terminal-dot bg-yellow-500/80" />
              <span className="terminal-dot bg-emerald-500/80" />
              <span className="ml-3 text-xs text-slate-500 font-medium flex-1">
                infraready — production deploy
              </span>
              <span className="text-xs text-emerald-400 font-medium">● live</span>
            </div>

            {/* Animated terminal body */}
            <AnimatedTerminal />
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(4,9,26,0.6))",
        }}
      />
    </section>
  );
}
