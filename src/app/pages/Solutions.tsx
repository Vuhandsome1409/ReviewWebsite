import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Users,
  Database,
  BarChart3,
  ShoppingCart,
  Bot,
  ArrowRight,
  Check,
  Layers,
  Globe,
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

const SOLUTIONS = [
  {
    icon: Users,
    label: "CRM",
    tagline: "Customer Intelligence at Scale",
    color: "#00D4FF",
    desc: "We design and deploy intelligent CRM systems that unify customer data, automate sales workflows, and power AI-driven relationship management. Built for enterprise scale with seamless integration.",
    features: [
      "AI lead scoring & prioritization",
      "Automated follow-up workflows",
      "360° customer data profiles",
      "Sales pipeline analytics",
      "Multi-channel communication hub",
    ],
    tech: ["Salesforce", "HubSpot", "Custom CRM", "AI Layer"],
  },
  {
    icon: Database,
    label: "ERP (Odoo / ERPNext)",
    tagline: "Enterprise Resource Planning Done Right",
    color: "#7B2FFF",
    desc: "Full ERP rollouts using Odoo and ERPNext — tailored to your industry, integrated with existing systems, and enhanced with AI modules for forecasting, procurement automation, and real-time reporting.",
    features: [
      "Odoo 17 & ERPNext deployment",
      "Custom module development",
      "AI demand forecasting",
      "Multi-company configuration",
      "Real-time inventory control",
    ],
    tech: ["Odoo", "ERPNext", "Python", "PostgreSQL"],
  },
  {
    icon: BarChart3,
    label: "DMS",
    tagline: "Distribution Management Intelligence",
    color: "#00D4FF",
    desc: "Dealer and distribution management systems that give you full visibility across your supply chain. Track orders, manage distributors, and optimize logistics with AI-powered routing.",
    features: [
      "Dealer performance tracking",
      "Territory management",
      "Order & returns management",
      "Real-time stock visibility",
      "Incentive & commission engine",
    ],
    tech: ["Custom Stack", "React", "Node.js", "AI Analytics"],
  },
  {
    icon: ShoppingCart,
    label: "POS Systems",
    tagline: "Smart Point-of-Sale Infrastructure",
    color: "#7B2FFF",
    desc: "Modern POS solutions deeply integrated with inventory, CRM, and accounting. Supports offline mode, multi-outlet management, and real-time dashboard monitoring.",
    features: [
      "Multi-outlet POS management",
      "Offline-capable architecture",
      "Inventory sync & alerts",
      "Loyalty & promotions engine",
      "End-of-day reporting automation",
    ],
    tech: ["Odoo POS", "Custom POS", "Mobile", "Cloud Sync"],
  },
  {
    icon: Globe,
    label: "E-Commerce",
    tagline: "Commerce Platforms Built for Scale",
    color: "#00D4FF",
    desc: "End-to-end ecommerce builds covering storefront, backend, payment integration, and AI-powered personalization. From B2C marketplaces to B2B order portals.",
    features: [
      "Custom storefront development",
      "Payment gateway integration",
      "AI product recommendations",
      "Inventory & order management",
      "Performance optimization",
    ],
    tech: ["Next.js", "Shopify", "WooCommerce", "Custom API"],
  },
  {
    icon: Layers,
    label: "CDC",
    tagline: "Customer Data Center",
    color: "#7B2FFF",
    desc: "Unified data infrastructure that centralizes customer information from all touchpoints — enabling real-time segmentation, behavioral analytics, and AI-powered marketing activation.",
    features: [
      "Unified customer profiles",
      "Cross-channel data ingestion",
      "Behavioral segmentation",
      "Real-time activation APIs",
      "Privacy & compliance built-in",
    ],
    tech: ["Kafka", "Snowflake", "dbt", "Python", "AI Layer"],
  },
  {
    icon: Bot,
    label: "AI Agents",
    tagline: "Autonomous Intelligence in Action",
    color: "#00D4FF",
    desc: "We build and deploy autonomous AI agents that handle complex multi-step tasks — from invoice processing and customer support to strategic data analysis and system orchestration.",
    features: [
      "Multi-agent architecture design",
      "Task automation & orchestration",
      "LLM-powered decision engines",
      "API & system integrations",
      "Monitoring & oversight dashboards",
    ],
    tech: ["LangChain", "OpenAI", "Anthropic", "Custom LLM"],
  },
];

export function Solutions() {
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
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.08) 0%, transparent 70%)",
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
              style={{ color: "#00D4FF" }}
            >
              Solutions
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Systems That{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Drive Results
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl leading-relaxed"
            >
              We don't sell software licenses. We implement, customize, and deploy complete business systems — then make them intelligent with AI.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {SOLUTIONS.map(({ icon: Icon, label, tagline, color, desc, features, tech }, i) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={0}
                className="p-8 rounded-2xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}15`, flexShrink: 0 }}
                      >
                        <Icon size={24} style={{ color }} />
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-xl">{label}</h2>
                        <p className="text-sm" style={{ color }}>{tagline}</p>
                      </div>
                    </div>
                    <p className="text-gray-400 leading-relaxed mb-6">{desc}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: "#9ca3af",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                      style={{ color }}
                    >
                      Discuss this solution <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">Key Capabilities</p>
                    <div className="flex flex-col gap-3">
                      {features.map((f) => (
                        <div key={f} className="flex items-start gap-3">
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                            style={{ background: `${color}20` }}
                          >
                            <Check size={12} style={{ color }} />
                          </div>
                          <span className="text-gray-300 text-sm">{f}</span>
                        </div>
                      ))}
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
              Not sure which system you need?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 mb-8"
            >
              We'll map your business processes and recommend the right architecture.
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
                Get a Free Consultation <Zap size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
