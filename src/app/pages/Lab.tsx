import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Brain,
  Users,
  Zap,
  TrendingUp,
  Code,
  Target,
  Shield,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const PILLARS = [
  {
    icon: Brain,
    label: "A. Knowledge",
    color: "#00D4FF",
    desc: "Practical AI, automation, and system architecture knowledge — gained by doing, not sitting in lectures.",
    points: [
      "AI system design patterns",
      "Automation architecture",
      "Data pipeline fundamentals",
      "LLM prompt engineering & deployment",
    ],
  },
  {
    icon: Code,
    label: "B. Skills",
    color: "#7B2FFF",
    desc: "You build real products — CRM systems, AI agents, automation workflows — in actual business contexts.",
    points: [
      "Build and ship CRM systems",
      "Deploy ERP modules",
      "Create AI agents from scratch",
      "Solve real business challenges",
    ],
  },
  {
    icon: Users,
    label: "C. Environment",
    color: "#00D4FF",
    desc: "You work inside a high-performance, execution-driven environment alongside mentors who are active operators.",
    points: [
      "Mentor-guided sprints",
      "Cross-functional team collaboration",
      "Peer code reviews and system audits",
      "Accountability-driven culture",
    ],
  },
  {
    icon: Target,
    label: "D. Real-World Execution",
    color: "#7B2FFF",
    desc: "Ninjas don't do practice problems. They participate in real client projects and deliver production systems.",
    points: [
      "Work on live client deployments",
      "Contribute to shipped products",
      "Build a portfolio with real impact",
      "Direct exposure to business operations",
    ],
  },
];

const WHAT_NINJAS_DO = [
  { icon: Zap, label: "Build real AI systems and automation workflows" },
  { icon: Target, label: "Work on actual business problems for real clients" },
  { icon: Users, label: "Collaborate in cross-functional builder teams" },
  { icon: TrendingUp, label: "Deploy solutions that generate measurable ROI" },
  { icon: Brain, label: "Work alongside experienced operators and architects" },
  { icon: Shield, label: "Ship production-grade code and systems" },
];

const LAB_PROJECTS = [
  {
    title: "AI Procurement Agent",
    builder: "Khoa N.",
    tech: ["LangChain", "Odoo API", "Python"],
    desc: "Autonomous agent that monitors inventory, triggers POs, and negotiates with vendors via email API.",
    status: "Production",
    color: "#00D4FF",
  },
  {
    title: "CRM Lead Scoring Engine",
    builder: "Phuong M.",
    tech: ["XGBoost", "CRM API", "FastAPI"],
    desc: "ML model predicting lead conversion probability, integrated into CRM for real-time scoring.",
    status: "Production",
    color: "#7B2FFF",
  },
  {
    title: "E-Commerce Analytics Dashboard",
    builder: "Long B.",
    tech: ["React", "Snowflake", "dbt"],
    desc: "Real-time analytics platform for a D2C brand tracking 200K+ orders with AI anomaly detection.",
    status: "Live",
    color: "#00D4FF",
  },
  {
    title: "Invoice OCR & Processing Bot",
    builder: "Trang H.",
    tech: ["GPT-4V", "FastAPI", "Odoo"],
    desc: "Reads invoices via OCR, validates data, and pushes structured records to ERP — fully automated.",
    status: "Production",
    color: "#7B2FFF",
  },
];

