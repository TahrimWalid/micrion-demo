// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";

const SECTIONS = [
  { id: "top", label: "Home" },
  { id: "about", label: "About" },
  { id: "influencers", label: "Creators" },
  { id: "clients", label: "Clients" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("top");
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || window.pageYOffset;
      setScrolled(y > 10);

      // Calculate scroll progress
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (y / docHeight) * 100;
      setScrollProgress(scrolled);

      // simple "which section is in view" check
      let current = "top";
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 90 && rect.bottom >= 90) {
          current = id;
          break;
        }
      }
      setActive(current);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerBase =
    "fixed top-0 inset-x-0 z-40 transition-colors duration-300 border-b";
  const headerBg = scrolled
    ? "bg-black/50 border-white/10 backdrop-blur-l shadow-lg shadow-black/40"
    : "bg-transparent border-transparent";

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false);
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-micrionYellow via-micrionRed to-orange-400 z-50 transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      <header className={`${headerBase} ${headerBg}`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity duration-300" onClick={() => handleNavClick("top")}>
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-micrionYellow via-micrionRed to-orange-500 shadow-lg shadow-micrionRed/40" />
            <span className="font-semibold tracking-[0.25em] uppercase text-xs">
              Micrion
            </span>
          </div>

          {/* Center pill nav – desktop */}
          <div className="hidden md:flex flex-1 justify-center">
            <div className="flex items-center gap-1 rounded-full bg-black/30 border border-white/10 px-2 py-1 backdrop-blur-md">
              {SECTIONS.map(({ id, label }) => {
                const isActive = active === id;
                return (
                  <button
                    key={id}
                    onClick={() => handleNavClick(id)}
                    className={[
                      "relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300",
                      isActive
                        ? "bg-white/15 text-white shadow-sm shadow-black/40"
                        : "text-white/70 hover:text-white hover:bg-white/5",
                    ].join(" ")}
                  >
                    {label}
                    {/* Underline indicator for active */}
                    {isActive && (
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-micrionYellow animate-pulse" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Contact button – desktop */}
          <button
            onClick={() => handleNavClick("contact")}
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-tr from-micrionRed to-orange-400 px-4 py-2 text-xs font-semibold shadow-lg shadow-orange-500/40 hover:shadow-orange-500/80 hover:-translate-y-0.5 transition-all active:scale-95"
          >
            Contact us
          </button>

          {/* Mobile burger */}
          <button
            className="md:hidden w-9 h-9 rounded-full border border-white/30 flex items-center justify-center relative transition-all hover:border-white/50 active:scale-90"
            onClick={() => setOpen((o) => !o)}
          >
            <span
              className={`h-[2px] w-4 bg-white rounded-full absolute transition-all ${
                open ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              className={`h-[2px] w-4 bg-white rounded-full absolute transition-all ${
                open ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>

        {/* Mobile sheet */}
        {open && (
          <div className="md:hidden absolute top-14 inset-x-4 rounded-2xl bg-black/90 border border-white/15 backdrop-blur-xl p-4 space-y-2 animate-slideDown">
            {SECTIONS.map(({ id, label }, idx) => {
              const isActive = active === id;
              return (
                <button
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={[
                    "block w-full text-left text-sm px-3 py-2 rounded-xl transition-all duration-300",
                    isActive
                      ? "bg-white/10 text-white"
                      : "text-white/75 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                  style={{ animation: `slideDown 0.3s ease-out ${idx * 0.05}s forwards`, opacity: 0 }}
                >
                  {label}
                </button>
              );
            })}

            <hr className="border-white/10 my-2" />

            <button
              onClick={() => handleNavClick("contact")}
              className="w-full inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-micrionRed to-orange-400 px-4 py-2 text-xs font-semibold shadow-lg shadow-orange-500/40 hover:shadow-orange-500/80 transition-all active:scale-95"
            >
              Contact us
            </button>
          </div>
        )}
      </header>

      {/* Animations */}
      <style>{`
        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;
