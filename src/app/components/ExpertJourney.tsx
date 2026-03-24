import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router";
import { Sparkles, Award, Code, Rocket, Users, Target, Database, Zap, Flag, TrendingUp } from "lucide-react";

interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
  icon: any;
  position: { x: number; y: number };
  flagColor: string;
  isNinjaAI?: boolean;
}

interface Expert {
  id: string;
  name: string;
  title: string;
  domain: string[];
  color: string;
  milestones: Milestone[];
  roadlineImage: string;
  imageAlt: string;
}

const EXPERTS: Expert[] = [
  {
    id: "expert-1",
    name: "Tony Triệu",
    title: "Founder Kaching Group",
    domain: ["E-commerce", "Amazon FBA"],
    color: "#CA8A04",
    roadlineImage: "/pic_company/road_line_tony_trieu.png",
    imageAlt: "Tony Trieu Journey",
    milestones: [
      {
        id: "tony-1",
        year: "2015",
        title: "E-commerce Foundation",
        description: "Khởi đầu xây dựng thương hiệu Việt trên Amazon, nghiên cứu thị trường toàn cầu",
        icon: Sparkles,
        position: { x: 50, y: 24 }, // Trên đường, phần đầu thấp
        flagColor: "#F59E0B",
      },
      {
        id: "tony-2",
        year: "2018",
        title: "Amazon FBA Breakthrough",
        description: "Sáng lập Kaching Group, xây dựng hệ sinh thái FBA Freedom với hàng ngàn thành viên",
        icon: Rocket,
        position: { x: 58, y: 42 }, // Uốn lên cao
        flagColor: "#3B82F6",
      },
      {
        id: "tony-3",
        year: "2020",
        title: "Community & Ecosystem",
        description: "Đồng tác giả sách '10 bước xây dựng thương hiệu Việt trên Amazon', đào tạo doanh nghiệp",
        icon: Users,
        position: { x: 60, y: 58 }, // Xuống giữa
        flagColor: "#EF4444",
      },
      {
        id: "tony-4",
        year: "2025",
        title: "AI Builder Pioneer",
        description: "Tiên phong ứng dụng AI tự động hóa nghiên cứu thị trường và vận hành E-commerce",
        icon: TrendingUp,
        position: { x: 45, y: 66 }, // Lên lại
        flagColor: "#8B5CF6",
      },
      {
        id: "tony-ninja",
        year: "2025",
        title: "Ninja AI",
        description: "Nơi kết hợp chuyên môn E-commerce với AI để xây dựng giải pháp thực tế cho doanh nghiệp",
        icon: Flag,
        position: { x: 33, y: 73 }, // Cuối đường
        flagColor: "#FCD34D",
        isNinjaAI: true,
      },
    ],
  },
  {
    id: "expert-2",
    name: "Nguyễn Hữu Kiên",
    title: "CTO Cen Homes",
    domain: ["System Architecture", "Proptech"],
    color: "#8B5CF6",
    roadlineImage: "/pic_company/road_line_nhk.png",
    imageAlt: "Nguyen Huu Kien Journey",
    milestones: [
      {
        id: "kien-1",
        year: "2016",
        title: "System Architecture Foundation",
        description: "Triển khai hệ thống quản trị dữ liệu lớn cho các doanh nghiệp đa quốc gia",
        icon: Database,
        position: { x: 50, y: 24 }, // Trên đường, phần đầu cao
        flagColor: "#F59E0B",
      },
      {
        id: "kien-2",
        year: "2019",
        title: "Digital Transformation",
        description: "Cố vấn chiến lược công nghệ, tối ưu hóa quy trình từ thủ công sang tự động",
        icon: Zap,
        position: { x: 58, y: 42 }, // Uốn xuống thấp
        flagColor: "#3B82F6",
      },
      {
        id: "kien-3",
        year: "2021",
        title: "CTO Leadership",
        description: "Xây dựng nền tảng Proptech, ứng dụng AI và Big Data vào định giá bất động sản",
        icon: Target,
        position: { x: 60, y: 58 }, // Lên giữa
        flagColor: "#10B981",
      },
      {
        id: "kien-4",
        year: "2025",
        title: "Tech Architecture Leader",
        description: "Dẫn dắt kiến trúc hệ thống, xây dựng nền tảng công nghệ an toàn và hiện đại",
        icon: Code,
        position: { x: 45, y: 66 }, // Xuống nhẹ
        flagColor: "#8B5CF6",
      },
      {
        id: "kien-ninja",
        year: "2025",
        title: "Ninja AI",
        description: "Nơi kết hợp chuyên môn System Architecture với AI để xây dựng nền tảng công nghệ vững chắc",
        icon: Award,
        position: { x: 33, y: 73 }, // Cuối đường
        flagColor: "#FCD34D",
        isNinjaAI: true,
      },
    ],
  },
];

