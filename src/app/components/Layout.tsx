import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { LabApplicationModal } from "./LabApplicationModal";
import { LegalModal } from "./LegalModal";
import { LoadingSpinner } from "./LoadingSpinner";
import { CookieBanner } from "./CookieBanner";
import { useScrollTracking } from "../hooks/useScrollTracking";
import { usePerformance } from "../hooks/usePerformance";
import { trackPageView } from "../utils/analytics";

export function Layout() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [legalModal, setLegalModal] = useState<{ isOpen: boolean; type: 'privacy' | 'terms' | 'cookies' | null }>({
    isOpen: false,
    type: null
  });
  const location = useLocation();

  // Track scroll depth and page views
  useScrollTracking();
  
  // Performance monitoring
  usePerformance();

  const openLegalModal = (type: 'privacy' | 'terms' | 'cookies') => {
    setLegalModal({ isOpen: true, type });
  };

  const closeLegalModal = () => {
    setLegalModal({ isOpen: false, type: null });
  };

  const navLinks = [
    { to: "/", label: "Trang chủ" },
    { to: "/solutions", label: "Giải pháp" },
    { to: "/projects", label: "Dự án" },
    { to: "/lab", label: "Ninja Lab" },
    { to: "/about", label: "Về chúng tôi" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    
    // Track page view
    trackPageView(location.pathname, document.title);
  }, [location.pathname]);

  return (
    <div 
      className="min-h-screen aurora-bg"
    >
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass-premium shadow-premium' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-gradient-premium shadow-glow-gold">
                <Zap size={16} className="text-dark-primary" />
              </div>
              <span className="text-xl font-headline font-black tracking-tighter text-gradient-gold">
                Ninja AI
              </span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === "/"}
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-sm font-sans font-medium transition-all duration-300 ${
                      isActive
                        ? "text-gold bg-white/10 shadow-glow-gold"
                        : "text-slate-light hover:text-gold-light hover:bg-white/5"
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2 rounded-lg text-sm font-mono font-medium transition-all duration-400 hover:scale-105 bg-gradient-premium text-dark-primary shadow-glow-gold animate-pulse-glow hover-lift"
              >
                Ứng tuyển Lab
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-slate-light hover:text-gold-light transition-colors font-mono"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Mở/đóng menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden glass-premium shadow-premium border-t border-glass"
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm font-sans font-medium transition-all duration-300 ${
                        isActive ? "text-gold bg-white/10 shadow-glow-gold" : "text-slate-light hover:text-gold-light hover:bg-white/5"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2 pt-3 border-t border-glass flex flex-col gap-2">
                  <button
                    onClick={() => { setIsModalOpen(true); setMenuOpen(false); }}
                    className="block text-center px-5 py-3 rounded-lg text-sm font-mono font-medium bg-gradient-premium text-dark-primary shadow-glow-gold"
                  >
                    Ứng tuyển Lab
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="relative overflow-hidden border-t border-glass">
        {/* Background Effects */}
        <div className="absolute inset-0 aurora-bg opacity-50" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-gold/10 to-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-purple/10 to-cyan/10 rounded-full blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
              {/* Brand Column */}
              <div className="lg:col-span-4">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-premium shadow-glow-gold">
                    <Zap size={20} className="text-dark-primary" />
                  </div>
                  <span className="text-2xl font-headline font-black tracking-tighter text-gradient-gold">
                    Ninja AI
                  </span>
                </div>
                <p className="text-slate-muted text-sm leading-relaxed mb-6">
                  {t("footer.description")}
                </p>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="glass-card-premium p-3 rounded-lg text-center">
                    <div className="text-gold font-bold text-xl">50+</div>
                    <div className="text-slate-muted text-xs">{t("home.metrics.projects")}</div>
                  </div>
                  <div className="glass-card-premium p-3 rounded-lg text-center">
                    <div className="text-cyan font-bold text-xl">100%</div>
                    <div className="text-slate-muted text-xs">{t("home.metrics.deploy")}</div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-3">
                  {[
                    { name: "LinkedIn", url: "#" },
                    { name: "Twitter", url: "#" },
                    { name: "GitHub", url: "#" },
                    { name: "Discord", url: "#" }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      className="w-10 h-10 rounded-lg glass-card-premium flex items-center justify-center text-slate-muted hover:text-gold-light hover:border-gold transition-all duration-300 hover:scale-110"
                      aria-label={social.name}
                    >
                      <span className="text-xs font-mono">{social.name[0]}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links Column */}
              <div className="lg:col-span-4">
                <h4 className="text-slate-light text-sm font-semibold mb-4 uppercase tracking-wider">
                  {t("footer.quickLinks")}
                </h4>
                <div className="grid grid-cols-2 gap-x-8 gap-y-3">
                  {[
                    { label: t("nav.solutions"), to: "/solutions" },
                    { label: t("nav.projects"), to: "/projects" },
                    { label: t("nav.lab"), to: "/lab" },
                    { label: t("nav.about"), to: "/about" }
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="text-slate-muted hover:text-gold-light text-sm transition-colors group flex items-center gap-2"
                    >
                      <span className="w-1 h-1 rounded-full bg-slate-muted group-hover:bg-gold-light transition-colors" />
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

                {/* Contact Column */}
              <div className="lg:col-span-4">
                <h4 className="text-slate-light text-sm font-semibold mb-4 uppercase tracking-wider">
                  {t("footer.contact")}
                </h4>
                <div className="flex flex-col gap-4 text-slate-muted text-sm mb-6">
                  <a href="mailto:hoangthequang.ninjaai.dev@gmail.com" className="hover:text-gold-light transition-colors flex items-start gap-2">
                    <span className="text-gold flex-shrink-0">✉</span>
                    <span className="break-all">hoangthequang.ninjaai.dev@gmail.com</span>
                  </a>
                  <div className="flex items-start gap-2">
                    <span className="text-gold flex-shrink-0">📍</span>
                    <span>Tầng 3 Tòa Trinity, Mễ Trì<br />Hà Nội, Việt Nam</span>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="glass-card-premium p-4 rounded-xl">
                  <p className="text-slate-light text-xs font-semibold mb-2 uppercase tracking-wider">
                    {t("footer.newsletter.title")}
                  </p>
                  <p className="text-slate-muted text-xs mb-3">
                    {t("footer.newsletter.description")}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <input
                      type="email"
                      placeholder={t("footer.newsletter.placeholder")}
                      className="flex-1 px-3 py-2 rounded-lg bg-white/5 border border-glass text-slate-light text-sm placeholder:text-slate-muted focus:outline-none focus:border-gold transition-colors"
                    />
                    <button className="px-4 py-2 rounded-lg bg-gradient-premium text-dark-primary text-sm font-medium hover:scale-105 transition-transform flex-shrink-0">
                      →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-glass/30">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-slate-muted text-xs">
                © 2026 Ninja AI. {t("footer.copyright")}
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-xs text-slate-muted">
                <button 
                  onClick={() => openLegalModal('privacy')}
                  className="hover:text-gold-light transition-colors cursor-pointer"
                >
                  {t("footer.legal.privacy")}
                </button>
                <button 
                  onClick={() => openLegalModal('terms')}
                  className="hover:text-gold-light transition-colors cursor-pointer"
                >
                  {t("footer.legal.terms")}
                </button>
                <button 
                  onClick={() => openLegalModal('cookies')}
                  className="hover:text-gold-light transition-colors cursor-pointer"
                >
                  {t("footer.legal.cookies")}
                </button>
              </div>
              <p className="text-slate-muted text-xs font-mono">
                {t("footer.tagline")}
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Lab Application Modal */}
      <LabApplicationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Legal Modal */}
      {legalModal.type && (
        <LegalModal 
          isOpen={legalModal.isOpen} 
          onClose={closeLegalModal} 
          type={legalModal.type} 
        />
      )}

      {/* Cookie Banner */}
      <CookieBanner onOpenCookiePolicy={() => openLegalModal('cookies')} />
    </div>
  );
}
