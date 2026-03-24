import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface AnimatedBookPageProps {
  chapterNumber: string;
  year: string;
  title: string;
  content: string;
  color: string;
  isReversed?: boolean;
  onPageFlip?: () => void;
}

export function AnimatedBookPage({
  chapterNumber,
  year,
  title,
  content,
  color,
  isReversed = false,
  onPageFlip
}: AnimatedBookPageProps) {
  const [isFlipping, setIsFlipping] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handlePageClick = () => {
    setIsFlipping(true);
    setTimeout(() => {
      setIsOpen(!isOpen);
      setIsFlipping(false);
      onPageFlip?.();
    }, 300);
  };

  return (
    <div className="relative perspective-1000">
      {/* Book container */}
      <motion.div
        className="relative w-full h-80 cursor-pointer"
        style={{ transformStyle: "preserve-3d" }}
        whileHover={{ 
          rotateY: isReversed ? 5 : -5,
          rotateX: 2,
          scale: 1.02
        }}
        transition={{ duration: 0.4 }}
        onClick={handlePageClick}
      >
        {/* Front page */}
        <motion.div
          className="absolute inset-0 w-full h-full rounded-2xl shadow-2xl"
          style={{
            background: `linear-gradient(135deg, 
              rgba(30, 41, 59, 0.95), 
              rgba(30, 41, 59, 0.8)
            )`,
            backdropFilter: "blur(20px)",
            border: `2px solid ${color}40`,
            transformStyle: "preserve-3d",
            transformOrigin: isReversed ? 'right center' : 'left center'
          }}
          animate={{
            rotateY: isFlipping ? (isReversed ? 180 : -180) : 0,
          }}
          transition={{ 
            duration: 0.6, 
            ease: "easeInOut" 
          }}
        >
          {/* Page content - front side */}
          <div 
            className="absolute inset-0 p-8 rounded-2xl"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(0deg)"
            }}
          >
            {/* Chapter number badge */}
            <motion.div 
              className="absolute -top-4 -left-4 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl z-10"
              style={{
                background: `linear-gradient(135deg, ${color}, ${color}cc)`,
                color: "#0F172A",
                boxShadow: `0 10px 30px ${color}60`
              }}
              animate={{
                rotate: isFlipping ? 360 : 0,
                scale: isFlipping ? 1.2 : 1
              }}
              transition={{ duration: 0.6 }}
            >
              {chapterNumber}
            </motion.div>

            {/* Year badge */}
            <div 
              className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-6"
              style={{
                background: `${color}20`,
                color: color,
                border: `1px solid ${color}40`
              }}
            >
              {year}
            </div>

            {/* Title */}
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
              {title}
            </h3>

            {/* Content preview */}
            <p className="text-slate-300 leading-relaxed mb-6">
              {content.substring(0, 150)}...
            </p>

            {/* Page flip indicator */}
            <div className="absolute bottom-6 right-6 flex items-center gap-2 text-sm" style={{ color }}>
              <span>Lật trang</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </motion.div>
            </div>

            {/* Page corner fold */}
            <div className="absolute top-0 right-0 w-0 h-0 opacity-60">
              <div 
                style={{
                  borderLeft: '30px solid transparent',
                  borderTop: `30px solid ${color}30`,
                }}
              />
            </div>

            {/* Subtle page lines */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none rounded-2xl">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i}
                  className="absolute left-8 right-8 h-px"
                  style={{
                    top: `${25 + (i * 5)}%`,
                    background: `linear-gradient(90deg, transparent, ${color}60, transparent)`
                  }}
                />
              ))}
            </div>
          </div>

          {/* Page content - back side (flipped) */}
          <div 
            className="absolute inset-0 p-8 rounded-2xl"
            style={{ 
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)"
            }}
          >
            <div className="h-full flex flex-col justify-center">
              <h4 className="text-xl font-bold mb-4" style={{ color }}>
                Chi tiết chương {chapterNumber}
              </h4>
              
              <div className="space-y-4 text-slate-300">
                <p className="leading-relaxed">
                  {content}
                </p>
                
                <div className="pt-4 border-t border-slate-600">
                  <p className="text-sm italic" style={{ color }}>
                    "Mỗi bước tiến là một bài học quý giá trong hành trình phát triển"
                  </p>
                </div>
              </div>

              {/* Close indicator */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2 text-sm" style={{ color }}>
                <motion.div
                  animate={{ x: [0, -5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6"/>
                  </svg>
                </motion.div>
                <span>Đóng trang</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Book spine shadow */}
        <div 
          className={`absolute top-0 ${isReversed ? 'left-0' : 'right-0'} w-2 h-full opacity-40`}
          style={{
            background: `linear-gradient(180deg, ${color}80, ${color}40)`,
            transform: `translateZ(-5px) rotateY(${isReversed ? '-90deg' : '90deg'})`,
            transformOrigin: isReversed ? 'left center' : 'right center'
          }}
        />

        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${color}20, transparent 70%)`,
            filter: "blur(20px)"
          }}
          animate={{
            opacity: isFlipping ? 0.8 : 0.3,
            scale: isFlipping ? 1.1 : 1
          }}
          transition={{ duration: 0.6 }}
        />
      </motion.div>

      {/* Page flip sound effect indicator */}
      <AnimatePresence>
        {isFlipping && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: `${color}40`,
                backdropFilter: "blur(10px)"
              }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6, ease: "linear" }}
                style={{ color }}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v6c0 1.1.9 2 2 2h3l2.5 3h5l2.5-3H20a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}