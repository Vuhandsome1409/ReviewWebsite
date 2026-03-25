import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { InteractiveBook } from "../components/InteractiveBook";
import { LiveWorkspaceShowcase } from "../components/LiveWorkspaceShowcase";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Users, Award, Target, Lightbulb } from "lucide-react";

// Data for the interactive book
const journeyChapters = [
  {
    number: "01",
    year: "2021", 
    title: "Khởi đầu từ bài toán thật",
    subtitle: "Từ tư duy xây phần mềm → sang tư duy giải quyết vận hành",
    description: "Ninja AI không bắt đầu từ việc 'làm thương hiệu AI', mà từ việc giải quyết các bài toán thật trong doanh nghiệp. Khởi điểm của chúng tôi là triển khai, va chạm, sửa lỗi, tối ưu và học từ thực tế.",
    color: "#3B82F6"
  },
  {
    number: "02", 
    year: "2022",
    title: "Khi hệ thống bắt đầu có chiều sâu",
    subtitle: "Từ triển khai đơn điểm → sang tư duy hệ thống tổng thể", 
    description: "Không chỉ làm hệ thống nữa, mà bắt đầu hiểu cách các lớp dữ liệu, quy trình và vận hành phải nối vào nhau. Mỗi lần triển khai là một lần học sâu hơn về cấu trúc doanh nghiệp.",
    color: "#8B5CF6"
  },
  {
    number: "03",
    year: "2023–2024", 
    title: "Khi AI không còn là lớp phủ",
    subtitle: "Từ software-enabled → sang AI-enabled",
    description: "AI không còn được xem là thứ trang trí thêm vào, mà trở thành một lớp năng lực mới trong hệ thống kinh doanh. Chúng tôi bắt đầu đưa AI vào chấm điểm, CRM, báo cáo, tự động hóa dữ liệu và các luồng vận hành thật.",
    color: "#F59E0B"
  },
  {
    number: "04",
    year: "2025",
    title: "Xây người, không chỉ xây hệ thống", 
    subtitle: "Từ delivery team → sang ecosystem of builders",
    description: "Không chỉ build solution, mà build builders. Ninja AI Lab ra đời để biến kiến thức thành năng lực triển khai thật. Mở lab, hình thành pipeline builder, mentoring, dự án nội bộ.",
    color: "#10B981"
  },
  {
    number: "05",
    year: "2026+",
    title: "Viết tiếp chương AI-native enterprise",
    subtitle: "Từ triển khai giải pháp → sang kiến tạo năng lực tổ chức", 
    description: "Mục tiêu tiếp theo không chỉ là triển khai dự án, mà xây các doanh nghiệp có thể vận hành và tăng trưởng theo mô hình AI-native. Mở rộng khu vực, platform hóa, scale builder ecosystem.",
    color: "#EF4444"
  }
];

// Company stats
const companyStats = [
  { icon: Users, label: "Ninja thực chiến", value: "50+", color: "#3B82F6" },
  { icon: Award, label: "Dự án triển khai", value: "200+", color: "#10B981" },
  { icon: Target, label: "Khách hàng tin tưởng", value: "100+", color: "#F59E0B" },
  { icon: Lightbulb, label: "Giải pháp AI", value: "30+", color: "#8B5CF6" }
];

// Team images
const teamImages = [
  { src: "/pic_company/team_dev.jpg", alt: "Đội ngũ phát triển", caption: "Đội ngũ Ninja đang thực chiến" },
  { src: "/pic_company/working_place.jpg", alt: "Môi trường làm việc", caption: "Không gian làm việc chuyên nghiệp" },
  { src: "/pic_company/mentor.jpg", alt: "Mentoring", caption: "Mentoring và chia sẻ kinh nghiệm" },
  { src: "/pic_company/celebration.jpg", alt: "Celebration", caption: "Những khoảnh khắc đáng nhớ" }
];

