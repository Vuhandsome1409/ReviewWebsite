import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface JourneyChapter {
  id: string;
  chapterNumber: string;
  year: string;
  title: string;
  meaning: string;
  mainMessage: string;
  shift: string;
  impact?: string;
  color: string;
  glowIntensity: number;
}

interface JourneyStoryBookProps {
  chapters?: JourneyChapter[];
}

const journeyChapters: JourneyChapter[] = [
  {
    id: "chapter-01",
    chapterNumber: "01",
    year: "2021",
    title: "Khởi đầu từ bài toán thật",
    meaning: "Ninja AI không bắt đầu từ việc 'làm thương hiệu AI', mà từ việc giải quyết các bài toán thật trong doanh nghiệp.",
    mainMessage: "Khởi điểm của chúng tôi là triển khai, va chạm, sửa lỗi, tối ưu và học từ thực tế.",
    shift: "Từ tư duy xây phần mềm → sang tư duy giải quyết vận hành",
    color: "#3B82F6",
    glowIntensity: 0.3
  },
  {
    id: "chapter-02", 
    chapterNumber: "02",
    year: "2022",
    title: "Khi hệ thống bắt đầu có chiều sâu",
    meaning: "Không chỉ làm hệ thống nữa, mà bắt đầu hiểu cách các lớp dữ liệu, quy trình và vận hành phải nối vào nhau.",
    mainMessage: "Mỗi lần triển khai là một lần học sâu hơn về cấu trúc doanh nghiệp.",
    shift: "Từ triển khai đơn điểm → sang tư duy hệ thống tổng thể",
    impact: "ERP đầu tiên, delivery thực chiến, kinh nghiệm tích lũy đa ngành",
    color: "#8B5CF6",
    glowIntensity: 0.4
  },
  {
    id: "chapter-03",
    chapterNumber: "03", 
    year: "2023–2024",
    title: "Khi AI không còn là lớp phủ",
    meaning: "AI không còn được xem là thứ trang trí thêm vào, mà trở thành một lớp năng lực mới trong hệ thống kinh doanh.",
    mainMessage: "Chúng tôi bắt đầu đưa AI vào chấm điểm, CRM, báo cáo, tự động hóa dữ liệu và các luồng vận hành thật.",
    shift: "Từ software-enabled → sang AI-enabled",
    impact: "Ra mắt lớp AI đầu tiên / tích hợp AI vào các flow doanh nghiệp",
    color: "#F59E0B",
    glowIntensity: 0.6
  },
  {
    id: "chapter-04",
    chapterNumber: "04",
    year: "2025", 
    title: "Xây người, không chỉ xây hệ thống",
    meaning: "Không chỉ build solution, mà build builders.",
    mainMessage: "Ninja AI Lab ra đời để biến kiến thức thành năng lực triển khai thật.",
    shift: "Từ delivery team → sang ecosystem of builders",
    impact: "Mở lab, hình thành pipeline builder, mentoring, dự án nội bộ",
    color: "#10B981",
    glowIntensity: 0.7
  },
  {
    id: "chapter-05",
    chapterNumber: "05",
    year: "2026+",
    title: "Viết tiếp chương AI-native enterprise", 
    meaning: "Mục tiêu tiếp theo không chỉ là triển khai dự án, mà xây các doanh nghiệp có thể vận hành và tăng trưởng theo mô hình AI-native.",
    mainMessage: "Kiến tạo năng lực tổ chức cho tương lai AI-native.",
    shift: "Từ triển khai giải pháp → sang kiến tạo năng lực tổ chức",
    impact: "Mở rộng khu vực, platform hóa, scale builder ecosystem",
    color: "#EF4444",
    glowIntensity: 0.8
  }
];

