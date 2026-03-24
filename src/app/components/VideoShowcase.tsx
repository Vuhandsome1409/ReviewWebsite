import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize2, X } from "lucide-react";

interface VideoItem {
  src: string;
  title: string;
  description: string;
  thumbnail: string;
  duration?: string;
  category: string;
}

interface VideoShowcaseProps {
  videos?: VideoItem[];
}

const defaultVideos: VideoItem[] = [
  {
    src: "/video/7640784821995.mp4",
    title: "Ninja AI Lab Experience",
    description: "Trải nghiệm thực tế tại Ninja AI Lab - nơi biến kiến thức thành năng lực triển khai",
    thumbnail: "/pic_company/NHK.jpg",
    duration: "2:30",
    category: "Lab Experience"
  },
  {
    src: "/video/7643190930341.mp4", 
    title: "Thực chiến dự án AI",
    description: "Quy trình phát triển và triển khai giải pháp AI trong doanh nghiệp thực tế",
    thumbnail: "/pic_company/tony_trieu.jpg",
    duration: "3:15",
    category: "Project Development"
  },
  {
    src: "/video/7643191304759.mp4",
    title: "Môi trường phát triển",
    description: "Không gian làm việc chuyên nghiệp và văn hóa đội nhóm tại Ninja AI",
    thumbnail: "/pic_company/fes.jpg", 
    duration: "1:45",
    category: "Work Culture"
  },
  {
    src: "/video/7643191360098.mp4",
    title: "Mentoring & Training",
    description: "Chương trình đào tạo và mentoring cho các Ninja mới",
    thumbnail: "/pic_company/mentor.jpg",
    duration: "4:20",
    category: "Training"
  },
  {
    src: "/video/7643191775164.mp4",
    title: "Team Collaboration",
    description: "Cách thức làm việc nhóm và phối hợp trong các dự án AI",
    thumbnail: "/pic_company/team_dev.jpg",
    duration: "2:50",
    category: "Collaboration"
  },
  {
    src: "/video/7643191898281.mp4",
    title: "Innovation Process",
    description: "Quy trình nghiên cứu và phát triển các giải pháp AI mới",
    thumbnail: "/pic_company/working_place.jpg",
    duration: "3:30",
    category: "Innovation"
  }
];

export function VideoShowcase({ videos = defaultVideos }: VideoShowcaseProps) {
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const categories = ["All", ...Array.from(new Set(videos.map(v => v.category)))];
  const filteredVideos = selectedCategory === "All" 
    ? videos 
    : videos.filter(v => v.category === selectedCategory);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => setDuration(video.duration);

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [selectedVideo]);

  const handleVideoSelect = (index: number) => {
    setSelectedVideo(index);
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const video = videoRef.current;
    if (!video || !duration) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setIsPlaying(false);
    setIsFullscreen(false);
  };

  return (
    <div className="relative py-20">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="absolute inset-0 opacity-[0.03]" 
             style={{
               backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(255,255,255,0.02) 50px, rgba(255,255,255,0.02) 100px)"
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
            Ninja thực chiến chia sẻ
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Trải nghiệm thực tế từ những người đang xây dựng tương lai AI
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-slate-800/50 text-slate-400 hover:bg-slate-700/50 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => handleVideoSelect(index)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-video bg-slate-800 group-hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-white/30 transition-colors duration-300"
                  >
                    <Play size={24} className="ml-1" />
                  </motion.div>
                </div>

                {/* Duration badge */}
                <div className="absolute top-4 right-4 px-2 py-1 rounded bg-black/60 text-white text-sm font-medium">
                  {video.duration}
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600/80 text-white text-xs font-medium">
                  {video.category}
                </div>
              </div>
              
              {/* Video Info */}
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {video.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {video.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {selectedVideo !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
            onClick={closeVideo}
          >
            <motion.div
              ref={containerRef}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl bg-slate-900 rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Video Player */}
              <div className="relative aspect-video bg-black">
                <video
                  ref={videoRef}
                  src={filteredVideos[selectedVideo].src}
                  className="w-full h-full"
                  muted={isMuted}
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                />

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/60 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* Top Controls */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <button
                      onClick={toggleMute}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                    >
                      {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                    </button>
                    <button
                      onClick={closeVideo}
                      className="w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-200"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={togglePlay}
                      className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-300"
                    >
                      {isPlaying ? <Pause size={32} /> : <Play size={32} className="ml-1" />}
                    </button>
                  </div>

                  {/* Bottom Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    {/* Progress Bar */}
                    <div 
                      className="w-full h-2 bg-white/20 rounded-full cursor-pointer mb-3"
                      onClick={handleSeek}
                    >
                      <div 
                        className="h-full bg-blue-500 rounded-full transition-all duration-200"
                        style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                      />
                    </div>

                    {/* Time Display */}
                    <div className="flex justify-between items-center text-white text-sm">
                      <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
                      <span className="text-slate-300">{filteredVideos[selectedVideo].title}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Video Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {filteredVideos[selectedVideo].title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {filteredVideos[selectedVideo].description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}