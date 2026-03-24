import { Link } from "react-router";
import { motion } from "motion/react";
import { ArrowRight, Zap, ExternalLink } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const MENTORS = [
  {
    name: "Minh Tran",
    title: "AI Systems Architect",
    bio: "10+ years building production AI systems across fintech, logistics, and retail. Led 20+ enterprise deployments in APAC. Specialist in agentic AI and autonomous system design.",
    tags: ["AI Systems", "Agentic AI", "LLM Architecture"],
    color: "#CA8A04",
    img: "https://images.unsplash.com/photo-1649151139875-ae8ea07082e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Linh Nguyen",
    title: "ERP Implementation Lead",
    bio: "Certified Odoo architect with 8 years of ERP implementation experience across manufacturing, distribution, and healthcare. Has rolled out Odoo in 15+ enterprise environments.",
    tags: ["Odoo", "ERPNext", "Business Architecture"],
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1731419223715-aec6664f9011?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "Duc Pham",
    title: "Automation & Integration Engineer",
    bio: "Specialist in RPA, API integration, and no-code/low-code automation platforms. Built automation workflows processing 5M+ events/day. Former tech lead at a leading Vietnamese bank.",
    tags: ["Automation", "RPA", "API Integration"],
    color: "#CA8A04",
    img: "https://images.unsplash.com/photo-1625850902501-cc6baef3e3b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
  {
    name: "An Le",
    title: "AI Product Engineer",
    bio: "Product-minded AI engineer who bridges business requirements and technical implementation. Built AI-powered CRM and analytics products used by 50,000+ users across Vietnam and Southeast Asia.",
    tags: ["AI Products", "CRM", "Data Analytics"],
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1767880239595-f4ea13b5c78c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
  },
];

const BUILDERS = [
  {
    name: "Khoa Nguyen",
    title: "Ninja Builder · AI Agents",
    project: "Built autonomous procurement agent for Odoo ERP",
    color: "#CA8A04",
    img: "https://images.unsplash.com/photo-1540058404349-2e5fabf32d75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  },
  {
    name: "Phuong Mai",
    title: "Ninja Builder · ERP",
    project: "Deployed ERPNext for 3-company group",
    color: "#8B5CF6",
    img: "https://images.unsplash.com/photo-1770170389700-eb0f9b910ed8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  },
  {
    name: "Long Bui",
    title: "Ninja Builder · Automation",
    project: "Automated invoice workflow saving 200 hrs/month",
    color: "#CA8A04",
    img: "https://images.unsplash.com/photo-1761195696590-3490ea770aa1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=300",
  },
];

export function People() {
  return (
    <div className="aurora-bg min-h-screen">
      {/* Hero */}
      <section
        className="pt-32 pb-20 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #050814 0%, #0a0f28 60%, #050814 100%)",
        }}
      >
        <div
          className="absolute top-1/2 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(123,47,255,0.1) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translateY(-50%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" className="max-w-3xl">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#CA8A04" }}
            >
              People & Builders
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              The Operators
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #CA8A04, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Behind the Systems
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl leading-relaxed"
            >
              Every member of Ninja AI is an active builder — not a consultant. They've deployed real systems, solved real problems, and they operate in the trenches alongside our clients.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-20">
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
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#CA8A04" }}
            >
              Core Team
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl text-white"
              style={{ fontWeight: 700 }}
            >
              Mentors & Operators
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {MENTORS.map(({ name, title, bio, tags, color, img }, i) => (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.5}
                className="group rounded-2xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{
                  y: -6,
                  borderColor: `${color}40`,
                  boxShadow: `0 0 30px ${color}15`,
                }}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 50%, rgba(5,8,20,0.9) 100%)",
                    }}
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold text-base mb-0.5">{name}</h3>
                  <p className="text-sm mb-3" style={{ color }}>{title}</p>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">{bio}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          background: `${color}10`,
                          border: `1px solid ${color}25`,
                          color: `${color}cc`,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Builders / Ninjas */}
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
              className="text-xs font-semibold uppercase tracking-widest mb-3"
              style={{ color: "#8B5CF6" }}
            >
              The Builders
            </motion.p>
            <motion.h2
              variants={fadeUp}
              custom={1}
              className="text-4xl text-white mb-4"
              style={{ fontWeight: 700 }}
            >
              Ninjas in Action
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 max-w-2xl"
            >
              These are individuals from the Ninja AI Lab who have gone from zero to deploying real systems on live business environments. Their work is featured in our project portfolio.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BUILDERS.map(({ name, title, project, color, img }, i) => (
              <motion.div
                key={name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                custom={i * 0.5}
                className="group rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{ y: -4 }}
              >
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={img}
                    alt={name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: "linear-gradient(to bottom, transparent 40%, rgba(5,8,20,0.9) 100%)",
                    }}
                  />
                  <div
                    className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-xs flex items-center gap-1"
                    style={{
                      background: `${color}20`,
                      border: `1px solid ${color}40`,
                      color,
                    }}
                  >
                    <Zap size={10} />
                    Ninja
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-semibold">{name}</h3>
                  <p className="text-sm mb-2" style={{ color }}>{title}</p>
                  <p className="text-gray-500 text-xs">{project}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Lab CTA */}
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
              Become a Builder
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="text-gray-400 mb-8"
            >
              The Ninja AI Lab is where the next generation of AI operators are being forged. Join and work on real systems with experienced builders.
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/lab"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #CA8A04, #8B5CF6)",
                  boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                }}
              >
                Explore the Lab <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
              >
                Contact Us <ExternalLink size={16} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
