"use client";

import {
  Lock,
  ShieldCheck,
  Code2,
  Layers,
  Activity,
  CreditCard,
} from "lucide-react";
import { motion, type Variants } from "framer-motion";

const features = [
  {
    icon: Lock,
    title: "Your AWS, your rules",
    description:
      "Infrastructure deploys directly into YOUR AWS account. You own every resource. No vendor lock-in, no data leaving your cloud. Pull the plug anytime.",
    accent: "sky",
  },
  {
    icon: ShieldCheck,
    title: "SOC2-ready from day one",
    description:
      "Least-privilege IAM roles, encryption at rest via KMS, CloudTrail audit logging, GuardDuty threat detection, and Config compliance rules — all enabled by default.",
    accent: "violet",
  },
  {
    icon: Code2,
    title: "OpenTofu native",
    description:
      "Built on OpenTofu — the open-source Terraform fork with a clean MPL license. No BSL risk. Full state visibility in your own S3 bucket. Standard HCL you can read.",
    accent: "cyan",
  },
  {
    icon: Layers,
    title: "VPC + RDS + ECS + CDN",
    description:
      "One click deploys your entire production stack: isolated VPC with private subnets, RDS PostgreSQL Multi-AZ, ECS Fargate, S3 storage, and CloudFront CDN.",
    accent: "sky",
  },
  {
    icon: Activity,
    title: "Real-time deploy logs",
    description:
      "Watch every AWS resource being created live. No black box. You see exactly what InfraReady is doing — and you can replay or cancel at any time.",
    accent: "emerald",
  },
  {
    icon: CreditCard,
    title: "AWS Activate compatible",
    description:
      "Have $10k–$100k in AWS Activate credits you can't use? InfraReady helps you activate and apply them. We're the fastest way to burn credits on real infrastructure.",
    accent: "orange",
  },
];

const accentMap: Record<string, { icon: string; border: string; glow: string }> = {
  sky: {
    icon: "text-sky-400",
    border: "rgba(14,165,233,0.2)",
    glow: "rgba(14,165,233,0.08)",
  },
  violet: {
    icon: "text-violet-400",
    border: "rgba(167,139,250,0.2)",
    glow: "rgba(167,139,250,0.08)",
  },
  cyan: {
    icon: "text-cyan-400",
    border: "rgba(34,211,238,0.2)",
    glow: "rgba(34,211,238,0.08)",
  },
  emerald: {
    icon: "text-emerald-400",
    border: "rgba(52,211,153,0.2)",
    glow: "rgba(52,211,153,0.08)",
  },
  orange: {
    icon: "text-orange-400",
    border: "rgba(251,146,60,0.2)",
    glow: "rgba(251,146,60,0.08)",
  },
};

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.25, 0, 0.25, 1] } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 lg:py-32 relative"
      style={{
        background:
          "linear-gradient(180deg, #04091A 0%, #060d24 50%, #04091A 100%)",
      }}
    >
      {/* Dot grid overlay */}
      <div className="absolute inset-0 dot-grid opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold text-sky-400 tracking-widest uppercase mb-3">
            Features
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            Everything you need.{" "}
            <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="mt-4 text-ir-secondary max-w-xl mx-auto text-base">
            Built for founders who want production-grade infrastructure
            without hiring a DevOps engineer.
          </p>
        </motion.div>

        {/* Feature grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {features.map((feature) => {
            const Icon = feature.icon;
            const accent = accentMap[feature.accent] ?? accentMap.sky;

            return (
              <motion.div
                key={feature.title}
                variants={item}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative glass-card rounded-2xl p-6 glass-card-hover cursor-default"
              >
                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                  style={{
                    background: accent.glow,
                    border: `1px solid ${accent.border}`,
                  }}
                >
                  <Icon
                    className={`w-5 h-5 ${accent.icon}`}
                    strokeWidth={1.75}
                  />
                </div>

                {/* Content */}
                <h3 className="text-base font-bold text-ir-text mb-2.5 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-sm text-ir-secondary leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow spot */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 30% 20%, ${accent.glow} 0%, transparent 60%)`,
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
