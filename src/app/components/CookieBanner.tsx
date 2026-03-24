import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie, X, Settings } from "lucide-react";

interface CookieBannerProps {
  onOpenCookiePolicy?: () => void;
}

export function CookieBanner({ onOpenCookiePolicy }: CookieBannerProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const cookieConsent = localStorage.getItem('ninja-ai-cookie-consent');
    if (!cookieConsent) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const acceptAll = () => {
    localStorage.setItem('ninja-ai-cookie-consent', 'all');
    setIsVisible(false);
  };

  const acceptNecessary = () => {
    localStorage.setItem('ninja-ai-cookie-consent', 'necessary');
    setIsVisible(false);
  };

  const rejectAll = () => {
    localStorage.setItem('ninja-ai-cookie-consent', 'none');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto sm:max-w-lg lg:max-w-lg lg:left-auto lg:right-4 lg:mx-0"
      >
        <div className="glass-card-premium p-4 sm:p-6 rounded-2xl border border-gold/20 shadow-premium">
          <div className="flex items-start gap-3 mb-4">
            <div className="w-8 h-8 rounded-lg bg-gold/20 flex items-center justify-center flex-shrink-0">
              <Cookie size={16} className="text-gold" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-slate-light font-semibold text-sm mb-1">
                Chúng tôi sử dụng Cookies
              </h3>
              <p className="text-slate-muted text-xs leading-relaxed">
                Website này sử dụng cookies để cải thiện trải nghiệm của bạn và phân tích lưu lượng truy cập.
              </p>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-slate-muted hover:text-slate-light transition-colors flex-shrink-0"
            >
              <X size={16} />
            </button>
          </div>

          {!showSettings ? (
            <div className="flex flex-col sm:flex-row gap-2">
              <button
                onClick={acceptAll}
                className="flex-1 px-4 py-2 bg-gradient-premium text-dark-primary rounded-lg text-xs font-medium hover:scale-105 transition-transform"
              >
                Chấp nhận tất cả
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="flex items-center justify-center gap-1 px-4 py-2 glass-card-premium rounded-lg text-xs font-medium text-slate-light hover:text-gold transition-colors"
              >
                <Settings size={12} />
                Tùy chỉnh
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-light">Cookies cần thiết</span>
                  <span className="text-xs text-slate-muted">Luôn bật</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-light">Cookies phân tích</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-8 h-4 bg-slate-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <button
                  onClick={acceptAll}
                  className="px-4 py-2 bg-gradient-premium text-dark-primary rounded-lg text-xs font-medium hover:scale-105 transition-transform"
                >
                  Lưu tùy chọn
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={acceptNecessary}
                    className="flex-1 px-4 py-2 glass-card-premium rounded-lg text-xs font-medium text-slate-light hover:text-gold transition-colors"
                  >
                    Chỉ cần thiết
                  </button>
                  <button
                    onClick={rejectAll}
                    className="flex-1 px-4 py-2 text-slate-muted hover:text-slate-light text-xs transition-colors"
                  >
                    Từ chối tất cả
                  </button>
                </div>
              </div>
            </div>
          )}

          <div className="mt-3 pt-3 border-t border-glass">
            <p className="text-xs text-slate-muted">
              Tìm hiểu thêm trong{" "}
              <button 
                onClick={onOpenCookiePolicy}
                className="text-gold hover:text-gold-light transition-colors cursor-pointer underline"
              >
                Chính sách Cookie
              </button>{" "}
              của chúng tôi.
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}