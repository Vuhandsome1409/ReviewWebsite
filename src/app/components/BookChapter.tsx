import { motion } from "motion/react";
import { ReactNode } from "react";

interface BookChapterProps {
  chapterNumber: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  color: string;
  isReversed?: boolean;
  delay?: number;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export function BookChapter({
  chapterNumber,
  year,
  title,
  subtitle,
  description,
  color,
  isReversed = false,
  delay = 0
}: BookChapterProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeUp}
      custom={delay}
      className="relative"
    >
      <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${isReversed ? 'md:flex-row-reverse' : ''}`}>
        {/* Chapter number & year */}
        <div className={`${isReversed ? 'md:order-1' : ''} md:text-${isReversed ? 'left' : 'right'} mb-8 md:mb-0`}>
          <div className="inline-block md:block">
            <div className="flex items-baseline gap-4 mb-2">
              <span 
                className="text-7xl md:text-8xl font-bold opacity-20 animate-gradient-text" 
                style={{
                  background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                  backgroundSize: "200% auto",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
              >
                {chapterNumber}
              </span>
              <span className="text-3xl font-bold" style={{ color }}>
                {year}
              </span>
            </div>
          </div>
        </div>

        {/* Center dot */}
        <div 
          className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full hidden md:block animate-pulse"
          style={{
            background: color,
            boxShadow: `0 0 20px ${color}80`
          }}
        ></div>

        {/* Content card with 3D book effect */}
        <div className={`${isReversed ? 'md:order-2 md:pr-8' : 'md:pl-8'}`}>
          <div 
            className="group relative p-8 rounded-2xl glass-card-premium shadow-premium transition-all duration-700 book-page page-turn-hover book-depth book-spine"
            style={{
              [isReversed ? 'borderRight' : 'borderLeft']: `3px solid ${color}`,
              background: "linear-gradient(135deg, rgba(26,31,58,0.7), rgba(26,31,58,0.5))",
              transformStyle: "preserve-3d",
              transformOrigin: isReversed ? 'right center' : 'left center'
            }}
          >
            {/* Animated page corner */}
            <div className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-16 h-16 overflow-hidden transition-all duration-500 group-hover:w-24 group-hover:h-24`}>
              <div 
                className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-0 h-0 transition-all duration-500 group-hover:opacity-30`}
                style={{
                  [isReversed ? 'borderLeft' : 'borderRight']: '60px solid transparent',
                  borderTop: `60px solid ${color}40`,
                  opacity: 0.15
                }}
              ></div>
            </div>

            {/* Chapter badge with 3D effect */}
            <div 
              className="absolute -top-4 -left-4 w-14 h-14 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                color: "#0A0E27",
                boxShadow: `0 6px 25px ${color}60`,
                transform: "translateZ(20px)"
              }}
            >
              {chapterNumber}
            </div>

            {/* Content */}
            <h3 
              className="text-2xl font-bold mb-3 transition-all duration-500 group-hover:text-3xl group-hover:tracking-wide" 
              style={{ 
                color: "#E2E8F0",
                transform: "translateZ(10px)"
              }}
            >
              {title}
            </h3>
            
            <p 
              className="text-sm mb-4 italic font-medium transition-all duration-300" 
              style={{ 
                color,
                transform: "translateZ(8px)"
              }}
            >
              {subtitle}
            </p>
            
            <p 
              className="leading-relaxed transition-all duration-300" 
              style={{ 
                color: "#94A3B8",
                transform: "translateZ(5px)"
              }}
            >
              {description}
            </p>

            {/* Texture overlays */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none rounded-2xl transition-opacity duration-500 group-hover:opacity-[0.05]" 
              style={{
                backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.03) 10px, rgba(255,255,255,0.03) 20px)"
              }}
            ></div>
            
            {/* Inner glow on hover */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-2xl"
              style={{
                boxShadow: `inset 0 0 80px ${color}15`,
                background: `radial-gradient(circle at ${isReversed ? '100%' : '0%'} 50%, ${color}08, transparent 70%)`
              }}
            ></div>

            {/* Page lines effect */}
            <div className="absolute inset-0 opacity-[0.01] pointer-events-none rounded-2xl">
              {[...Array(20)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute left-0 right-0 h-px"
                  style={{
                    top: `${(i + 1) * 5}%`,
                    background: `linear-gradient(90deg, transparent, ${color}30, transparent)`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
