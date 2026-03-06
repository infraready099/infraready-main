"use client";

import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    tag: "Step one",
    title: "Connect GitHub",
    description:
      "Sign in with GitHub OAuth. InfraReady reads your repo and auto-detects your stack — Next.js, Node, Python, or any containerized app. No config files. No YAML.",
    detail: "OAuth · Repo detection · Framework auto-config",
    accent: { color: "rgba(14,165,233,0.2)", text: "text-sky-400", border: "rgba(14,165,233,0.3)" },
    visual: (
      <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/30 p-4">
        <div className="flex items-center gap-3 mb-4 pb-3 border-b border-white/[0.06]">
          <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 text-white">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-ir-text">github.com / your-startup / app</span>
          <div className="ml-auto flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-[10px] font-semibold text-emerald-400">Connected</span>
          </div>
        </div>
        <div className="space-y-2">
          {[
            { label: "Framework", value: "Next.js 15", color: "text-sky-400" },
            { label: "Runtime", value: "Node 22 LTS", color: "text-emerald-400" },
            { label: "Dockerfile", value: "Auto-generated", color: "text-violet-400" },
          ].map((row) => (
            <div key={row.label} className="flex items-center justify-between text-[11px] font-mono">
              <span className="text-slate-500">{row.label}</span>
              <span className={row.color}>{row.value}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    number: "02",
    tag: "Step two",
    title: "Link your AWS account",
    description:
      "Deploy one CloudFormation bootstrap stack — takes 90 seconds. This creates a minimal IAM role with least-privilege access. InfraReady never stores your AWS credentials.",
    detail: "Cross-account IAM · No admin access · SOC2-compliant",
    accent: { color: "rgba(245,158,11,0.15)", text: "text-amber-400", border: "rgba(245,158,11,0.3)" },
    visual: (
      <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/30 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-5 h-5 rounded bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-orange-400">
              <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
            </svg>
          </div>
          <span className="text-[11px] font-semibold text-ir-text">IAM Role · Least Privilege</span>
        </div>
        <div className="font-mono text-[10px] space-y-1 text-slate-500">
          <div><span className="text-violet-400">Resource:</span> infraready-deploy-role</div>
          <div><span className="text-violet-400">Account:</span> <span className="text-amber-400">012345678901</span></div>
          <div><span className="text-violet-400">Permissions:</span> <span className="text-emerald-400">minimal only</span></div>
          <div><span className="text-violet-400">Credentials stored:</span> <span className="text-red-400/80">none</span></div>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[10px] text-emerald-400 font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Role verified · 90 second setup
        </div>
      </div>
    ),
  },
  {
    number: "03",
    tag: "Step three",
    title: "We handle the rest",
    description:
      "InfraReady runs OpenTofu to provision your full production stack in your AWS account: VPC, private subnets, RDS Multi-AZ, ECS Fargate, S3, and CloudFront CDN. Done in ~20 min.",
    detail: "VPC · RDS · ECS · S3 · CloudFront · Done",
    accent: { color: "rgba(52,211,153,0.15)", text: "text-emerald-400", border: "rgba(52,211,153,0.3)" },
    visual: (
      <div className="mt-5 rounded-xl border border-white/[0.07] bg-black/30 p-4">
        <div className="space-y-2">
          {[
            { module: "aws_vpc.main", status: "created", done: true },
            { module: "aws_rds_instance.main", status: "created", done: true },
            { module: "aws_ecs_service.app", status: "running 2/2", done: true },
            { module: "aws_cloudfront_distribution", status: "deploying...", done: false },
          ].map((row) => (
            <div key={row.module} className="flex items-center gap-2 text-[10px] font-mono">
              <span className={row.done ? "text-emerald-400" : "text-sky-400 animate-pulse"}>
                {row.done ? "✓" : "→"}
              </span>
              <span className="text-slate-400 flex-1 truncate">{row.module}</span>
              <span className={row.done ? "text-emerald-400/70" : "text-sky-400/70"}>{row.status}</span>
            </div>
          ))}
        </div>
        <div className="mt-3 pt-2.5 border-t border-white/[0.06]">
          <div className="flex items-center justify-between text-[10px]">
            <span className="text-slate-500 font-mono">Progress</span>
            <span className="text-emerald-400 font-mono font-semibold">75%</span>
          </div>
          <div className="mt-1.5 h-1.5 rounded-full bg-white/[0.05] overflow-hidden">
            <div
              className="h-full rounded-full"
              style={{
                width: "75%",
                background: "linear-gradient(90deg, #10b981, #34d399)",
                boxShadow: "0 0 8px rgba(16,185,129,0.4)",
              }}
            />
          </div>
        </div>
      </div>
    ),
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0, 0.25, 1] } },
};

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 40% at 20% 50%, rgba(14,165,233,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header — LEFT aligned (intentional break from centered) */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold text-sky-400 tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight max-w-xl">
            From repo to{" "}
            <span className="gradient-text">production AWS</span>
            {" "}in 3 steps.
          </h2>
          <p className="mt-4 text-ir-secondary text-sm max-w-md">
            No terminal required. No YAML. No DevOps engineer. Just connect and deploy.
          </p>
        </motion.div>

        {/* Step cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={item}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="relative rounded-2xl p-6 flex flex-col cursor-default will-change-transform"
              style={{
                background: step.accent.color,
                border: `1px solid ${step.accent.border}`,
              }}
            >
              {/* Step number watermark */}
              <div
                className="absolute top-4 right-5 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: step.accent.border, opacity: 0.6 }}
                aria-hidden="true"
              >
                {step.number}
              </div>

              {/* Tag */}
              <span className={`text-[10px] font-bold tracking-widest uppercase ${step.accent.text}`}>
                {step.tag}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-xl font-bold text-ir-text tracking-tight">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-ir-secondary leading-relaxed">
                {step.description}
              </p>

              {/* Visual element */}
              {step.visual}

              {/* Detail tags */}
              <div className="mt-4 pt-4 border-t border-white/[0.06]">
                <p className={`text-[10px] font-medium tracking-wide ${step.accent.text} opacity-70`}>
                  {step.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat strip */}
        <motion.div
          className="mt-10 grid grid-cols-3 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
          style={{ border: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "~20 min", label: "Average deploy time", color: "text-amber-400" },
            { value: "11", label: "OpenTofu modules", color: "text-sky-400" },
            { value: "0", label: "AWS credentials stored", color: "text-emerald-400" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="text-center py-8 px-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                borderRight: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
              }}
            >
              <p className={`text-2xl sm:text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-1.5 text-xs text-ir-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
