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
import { useLanguage } from "../contexts/LanguageContext";
import { ExpertJourney } from "../components/ExpertJourney";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const WHAT_WE_DO = (t: (key: string) => string) => [
  { icon: Brain, label: t("home.whatWeDo.aiSystems"), color: "#CA8A04" },
  { icon: Zap, label: t("home.whatWeDo.businessAuto"), color: "#8B5CF6" },
  { icon: Database, label: t("home.whatWeDo.erpCrm"), color: "#CA8A04" },
  { icon: Cpu, label: t("home.whatWeDo.digitalPlatforms"), color: "#8B5CF6" },
  { icon: Bot, label: t("home.whatWeDo.robotics"), color: "#CA8A04" },
];

const SOLUTIONS = (t: (key: string) => string) => [
  { icon: Users, label: t("home.solutions.crm.label"), desc: t("home.solutions.crm.desc"), color: "#CA8A04" },
  { icon: Database, label: t("home.solutions.erp.label"), desc: t("home.solutions.erp.desc"), color: "#8B5CF6" },
  { icon: BarChart3, label: t("home.solutions.dms.label"), desc: t("home.solutions.dms.desc"), color: "#CA8A04" },
  { icon: ShoppingCart, label: t("home.solutions.pos.label"), desc: t("home.solutions.pos.desc"), color: "#8B5CF6" },
  { icon: ShoppingCart, label: t("home.solutions.ecommerce.label"), desc: t("home.solutions.ecommerce.desc"), color: "#CA8A04" },
  { icon: BarChart3, label: t("home.solutions.cdc.label"), desc: t("home.solutions.cdc.desc"), color: "#8B5CF6" },
  { icon: Bot, label: t("home.solutions.aiAgents.label"), desc: t("home.solutions.aiAgents.desc"), color: "#CA8A04" },
];

const METRICS = (t: (key: string) => string) => [
  { icon: TrendingUp, value: "3.5×", label: t("home.metrics.avgEfficiency") },
  { icon: DollarSign, value: "60%", label: t("home.metrics.costReduction") },
  { icon: Clock, value: "90%", label: t("home.metrics.processAuto") },
  { icon: Cpu, value: "50+", label: t("home.metrics.systemsDeployed") },
];

