"use client";

import { Github, ShieldCheck, Rocket } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const steps = [
  {
    number: "01",
    icon: Github,
    title: "Connect GitHub",
    description:
      "Sign in with GitHub OAuth. InfraReady reads your repo to detect your stack — Next.js, Node, Python, or any containerized app. No config files. No yaml. It just works.",
    detail: "OAuth · Repo detection · Auto-framework config",
  },
  {
    number: "02",
    icon: ShieldCheck,
    title: "Link your AWS account",
    description:
      "Deploy one CloudFormation bootstrap stack (takes 90 seconds). This creates a minimal IAM role with least-privilege access. InfraReady never stores your AWS credentials.",
    detail: "Cross-account IAM · No admin access · SOC2-compliant",
  },
  {
    number: "03",
    icon: Rocket,
    title: "We handle the rest",
    description:
      "InfraReady runs OpenTofu to provision your full production stack: VPC, private subnets, RDS Multi-AZ, ECS Fargate, S3, and CloudFront CDN — all in your own AWS account.",
    detail: "VPC · RDS · ECS · S3 · CloudFront · Done in ~20 min",
  },
];

const container: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0, 0.25, 1] } },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(14,165,233,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold text-sky-400 tracking-widest uppercase mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            Deploy in{" "}
            <span className="gradient-text">3 steps</span>
          </h2>
          <p className="mt-4 text-ir-secondary max-w-xl mx-auto text-base">
            From zero to production AWS infrastructure in under 20 minutes.
            No terminal required.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Desktop connector line */}
          <div className="hidden lg:flex absolute top-14 left-0 right-0 items-center px-48 pointer-events-none">
            <div className="flex-1 border-t border-dashed border-sky-500/20" />
            <div className="flex-1 border-t border-dashed border-sky-500/20" />
          </div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div key={step.number} variants={item} className="relative flex flex-col">
                  {/* Step number + icon */}
                  <div className="flex lg:flex-col items-start lg:items-center gap-5 lg:gap-0 mb-6 lg:mb-8">
                    <div className="relative flex-shrink-0">
                      {/* Number badge */}
                      <div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center relative z-10"
                        style={{
                          background:
                            "linear-gradient(135deg, rgba(14,165,233,0.2) 0%, rgba(167,139,250,0.15) 100%)",
                          border: "1px solid rgba(14,165,233,0.25)",
                        }}
                      >
                        <Icon className="w-6 h-6 text-sky-400" strokeWidth={1.5} />
                      </div>
                      {/* Connector arrow for mobile */}
                      {index < steps.length - 1 && (
                        <div className="lg:hidden absolute -bottom-8 left-7 w-px h-8 border-l border-dashed border-sky-500/20" />
                      )}
                    </div>

                    <div className="lg:mt-6 lg:text-center">
                      <span className="text-xs font-bold text-sky-500/60 tracking-widest">
                        STEP {step.number}
                      </span>
                      <h3 className="mt-1 text-xl font-bold text-ir-text tracking-tight">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="glass-card rounded-2xl p-6 glass-card-hover flex-1 lg:text-center">
                    <p className="text-ir-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                    <div className="mt-5 pt-4 border-t border-white/5">
                      <p className="text-xs font-medium text-sky-400/70 tracking-wide">
                        {step.detail}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom stat strip */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-px rounded-2xl overflow-hidden border border-white/5"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true, margin: "-80px" }}
        >
          {[
            { value: "~20 min", label: "Average deploy time" },
            { value: "11", label: "OpenTofu modules" },
            { value: "0", label: "AWS credentials stored" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-8 px-4"
              style={{ background: "rgba(255,255,255,0.02)" }}
            >
              <p className="text-2xl sm:text-3xl font-bold gradient-text-subtle">
                {stat.value}
              </p>
              <p className="mt-1.5 text-sm text-ir-muted">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
