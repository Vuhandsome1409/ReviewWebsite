import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { MapPin, Calendar, Users, Award } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  image: string;
  experience: string;
  speciality: string;
  projects: number;
}

interface TeamShowcaseProps {
  members?: TeamMember[];
}

const defaultMembers: TeamMember[] = [
  {
    name: "Tony Trieu",
    role: "Lead AI Architect", 
    image: "/pic_company/tony_trieu.jpg",
    experience: "5+ năm",
    speciality: "AI Systems & Enterprise Architecture",
    projects: 50
  },
  {
    name: "NHK",
    role: "Senior Developer",
    image: "/pic_company/NHK.jpg", 
    experience: "4+ năm",
    speciality: "Full-stack Development & AI Integration",
    projects: 35
  }
];

const companyMilestones = [
  {
    year: "2021",
    title: "Thành lập Ninja AI",
    description: "Khởi đầu từ việc giải quyết bài toán thật",
    icon: "🚀",
    color: "#3B82F6"
  },
  {
    year: "2022", 
    title: "ERP đầu tiên",
    description: "Triển khai hệ thống ERP tích hợp AI",
    icon: "⚡",
    color: "#8B5CF6"
  },
  {
    year: "2023",
    title: "AI-enabled Solutions",
    description: "Ra mắt các giải pháp AI cho doanh nghiệp",
    icon: "🤖",
    color: "#F59E0B"
  },
  {
    year: "2024",
    title: "Mở rộng đội ngũ",
    description: "Xây dựng đội ngũ 50+ Ninja thực chiến",
    icon: "👥",
    color: "#10B981"
  },
  {
    year: "2025",
    title: "Ninja AI Lab",
    description: "Ra mắt Lab đào tạo và phát triển",
    icon: "🔬",
    color: "#EF4444"
  }
];

export function TeamShowcase({ members = defaultMembers }: TeamShowcaseProps) {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);
  const [hoveredMilestone, setHoveredMilestone] = useState<number | null>(null);

  return (
    <div className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: "radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)"
             }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
            Đội ngũ Ninja thực chiến
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Những con người đang xây dựng tương lai AI-native cho doanh nghiệp Việt Nam
          </p>
        </motion.div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {members.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(135deg, rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.6))",
                }}
                className="relative p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                {/* Member Image */}
                <div className="relative mb-6 mx-auto w-24 h-24 rounded-full overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>

                {/* Member Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-blue-400 font-medium mb-3">{member.role}</p>
                  
                  <div className="space-y-2 text-sm text-slate-400">
                    <div className="flex items-center justify-center gap-2">
                      <Calendar size={14} />
                      <span>{member.experience} kinh nghiệm</span>
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <Award size={14} />
                      <span>{member.projects}+ dự án</span>
                    </div>
                  </div>
                </div>

                {/* Expand indicator */}
                <motion.div
                  animate={{ rotate: selectedMember === index ? 180 : 0 }}
                  className="absolute bottom-4 right-4 text-blue-400"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6"/>
                  </svg>
                </motion.div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                     style={{
                       background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.1), transparent 70%)"
                     }}>
                </div>
              </motion.div>

              {/* Expanded Details */}
              <AnimatePresence>
                {selectedMember === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -20 }}
                    animate={{ opacity: 1, height: "auto", y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 overflow-hidden"
                  >
                    <div className="p-6 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl border border-blue-500/20">
                      <h4 className="text-lg font-bold text-blue-400 mb-3">Chuyên môn</h4>
                      <p className="text-slate-300 leading-relaxed">{member.speciality}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Company Milestones Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Các mốc quan trọng
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-amber-500 via-green-500 to-red-500 opacity-30 rounded-full"></div>

            <div className="space-y-12">
              {companyMilestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                  onMouseEnter={() => setHoveredMilestone(index)}
                  onMouseLeave={() => setHoveredMilestone(null)}
                >
                  {/* Timeline dot */}
                  <motion.div
                    className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10 flex items-center justify-center text-lg"
                    style={{
                      background: milestone.color,
                      boxShadow: `0 0 20px ${milestone.color}60`
                    }}
                    animate={{
                      scale: hoveredMilestone === index ? 1.3 : 1,
                      boxShadow: hoveredMilestone === index 
                        ? `0 0 30px ${milestone.color}80`
                        : `0 0 20px ${milestone.color}60`
                    }}
                  >
                    {milestone.icon}
                  </motion.div>

                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${milestone.color}10, ${milestone.color}05)`,
                      }}
                    >
                      <div className="text-2xl font-bold mb-2" style={{ color: milestone.color }}>
                        {milestone.year}
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">{milestone.title}</h4>
                      <p className="text-slate-400 leading-relaxed">{milestone.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Culture Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h3 className="text-3xl md:text-4xl font-bold mb-8 text-white">
            Giá trị cốt lõi
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "🥷",
                title: "Ninja Mindset",
                description: "Thực chiến, linh hoạt, không ngừng học hỏi",
                color: "#3B82F6"
              },
              {
                icon: "🤝",
                title: "Collaboration",
                description: "Cùng nhau xây dựng, chia sẻ kiến thức",
                color: "#10B981"
              },
              {
                icon: "🚀",
                title: "Innovation",
                description: "Luôn tìm kiếm giải pháp tốt nhất",
                color: "#F59E0B"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${value.color}10, ${value.color}05)`,
                }}
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{value.title}</h4>
                <p className="text-slate-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}