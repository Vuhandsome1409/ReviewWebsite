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
import { useLanguage } from "../contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const SOLUTIONS_DATA = (t: (key: string) => string) => [
  {
    icon: Users,
    label: t("solutions.crm.label"),
    tagline: t("solutions.crm.tagline"),
    color: "#CA8A04",
    desc: t("solutions.crm.desc"),
    features: [
      t("solutions.crm.feature1"),
      t("solutions.crm.feature2"),
      t("solutions.crm.feature3"),
      t("solutions.crm.feature4"),
      t("solutions.crm.feature5"),
    ],
    tech: [
      t("solutions.crm.tech1"),
      t("solutions.crm.tech2"),
      t("solutions.crm.tech3"),
      t("solutions.crm.tech4"),
    ],
  },
  {
    icon: Database,
    label: t("solutions.erp.label"),
    tagline: t("solutions.erp.tagline"),
    color: "#8B5CF6",
    desc: t("solutions.erp.desc"),
    features: [
      t("solutions.erp.feature1"),
      t("solutions.erp.feature2"),
      t("solutions.erp.feature3"),
      t("solutions.erp.feature4"),
      t("solutions.erp.feature5"),
    ],
    tech: [
      t("solutions.erp.tech1"),
      t("solutions.erp.tech2"),
      t("solutions.erp.tech3"),
      t("solutions.erp.tech4"),
    ],
  },
  {
    icon: BarChart3,
    label: t("solutions.dms.label"),
    tagline: t("solutions.dms.tagline"),
    color: "#CA8A04",
    desc: t("solutions.dms.desc"),
    features: [
      t("solutions.dms.feature1"),
      t("solutions.dms.feature2"),
      t("solutions.dms.feature3"),
      t("solutions.dms.feature4"),
      t("solutions.dms.feature5"),
    ],
    tech: [
      t("solutions.dms.tech1"),
      t("solutions.dms.tech2"),
      t("solutions.dms.tech3"),
      t("solutions.dms.tech4"),
    ],
  },
  {
    icon: ShoppingCart,
    label: t("solutions.pos.label"),
    tagline: t("solutions.pos.tagline"),
    color: "#8B5CF6",
    desc: t("solutions.pos.desc"),
    features: [
      t("solutions.pos.feature1"),
      t("solutions.pos.feature2"),
      t("solutions.pos.feature3"),
      t("solutions.pos.feature4"),
      t("solutions.pos.feature5"),
    ],
    tech: [
      t("solutions.pos.tech1"),
      t("solutions.pos.tech2"),
      t("solutions.pos.tech3"),
      t("solutions.pos.tech4"),
    ],
  },
  {
    icon: Globe,
    label: t("solutions.ecommerce.label"),
    tagline: t("solutions.ecommerce.tagline"),
    color: "#CA8A04",
    desc: t("solutions.ecommerce.desc"),
    features: [
      t("solutions.ecommerce.feature1"),
      t("solutions.ecommerce.feature2"),
      t("solutions.ecommerce.feature3"),
      t("solutions.ecommerce.feature4"),
      t("solutions.ecommerce.feature5"),
    ],
    tech: [
      t("solutions.ecommerce.tech1"),
      t("solutions.ecommerce.tech2"),
      t("solutions.ecommerce.tech3"),
      t("solutions.ecommerce.tech4"),
    ],
  },
  {
    icon: Layers,
    label: t("solutions.cdc.label"),
    tagline: t("solutions.cdc.tagline"),
    color: "#8B5CF6",
    desc: t("solutions.cdc.desc"),
    features: [
      t("solutions.cdc.feature1"),
      t("solutions.cdc.feature2"),
      t("solutions.cdc.feature3"),
      t("solutions.cdc.feature4"),
      t("solutions.cdc.feature5"),
    ],
    tech: [
      t("solutions.cdc.tech1"),
      t("solutions.cdc.tech2"),
      t("solutions.cdc.tech3"),
      t("solutions.cdc.tech4"),
      t("solutions.cdc.tech5"),
    ],
  },
  {
    icon: Bot,
    label: t("solutions.aiAgents.label"),
    tagline: t("solutions.aiAgents.tagline"),
    color: "#CA8A04",
    desc: t("solutions.aiAgents.desc"),
    features: [
      t("solutions.aiAgents.feature1"),
      t("solutions.aiAgents.feature2"),
      t("solutions.aiAgents.feature3"),
      t("solutions.aiAgents.feature4"),
      t("solutions.aiAgents.feature5"),
    ],
    tech: [
      t("solutions.aiAgents.tech1"),
      t("solutions.aiAgents.tech2"),
      t("solutions.aiAgents.tech3"),
      t("solutions.aiAgents.tech4"),
    ],
  },
];

export function Solutions() {
  const { t } = useLanguage();
  const solutions = SOLUTIONS_DATA(t);

  return (
    <div className="aurora-bg" style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/pic_company/team_dev.jpg" 
            alt="Team Development"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.88) 50%, rgba(10,14,39,0.92) 100%)"
          }}></div>
        </div>
        
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(202,138,4,0.12) 0%, transparent 70%)",
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
              style={{ color: "#CA8A04" }}
            >
              {t("solutions.hero.subtitle")}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1, color: "#E2E8F0" }}
            >
              {t("solutions.hero.title")}{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #CA8A04, #FCD34D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("solutions.hero.titleHighlight")}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-xl leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              {t("solutions.hero.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-10">
            {solutions.map(({ icon: Icon, label, tagline, color, desc, features, tech }, i) => (
              <motion.div
                key={label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={0}
                className="p-8 rounded-2xl transition-all duration-300 glass-card-premium shadow-premium hover-lift"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ background: `${color}20`, flexShrink: 0 }}
                      >
                        <Icon size={24} style={{ color }} />
                      </div>
                      <div>
                        <h2 style={{ color: "#E2E8F0" }} className="font-bold text-xl">{label}</h2>
                        <p className="text-sm" style={{ color }}>{tagline}</p>
                      </div>
                    </div>
                    <p style={{ color: "#94A3B8" }} className="leading-relaxed mb-6">{desc}</p>
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
                      to="/about"
                      className="inline-flex items-center gap-2 text-sm font-medium transition-all hover:gap-3"
                      style={{ color }}
                    >
                      {t("solutions.common.discussSolution")} <ArrowRight size={16} />
                    </Link>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs uppercase tracking-widest mb-4">
                      {t("solutions.common.keyCapabilities")}
                    </p>
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
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#E2E8F0" }}
            >
              {t("solutions.cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mb-8"
              style={{ color: "#94A3B8" }}
            >
              {t("solutions.cta.description")}
            </motion.p>
            <motion.div variants={fadeUp} custom={2}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-glow-gold animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, #CA8A04, #FCD34D)",
                  color: "#0A0E27",
                }}
              >
                {t("solutions.cta.button")} <Zap size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
