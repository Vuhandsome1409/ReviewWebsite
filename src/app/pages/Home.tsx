import { Link } from "react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Brain,
  Cpu,
  Database,
  ShoppingCart,
  Users,
  Bot,
  BarChart3,
  Zap,
  ChevronRight,
  TrendingUp,
  Clock,
  DollarSign,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const WHAT_WE_DO = [
  { icon: Brain, label: "AI Systems", color: "#00D4FF" },
  { icon: Zap, label: "Business Automation", color: "#7B2FFF" },
  { icon: Database, label: "ERP / CRM", color: "#00D4FF" },
  { icon: Cpu, label: "Digital Platforms", color: "#7B2FFF" },
  { icon: Bot, label: "Robotics & Agentic AI", color: "#00D4FF" },
];

const SOLUTIONS = [
  { icon: Users, label: "CRM", desc: "Intelligent customer relationship systems tailored for growth and retention.", color: "#00D4FF" },
  { icon: Database, label: "ERP (Odoo / ERPNext)", desc: "Full-scale enterprise resource planning deployments for operational excellence.", color: "#7B2FFF" },
  { icon: BarChart3, label: "DMS", desc: "Dealer & distribution management systems that streamline your supply chain.", color: "#00D4FF" },
  { icon: ShoppingCart, label: "POS Systems", desc: "Smart point-of-sale infrastructure integrated with inventory and analytics.", color: "#7B2FFF" },
  { icon: ShoppingCart, label: "E-Commerce", desc: "End-to-end ecommerce platforms built for scale and conversion.", color: "#00D4FF" },
  { icon: BarChart3, label: "CDC", desc: "Customer Data Centers – unified data infrastructure for real-time insights.", color: "#7B2FFF" },
  { icon: Bot, label: "AI Agents", desc: "Autonomous AI assistants that execute tasks, make decisions, and drive outcomes.", color: "#00D4FF" },
];

const METRICS = [
  { icon: TrendingUp, value: "3.5×", label: "Avg Efficiency Gain" },
  { icon: DollarSign, value: "60%", label: "Cost Reduction" },
  { icon: Clock, value: "90%", label: "Process Automation" },
  { icon: Cpu, value: "50+", label: "Systems Deployed" },
];

