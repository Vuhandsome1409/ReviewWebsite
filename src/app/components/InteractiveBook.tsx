import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, BookOpen } from "lucide-react";

interface Chapter {
  number: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
}

interface InteractiveBookProps {
  chapters: Chapter[];
}

export function InteractiveBook({ chapters }: InteractiveBookProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < chapters.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const currentChapter = chapters[currentPage];

  return (
    <div className="relative w-full max-w-6xl mx-auto perspective-2000">
      <AnimatePresence mode="wait">
        {!isOpen ? (
          /* CLOSED BOOK */
          <motion.div
            key="closed-book"
            initial={{ rotateY: 0, scale: 0.8, opacity: 0 }}
            animate={{ rotateY: 0, scale: 1, opacity: 1 }}
            exit={{ rotateY: -15, scale: 1.1, opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative mx-auto cursor-pointer"
            style={{
              width: "400px",
              height: "500px",
              transformStyle: "preserve-3d",
            }}
            onClick={() => setIsOpen(true)}
          >
            {/* Book Cover */}
            <div
              className="absolute inset-0 rounded-r-2xl overflow-hidden group"
              style={{
                background: "linear-gradient(135deg, #1a1f3a 0%, #0A0E27 100%)",
                boxShadow: "20px 20px 60px rgba(0,0,0,0.8), -5px 0 20px rgba(0,0,0,0.5)",
                border: "2px solid rgba(202,138,4,0.3)",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Book spine shadow */}
              <div
                className="absolute left-0 top-0 bottom-0 w-12"
                style={{
                  background: "linear-gradient(90deg, rgba(0,0,0,0.6), transparent)",
                }}
              ></div>

              {/* Cover design */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center">
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="mb-8"
                >
                  <BookOpen size={64} style={{ color: "#CA8A04" }} />
                </motion.div>

                <h2
                  className="text-4xl font-bold mb-4"
                  style={{
                    background: "linear-gradient(135deg, #CA8A04, #FCD34D)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Hành trình
                </h2>
                <h3 className="text-3xl font-bold mb-6" style={{ color: "#E2E8F0" }}>
                  Phát triển
                </h3>

                <div className="text-sm uppercase tracking-widest mb-8" style={{ color: "#94A3B8" }}>
                  2021 — 2026+
                </div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-xs uppercase tracking-wider"
                  style={{ color: "#CA8A04" }}
                >
                  Click để mở sách
                </motion.div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" style={{ color: "#CA8A04" }}></div>
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20" style={{ color: "#CA8A04" }}></div>

              {/* Glow effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 50% 50%, rgba(202,138,4,0.1), transparent 70%)",
                }}
              ></div>
            </div>

            {/* Book depth/pages effect */}
            <div
              className="absolute inset-0 rounded-r-2xl"
              style={{
                transform: "translateZ(-10px)",
                background: "linear-gradient(135deg, #15192e 0%, #0A0E27 100%)",
                boxShadow: "15px 15px 40px rgba(0,0,0,0.6)",
                border: "2px solid rgba(202,138,4,0.2)",
              }}
            ></div>
            <div
              className="absolute inset-0 rounded-r-2xl"
              style={{
                transform: "translateZ(-20px)",
                background: "linear-gradient(135deg, #10142a 0%, #0A0E27 100%)",
                boxShadow: "10px 10px 30px rgba(0,0,0,0.5)",
                border: "2px solid rgba(202,138,4,0.1)",
              }}
            ></div>
          </motion.div>
        ) : (
          /* OPEN BOOK */
          <motion.div
            key="open-book"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* Book container */}
            <div className="relative flex gap-4" style={{ perspective: "2000px" }}>
              {/* Left page */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: -5 }}
                className="flex-1 relative"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "right center",
                }}
              >
                <div
                  className="relative p-12 rounded-l-2xl min-h-[600px] flex flex-col"
                  style={{
                    background: "linear-gradient(135deg, rgba(26,31,58,0.95), rgba(26,31,58,0.85))",
                    boxShadow: "-20px 0 40px rgba(0,0,0,0.3), inset 10px 0 20px rgba(0,0,0,0.2)",
                    border: "2px solid rgba(255,255,255,0.1)",
                    borderRight: "none",
                  }}
                >
                  {/* Page number */}
                  <div className="absolute top-8 left-8 text-sm" style={{ color: "#94A3B8" }}>
                    Chương {currentChapter.number}
                  </div>

                  {/* Chapter badge */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-3xl mb-8 mx-auto"
                    style={{
                      background: `linear-gradient(135deg, ${currentChapter.color}, ${currentChapter.color}cc)`,
                      color: "#0A0E27",
                      boxShadow: `0 10px 40px ${currentChapter.color}40`,
                    }}
                  >
                    {currentChapter.number}
                  </div>

                  {/* Year - Large and prominent */}
                  <motion.div
                    key={`year-${currentPage}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-7xl font-bold text-center mb-8"
                    style={{
                      background: `linear-gradient(135deg, ${currentChapter.color}, ${currentChapter.color}cc)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {currentChapter.year}
                  </motion.div>

                  {/* Decorative line */}
                  <div className="w-32 h-1 mx-auto mb-8 rounded-full" style={{ background: currentChapter.color }}></div>

                  {/* Key Highlights Section */}
                  <div className="flex-1 flex flex-col justify-center space-y-6">
                    <div className="text-center mb-4">
                      <div className="text-xs uppercase tracking-widest mb-2" style={{ color: "#94A3B8" }}>
                        Điểm nổi bật
                      </div>
                    </div>

                    {/* Highlight items based on chapter */}
                    {currentPage === 0 && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Khởi đầu từ bài toán thực tế
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Triển khai và học từ thực chiến
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Tư duy giải quyết vận hành
                          </p>
                        </div>
                      </>
                    )}

                    {currentPage === 1 && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            ERP đầu tiên triển khai
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Hiểu sâu cấu trúc doanh nghiệp
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Tư duy hệ thống tổng thể
                          </p>
                        </div>
                      </>
                    )}

                    {currentPage === 2 && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            AI vào CRM và chấm điểm
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Tự động hóa dữ liệu thực tế
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            AI-enabled systems
                          </p>
                        </div>
                      </>
                    )}

                    {currentPage === 3 && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Ra mắt Ninja AI Lab
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Build builders, not just solutions
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Mentoring và dự án nội bộ
                          </p>
                        </div>
                      </>
                    )}

                    {currentPage === 4 && (
                      <>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            AI-native enterprise
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Mở rộng khu vực
                          </p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 rounded-full mt-2" style={{ background: currentChapter.color }}></div>
                          <p className="text-sm leading-relaxed" style={{ color: "#E2E8F0" }}>
                            Scale builder ecosystem
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Bottom decorative quote */}
                  <div className="mt-8 pt-6 border-t" style={{ borderColor: `${currentChapter.color}30` }}>
                    <p className="text-xs italic text-center" style={{ color: "#94A3B8" }}>
                      "{currentChapter.subtitle}"
                    </p>
                  </div>

                  {/* Page texture */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-px"
                        style={{
                          top: `${(i + 1) * 3.33}%`,
                          background: `linear-gradient(90deg, transparent, ${currentChapter.color}30, transparent)`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Spine shadow */}
                  <div
                    className="absolute right-0 top-0 bottom-0 w-8"
                    style={{
                      background: "linear-gradient(90deg, transparent, rgba(0,0,0,0.3))",
                    }}
                  ></div>
                </div>
              </motion.div>

              {/* Right page */}
              <motion.div
                initial={{ rotateY: 0 }}
                animate={{ rotateY: 5 }}
                className="flex-1 relative"
                style={{
                  transformStyle: "preserve-3d",
                  transformOrigin: "left center",
                }}
              >
                <div
                  className="relative p-12 rounded-r-2xl min-h-[600px] flex flex-col"
                  style={{
                    background: "linear-gradient(135deg, rgba(26,31,58,0.85), rgba(26,31,58,0.95))",
                    boxShadow: "20px 0 40px rgba(0,0,0,0.3), inset -10px 0 20px rgba(0,0,0,0.2)",
                    border: "2px solid rgba(255,255,255,0.1)",
                    borderLeft: "none",
                  }}
                >
                  {/* Page number */}
                  <div className="absolute top-8 right-8 text-sm" style={{ color: "#94A3B8" }}>
                    {currentPage + 1} / {chapters.length}
                  </div>

                  {/* Content */}
                  <motion.div
                    key={currentPage}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex-1 flex flex-col justify-center"
                  >
                    <h3 className="text-3xl font-bold mb-4" style={{ color: "#E2E8F0" }}>
                      {currentChapter.title}
                    </h3>

                    <p className="text-sm italic mb-6 font-medium" style={{ color: currentChapter.color }}>
                      {currentChapter.subtitle}
                    </p>

                    <p className="text-base leading-relaxed" style={{ color: "#94A3B8" }}>
                      {currentChapter.description}
                    </p>
                  </motion.div>

                  {/* Page texture */}
                  <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
                    {[...Array(30)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute left-0 right-0 h-px"
                        style={{
                          top: `${(i + 1) * 3.33}%`,
                          background: `linear-gradient(90deg, transparent, ${currentChapter.color}30, transparent)`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Spine shadow */}
                  <div
                    className="absolute left-0 top-0 bottom-0 w-8"
                    style={{
                      background: "linear-gradient(90deg, rgba(0,0,0,0.3), transparent)",
                    }}
                  ></div>
                </div>
              </motion.div>
            </div>

            {/* Navigation buttons */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={prevPage}
                disabled={currentPage === 0}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: currentPage === 0 ? "rgba(255,255,255,0.05)" : "rgba(139,92,246,0.2)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  color: "#A78BFA",
                }}
              >
                <ChevronLeft size={20} />
                Trang trước
              </button>

              <button
                onClick={() => setIsOpen(false)}
                className="px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#94A3B8",
                }}
              >
                Đóng sách
              </button>

              <button
                onClick={nextPage}
                disabled={currentPage === chapters.length - 1}
                className="flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed"
                style={{
                  background: currentPage === chapters.length - 1 ? "rgba(255,255,255,0.05)" : "rgba(202,138,4,0.2)",
                  border: "1px solid rgba(202,138,4,0.3)",
                  color: "#FCD34D",
                }}
              >
                Trang sau
                <ChevronRight size={20} />
              </button>
            </div>

            {/* Page indicators */}
            <div className="flex justify-center gap-2 mt-6">
              {chapters.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPage(index)}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: index === currentPage ? chapters[index].color : "rgba(255,255,255,0.2)",
                    width: index === currentPage ? "32px" : "8px",
                  }}
                ></button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
