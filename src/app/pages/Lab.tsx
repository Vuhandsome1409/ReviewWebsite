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
import { useLanguage } from "../contexts/LanguageContext";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const PILLARS = (t: any) => [
  {
    icon: Brain,
    label: t("lab.pillars.knowledge.label"),
    color: "#CA8A04",
    desc: t("lab.pillars.knowledge.desc"),
    points: t("lab.pillars.knowledge.points"),
  },
  {
    icon: Code,
    label: t("lab.pillars.skills.label"),
    color: "#8B5CF6",
    desc: t("lab.pillars.skills.desc"),
    points: t("lab.pillars.skills.points"),
  },
  {
    icon: Users,
    label: t("lab.pillars.environment.label"),
    color: "#CA8A04",
    desc: t("lab.pillars.environment.desc"),
    points: t("lab.pillars.environment.points"),
  },
  {
    icon: Target,
    label: t("lab.pillars.execution.label"),
    color: "#8B5CF6",
    desc: t("lab.pillars.execution.desc"),
    points: t("lab.pillars.execution.points"),
  },
];

const WHAT_NINJAS_DO = (t: any) => [
  { icon: Zap, label: t("lab.whatNinjasDo.build") },
  { icon: Target, label: t("lab.whatNinjasDo.work") },
  { icon: Users, label: t("lab.whatNinjasDo.collaborate") },
  { icon: TrendingUp, label: t("lab.whatNinjasDo.deploy") },
  { icon: Brain, label: t("lab.whatNinjasDo.alongside") },
  { icon: Shield, label: t("lab.whatNinjasDo.ship") },
];

const LAB_PROJECTS = (t: any) => [
  {
    title: t("lab.projects.procurement.title"),
    builder: "Khoa N.",
    tech: ["LangChain", "Odoo API", "Python"],
    desc: t("lab.projects.procurement.desc"),
    status: t("lab.projects.status.production"),
    color: "#CA8A04",
  },
  {
    title: t("lab.projects.leadScoring.title"),
    builder: "Phuong M.",
    tech: ["XGBoost", "CRM API", "FastAPI"],
    desc: t("lab.projects.leadScoring.desc"),
    status: t("lab.projects.status.production"),
    color: "#8B5CF6",
  },
  {
    title: t("lab.projects.analytics.title"),
    builder: "Long B.",
    tech: ["React", "Snowflake", "dbt"],
    desc: t("lab.projects.analytics.desc"),
    status: t("lab.projects.status.live"),
    color: "#CA8A04",
  },
  {
    title: t("lab.projects.invoice.title"),
    builder: "Trang H.",
    tech: ["GPT-4V", "FastAPI", "Odoo"],
    desc: t("lab.projects.invoice.desc"),
    status: t("lab.projects.status.production"),
    color: "#8B5CF6",
  },
];

export function Lab() {
  const { t } = useLanguage();
  
  return (
    <div className="aurora-bg min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-24 relative overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/pic_company/mentor.jpg" 
            alt="Mentoring Session"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(5,8,20,0.95) 0%, rgba(10,5,32,0.88) 50%, rgba(5,8,20,0.92) 100%)"
          }}></div>
        </div>
        
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
              {t("lab.hero.badge")}
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              {t("lab.hero.title")}
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #CA8A04, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("lab.hero.subtitle")}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed mb-10"
            >
              {t("lab.hero.description")}
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
                  background: "linear-gradient(135deg, #CA8A04, #8B5CF6)",
                  boxShadow: "0 0 40px rgba(123,47,255,0.25)",
                }}
              >
                {t("lab.hero.cta.primary")} <ArrowRight size={18} />
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
                {t("lab.hero.cta.secondary")}
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
                style={{ color: "#CA8A04" }}
              >
                {t("lab.whatIsLab.badge")}
              </motion.p>
              <motion.h2
                variants={fadeUp}
                custom={1}
                className="text-4xl lg:text-5xl text-white mb-6"
                style={{ fontWeight: 700 }}
              >
                {t("lab.whatIsLab.title")}
                <span
                  style={{
                    display: "block",
                    background: "linear-gradient(90deg, #CA8A04, #8B5CF6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {t("lab.whatIsLab.subtitle")}
                </span>
              </motion.h2>
              <motion.p
                variants={fadeUp}
                custom={2}
                className="text-gray-400 text-lg leading-relaxed mb-6"
              >
                {t("lab.whatIsLab.description")}
              </motion.p>
              <motion.p
                variants={fadeUp}
                custom={3}
                className="text-gray-500 leading-relaxed"
              >
                {t("lab.whatIsLab.details")}
              </motion.p>
            </div>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: t("lab.whatIsLab.stats.realProjects.value"), label: t("lab.whatIsLab.stats.realProjects.label") },
                { value: t("lab.whatIsLab.stats.production.value"), label: t("lab.whatIsLab.stats.production.label") },
                { value: t("lab.whatIsLab.stats.mentors.value"), label: t("lab.whatIsLab.stats.mentors.label") },
                { value: t("lab.whatIsLab.stats.outcomes.value"), label: t("lab.whatIsLab.stats.outcomes.label") },
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
                      background: "linear-gradient(90deg, #CA8A04, #8B5CF6)",
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
              style={{ color: "#8B5CF6" }}
            >
              {t("lab.whatNinjasDo.badge")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white"
              style={{ fontWeight: 700 }}
            >
              {t("lab.whatNinjasDo.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {WHAT_NINJAS_DO(t).map(({ icon: Icon, label }, i) => (
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
                  <Icon size={20} style={{ color: "#CA8A04" }} />
                </div>
                <p className="text-gray-300 mt-2">{label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* 4 Pillars */}
      <section className="py-20 aurora-bg">
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
              style={{ color: "#CA8A04" }}
            >
              {t("lab.pillars.badge")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl text-white"
              style={{ fontWeight: 700 }}
            >
              {t("lab.pillars.title")}
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {PILLARS(t).map(({ icon: Icon, label, color, desc, points }, i) => (
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
                  {points.map((p: string) => (
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
              style={{ color: "#8B5CF6" }}
            >
              {t("lab.projects.badge")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl text-white"
              style={{ fontWeight: 700 }}
            >
              {t("lab.projects.title")}
            </motion.h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LAB_PROJECTS(t).map(({ title, builder, tech, desc, status, color }, i) => (
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
                  <span className="text-gray-600 text-xs">{t("lab.projects.by")} {builder}</span>
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
      <section className="py-20 relative overflow-hidden aurora-bg">
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
              {t("lab.cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 text-lg mb-10"
            >
              {t("lab.cta.description")}
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
                  background: "linear-gradient(135deg, #CA8A04, #8B5CF6)",
                  boxShadow: "0 0 40px rgba(123,47,255,0.2)",
                }}
              >
                {t("lab.cta.primary")} <ArrowRight size={18} />
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
                {t("lab.cta.secondary")} <Users size={18} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
