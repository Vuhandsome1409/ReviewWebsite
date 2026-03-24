import { useState } from "react";
import { motion } from "motion/react";
import {
  Mail,
  MapPin,
  Zap,
  Send,
  MessageSquare,
  Building2,
  Users,
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: "easeOut" },
  }),
};

const INQUIRIES = [
  { icon: Building2, label: "Enterprise Solution", desc: "ERP, CRM, AI, Automation deployment" },
  { icon: MessageSquare, label: "Project Consultation", desc: "Explore a specific use case or challenge" },
  { icon: Users, label: "Join the Lab", desc: "Become a Ninja AI builder" },
  { icon: Zap, label: "Partnership", desc: "Technology or reseller partnerships" },
];

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    type: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" animate="visible">
            <motion.p
              variants={fadeUp}
              custom={0}
              className="text-xs font-semibold uppercase tracking-widest mb-4"
              style={{ color: "#CA8A04" }}
            >
              Contact
            </motion.p>
            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl lg:text-6xl text-white mb-6"
              style={{ fontWeight: 700, lineHeight: 1.1 }}
            >
              Let's Build
              <span
                style={{
                  display: "block",
                  background: "linear-gradient(90deg, #CA8A04, #8B5CF6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Something Real
              </span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-gray-400 text-xl max-w-2xl mx-auto"
            >
              Whether you need an AI implementation partner or you're ready to become a builder — we want to hear from you.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Inquiry Types */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {INQUIRIES.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                variants={fadeUp}
                custom={i * 0.5}
                className="p-5 rounded-xl cursor-pointer transition-all duration-200 text-center"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
                whileHover={{
                  background: "rgba(0,212,255,0.05)",
                  borderColor: "rgba(0,212,255,0.2)",
                }}
                onClick={() => setForm((p) => ({ ...p, type: label }))}
              >
                <Icon size={24} className="mx-auto mb-2" style={{ color: "#CA8A04" }} />
                <p className="text-white text-sm font-medium">{label}</p>
                <p className="text-gray-600 text-xs mt-1">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <motion.div variants={fadeUp} custom={0} className="mb-10">
                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#8B5CF6" }}>
                  Reach Us
                </p>
                <h2 className="text-2xl text-white font-bold mb-2">Get in Touch</h2>
                <p className="text-gray-500 text-sm leading-relaxed">
                  We respond to all inquiries within 24 hours on business days.
                </p>
              </motion.div>

              <div className="flex flex-col gap-6">
                {[
                  { icon: Mail, label: "Email", value: "hoangthequang.ninjaai.dev@gmail.com" },
                  { icon: MapPin, label: "Location", value: "Tầng 3 Tòa Trinity, Mễ Trì, Hà Nội" },
                  { icon: MessageSquare, label: "Response Time", value: "Within 24 hours" },
                ].map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-start gap-3"
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(0,212,255,0.1)" }}
                    >
                      <Icon size={18} style={{ color: "#CA8A04" }} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-xs">{label}</p>
                      <p className="text-white text-sm">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 p-5 rounded-xl"
                style={{
                  background: "rgba(123,47,255,0.08)",
                  border: "1px solid rgba(123,47,255,0.2)",
                }}
              >
                <p className="text-white font-medium mb-2 text-sm">Ready to apply to the Lab?</p>
                <p className="text-gray-500 text-xs leading-relaxed">
                  Use the contact form and select "Join the Lab" as your inquiry type. Tell us about your background and what you want to build.
                </p>
              </motion.div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-2"
              variants={fadeUp}
              custom={1}
            >
              <div
                className="p-8 rounded-2xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(10px)",
                }}
              >
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center">
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
                      style={{ background: "rgba(16,185,129,0.15)" }}
                    >
                      <Send size={28} style={{ color: "#10b981" }} />
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-gray-400 text-sm max-w-xs">
                      Thank you for reaching out. We'll get back to you within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      {[
                        { name: "name", label: "Full Name", placeholder: "Your name", type: "text" },
                        { name: "email", label: "Email", placeholder: "your@email.com", type: "email" },
                      ].map(({ name, label, placeholder, type }) => (
                        <div key={name}>
                          <label
                            className="block text-gray-400 text-xs mb-2 uppercase tracking-widest font-medium"
                          >
                            {label}
                          </label>
                          <input
                            name={name}
                            type={type}
                            placeholder={placeholder}
                            value={(form as any)[name]}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all focus:ring-1"
                            style={{
                              background: "rgba(255,255,255,0.05)",
                              border: "1px solid rgba(255,255,255,0.1)",
                              ringColor: "#CA8A04",
                            }}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-gray-400 text-xs mb-2 uppercase tracking-widest font-medium">
                          Company (optional)
                        </label>
                        <input
                          name="company"
                          type="text"
                          placeholder="Your company"
                          value={form.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                          }}
                        />
                      </div>
                      <div>
                        <label className="block text-gray-400 text-xs mb-2 uppercase tracking-widest font-medium">
                          Inquiry Type
                        </label>
                        <select
                          name="type"
                          value={form.type}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all appearance-none"
                          style={{
                            background: "rgba(255,255,255,0.05)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            color: form.type ? "white" : "#4b5563",
                          }}
                        >
                          <option value="" disabled style={{ background: "#0a0f28" }}>
                            Select type
                          </option>
                          {INQUIRIES.map(({ label }) => (
                            <option key={label} value={label} style={{ background: "#0a0f28" }}>
                              {label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-gray-400 text-xs mb-2 uppercase tracking-widest font-medium">
                        Message
                      </label>
                      <textarea
                        name="message"
                        placeholder="Tell us about your project, challenge, or goals..."
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl text-white placeholder-gray-600 text-sm outline-none transition-all resize-none"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl text-white font-medium flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #CA8A04, #8B5CF6)",
                        boxShadow: "0 0 30px rgba(0,212,255,0.15)",
                      }}
                    >
                      Send Message <Send size={16} />
                    </button>

                    <p className="text-center text-gray-600 text-xs">
                      We respect your privacy. No spam, ever.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