export function ExpertJourney() {
  const [activeNode, setActiveNode] = useState<string | null>(null);

  return (
    <section className="relative py-32 overflow-hidden" style={{ background: "#0A0E27" }}>
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full animate-float" style={{ background: "radial-gradient(circle, rgba(202,138,4,0.2) 0%, transparent 70%)", filter: "blur(80px)" }}></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full animate-float-delayed" style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)", filter: "blur(80px)" }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Intro */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-6" style={{ background: "rgba(139,92,246,0.2)", border: "1px solid rgba(139,92,246,0.3)", color: "#A78BFA" }}>
            Đội ngũ Chuyên gia
          </div>
          <h2 className="text-5xl lg:text-6xl font-bold mb-6" style={{ background: "linear-gradient(135deg, #CA8A04, #FCD34D, #8B5CF6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            Hành trình Chuyên gia
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#94A3B8" }}>
            Khám phá hành trình phát triển của các chuyên gia hàng đầu tại Ninja AI
          </p>
        </motion.div>

        {/* Two Separate Expert Roadmaps */}
        <div className="space-y-32">
          {EXPERTS.map((expert, expertIdx) => (
            <motion.div
              key={expert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: expertIdx * 0.3 }}
              className="relative"
            >
              {/* Expert Header */}
              <div className="flex items-center gap-6 mb-12">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: expertIdx * 0.3 + 0.2 }}
                  className="relative"
                >
                  <div className="w-24 h-24 rounded-2xl overflow-hidden" style={{ 
                    border: `3px solid ${expert.color}`, 
                    boxShadow: `0 0 30px ${expert.color}40, 0 10px 30px rgba(0,0,0,0.3)` 
                  }}>
                    <img 
                      src={expert.id === "expert-1" ? "/pic_company/tony_trieu.jpg" : "/pic_company/NHK.jpg"}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2" style={{ color: "#E2E8F0" }}>
                    {expert.name}
                  </h3>
                  <p className="text-lg mb-3" style={{ color: "#94A3B8" }}>
                    {expert.title}
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {expert.domain.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-sm font-medium" style={{ 
                        background: `${expert.color}20`, 
                        color: expert.color,
                        border: `1px solid ${expert.color}30`
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Roadmap Container */}
              <div className="relative" style={{ height: "400px" }}>
                {/* Roadline Image - blended naturally */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: expertIdx * 0.3 + 0.4 }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    {/* Gradient overlays to blend edges */}
                    <div className="absolute inset-0 z-10 pointer-events-none" style={{
                      background: `linear-gradient(to right, #0A0E27 0%, transparent 8%, transparent 92%, #0A0E27 100%)`
                    }}></div>
                    <div className="absolute inset-0 z-10 pointer-events-none" style={{
                      background: `linear-gradient(to bottom, #0A0E27 0%, transparent 15%, transparent 85%, #0A0E27 100%)`
                    }}></div>
                    
                    {/* Roadline image */}
                    <img 
                      src={expert.roadlineImage}
                      alt={expert.imageAlt}
                      className="w-full h-full object-contain"
                      style={{ 
                        filter: `drop-shadow(0 8px 30px ${expert.color}30) brightness(1.15) contrast(1.1)`,
                        mixBlendMode: "lighten",
                        opacity: 0.9
                      }}
                    />
                  </div>
                </motion.div>

                {/* Milestone Nodes with Progressive Sizing */}
                {expert.milestones.map((milestone, idx) => {
                  const isActive = activeNode === milestone.id;
                  const Icon = milestone.icon;
                  
                  // Progressive sizing: node 1 nhỏ nhất, node cuối lớn nhất
                  const baseSize = milestone.isNinjaAI ? 64 : 40 + (idx * 6); // 40, 46, 52, 58, 64
                  const fontSize = milestone.isNinjaAI ? "text-2xl" : idx === 0 ? "text-sm" : idx === 1 ? "text-base" : idx === 2 ? "text-lg" : "text-xl";
                  
                  return (
                    <motion.div
                      key={milestone.id}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: expertIdx * 0.3 + 0.8 + idx * 0.15 }}
                      style={{
                        position: "absolute",
                        left: `${milestone.position.x}%`,
                        top: `${milestone.position.y}%`,
                        transform: "translate(-50%, -50%)",
                        zIndex: 20 + idx, // Nodes sau có z-index cao hơn
                      }}
                      className="cursor-pointer"
                      onMouseEnter={() => setActiveNode(milestone.id)}
                      onMouseLeave={() => setActiveNode(null)}
                    >
                      <div className="relative">
                        {/* Progressive-sized node circle */}
                        <motion.div
                          animate={{
                            scale: isActive ? 1.2 : 1,
                            boxShadow: isActive 
                              ? `0 0 40px ${milestone.flagColor}90, 0 0 80px ${milestone.flagColor}50` 
                              : `0 0 ${baseSize * 0.4}px ${milestone.flagColor}60`,
                          }}
                          transition={{ duration: 0.3 }}
                          className={`relative rounded-full flex items-center justify-center font-bold ${fontSize}`}
                          style={{
                            width: `${baseSize}px`,
                            height: `${baseSize}px`,
                            background: milestone.isNinjaAI
                              ? `linear-gradient(135deg, #CA8A04, #FCD34D)`
                              : isActive 
                                ? `linear-gradient(135deg, ${milestone.flagColor}, ${milestone.flagColor}CC)` 
                                : `linear-gradient(135deg, ${milestone.flagColor}DD, ${milestone.flagColor}99)`,
                            border: `${milestone.isNinjaAI ? 4 : 2 + idx * 0.5}px solid ${milestone.isNinjaAI ? '#FCD34D' : milestone.flagColor}`,
                            color: "#0A0E27",
                            boxShadow: `0 ${4 + idx * 2}px ${15 + idx * 5}px ${milestone.flagColor}40`,
                          }}
                        >
                          {milestone.isNinjaAI ? <Icon size={28} /> : idx + 1}
                          
                          {/* Pulse ring */}
                          {isActive && (
                            <motion.div
                              initial={{ scale: 1, opacity: 0.8 }}
                              animate={{ scale: 2.5, opacity: 0 }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="absolute inset-0 rounded-full"
                              style={{ border: `3px solid ${milestone.flagColor}` }}
                            />
                          )}
                        </motion.div>

                        {/* Info card on hover - horizontal banner style */}
                        <motion.div
                          initial={{ opacity: 0, x: -20, scale: 0.9 }}
                          animate={{ 
                            opacity: isActive ? 1 : 0,
                            x: isActive ? 0 : -20,
                            scale: isActive ? 1 : 0.9
                          }}
                          transition={{ duration: 0.4, ease: "easeOut" }}
                          className="absolute top-1/2 -translate-y-1/2 pointer-events-none"
                          style={{ 
                            left: "calc(100% + 16px)",
                            width: "auto",
                            maxWidth: "650px",
                            minWidth: "400px",
                            zIndex: 40 
                          }}
                        >
                          <div className="glass-card-premium px-4 py-2 rounded-lg flex items-center gap-3" style={{
                            background: "rgba(26,31,58,0.98)",
                            border: `1.5px solid ${milestone.flagColor}60`,
                            boxShadow: `0 10px 30px rgba(0,0,0,0.5), 0 0 20px ${milestone.flagColor}30`,
                          }}>
                            <div className="w-8 h-8 rounded flex items-center justify-center flex-shrink-0" 
                                 style={{ background: `${milestone.flagColor}20` }}>
                              <Icon size={16} style={{ color: milestone.flagColor }} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <span className="text-xs font-bold whitespace-nowrap" style={{ color: milestone.flagColor }}>
                                  {milestone.year}
                                </span>
                                <span className="text-xs font-bold whitespace-nowrap" style={{ 
                                  color: milestone.isNinjaAI ? "#FCD34D" : "#E2E8F0" 
                                }}>
                                  {milestone.title}
                                </span>
                              </div>
                              <p className="text-xs leading-snug" style={{ color: "#94A3B8" }}>
                                {milestone.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Mobile: Stacked layout */}
        <div className="lg:hidden space-y-12">
          {EXPERTS.map((expert) => (
            <div key={expert.id} className="space-y-6">
              <div className="glass-card-premium p-6 rounded-2xl" style={{ border: `2px solid ${expert.color}40` }}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-xl overflow-hidden" style={{ border: `2px solid ${expert.color}` }}>
                    <img 
                      src={expert.id === "expert-1" ? "/pic_company/tony_trieu.jpg" : "/pic_company/NHK.jpg"}
                      alt={expert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: "#E2E8F0" }}>{expert.name}</h3>
                    <p className="text-sm" style={{ color: "#94A3B8" }}>{expert.title}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {expert.domain.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-xs" style={{ background: `${expert.color}20`, color: expert.color }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative pl-8 space-y-6">
                <div className="absolute left-0 top-0 bottom-0 w-0.5" style={{ background: `linear-gradient(to bottom, ${expert.color}60, ${expert.color}20)` }}></div>

                {expert.milestones.map((milestone, idx) => {
                  const Icon = milestone.icon;
                  return (
                    <div key={milestone.id} className="relative">
                      <div className="absolute -left-8 top-2 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm" 
                           style={{ 
                             background: milestone.isNinjaAI ? `linear-gradient(135deg, #CA8A04, #FCD34D)` : milestone.flagColor, 
                             color: "#0A0E27" 
                           }}>
                        {milestone.isNinjaAI ? <Icon size={16} /> : idx + 1}
                      </div>

                      <div className="glass-card-premium p-4 rounded-xl" style={{
                        border: milestone.isNinjaAI ? `2px solid #FCD34D60` : undefined
                      }}>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs font-bold px-2 py-1 rounded" style={{ background: `${milestone.flagColor}20`, color: milestone.flagColor }}>
                            {milestone.year}
                          </span>
                          <span className="text-sm font-bold" style={{ color: milestone.isNinjaAI ? "#FCD34D" : "#E2E8F0" }}>
                            {milestone.title}
                          </span>
                        </div>
                        <p className="text-sm" style={{ color: "#94A3B8" }}>{milestone.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-16"
        >
          <Link 
            to="/about" 
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105" 
            style={{ 
              background: "linear-gradient(135deg, #CA8A04, #F59E0B)", 
              color: "#0A0E27", 
              boxShadow: "0 10px 40px rgba(202,138,4,0.3)" 
            }}
          >
            Tìm hiểu thêm về đội ngũ
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>→</motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}