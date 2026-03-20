import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  Zap,
  Globe,
  Shield,
  TrendingUp,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const TIMELINE = [
  {
    year: "2021",
    title: "Founded",
    desc: "Ninja AI was born out of frustration with legacy software consultancies that talk strategy but never deploy. We started with a focus on pure execution.",
    color: "#00D4FF",
  },
  {
    year: "2022",
    title: "First 10 ERP Deployments",
    desc: "Rolled out Odoo and ERPNext for 10 companies across manufacturing and distribution. Learned what real-world implementation looks like.",
    color: "#7B2FFF",
  },
  {
    year: "2023",
    title: "AI Layer Launch",
    desc: "Started integrating AI into core business systems — CRM scoring, demand forecasting, document automation. AI became inseparable from our deployments.",
    color: "#00D4FF",
  },
  {
    year: "2024",
    title: "Ninja AI Lab Opens",
    desc: "Launched the Ninja AI Lab — an execution environment for builders who want to work on real systems alongside our team.",
    color: "#7B2FFF",
  },
  {
    year: "2025",
    title: "Scale Across SEA",
    desc: "Expanded beyond Vietnam. Projects running in Singapore, Thailand, and Indonesia. 50+ systems deployed and still operating.",
    color: "#00D4FF",
  },
];

const VALUES = [
  {
    icon: Zap,
    label: "Execution First",
    desc: "We build and ship. Strategy without execution is noise. Every engagement ends with deployed systems, not presentations.",
    color: "#00D4FF",
  },
  {
    icon: Shield,
    label: "Real Accountability",
    desc: "We own our deployments end-to-end. If it doesn't work, we fix it. Our reputation is built on outcomes, not deliverables.",
    color: "#7B2FFF",
  },
  {
    icon: Globe,
    label: "Systems Thinking",
    desc: "We design for the long term. Modular, scalable architectures that integrate cleanly and grow with your business.",
    color: "#00D4FF",
  },
  {
    icon: TrendingUp,
    label: "Measurable Impact",
    desc: "Every project has success metrics. We don't close engagements until the numbers move in the right direction.",
    color: "#7B2FFF",
  },
];

export function About() {
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
          className="absolute top-0 left-1/3 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#00D4FF" }}
            >
              About Us
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              We Build the Systems
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Others Only Talk About
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl leading-relaxed"
            >
              Ninja AI is an AI implementation company and innovation lab based in Ho Chi Minh City, Vietnam. We exist to close the gap between AI potential and real-world business outcomes.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid lg:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Target,
                label: "Our Mission",
                color: "#00D4FF",
                desc: "To deploy AI-powered systems that transform how businesses operate — making intelligence accessible, practical, and measurable for companies across Southeast Asia.",
              },
              {
                icon: Eye,
                label: "Our Vision",
                color: "#7B2FFF",
                desc: "A future where every mid-market business in Southeast Asia operates with AI-native infrastructure — and where the next generation of builders is forged through real execution.",
              },
              {
                icon: Heart,
                label: "Our Approach",
                color: "#00D4FF",
                desc: "We embed with your team, understand your operations, and deploy systems that actually get used. No bloated projects. No theory. Just systems that work.",
              },
            ].map(({ icon: Icon, label, color, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i}
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: `1px solid ${color}20`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={24} style={{ color }} />
                </div>
                <h2 className="text-white font-bold text-xl mb-3">{label}</h2>
                <p className="text-gray-400 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
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
            className="mb-16"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#7B2FFF" }}
            >
              Our Story
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl text-white"
              style={{ fontWeight: 700 }}
            >
              How We Got Here
            </motion.h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px hidden sm:block"
              style={{
                background: "linear-gradient(to bottom, #00D4FF44, #7B2FFF44, transparent)",
              }}
            />

            <div className="flex flex-col gap-8">
              {TIMELINE.map(({ year, title, desc, color }, i) => (
                <motion.div
                  key={year}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  variants={fadeUp}
                  custom={i * 0.5}
                  className="sm:pl-12 relative"
                >
                  {/* Dot */}
                  <div
                    className="absolute left-2 top-4 w-5 h-5 rounded-full border-2 hidden sm:flex items-center justify-center"
                    style={{
                      background: "#050814",
                      borderColor: color,
                      boxShadow: `0 0 12px ${color}60`,
                    }}
                  >
                    <div
                      className="w-2 h-2 rounded-full"
                      style={{ background: color }}
                    />
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full inline-block mb-3"
                      style={{
                        background: `${color}15`,
                        color,
                        border: `1px solid ${color}30`,
                      }}
                    >
                      {year}
                    </span>
                    <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              How We Operate
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl text-white"
              style={{ fontWeight: 700 }}
            >
              Our Values
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {VALUES.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i * 0.5}
                className="p-6 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{
                  borderColor: `${color}40`,
                  y: -4,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}15` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3 className="text-white font-semibold mb-2">{label}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
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
              Ready to Work Together?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 mb-8"
            >
              Whether you're looking for an AI implementation partner or want to build inside our lab, we're ready.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                }}
              >
                Get in Touch <ArrowRight size={16} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                See Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
