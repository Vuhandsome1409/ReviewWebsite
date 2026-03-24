import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Users, Coffee, Lightbulb, Heart } from "lucide-react";

interface WorkspaceVideo {
  src: string;
  title: string;
  description: string;
  mood: string;
  autoPlay?: boolean;
}

interface LiveWorkspaceShowcaseProps {
  videos?: WorkspaceVideo[];
}

const defaultWorkspaceVideos: WorkspaceVideo[] = [
  {
    src: "/video/7640784821995.mp4",
    title: "Ninja đang code",
    description: "Những giây phút tập trung cao độ",
    mood: "focused",
    autoPlay: true
  },
  {
    src: "/video/7643190930341.mp4", 
    title: "Brainstorming session",
    description: "Ý tưởng bùng nổ trong team meeting",
    mood: "creative",
    autoPlay: true
  },
  {
    src: "/video/7643191304759.mp4",
    title: "Coffee break vibes",
    description: "Những cuộc trò chuyện thú vị bên ly cà phê",
    mood: "relaxed",
    autoPlay: true
  },
  {
    src: "/video/7643191360098.mp4",
    title: "Mentoring moments",
    description: "Chia sẻ kinh nghiệm và học hỏi lẫn nhau",
    mood: "learning",
    autoPlay: true
  },
  {
    src: "/video/7643191775164.mp4",
    title: "Team collaboration",
    description: "Làm việc nhóm hiệu quả và vui vẻ",
    mood: "teamwork",
    autoPlay: true
  },
  {
    src: "/video/7643191898281.mp4",
    title: "Innovation in action",
    description: "Thử nghiệm và phát triển ý tưởng mới",
    mood: "innovative",
    autoPlay: true
  }
];

const workspaceHighlights = [
  {
    icon: Users,
    title: "50+ Ninja",
    description: "Đội ngũ chuyên nghiệp",
    color: "#3B82F6"
  },
  {
    icon: Coffee,
    title: "Không gian hiện đại",
    description: "Thoải mái và sáng tạo",
    color: "#F59E0B"
  },
  {
    icon: Lightbulb,
    title: "Học hỏi liên tục",
    description: "Phát triển kỹ năng",
    color: "#10B981"
  },
  {
    icon: Heart,
    title: "Văn hóa tích cực",
    description: "Hỗ trợ và phát triển",
    color: "#EF4444"
  }
];

export function LiveWorkspaceShowcase({ videos = defaultWorkspaceVideos }: LiveWorkspaceShowcaseProps) {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [playingVideos, setPlayingVideos] = useState<Set<number>>(new Set());
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    // Auto-play videos when they come into view
    const observers = videoRefs.current.map((video, index) => {
      if (!video) return null;
      
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              video.play().catch(() => {
                // Fallback if autoplay is blocked
                console.log(`Autoplay blocked for video ${index}`);
              });
              setPlayingVideos(prev => new Set(prev).add(index));
            } else {
              video.pause();
              setPlayingVideos(prev => {
                const newSet = new Set(prev);
                newSet.delete(index);
                return newSet;
              });
            }
          });
        },
        { threshold: 0.3 }
      );
      
      observer.observe(video);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  const handleVideoHover = (index: number, isHovering: boolean) => {
    setHoveredVideo(isHovering ? index : null);
    const video = videoRefs.current[index];
    if (video && isHovering) {
      video.play().catch(() => {});
    }
  };

  return (
    <div className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: "radial-gradient(circle at 20% 80%, rgba(59, 130, 246, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)"
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
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-blue-400 via-green-400 to-amber-400 bg-clip-text text-transparent">
            Trải nghiệm - NINJA AI - Thực chiến
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Không gian làm việc năng động, nơi mọi người cùng nhau tạo ra những sản phẩm AI tuyệt vời.
          </p>
        </motion.div>

        {/* Live Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
              onMouseEnter={() => handleVideoHover(index, true)}
              onMouseLeave={() => handleVideoHover(index, false)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-slate-800 shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500">
                <video
                  ref={(el) => {
                    videoRefs.current[index] = el;
                  }}
                  src={video.src}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                />
                
                {/* Overlay with mood indicator */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Mood badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm border border-white/20"
                     style={{
                       background: `linear-gradient(135deg, ${getMoodColor(video.mood)}20, ${getMoodColor(video.mood)}10)`,
                       color: getMoodColor(video.mood)
                     }}>
                  {getMoodEmoji(video.mood)} {video.mood}
                </div>

                {/* Play indicator */}
                <AnimatePresence>
                  {playingVideos.has(index) && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-green-500/80 backdrop-blur-sm flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-white font-semibold mb-1">{video.title}</h3>
                  <p className="text-slate-300 text-sm">{video.description}</p>
                </div>

                {/* Glow effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{
                    background: `radial-gradient(circle at center, ${getMoodColor(video.mood)}40, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Workspace Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {workspaceHighlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <div 
                className="p-6 rounded-2xl backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                style={{
                  background: `linear-gradient(135deg, ${highlight.color}10, ${highlight.color}05)`,
                }}
              >
                <highlight.icon 
                  size={40} 
                  className="mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: highlight.color }}
                />
                <h3 className="text-lg font-bold text-white mb-2">{highlight.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{highlight.description}</p>
                
                {/* Glow effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${highlight.color}15, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}

// Helper functions
function getMoodColor(mood: string): string {
  const moodColors: Record<string, string> = {
    focused: "#3B82F6",
    creative: "#8B5CF6", 
    relaxed: "#F59E0B",
    learning: "#10B981",
    teamwork: "#EF4444",
    innovative: "#06B6D4"
  };
  return moodColors[mood] || "#3B82F6";
}

function getMoodEmoji(mood: string): string {
  const moodEmojis: Record<string, string> = {
    focused: "🎯",
    creative: "💡",
    relaxed: "☕",
    learning: "📚",
    teamwork: "🤝",
    innovative: "🚀"
  };
  return moodEmojis[mood] || "⚡";
}