export function JourneyStoryBook({ chapters = journeyChapters }: JourneyStoryBookProps) {
  const [openChapter, setOpenChapter] = useState<string | null>(null);
  const [hoveredChapter, setHoveredChapter] = useState<string | null>(null);

  return (
    <div className="relative py-20 px-4">
      {/* Background with subtle texture */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-[0.02]" 
             style={{
               backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.03) 50px, rgba(255,255,255,0.03) 100px)"
             }}>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
            Câu chuyện của chúng tôi
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Hành trình từ những bài toán thật đến việc kiến tạo tương lai AI-native
          </p>
        </motion.div>

        {/* Journey Timeline with Book Chapters */}
        <div className="relative">
          {/* Central timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 via-purple-500 via-amber-500 via-green-500 to-red-500 opacity-30 rounded-full"></div>
          
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`relative mb-20 ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:ml-1/2'}`}
            >
              {/* Timeline dot */}
              <motion.div 
                className="absolute top-8 left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full z-10"
                style={{
                  background: `linear-gradient(135deg, ${chapter.color}, ${chapter.color}cc)`,
                  boxShadow: `0 0 30px ${chapter.color}${Math.floor(chapter.glowIntensity * 255).toString(16).padStart(2, '0')}`
                }}
                animate={{
                  scale: hoveredChapter === chapter.id ? 1.5 : 1,
                  boxShadow: hoveredChapter === chapter.id 
                    ? `0 0 50px ${chapter.color}${Math.floor(chapter.glowIntensity * 255).toString(16).padStart(2, '0')}`
                    : `0 0 30px ${chapter.color}${Math.floor(chapter.glowIntensity * 255).toString(16).padStart(2, '0')}`
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Book Chapter Card */}
              <motion.div
                className={`relative ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}
                onHoverStart={() => setHoveredChapter(chapter.id)}
                onHoverEnd={() => setHoveredChapter(null)}
                onClick={() => setOpenChapter(openChapter === chapter.id ? null : chapter.id)}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: index % 2 === 0 ? -2 : 2,
                }}
                style={{ 
                  transformStyle: "preserve-3d",
                  transformOrigin: index % 2 === 0 ? 'right center' : 'left center'
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Book spine effect */}
                <div 
                  className={`absolute top-0 ${index % 2 === 0 ? '-right-2' : '-left-2'} w-2 h-full rounded-sm opacity-60`}
                  style={{
                    background: `linear-gradient(180deg, ${chapter.color}, ${chapter.color}80)`,
                    transform: `translateZ(-10px) rotateY(${index % 2 === 0 ? '90deg' : '-90deg'})`
                  }}
                />

                {/* Main book page */}
                <div 
                  className="relative p-8 rounded-2xl cursor-pointer transition-all duration-500 group"
                  style={{
                    background: `linear-gradient(135deg, 
                      rgba(30, 41, 59, 0.9), 
                      rgba(30, 41, 59, 0.7)
                    )`,
                    backdropFilter: "blur(20px)",
                    border: `2px solid ${chapter.color}40`,
                    boxShadow: `
                      0 25px 50px -12px rgba(0, 0, 0, 0.5),
                      0 0 0 1px rgba(255, 255, 255, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `
                  }}
                >
                  {/* Page corner fold effect */}
                  <div className={`absolute top-0 ${index % 2 === 0 ? 'right-0' : 'left-0'} w-0 h-0 transition-all duration-300 group-hover:opacity-100 opacity-0`}>
                    <div 
                      style={{
                        [index % 2 === 0 ? 'borderLeft' : 'borderRight']: '40px solid transparent',
                        borderTop: `40px solid ${chapter.color}30`,
                      }}
                    />
                  </div>

                  {/* Chapter number badge */}
                  <motion.div 
                    className="absolute -top-6 -left-6 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl z-10"
                    style={{
                      background: `linear-gradient(135deg, ${chapter.color}, ${chapter.color}cc)`,
                      color: "#0F172A",
                      boxShadow: `0 10px 30px ${chapter.color}60`
                    }}
                    animate={{
                      rotate: hoveredChapter === chapter.id ? 360 : 0,
                      scale: hoveredChapter === chapter.id ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {chapter.chapterNumber}
                  </motion.div>

                  {/* Year badge */}
                  <div 
                    className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                    style={{
                      background: `${chapter.color}20`,
                      color: chapter.color,
                      border: `1px solid ${chapter.color}40`
                    }}
                  >
                    {chapter.year}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                    {chapter.title}
                  </h3>

                  {/* Preview content */}
                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {chapter.meaning}
                  </p>

                  {/* Expand indicator */}
                  <motion.div 
                    className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                    style={{ color: chapter.color }}
                    animate={{
                      x: hoveredChapter === chapter.id ? 10 : 0
                    }}
                  >
                    <span>Mở chương</span>
                    <motion.svg 
                      width="16" 
                      height="16" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2"
                      animate={{
                        rotate: openChapter === chapter.id ? 90 : 0
                      }}
                    >
                      <path d="M9 18l6-6-6-6"/>
                    </motion.svg>
                  </motion.div>

                  {/* Subtle page lines */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-2xl">
                    {[...Array(15)].map((_, i) => (
                      <div 
                        key={i}
                        className="absolute left-8 right-8 h-px"
                        style={{
                          top: `${20 + (i * 4)}%`,
                          background: `linear-gradient(90deg, transparent, ${chapter.color}40, transparent)`
                        }}
                      />
                    ))}
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div 
                    className="absolute inset-0 rounded-2xl pointer-events-none"
                    style={{
                      background: `radial-gradient(circle at ${index % 2 === 0 ? '100%' : '0%'} 50%, ${chapter.color}15, transparent 70%)`
                    }}
                    animate={{
                      opacity: hoveredChapter === chapter.id ? chapter.glowIntensity : 0
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Expanded content panel */}
                <AnimatePresence>
                  {openChapter === chapter.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, rotateX: -90 }}
                      animate={{ opacity: 1, height: "auto", rotateX: 0 }}
                      exit={{ opacity: 0, height: 0, rotateX: -90 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      style={{ 
                        transformOrigin: "top center",
                        transformStyle: "preserve-3d"
                      }}
                      className="mt-4 overflow-hidden"
                    >
                      <div 
                        className="p-8 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, 
                            ${chapter.color}10, 
                            ${chapter.color}05
                          )`,
                          border: `1px solid ${chapter.color}30`,
                          backdropFilter: "blur(10px)"
                        }}
                      >
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: chapter.color }}>
                              Thông điệp chính
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                              {chapter.mainMessage}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-lg font-bold mb-2" style={{ color: chapter.color }}>
                              Chuyển đổi tư duy
                            </h4>
                            <p className="text-slate-300 leading-relaxed">
                              {chapter.shift}
                            </p>
                          </div>

                          {chapter.impact && (
                            <div>
                              <h4 className="text-lg font-bold mb-2" style={{ color: chapter.color }}>
                                Tác động
                              </h4>
                              <p className="text-slate-300 leading-relaxed">
                                {chapter.impact}
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-20"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-amber-600/20 backdrop-blur-xl border border-white/10">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-amber-400 bg-clip-text text-transparent">
              Viết tiếp câu chuyện cùng chúng tôi
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Mỗi dự án là một chương mới trong hành trình kiến tạo tương lai AI-native
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Khám phá Lab của chúng tôi
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}