export function About() {
  // Error boundary for this component
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      console.error('About page error:', error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  if (hasError) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Đã xảy ra lỗi</h1>
          <p className="text-slate-300 mb-6">Vui lòng tải lại trang</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tải lại trang
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section with Background Image */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/pic_company/working_place.jpg"
            alt="Ninja AI Workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        </div>

        {/* Animated particles overlay */}
        <div className="absolute inset-0 opacity-20">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 sm:mb-8 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Về Ninja AI
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-slate-200 mb-4 sm:mb-6 leading-relaxed max-w-4xl mx-auto">
              Nơi những con người đam mê công nghệ cùng nhau tạo ra những giải pháp AI tuyệt vời
            </p>
            <p className="text-base sm:text-lg md:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto">
              Môi trường thân thiện • Phát triển cùng nhau • Thực chiến AI
            </p>
          </motion.div>

          {/* Company Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16"
          >
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="relative group"
              >
                <div 
                  className="p-4 sm:p-6 rounded-2xl backdrop-blur-xl border border-white/20 hover:border-white/30 transition-all duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}20, ${stat.color}10)`,
                  }}
                >
                  <stat.icon 
                    size={24} 
                    className="mx-auto mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300 sm:w-8 sm:h-8"
                    style={{ color: stat.color }}
                  />
                  <div className="text-2xl sm:text-3xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-300 font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-slate-300 text-sm"
          >
            Cuộn xuống để khám phá hành trình của chúng tôi
          </motion.div>
        </div>
      </section>

      {/* Journey Story Book Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-amber-400 bg-clip-text text-transparent">
              Hành trình phát triển
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Mỗi chương là một bước tiến quan trọng trong việc xây dựng tương lai AI-native
            </p>
          </motion.div>

          {/* Interactive Book Component */}
          <div className="mb-20">
            <InteractiveBook chapters={journeyChapters} />
          </div>
        </div>
      </section>

      {/* Work Environment Gallery */}
      <section className="relative py-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Không gian làm việc
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              Nơi ý tưởng được chia sẻ tự do và sáng tạo không giới hạn
            </p>
          </motion.div>

          {/* Workspace Images Masonry Grid */}
          <div className="relative mb-16">
            {/* Main large image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mb-6"
            >
              <div className="relative overflow-hidden rounded-3xl aspect-[16/9] group">
                <img
                  src="/pic_company/working_place.jpg"
                  alt="Không gian làm việc chính"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Không gian mở</h3>
                  <p className="text-slate-200">Sáng tạo và hợp tác hiệu quả</p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl">
                  🏢
                </div>
              </div>
            </motion.div>

            {/* Grid of smaller images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Left column - Team collaboration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[4/5] group">
                  <img
                    src="/pic_company/team_dev.jpg"
                    alt="Team collaboration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">Teamwork</h4>
                    <p className="text-sm text-slate-200">Giải quyết vấn đề cùng nhau</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-blue-500/80 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    👥
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-square group">
                  <img
                    src="/pic_company/celebration.jpg"
                    alt="Team celebration"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">Fun Moments</h4>
                    <p className="text-sm text-slate-200">Những khoảnh khắc vui vẻ</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-amber-500/80 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    🎉
                  </div>
                </div>
              </motion.div>

              {/* Center column - Mentoring */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-square group">
                  <img
                    src="/pic_company/mentor.jpg"
                    alt="Mentoring session"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">Learning</h4>
                    <p className="text-sm text-slate-200">Chia sẻ kinh nghiệm</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-500/80 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    🎓
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  <img
                    src="/pic_company/fes.jpg"
                    alt="Company events"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">Events</h4>
                    <p className="text-sm text-slate-200">Hoạt động và sự kiện</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-purple-500/80 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    🎪
                  </div>
                </div>
              </motion.div>

              {/* Right column - Mixed content */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-6"
              >
                <div className="relative overflow-hidden rounded-2xl aspect-[3/4] group">
                  <img
                    src="/pic_company/tony_trieu.jpg"
                    alt="Leadership"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">Leadership</h4>
                    <p className="text-sm text-slate-200">Dẫn dắt và định hướng</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-indigo-500/80 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    🎯
                  </div>
                </div>

                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] group">
                  <img
                    src="/pic_company/NHK.jpg"
                    alt="Technical Excellence"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="font-bold mb-1">Technical</h4>
                    <p className="text-sm text-slate-200">Chuyên môn kỹ thuật</p>
                  </div>
                  <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-cyan-500/80 backdrop-blur-sm flex items-center justify-center text-white text-sm">
                    💻
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 text-center">
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-sm text-slate-300">Ninja gia đình</div>
              </div>
            </motion.div>
          </div>

          {/* Workspace Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Flexible Working",
                description: "Làm việc linh hoạt, hiệu quả",
                icon: "⚡",
                color: "#3B82F6"
              },
              {
                title: "Continuous Learning", 
                description: "Học hỏi và phát triển không ngừng",
                icon: "📈",
                color: "#10B981"
              },
              {
                title: "Team Spirit",
                description: "Tinh thần đồng đội mạnh mẽ",
                icon: "🤝",
                color: "#F59E0B"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300"
                style={{
                  background: `linear-gradient(135deg, ${benefit.color}10, ${benefit.color}05)`,
                }}
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-slate-400 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Live Workspace Section */}
      <LiveWorkspaceShowcase />
    </div>
  );
}