const PROJECTS = [
  {
    title: "AI-Powered CRM for Retail Chain",
    desc: "Deployed a full CRM with AI-driven lead scoring and automated follow-up workflows for a 200-outlet retail group.",
    tech: ["CRM", "AI Agents", "Automation"],
    metrics: ["+280% Lead Conversion", "-40% Manual Work", "3× Revenue Tracked"],
    img: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    title: "ERP Rollout for Manufacturing",
    desc: "Implemented Odoo ERP across 5 production facilities with real-time inventory, procurement automation, and AI demand forecasting.",
    tech: ["ERP", "Odoo", "AI Forecasting"],
    metrics: ["+65% Inventory Accuracy", "-30% Overstock", "Real-time Ops Visibility"],
    img: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    title: "Agentic AI Assistant for Finance",
    desc: "Built an autonomous AI agent that processes invoices, flags anomalies, and generates financial reports — cutting analyst time by 70%.",
    tech: ["AI Agents", "Automation", "Data Analytics"],
    metrics: ["-70% Report Time", "99.2% Invoice Accuracy", "24/7 Autonomous Ops"],
    img: "https://images.unsplash.com/photo-1770170389700-eb0f9b910ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

export function Home() {
  return (
    <div>
      {/* HERO */}
      <section
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #050814 0%, #0a0f28 50%, #050814 100%)",
        }}
      >
        {/* Glow blobs */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(123,47,255,0.12) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
              style={{
                background: "rgba(0,212,255,0.08)",
                border: "1px solid rgba(0,212,255,0.2)",
                color: "#00D4FF",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
              AI Implementation Partner · Vietnam
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl mb-6"
              style={{
                fontWeight: 700,
                lineHeight: 1.1,
                color: "white",
              }}
            >
              We Build{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                AI Systems
              </span>
              <br />
              That Transform Business
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl"
              style={{ lineHeight: 1.7 }}
            >
              From AI agents and ERP platforms to full-scale automation and agentic systems — Ninja AI deploys real-world solutions that drive measurable outcomes for modern enterprises.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.2)",
                }}
              >
                Explore Solutions
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                View Projects
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics bar */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {METRICS.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="flex items-center gap-3 px-5 py-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <Icon size={20} style={{ color: "#00D4FF" }} />
                <div>
                  <div className="text-white font-bold">{value}</div>
                  <div className="text-gray-500 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24" style={{ background: "#050814" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#00D4FF" }}
            >
              Core Capabilities
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white"
              style={{ fontWeight: 700 }}
            >
              What We Do
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {WHAT_WE_DO.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i}
                className="flex items-center gap-3 px-6 py-4 rounded-xl cursor-default"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: `1px solid ${color}22`,
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 20px ${color}30`,
                }}
              >
                <Icon size={22} style={{ color }} />
                <span className="text-white font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #050814 0%, #08101e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#7B2FFF" }}
            >
              Our Solutions
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white"
              style={{ fontWeight: 700 }}
            >
              Systems We Deploy
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {SOLUTIONS.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i * 0.5}
                className="group p-6 rounded-2xl cursor-default transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(10px)",
                }}
                whileHover={{
                  background: "rgba(255,255,255,0.06)",
                  borderColor: `${color}44`,
                  y: -4,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3
                  className="text-white font-semibold mb-2 text-base"
                >
                  {label}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-1 text-xs font-medium transition-colors"
                  style={{ color }}
                >
                  Learn more <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROJECTS / IMPACT */}
      <section className="py-24" style={{ background: "#050814" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-col lg:flex-row items-start lg:items-end justify-between mb-16 gap-4"
          >
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#00D4FF" }}
              >
                Impact Stories
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl lg:text-5xl text-white"
                style={{ fontWeight: 700 }}
              >
                Real Projects.<br />Real Results.
              </motion.h2>
            </div>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: "#00D4FF" }}
              >
                View all projects <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          >
            {PROJECTS.map(({ title, desc, tech, metrics, img }, i) => (
              <motion.div
                key={title}
                variants={fadeUp}
                custom={i}
                className="group rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{ y: -6 }}
              >
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 40%, rgba(5,8,20,0.9) 100%)",
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-3">
                    {tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(0,212,255,0.1)",
                          color: "#00D4FF",
                          border: "1px solid rgba(0,212,255,0.2)",
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-white font-semibold mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className="flex flex-col gap-1">
                    {metrics.map((m) => (
                      <div
                        key={m}
                        className="flex items-center gap-2 text-xs"
                        style={{ color: "#7B2FFF" }}
                      >
                        <TrendingUp size={12} />
                        {m}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PEOPLE & BUILDERS */}
      <section
        className="py-24"
        style={{
          background: "linear-gradient(180deg, #050814 0%, #08101e 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div>
              <motion.p
                variants={fadeUp}
                custom={0}
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#7B2FFF" }}
              >
                People & Builders
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl lg:text-5xl text-white mb-6"
                style={{ fontWeight: 700 }}
              >
                Operators.<br />Engineers.<br />Builders.
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-gray-400 text-lg leading-relaxed mb-8"
              >
                Our team is made up of experienced operators and AI engineers who have built and deployed real systems — not theorists. Every mentor is an active builder working on live projects.
              </motion.p>
              <motion.div variants={fadeUp} custom={3}>
                <Link
                  to="/people"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                  style={{
                    background: "rgba(123,47,255,0.1)",
                    border: "1px solid rgba(123,47,255,0.3)",
                    color: "#A78BFA",
                  }}
                >
                  Meet the Team <ArrowRight size={16} />
                </Link>
              </motion.div>
            </div>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { img: "https://images.unsplash.com/photo-1649151139875-ae8ea07082e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: "Minh Tran", role: "AI Systems Lead" },
                  { img: "https://images.unsplash.com/photo-1731419223715-aec6664f9011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: "Linh Nguyen", role: "ERP Architect" },
                  { img: "https://images.unsplash.com/photo-1625850902501-cc6baef3e3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: "Duc Pham", role: "Automation Engineer" },
                  { img: "https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: "An Le", role: "AI Agent Builder" },
                ].map(({ img, name, role }) => (
                  <div
                    key={name}
                    className="rounded-xl overflow-hidden relative group"
                    style={{
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <img
                      src={img}
                      alt={name}
                      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute bottom-0 left-0 right-0 p-3"
                      style={{
                        background: "linear-gradient(to top, rgba(5,8,20,0.95), transparent)",
                      }}
                    >
                      <p className="text-white text-sm font-medium">{name}</p>
                      <p className="text-gray-400 text-xs">{role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* NINJA AI LAB PREVIEW */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#050814" }}>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(123,47,255,0.08) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8"
              style={{
                background: "rgba(123,47,255,0.08)",
                border: "1px solid rgba(123,47,255,0.25)",
                color: "#A78BFA",
              }}
            >
              <Zap size={12} />
              Ninja AI Innovation Lab
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white mb-6"
              style={{ fontWeight: 700 }}
            >
              Where AI Builders
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Are Forged
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-lg leading-relaxed mb-10"
            >
              The Ninja AI Lab is a real-world execution environment. Builders work on actual business problems, deploy live systems, and collaborate with experienced operators — no simulations, no theory.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap justify-center gap-4"
            >
              <Link
                to="/lab"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 30px rgba(123,47,255,0.2)",
                }}
              >
                Explore the Lab <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Lab pillars */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {[
                { label: "Real Projects", icon: Cpu },
                { label: "Real Teams", icon: Users },
                { label: "Real Execution", icon: Zap },
                { label: "Real Impact", icon: TrendingUp },
              ].map(({ label, icon: Icon }, i) => (
                <div
                  key={label}
                  className="p-4 rounded-xl text-center"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <Icon size={22} className="mx-auto mb-2" style={{ color: "#00D4FF" }} />
                  <p className="text-white text-sm font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #08101e 0%, #050814 100%)",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-4xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700 }}
            >
              Ready to Build
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                the Future?
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 text-xl mb-12"
            >
              Work with a team that has deployed it before.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 40px rgba(0,212,255,0.25)",
                }}
              >
                Work With Us <ArrowRight size={18} />
              </Link>
              <Link
                to="/lab"
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                Join the Lab <Zap size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