const PROJECTS = (t: (key: string) => string) => [
  {
    title: t("home.projects.project1.title"),
    desc: t("home.projects.project1.desc"),
    tech: [t("home.projects.project1.tech1"), t("home.projects.project1.tech2"), t("home.projects.project1.tech3")],
    metrics: [t("home.projects.project1.metric1"), t("home.projects.project1.metric2"), t("home.projects.project1.metric3")],
    img: "https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    title: t("home.projects.project2.title"),
    desc: t("home.projects.project2.desc"),
    tech: [t("home.projects.project2.tech1"), t("home.projects.project2.tech2"), t("home.projects.project2.tech3")],
    metrics: [t("home.projects.project2.metric1"), t("home.projects.project2.metric2"), t("home.projects.project2.metric3")],
    img: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    title: t("home.projects.project3.title"),
    desc: t("home.projects.project3.desc"),
    tech: [t("home.projects.project3.tech1"), t("home.projects.project3.tech2"), t("home.projects.project3.tech3")],
    metrics: [t("home.projects.project3.metric1"), t("home.projects.project3.metric2"), t("home.projects.project3.metric3")],
    img: "https://images.unsplash.com/photo-1770170389700-eb0f9b910ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

const TEAM_MEMBERS = (t: (key: string) => string) => [
  { img: "https://images.unsplash.com/photo-1649151139875-ae8ea07082e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: t("home.team.member1.name"), role: t("home.team.member1.role") },
  { img: "https://images.unsplash.com/photo-1731419223715-aec6664f9011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: t("home.team.member2.name"), role: t("home.team.member2.role") },
  { img: "https://images.unsplash.com/photo-1625850902501-cc6baef3e3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: t("home.team.member3.name"), role: t("home.team.member3.role") },
  { img: "https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", name: t("home.team.member4.name"), role: t("home.team.member4.role") },
];

const LAB_PILLARS = (t: (key: string) => string) => [
  { label: t("home.lab.realProjects"), icon: Cpu },
  { label: t("home.lab.realTeams"), icon: Users },
  { label: t("home.lab.realExecution"), icon: Zap },
  { label: t("home.lab.realImpact"), icon: TrendingUp },
];

export function Home() {
  const { t } = useLanguage();
  
  const whatWeDo = WHAT_WE_DO(t);
  const solutions = SOLUTIONS(t);
  const metrics = METRICS(t);
  const projects = PROJECTS(t);
  const teamMembers = TEAM_MEMBERS(t);
  const labPillars = LAB_PILLARS(t);
  
  return (
    <div className="aurora-bg">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="/pic_company/fes.jpg" 
            alt="Ninja AI Festival"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.85) 50%, rgba(10,14,39,0.90) 100%)"
          }}></div>
        </div>
        
        {/* Aurora Glow Background */}
        <div className="absolute inset-0 aurora-glow opacity-20"></div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float opacity-20"
             style={{
               background: "radial-gradient(circle, rgba(202,138,4,0.3) 0%, transparent 70%)",
               filter: "blur(40px)",
             }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-float-delayed opacity-15"
             style={{
               background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)",
               filter: "blur(50px)",
             }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full animate-float-slow opacity-15"
             style={{
               background: "radial-gradient(circle, rgba(34,211,238,0.2) 0%, transparent 70%)",
               filter: "blur(60px)",
             }}
        />
        
        {/* Grid overlay with glassmorphism */}
        <div className="absolute inset-0 pointer-events-none opacity-5"
             style={{
               backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
               backgroundSize: "60px 60px",
             }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 z-10">
          <motion.div
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >
            <motion.div
              variants={fadeUp}
              custom={0}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium mb-8 glass-card-premium"
              style={{
                color: "#CA8A04",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#CA8A04" }} />
              {t("home.hero.badge")}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6"
              style={{
                fontWeight: 700,
                lineHeight: 1.1,
                color: "#E2E8F0",
              }}
            >
              {t("home.hero.title")}{" "}
              <span
                className="animate-gradient-text"
                style={{
                  background: "linear-gradient(90deg, #CA8A04, #FCD34D, #CA8A04, #FCD34D)",
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("home.hero.titleHighlight")}
              </span>
              <br />
              {t("home.hero.titleEnd")}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-base sm:text-lg md:text-xl mb-8 sm:mb-10 max-w-2xl"
              style={{ 
                lineHeight: 1.7,
                color: "#94A3B8"
              }}
            >
              {t("home.hero.description")}
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/solutions"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-glow-gold animate-pulse-glow"
                style={{
                  background: "linear-gradient(135deg, #CA8A04, #FCD34D)",
                  color: "#0A0E27",
                }}
              >
                {t("home.hero.exploreSolutions")}
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 glass-card-premium shadow-premium"
                style={{
                  color: "#E2E8F0",
                }}
              >
                {t("home.hero.viewProjects")}
                <ChevronRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Metrics bar with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {metrics.map(({ icon: Icon, value, label }, index) => (
              <div
                key={label}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl glass-card-premium shadow-premium transition-all duration-300 hover-lift ${
                  index % 2 === 0 ? 'animate-float' : 'animate-float-delayed'
                }`}
              >
                <Icon size={20} style={{ color: "#CA8A04" }} />
                <div>
                  <div className="font-bold" style={{ color: "#E2E8F0" }}>{value}</div>
                  <div className="text-xs" style={{ color: "#94A3B8" }}>{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-24 aurora-bg">
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
              style={{ color: "#CA8A04" }}
            >
              {t("home.whatWeDo.subtitle")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl"
              style={{ fontWeight: 700, color: "#E2E8F0" }}
            >
              {t("home.whatWeDo.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="flex flex-wrap justify-center gap-4"
          >
            {whatWeDo.map(({ icon: Icon, label, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl cursor-default glass-card-premium shadow-premium transition-all duration-300 hover-lift ${
                  i % 3 === 0 ? 'animate-float' : i % 3 === 1 ? 'animate-float-delayed' : 'animate-float-slow'
                }`}
                whileHover={{
                  scale: 1.05,
                  boxShadow: `0 0 30px ${color}40`,
                }}
              >
                <Icon size={22} style={{ color }} />
                <span style={{ color: "#E2E8F0" }} className="font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg opacity-80"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 20% 50%, rgba(202,138,4,0.1) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(139,92,246,0.1) 0%, transparent 50%)"
        }}></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              style={{ color: "#8B5CF6" }}
            >
              {t("home.byTheNumbers.subtitle")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl"
              style={{ fontWeight: 700, color: "#E2E8F0" }}
            >
              {t("home.byTheNumbers.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              t("home.byTheNumbers.clients"),
              t("home.byTheNumbers.systems"),
              t("home.byTheNumbers.uptime"),
              t("home.byTheNumbers.roi"),
            ].map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                custom={i}
                className="relative group"
              >
                <div className="glass-card-premium p-8 rounded-2xl shadow-premium transition-all duration-500 hover-lift">
                  {/* Progress bar background */}
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-current to-transparent opacity-20 rounded-b-2xl"
                       style={{ color: i % 2 === 0 ? "#CA8A04" : "#8B5CF6" }}></div>
                  
                  <div className="text-5xl font-bold mb-3 animate-gradient-text"
                       style={{
                         background: `linear-gradient(135deg, ${i % 2 === 0 ? "#CA8A04, #FCD34D" : "#8B5CF6, #A78BFA"})`,
                         backgroundSize: "200% auto",
                         WebkitBackgroundClip: "text",
                         WebkitTextFillColor: "transparent",
                         backgroundClip: "text",
                       }}>
                    {item.value}
                  </div>
                  <div className="text-lg font-semibold mb-2" style={{ color: "#E2E8F0" }}>
                    {item.label}
                  </div>
                  <div className="text-sm" style={{ color: "#94A3B8" }}>
                    {item.desc}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* HOW WE WORK - Interactive Process */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 aurora-bg"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float opacity-10"
             style={{
               background: "radial-gradient(circle, rgba(202,138,4,0.4) 0%, transparent 70%)",
               filter: "blur(60px)",
             }}
        />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full animate-float-delayed opacity-10"
             style={{
               background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
               filter: "blur(60px)",
             }}
        />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="text-center mb-20"
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#CA8A04" }}
            >
              {t("home.howWeWork.subtitle")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-6xl mb-6"
              style={{ fontWeight: 700, color: "#E2E8F0" }}
            >
              {t("home.howWeWork.title")}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg max-w-2xl mx-auto"
              style={{ color: "#94A3B8" }}
            >
              Quy trình 5 bước được tối ưu để triển khai nhanh và hiệu quả
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="relative max-w-5xl mx-auto"
          >
            {/* Vertical timeline for mobile/tablet, Horizontal for desktop */}
            <div className="hidden lg:block">
              {/* Desktop: Zigzag layout */}
              <div className="space-y-24">
                {[
                  t("home.howWeWork.step1"),
                  t("home.howWeWork.step2"),
                  t("home.howWeWork.step3"),
                  t("home.howWeWork.step4"),
                  t("home.howWeWork.step5"),
                ].map((step, i) => (
                  <motion.div
                    key={step.label}
                    variants={fadeUp}
                    custom={i}
                    className={`flex items-center gap-12 ${i % 2 === 1 ? 'flex-row-reverse' : ''}`}
                  >
                    {/* Content card */}
                    <div className="flex-1">
                      <div className="glass-card-premium p-8 rounded-2xl shadow-premium transition-all duration-500 hover-lift group">
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                               style={{
                                 background: `linear-gradient(135deg, ${i % 2 === 0 ? "#CA8A04, #FCD34D" : "#8B5CF6, #A78BFA"})`,
                                 color: "#0A0E27",
                                 boxShadow: `0 10px 40px -10px ${i % 2 === 0 ? "rgba(202,138,4,0.5)" : "rgba(139,92,246,0.5)"}`,
                               }}>
                            {i + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold mb-3" style={{ color: "#E2E8F0" }}>
                              {step.label}
                            </h3>
                            <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                              {step.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center line with icon */}
                    <div className="flex-shrink-0 relative">
                      <div className="w-20 h-20 rounded-full flex items-center justify-center"
                           style={{
                             background: "rgba(26,31,58,0.8)",
                             border: `3px solid ${i % 2 === 0 ? "#CA8A04" : "#8B5CF6"}`,
                             boxShadow: `0 0 30px ${i % 2 === 0 ? "rgba(202,138,4,0.3)" : "rgba(139,92,246,0.3)"}`,
                           }}>
                        {i === 0 && <Brain size={32} style={{ color: "#CA8A04" }} />}
                        {i === 1 && <Cpu size={32} style={{ color: "#8B5CF6" }} />}
                        {i === 2 && <Zap size={32} style={{ color: "#CA8A04" }} />}
                        {i === 3 && <Database size={32} style={{ color: "#8B5CF6" }} />}
                        {i === 4 && <TrendingUp size={32} style={{ color: "#CA8A04" }} />}
                      </div>
                      
                      {/* Connecting line */}
                      {i < 4 && (
                        <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-1 h-24 bg-gradient-to-b from-current to-transparent opacity-30"
                             style={{ color: i % 2 === 0 ? "#CA8A04" : "#8B5CF6" }}></div>
                      )}
                    </div>
                    
                    {/* Empty space for zigzag */}
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mobile/Tablet: Vertical timeline */}
            <div className="lg:hidden space-y-8">
              {[
                t("home.howWeWork.step1"),
                t("home.howWeWork.step2"),
                t("home.howWeWork.step3"),
                t("home.howWeWork.step4"),
                t("home.howWeWork.step5"),
              ].map((step, i) => (
                <motion.div
                  key={step.label}
                  variants={fadeUp}
                  custom={i}
                  className="relative pl-20"
                >
                  {/* Step number circle */}
                  <div className="absolute left-0 top-0 w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl"
                       style={{
                         background: `linear-gradient(135deg, ${i % 2 === 0 ? "#CA8A04, #FCD34D" : "#8B5CF6, #A78BFA"})`,
                         color: "#0A0E27",
                       }}>
                    {i + 1}
                  </div>
                  
                  {/* Connecting line */}
                  {i < 4 && (
                    <div className="absolute left-7 top-14 w-0.5 h-8 bg-gradient-to-b from-current to-transparent opacity-30"
                         style={{ color: i % 2 === 0 ? "#CA8A04" : "#8B5CF6" }}></div>
                  )}
                  
                  {/* Content */}
                  <div className="glass-card-premium p-6 rounded-2xl shadow-premium">
                    <h3 className="text-xl font-bold mb-2" style={{ color: "#E2E8F0" }}>
                      {step.label}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#94A3B8" }}>
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="py-24 aurora-bg">
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
              style={{ color: "#8B5CF6" }}
            >
              {t("home.solutions.subtitle")}
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl"
              style={{ fontWeight: 700, color: "#E2E8F0" }}
            >
              {t("home.solutions.title")}
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            {solutions.map(({ icon: Icon, label, desc, color }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i * 0.5}
                className={`group p-6 rounded-2xl cursor-default glass-card-premium shadow-premium transition-all duration-300 hover-lift ${
                  i % 4 === 0 ? 'animate-float' : 
                  i % 4 === 1 ? 'animate-float-delayed' : 
                  i % 4 === 2 ? 'animate-float-slow' : 'animate-float'
                }`}
                whileHover={{
                  background: "rgba(26,31,58,0.8)",
                  borderColor: `${color}44`,
                  y: -8,
                  boxShadow: `0 25px 60px -15px ${color}30`,
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <h3
                  style={{ color: '#E2E8F0' }}
                  className="font-semibold mb-2 text-base"
                >
                  {label}
                </h3>
                <p style={{ color: '#94A3B8' }} className="text-sm leading-relaxed mb-4">{desc}</p>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-1 text-xs font-medium transition-all duration-300 hover:scale-105"
                  style={{ color }}
                >
                  {t("home.solutions.learnMore")} <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* EXPERTS TEAM - Pseudo-3D Journey */}
      <ExpertJourney />

      {/* NINJA AI LAB PREVIEW */}
      <section className="py-24 relative overflow-hidden aurora-bg">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(139,92,246,0.12) 0%, transparent 70%)",
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
              {t("home.lab.badge")}
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl lg:text-5xl mb-6"
              style={{ 
                fontWeight: 700,
                color: 'var(--text-primary)'
              }}
            >
              {t("home.lab.title")}
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {t("home.lab.titleHighlight")}
              </span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'var(--text-secondary)' }}
            >
              {t("home.lab.description")}
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
                {t("home.lab.exploreLab")} <ArrowRight size={18} />
              </Link>
            </motion.div>

            {/* Lab pillars */}
            <motion.div
              variants={fadeUp}
              custom={4}
              className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {labPillars.map(({ label, icon: Icon }, i) => (
                <div
                  key={label}
                  className="p-4 rounded-xl text-center glass-card-premium"
                  style={{
                    border: "1px solid rgba(202,138,4,0.2)",
                  }}
                >
                  <Icon size={22} className="mx-auto mb-2" style={{ color: "#CA8A04" }} />
                  <p style={{ color: '#E2E8F0' }} className="text-sm font-medium">{label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
