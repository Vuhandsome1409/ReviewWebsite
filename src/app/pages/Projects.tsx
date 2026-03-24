import { Link } from "react-router";
import { motion } from "motion/react";
import {
  TrendingUp,
  ArrowRight,
  CheckCircle2,
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

const PROJECTS_DATA = (t: (key: string) => string) => [
  {
    id: 1,
    title: t("projects.project1.title"),
    industry: t("projects.project1.industry"),
    tags: [t("projects.project1.tag1"), t("projects.project1.tag2"), t("projects.project1.tag3")],
    color: "#CA8A04",
    img: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problemTitle: t("projects.project1.problemTitle"),
    problem: t("projects.project1.problem"),
    solutionTitle: t("projects.project1.solutionTitle"),
    solution: t("projects.project1.solution"),
    tech: [t("projects.project1.tech1"), t("projects.project1.tech2"), t("projects.project1.tech3"), t("projects.project1.tech4")],
    resultsTitle: t("projects.project1.resultsTitle"),
    results: [
      t("projects.project1.result1"),
      t("projects.project1.result2"),
      t("projects.project1.result3"),
      t("projects.project1.result4"),
    ],
  },
  {
    id: 2,
    title: t("projects.project2.title"),
    industry: t("projects.project2.industry"),
    tags: [t("projects.project2.tag1"), t("projects.project2.tag2"), t("projects.project2.tag3")],
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problemTitle: t("projects.project2.problemTitle"),
    problem: t("projects.project2.problem"),
    solutionTitle: t("projects.project2.solutionTitle"),
    solution: t("projects.project2.solution"),
    tech: [t("projects.project2.tech1"), t("projects.project2.tech2"), t("projects.project2.tech3"), t("projects.project2.tech4")],
    resultsTitle: t("projects.project2.resultsTitle"),
    results: [
      t("projects.project2.result1"),
      t("projects.project2.result2"),
      t("projects.project2.result3"),
      t("projects.project2.result4"),
    ],
  },
  {
    id: 3,
    title: t("projects.project3.title"),
    industry: t("projects.project3.industry"),
    tags: [t("projects.project3.tag1"), t("projects.project3.tag2"), t("projects.project3.tag3")],
    color: "#CA8A04",
    img: "https://images.unsplash.com/photo-1770170389700-eb0f9b910ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problemTitle: t("projects.project3.problemTitle"),
    problem: t("projects.project3.problem"),
    solutionTitle: t("projects.project3.solutionTitle"),
    solution: t("projects.project3.solution"),
    tech: [t("projects.project3.tech1"), t("projects.project3.tech2"), t("projects.project3.tech3"), t("projects.project3.tech4")],
    resultsTitle: t("projects.project3.resultsTitle"),
    results: [
      t("projects.project3.result1"),
      t("projects.project3.result2"),
      t("projects.project3.result3"),
      t("projects.project3.result4"),
    ],
  },
  {
    id: 4,
    title: t("projects.project4.title"),
    industry: t("projects.project4.industry"),
    tags: [t("projects.project4.tag1"), t("projects.project4.tag2"), t("projects.project4.tag3")],
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    problemTitle: t("projects.project4.problemTitle"),
    problem: t("projects.project4.problem"),
    solutionTitle: t("projects.project4.solutionTitle"),
    solution: t("projects.project4.solution"),
    tech: [t("projects.project4.tech1"), t("projects.project4.tech2"), t("projects.project4.tech3"), t("projects.project4.tech4")],
    resultsTitle: t("projects.project4.resultsTitle"),
    results: [
      t("projects.project4.result1"),
      t("projects.project4.result2"),
      t("projects.project4.result3"),
      t("projects.project4.result4"),
    ],
  },
];

export function Projects() {
  const { t } = useLanguage();
  const projects = PROJECTS_DATA(t);

  return (
    <div className="aurora-bg" style={{ minHeight: "100vh" }}>
      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/pic_company/working_place.jpg" 
            alt="Working Place"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.88) 50%, rgba(10,14,39,0.92) 100%)"
          }}></div>
        </div>
        
        <div
          className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)",
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
              style={{ color: "#8B5CF6" }}
            >
              {t("projects.hero.subtitle")}
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1, color: "#E2E8F0" }}
            >
              {t("projects.hero.title")}{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #CA8A04, #FCD34D)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("projects.hero.titleHighlight")}
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-xl leading-relaxed"
              style={{ color: "#94A3B8" }}
            >
              {t("projects.hero.description")}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16">
            {projects.map(({ title, industry, tags, color, img, problemTitle, problem, solutionTitle, solution, tech, resultsTitle, results }, i) => (
              <motion.div
                key={title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={0}
                className="rounded-2xl overflow-hidden glass-card-premium shadow-premium hover-lift"
                style={{
                  border: "1px solid rgba(255,255,255,0.1)",
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
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs px-3 py-1 rounded-full"
                          style={{
                            background: "rgba(255,255,255,0.08)",
                            color: "#9ca3af",
                          }}
                        >
                          {tag}
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
                        {problemTitle}
                      </p>
                      <p style={{ color: "#94A3B8" }} className="text-sm leading-relaxed">{problem}</p>
                    </div>
                    {/* Solution */}
                    <div>
                      <p
                        className="text-xs font-semibold uppercase tracking-widest mb-3"
                        style={{ color }}
                      >
                        {solutionTitle}
                      </p>
                      <p style={{ color: "#94A3B8" }} className="text-sm leading-relaxed">{solution}</p>
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
                        {resultsTitle}
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
              className="text-3xl lg:text-4xl font-bold mb-4"
              style={{ color: "#E2E8F0" }}
            >
              {t("projects.cta.title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mb-8"
              style={{ color: "#94A3B8" }}
            >
              {t("projects.cta.description")}
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
                {t("projects.cta.button")} <ArrowRight size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