export function Lab() {
  return (
    <div style={{ background: "#050814", minHeight: "100vh" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #050814 0%, #0a0520 50%, #050814 100%)",
        }}
      >
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
              style={{
                background: "rgba(123,47,255,0.1)",
                border: "1px solid rgba(123,47,255,0.3)",
                color: "#A78BFA",
              }}
            >
              <Zap size={12} />
              Innovation Lab
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Ninja AI Lab
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Where AI Builders Are Forged
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            >
              Not a course. Not a bootcamp. The Ninja AI Lab is a real-world execution environment where individuals build and deploy AI systems that businesses actually use.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 40px rgba(123,47,255,0.25)",
                }}
              >
                Apply to Join the Lab <ArrowRight size={18} />
              </Link>
              <a
                href="#what-ninjas-do"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                Learn More
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Is This Lab */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#00D4FF" }}
              >
                What Is This Lab
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl lg:text-5xl text-white mb-6"
                style={{ fontWeight: 700 }}
              >
                A Real-World
                <span
                  style={{
                    display: "block",
                    background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Execution Environment
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-gray-400 text-lg leading-relaxed mb-6"
              >
                The Ninja AI Lab is where individuals who want to build real AI systems come to work, not learn theory. You'll be embedded in projects that matter — from CRM and ERP systems to AI agents and automation workflows.
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-gray-500 leading-relaxed"
              >
                Builders in the lab work alongside experienced operators, contribute to client projects, and leave with a portfolio of production systems. The lab is designed to turn motivated individuals into capable AI system builders through real execution.
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "100%", label: "Real Projects" },
                { value: "Live", label: "Production Systems" },
                { value: "Expert", label: "Mentors & Operators" },
                { value: "Proven", label: "Builder Outcomes" },
              ].map(({ value, label }) => (
                <div
                  key={label}
                  className="p-6 rounded-2xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div
                    className="text-3xl font-bold mb-2"
                    style={{
                      background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {value}
                  </div>
                  <p className="text-gray-400 text-sm">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Ninjas Do */}
      <section
        id="what-ninjas-do"
        className="py-20"
        style={{
          background: "linear-gradient(180deg, #050814 0%, #08101e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#7B2FFF" }}
            >
              The Work
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white"
              style={{ fontWeight: 700 }}
            >
              What Ninjas Do
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {WHAT_NINJAS_DO.map(({ icon: Icon, label }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i * 0.5}
                className="flex items-start gap-4 p-5 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,212,255,0.1)" }}
                >
                  <Icon size={20} style={{ color: "#00D4FF" }} />
                </div>
                <p className="text-gray-300 mt-2">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20" style={{ background: "#050814" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#00D4FF" }}
            >
              What You Gain
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white"
              style={{ fontWeight: 700 }}
            >
              The 4 Pillars of Value
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PILLARS.map(({ icon: Icon, label, color, desc, points }, i) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.5}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${color}20`,
                }}
                whileHover={{
                  borderColor: `${color}40`,
                  boxShadow: `0 0 30px ${color}10`,
                }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${color}15` }}
                  >
                    <Icon size={24} style={{ color }} />
                  </div>
                  <h3 className="text-white font-bold text-lg">{label}</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-5">{desc}</p>
                <div className="flex flex-col gap-2.5">
                  {points.map((p) => (
                    <div key={p} className="flex items-start gap-2">
                      <CheckCircle2 size={14} className="mt-0.5 flex-shrink-0" style={{ color }} />
                      <span className="text-gray-300 text-sm">{p}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Built in Lab */}
      <section
        className="py-20"
        style={{
          background: "linear-gradient(180deg, #050814 0%, #08101e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="mb-12"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#7B2FFF" }}
            >
              Lab Outputs
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl text-white"
              style={{ fontWeight: 700 }}
            >
              Systems Built by Ninjas
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LAB_PROJECTS.map(({ title, builder, tech, desc, status, color }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.5}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full"
                    style={{
                      background: "rgba(16,185,129,0.1)",
                      color: "#10b981",
                      border: "1px solid rgba(16,185,129,0.2)",
                    }}
                  >
                    {status}
                  </span>
                  <span className="text-gray-600 text-xs">by {builder}</span>
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">{title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-0.5 rounded"
                      style={{
                        background: `${color}10`,
                        color: `${color}cc`,
                        border: `1px solid ${color}20`,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 relative overflow-hidden" style={{ background: "#050814" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(123,47,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-4xl lg:text-5xl text-white font-bold mb-4"
            >
              Ready to Become a Ninja?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 text-lg mb-10"
            >
              Apply to join the lab. Work on real systems. Build real things. Create real impact.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 40px rgba(123,47,255,0.2)",
                }}
              >
                Apply to Join the Lab <ArrowRight size={18} />
              </Link>
              <Link
                to="/people"
                className="inline-flex items-center gap-2 px-10 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                Meet the Builders <Users size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
