"use client";

import { ArrowRight, CheckCircle, Sparkles, ShieldCheck, Lock, Zap, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { APP_LINKS } from "@/lib/config";

const trustBadges = [
  { icon: ShieldCheck, label: "SOC2-ready infrastructure" },
  { icon: Lock, label: "Zero credentials stored" },
  { icon: Zap, label: "Live in 20 minutes" },
];

export default function CtaBanner() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="waitlist" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Multi-layer background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #04091a 0%, #06102a 50%, #04091a 100%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(14,165,233,0.07) 0%, rgba(245,158,11,0.03) 50%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: "linear-gradient(rgba(148,163,184,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.04) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border border-sky-500/20 mb-8"
        >
          <Sparkles size={13} className="text-cyan-400" />
          <span className="text-sm font-medium text-cyan-400">
            Limited availability · Private beta
          </span>
        </motion.div>

        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-ir-text tracking-tight leading-[1.1]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Ready to stop{" "}
          <span className="gradient-text">fighting DevOps?</span>
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-ir-secondary max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          Join{" "}
          <span className="text-ir-text font-semibold">200+ founders</span> on
          the waitlist. The first 50 get{" "}
          <span className="text-emerald-400 font-semibold">
            Starter free for 3 months.
          </span>
        </motion.p>

        {/* Primary CTA — go straight to the app */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.25 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-8"
        >
          <a
            href={APP_LINKS.getStarted}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white btn-sky cursor-pointer"
          >
            Start deploying — it&apos;s free
            <ArrowRight size={16} />
          </a>
          <p className="mt-3 text-xs text-ir-muted">
            GitHub OAuth · No credit card · Your AWS account, always
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.35 }}
          viewport={{ once: true, margin: "-80px" }}
          className="mt-10 flex items-center gap-4"
        >
          <div className="flex-1 h-px bg-white/[0.06]" />
          <span className="text-xs text-ir-muted">or join the waitlist for updates</span>
          <div className="flex-1 h-px bg-white/[0.06]" />
        </motion.div>

        {/* Waitlist form (for email capture / launch updates) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="mt-6 animated-gradient-border rounded-2xl p-px">
            <div
              className="rounded-2xl px-6 py-7"
              style={{ background: "rgba(4,9,26,0.95)" }}
            >
              {status === "success" ? (
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-3 text-emerald-400">
                    <CheckCircle size={20} />
                    <span className="text-base font-medium">
                      You&apos;re on the list — we&apos;ll keep you updated!
                    </span>
                  </div>
                  <a
                    href={APP_LINKS.getStarted}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    <ExternalLink size={14} />
                    Start building now — app is live
                  </a>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@startup.io"
                    required
                    disabled={status === "loading"}
                    className="flex-1 px-5 py-3.5 rounded-xl text-sm text-ir-text placeholder-ir-muted outline-none transition-all duration-200 focus:border-sky-500/50 disabled:opacity-50"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white btn-sky flex-shrink-0 disabled:opacity-60"
                  >
                    {status === "loading" ? "Joining..." : "Join waitlist"}
                    {status !== "loading" && <ArrowRight size={15} />}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="mt-3 text-sm text-red-400 text-center">Something went wrong. Try again.</p>
              )}

              {/* Trust badges */}
              <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
                {trustBadges.map((badge) => {
                  const Icon = badge.icon;
                  return (
                    <div
                      key={badge.label}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card border border-white/[0.07]"
                    >
                      <Icon size={12} className="text-cyan-400 flex-shrink-0" />
                      <span className="text-xs font-medium text-ir-secondary whitespace-nowrap">
                        {badge.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
