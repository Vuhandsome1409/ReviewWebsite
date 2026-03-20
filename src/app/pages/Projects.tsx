import { Link } from "react-router";
import { motion } from "motion/react";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  Zap,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const PROJECTS = [
  {
    id: 1,
    title: "AI-Powered CRM for National Retail Chain",
    industry: "Retail",
    tags: ["CRM", "AI Agents", "Automation"],
    color: "#00D4FF",
    img: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem:
      "A 200-outlet retail chain had no unified CRM. Sales data was fragmented across Excel, WhatsApp, and 3 legacy tools. Follow-up was manual, inconsistent, and slow.",
    solution:
      "We deployed a custom CRM integrated with AI lead scoring, automated follow-up via WhatsApp/email, and a real-time sales dashboard. AI agents handle initial contact, qualification, and handoff to human sales reps.",
    tech: ["CRM", "AI Agents", "Automation", "Analytics"],
    results: [
      "+280% Lead Conversion Rate",
      "-40% Manual Sales Work",
      "3× Revenue Tracking Accuracy",
      "100% Follow-up Coverage",
    ],
  },
  {
    id: 2,
    title: "Odoo ERP Rollout for Manufacturing Group",
    industry: "Manufacturing",
    tags: ["ERP", "Odoo", "AI Forecasting"],
    color: "#7B2FFF",
    img: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem:
      "A manufacturing group with 5 production facilities had siloed systems. Inventory overstock was causing $200K/month in losses. Procurement was reactive, not data-driven.",
    solution:
      "Full Odoo ERP deployment across all facilities with custom modules for production planning, AI demand forecasting, and automated procurement triggers. Real-time dashboards replaced weekly manual reports.",
    tech: ["ERP", "Odoo", "Python", "AI Forecasting"],
    results: [
      "+65% Inventory Accuracy",
      "-30% Overstock (saves $60K/month)",
      "Real-time Operations Visibility",
      "Procurement Automation 80%",
    ],
  },
  {
    id: 3,
    title: "Autonomous AI Finance Assistant",
    industry: "Financial Services",
    tags: ["AI Agents", "Automation", "Analytics"],
    color: "#00D4FF",
    img: "https://images.unsplash.com/photo-1770170389700-eb0f9b910ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem:
      "A mid-size financial services firm had a 12-person team spending 70% of their time on invoice processing, reconciliation, and monthly report generation. Error rates were 8%.",
    solution:
      "Built an autonomous AI agent that ingests invoices (PDF, email, scan), extracts structured data, validates against PO records, flags anomalies, and generates automated financial reports — escalating only edge cases to humans.",
    tech: ["AI Agents", "LLM", "Automation", "Data Pipeline"],
    results: [
      "-70% Report Generation Time",
      "99.2% Invoice Processing Accuracy",
      "24/7 Autonomous Operations",
      "$180K Annual Labor Savings",
    ],
  },
  {
    id: 4,
    title: "Nationwide DMS for FMCG Distributor",
    industry: "FMCG / Distribution",
    tags: ["DMS", "ERP", "Mobile"],
    color: "#7B2FFF",
    img: "https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problem:
      "A national FMCG distributor with 1,200 dealers had no centralized distribution visibility. Route optimization was manual, order tracking was paper-based, and KPIs were measured monthly, not in real time.",
    solution:
      "Deployed a custom Distribution Management System (DMS) with mobile app for field reps, real-time order tracking, route optimization engine, and dealer performance analytics dashboard for management.",
    tech: ["DMS", "Mobile App", "API", "Real-time Analytics"],
    results: [
      "+45% Delivery Efficiency",
      "Real-time Dealer Visibility",
      "-25% Logistics Cost",
      "100% Digital Order Capture",
    ],
  },
];

export function Projects() {
  return (
    <div style={{ background: "#050814", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #050814 0%, #0a0f28 60%, #050814 100%)",
        }}
      >
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(123,47,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#7B2FFF" }}
            >
              Case Studies
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Projects That{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Actually Shipped
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl leading-relaxed"
            >
              Every project is a real deployment with measurable outcomes. No mockups. No case study theater. Just systems built, shipped, and running.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {PROJECTS.map(({ title, industry, tags, color, img, problem, solution, tech, results }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={0}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Header image */}
                <div className="relative h-56 sm:h-72 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(5,8,20,0.85) 0%, rgba(5,8,20,0.4) 60%, transparent 100%)",
                    }}
                  />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: `${color}20`,
                          border: `1px solid ${color}40`,
                          color,
                        }}
                      >
                        {industry}
                      </span>
                      {tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            color: "#9ca3af",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-white text-2xl font-bold">{title}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8">
                    {/* Problem */}
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: "#ef4444" }}
                      >
                        The Problem
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">{problem}</p>
                    </div>
                    {/* Solution */}
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color }}
                      >
                        Our Solution
                      </p>
                      <p className="text-gray-400 text-sm leading-relaxed">{solution}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {tech.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-2 py-0.5 rounded"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              color: "#6b7280",
                            }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                    {/* Results */}
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color: "#10b981" }}
                      >
                        Results
                      </p>
                      <div className="flex flex-col gap-2">
                        {results.map((r) => (
                          <div key={r} className="flex items-start gap-2">
                            <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color: "#10b981" }} />
                            <span className="text-gray-300 text-sm">{r}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl lg:text-4xl text-white font-bold mb-4"
            >
              Your Business Could Be Next
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 mb-8"
            >
              Let's understand your challenges and design a system that delivers real outcomes.
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                }}
              >
                Start a Project <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
