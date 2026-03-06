"use client";

import { Lock, ShieldCheck, Code2, Layers, Activity, CreditCard } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0, 0.25, 1] } },
};

/** Mini architecture diagram for "Your AWS, your rules" */
function AwsArchDiagram() {
  return (
    <div className="flex items-center gap-2 text-[10px] font-mono select-none mt-4 flex-wrap">
      {["VPC", "RDS", "ECS", "S3", "CDN"].map((node, i) => (
        <div key={node} className="flex items-center gap-2">
          <div className="px-2 py-1 rounded-md border border-sky-500/30 bg-sky-500/10 text-sky-300 font-semibold">
            {node}
          </div>
          {i < 4 && <span className="text-slate-600">→</span>}
        </div>
      ))}
      <div className="ml-auto mt-1 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-emerald-400/70">your account</span>
      </div>
    </div>
  );
}

/** Mini infra stack for "VPC + RDS + ECS + CDN" */
function InfraStackVisual() {
  const layers = [
    { label: "CloudFront CDN", color: "border-violet-500/40 bg-violet-500/10 text-violet-300" },
    { label: "ECS Fargate (app)", color: "border-sky-500/40 bg-sky-500/10 text-sky-300" },
    { label: "RDS PostgreSQL (Multi-AZ)", color: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300" },
    { label: "VPC + Private Subnets", color: "border-slate-500/40 bg-slate-500/10 text-slate-300" },
  ];
  return (
    <div className="mt-4 space-y-1.5">
      {layers.map((l) => (
        <div key={l.label} className={`text-[10px] font-mono px-3 py-1.5 rounded-lg border ${l.color} flex items-center justify-between`}>
          <span>{l.label}</span>
          <span className="opacity-50">✓</span>
        </div>
      ))}
    </div>
  );
}

/** SOC2 checklist visual */
function Soc2Visual() {
  const items = ["GuardDuty", "CloudTrail", "KMS", "Config"];
  return (
    <div className="mt-4 grid grid-cols-2 gap-1.5">
      {items.map((i) => (
        <div key={i} className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400/80">
          <span className="text-emerald-400">✓</span>
          <span>{i}</span>
        </div>
      ))}
    </div>
  );
}

/** OpenTofu HCL snippet */
function OpenTofuSnippet() {
  return (
    <div className="mt-4 rounded-lg bg-black/30 border border-white/[0.06] p-3 text-[10px] font-mono leading-relaxed">
      <span className="text-violet-400">resource</span>{" "}
      <span className="text-sky-300">&quot;aws_vpc&quot;</span>{" "}
      <span className="text-emerald-300">&quot;main&quot;</span>{" "}
      <span className="text-slate-400">{"{"}</span>
      <br />
      <span className="text-slate-500">&nbsp;&nbsp;cidr_block</span>{" "}
      <span className="text-slate-400">=</span>{" "}
      <span className="text-yellow-300">&quot;10.0.0.0/16&quot;</span>
      <br />
      <span className="text-slate-400">{"}"}</span>
    </div>
  );
}

/** Live log mini preview */
function LiveLogVisual() {
  return (
    <div className="mt-4 space-y-1 text-[10px] font-mono">
      {[
        { dot: "bg-emerald-400", text: "vpc created" },
        { dot: "bg-emerald-400", text: "rds provisioning..." },
        { dot: "bg-sky-400 animate-pulse", text: "ecs deploying" },
      ].map((l, i) => (
        <div key={i} className="flex items-center gap-2 text-slate-400">
          <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${l.dot}`} />
          {l.text}
        </div>
      ))}
    </div>
  );
}

/** AWS Activate credit meter */
function ActivateVisual() {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-[10px] font-mono mb-1.5">
        <span className="text-slate-500">AWS Activate credits</span>
        <span className="text-orange-400 font-semibold">$15,000</span>
      </div>
      <div className="h-2 rounded-full bg-white/[0.05] overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: "68%",
            background: "linear-gradient(90deg, #f97316, #fb923c)",
          }}
        />
      </div>
      <p className="text-[10px] text-slate-600 mt-1">68% credits applied to infra</p>
    </div>
  );
}

const cards = [
  {
    icon: Lock,
    accent: { icon: "text-cyan-400", border: "rgba(14,165,233,0.25)", bg: "rgba(14,165,233,0.08)" },
    title: "Your AWS, your rules",
    description:
      "Infrastructure deploys directly into YOUR AWS account. You own every resource. No vendor lock-in, no data leaving your cloud.",
    visual: <AwsArchDiagram />,
    wide: true,
  },
  {
    icon: ShieldCheck,
    accent: { icon: "text-emerald-400", border: "rgba(52,211,153,0.25)", bg: "rgba(52,211,153,0.08)" },
    title: "SOC2-ready from day one",
    description:
      "Least-privilege IAM, KMS encryption, CloudTrail, GuardDuty, and Config rules — all enabled by default.",
    visual: <Soc2Visual />,
    wide: false,
  },
  {
    icon: Code2,
    accent: { icon: "text-violet-400", border: "rgba(167,139,250,0.25)", bg: "rgba(167,139,250,0.08)" },
    title: "OpenTofu native",
    description:
      "Open-source Terraform fork, clean MPL license. No BSL risk. Full state in your own S3 bucket.",
    visual: <OpenTofuSnippet />,
    wide: false,
  },
  {
    icon: Layers,
    accent: { icon: "text-cyan-400", border: "rgba(34,211,238,0.25)", bg: "rgba(34,211,238,0.08)" },
    title: "Full production stack in one click",
    description:
      "VPC with private subnets, RDS Multi-AZ, ECS Fargate, S3 storage, and CloudFront CDN — provisioned together.",
    visual: <InfraStackVisual />,
    wide: true,
  },
  {
    icon: Activity,
    accent: { icon: "text-cyan-400", border: "rgba(14,165,233,0.25)", bg: "rgba(14,165,233,0.08)" },
    title: "Real-time deploy logs",
    description:
      "Watch every AWS resource created live. No black box. Cancel or replay anytime.",
    visual: <LiveLogVisual />,
    wide: false,
  },
  {
    icon: CreditCard,
    accent: { icon: "text-orange-400", border: "rgba(251,146,60,0.25)", bg: "rgba(251,146,60,0.08)" },
    title: "AWS Activate compatible",
    description:
      "Have $10k–$100k in credits you can't use? InfraReady helps you activate and apply them fast.",
    visual: <ActivateVisual />,
    wide: false,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 relative"
      style={{
        background: "linear-gradient(180deg, #04091A 0%, #060d24 50%, #04091A 100%)",
      }}
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-xs font-semibold text-cyan-400 tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-ir-secondary max-w-xl mx-auto text-sm">
            Built for founders who want production-grade infrastructure
            without hiring a DevOps engineer.
          </p>
        </motion.div>

        <motion.div
          className="bento-grid"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                variants={item}
                whileHover={{ y: -3, transition: { duration: 0.2 } }}
                className={`${card.wide ? "bento-wide" : ""} group relative glass-card rounded-2xl p-6 glass-card-hover cursor-default will-change-transform flex flex-col`}
              >
                {/* Icon */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: card.accent.bg, border: `1px solid ${card.accent.border}` }}
                >
                  <Icon className={`w-5 h-5 ${card.accent.icon}`} strokeWidth={1.75} />
                </div>

                {/* Text */}
                <h3 className="mt-4 text-base font-bold text-ir-text tracking-tight">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-ir-secondary leading-relaxed">
                  {card.description}
                </p>

                {/* Visual content */}
                {card.visual}

                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 20% 20%, ${card.accent.bg} 0%, transparent 60%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
