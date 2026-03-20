import { useState, useEffect } from "react";
import { Outlet, NavLink, Link, useLocation } from "react-router";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/solutions", label: "Solutions" },
  { to: "/projects", label: "Projects" },
  { to: "/people", label: "People" },
  { to: "/lab", label: "Ninja Lab" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return (
    <div
      className="min-h-screen"
      style={{
        background: "#050814",
        color: "#e2e8f0",
        fontFamily: "'Space Grotesk', 'Inter', sans-serif",
      }}
    >
      {/* Header */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "rgba(5, 8, 20, 0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 group">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                }}
              >
                <Zap size={16} className="text-white" />
              </div>
              <span
                className="text-xl"
                style={{
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
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
                    `px-4 py-2 rounded-lg text-sm transition-all duration-200 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`
                  }
                  style={({ isActive }) =>
                    isActive
                      ? {
                          background: "rgba(0, 212, 255, 0.1)",
                          color: "#00D4FF",
                        }
                      : {}
                  }
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                to="/contact"
                className="px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{
                  background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  color: "white",
                }}
              >
                Work With Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg text-gray-400 hover:text-white transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
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
              transition={{ duration: 0.2 }}
              className="lg:hidden"
              style={{
                background: "rgba(5, 8, 20, 0.98)",
                backdropFilter: "blur(20px)",
                borderBottom: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === "/"}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-lg text-sm transition-all duration-200 ${
                        isActive ? "text-white" : "text-gray-400"
                      }`
                    }
                    style={({ isActive }) =>
                      isActive
                        ? {
                            background: "rgba(0, 212, 255, 0.1)",
                            color: "#00D4FF",
                          }
                        : {}
                    }
                  >
                    {link.label}
                  </NavLink>
                ))}
                <div className="mt-2 pt-3 border-t border-white/10">
                  <Link
                    to="/contact"
                    className="block text-center px-5 py-3 rounded-lg text-sm font-medium"
                    style={{
                      background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                      color: "white",
                    }}
                  >
                    Work With Us
                  </Link>
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
      <footer
        style={{
          background: "rgba(255,255,255,0.02)",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #00D4FF, #7B2FFF)",
                  }}
                >
                  <Zap size={16} className="text-white" />
                </div>
                <span
                  className="text-xl"
                  style={{
                    fontWeight: 700,
                    background: "linear-gradient(90deg, #00D4FF, #7B2FFF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ninja AI
                </span>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Elite AI implementation partner building real-world systems that transform businesses. We deploy AI, automation, and intelligent platforms at scale.
              </p>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-4">Navigation</p>
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="text-gray-500 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-white text-sm font-semibold mb-4">Contact</p>
              <div className="flex flex-col gap-2 text-gray-500 text-sm">
                <span>hello@ninja-ai.io</span>
                <span>Ho Chi Minh City, Vietnam</span>
                <div className="flex gap-3 mt-2">
                  {["LinkedIn", "X", "GitHub"].map((s) => (
                    <a
                      key={s}
                      href="#"
                      className="text-gray-500 hover:text-white transition-colors text-xs border border-white/10 px-2 py-1 rounded"
                    >
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-xs">
              © 2026 Ninja AI. All rights reserved.
            </p>
            <p className="text-gray-600 text-xs">
              Building the future, one system at a time.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
