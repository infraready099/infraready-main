"use client";

import { motion, type Variants } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  {
    label: "You own the infra",
    infraready: true,
    railway: false,
    porter: true,
    diy: true,
  },
  {
    label: "No Kubernetes required",
    infraready: true,
    railway: true,
    porter: false,
    diy: "Depends",
  },
  {
    label: "SOC2-ready baseline",
    infraready: true,
    railway: false,
    porter: false,
    diy: false,
  },
  {
    label: "AWS Activate credits",
    infraready: true,
    railway: false,
    porter: false,
    diy: true,
  },
  {
    label: "Open source IaC",
    infraready: true,
    railway: false,
    porter: false,
    diy: "Maybe",
  },
  {
    label: "Setup time",
    infraready: "20 min",
    railway: "5 min",
    porter: "Days",
    diy: "Weeks",
  },
  {
    label: "Monthly platform cost",
    infraready: "From $29",
    railway: "$20–500+",
    porter: "$499+",
    diy: "$0 + eng cost",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const rowAnim: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

function CellValue({ value, highlight }: { value: boolean | string; highlight?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex items-center justify-center ${highlight ? "text-emerald-400" : "text-emerald-400/70"}`}>
        <Check size={18} strokeWidth={2.5} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex items-center justify-center text-red-400/60">
        <X size={16} strokeWidth={2} />
      </span>
    );
  }
  // String value
  return (
    <span className={`text-xs font-medium ${highlight ? "text-ir-text" : "text-ir-secondary"}`}>
      {value}
    </span>
  );
}

export default function Comparison() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(14,165,233,0.04) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true, margin: "-80px" }}
        >
          <p className="text-sm font-semibold text-sky-400 tracking-widest uppercase mb-3">
            Why InfraReady?
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ir-text tracking-tight">
            InfraReady vs{" "}
            <span className="gradient-text">The Alternatives</span>
          </h2>
          <p className="mt-4 text-ir-secondary max-w-xl mx-auto text-base">
            Not all deployment platforms are equal. Here&apos;s why founders
            who care about ownership choose InfraReady.
          </p>
        </motion.div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
          viewport={{ once: true, margin: "-80px" }}
          className="overflow-x-auto rounded-2xl"
        >
          <table className="w-full min-w-[640px]" style={{ borderCollapse: "separate", borderSpacing: 0 }}>
            {/* Column headers */}
            <thead>
              <tr>
                <th className="text-left py-5 px-5 text-sm font-semibold text-ir-muted w-48 rounded-tl-2xl"
                  style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  Feature
                </th>
                {/* InfraReady — highlighted column */}
                <th className="py-5 px-4 text-center"
                  style={{
                    background: "rgba(14,165,233,0.06)",
                    borderLeft: "1px solid rgba(14,165,233,0.25)",
                    borderRight: "1px solid rgba(14,165,233,0.25)",
                    borderBottom: "1px solid rgba(14,165,233,0.25)",
                    borderTop: "1px solid rgba(14,165,233,0.25)",
                  }}>
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-sm font-bold text-sky-400">InfraReady</span>
                    <span className="text-[10px] font-semibold text-emerald-400 uppercase tracking-widest bg-emerald-400/10 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                      Recommended
                    </span>
                  </div>
                </th>
                <th className="py-5 px-4 text-center text-sm font-semibold text-ir-secondary"
                  style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  Railway / Render
                </th>
                <th className="py-5 px-4 text-center text-sm font-semibold text-ir-secondary"
                  style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  Porter (k8s)
                </th>
                <th className="py-5 px-4 text-center text-sm font-semibold text-ir-secondary rounded-tr-2xl"
                  style={{ background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
                  DIY DevOps
                </th>
              </tr>
            </thead>

            {/* Rows */}
            <motion.tbody
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-80px" }}
            >
              {rows.map((row, i) => {
                const isLast = i === rows.length - 1;
                return (
                  <motion.tr
                    key={row.label}
                    variants={rowAnim}
                    className="group"
                  >
                    {/* Label */}
                    <td
                      className={`py-4 px-5 text-sm text-ir-secondary font-medium ${isLast ? "rounded-bl-2xl" : ""}`}
                      style={{
                        background: "rgba(255,255,255,0.015)",
                        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                        transition: "background 0.2s",
                      }}
                    >
                      {row.label}
                    </td>

                    {/* InfraReady — highlighted */}
                    <td
                      className="py-4 px-4 text-center"
                      style={{
                        background: "rgba(14,165,233,0.05)",
                        borderLeft: "1px solid rgba(14,165,233,0.2)",
                        borderRight: "1px solid rgba(14,165,233,0.2)",
                        borderBottom: isLast ? "1px solid rgba(14,165,233,0.2)" : "1px solid rgba(14,165,233,0.12)",
                      }}
                    >
                      <CellValue value={row.infraready} highlight />
                    </td>

                    {/* Railway */}
                    <td
                      className="py-4 px-4 text-center"
                      style={{
                        background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.01)",
                        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <CellValue value={row.railway} />
                    </td>

                    {/* Porter */}
                    <td
                      className="py-4 px-4 text-center"
                      style={{
                        background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.01)",
                        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <CellValue value={row.porter} />
                    </td>

                    {/* DIY */}
                    <td
                      className={`py-4 px-4 text-center ${isLast ? "rounded-br-2xl" : ""}`}
                      style={{
                        background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "rgba(255,255,255,0.01)",
                        borderBottom: isLast ? "none" : "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      <CellValue value={row.diy} />
                    </td>
                  </motion.tr>
                );
              })}
            </motion.tbody>
          </table>
        </motion.div>

        {/* Footer note */}
        <motion.p
          className="text-center mt-6 text-xs text-ir-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          viewport={{ once: true }}
        >
          Pricing estimates as of 2025. Porter entry pricing at $499/mo for managed k8s.
          Railway charges per resource above free tier.
        </motion.p>
      </div>
    </section>
  );
}
