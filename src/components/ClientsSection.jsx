// src/components/ClientsSection.jsx
import React from "react";

// SVG Logo components
const LogoGoogle = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#1f2937"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34a853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#fbbc05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#ea4335"/>
  </svg>
);

const LogoSpotify = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="#1DB954">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-12.061-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15.079 10.561 18.659 12.84c.301.181.721.021.899-.359.181-.42.061-1.021-.299-1.201zm.12-3.36C15.12 8.711 8.88 8.474 5.341 9.607c-.553.161-1.113-.286-1.141-.835-.027-.554.282-1.074.836-1.104 4.341-.722 11.461-.471 15.979 3.189.529.439.751 1.243.391 1.856-.348.557-1.235.639-1.836.211z"/>
  </svg>
);

const LogoLenovo = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3 4h8v2H3V4zm0 6h14v2H3v-2zm0 6h18v2H3v-2z" fill="#e60012"/>
  </svg>
);

const LogoXiaomi = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M6 4h3v16H6V4zm5 0h3v16h-3V4zm5 0h3v16h-3V4z" fill="#ff6900"/>
  </svg>
);

const LogoRevolut = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M12 7v10M7 12h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const LogoUbisoft = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <rect x="3" y="4" width="6" height="6" rx="1" fill="#1e3a8a"/>
    <rect x="10" y="4" width="11" height="6" rx="1" fill="#1e3a8a"/>
    <rect x="3" y="11" width="18" height="9" rx="1" fill="#1e3a8a"/>
  </svg>
);

const LogoTCL = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <text x="2" y="17" fontSize="11" fontWeight="bold" fill="#e11d48">TCL</text>
  </svg>
);

const LogoLacoste = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M4 4h16v16H4z" fill="#008000"/>
    <path d="M8 8h8v8H8z" fill="white"/>
  </svg>
);

const LogoUniversal = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 12h10M12 7v10" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

const LogoTencent = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <rect x="3" y="3" width="8" height="8" fill="#0ea5e9" rx="1"/>
    <rect x="13" y="3" width="8" height="8" fill="#0ea5e9" rx="1"/>
    <rect x="3" y="13" width="8" height="8" fill="#0ea5e9" rx="1"/>
    <rect x="13" y="13" width="8" height="8" fill="#0ea5e9" rx="1"/>
  </svg>
);

const LogoZalando = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M6 4l4 8-4 8h3l4-8-4-8H6z" fill="#ff00ff"/>
    <path d="M13 4l4 8-4 8h3l4-8-4-8h-3z" fill="#ff00ff"/>
  </svg>
);

const clients = [
  { name: "Google", logo: LogoGoogle },
  { name: "Spotify", logo: LogoSpotify },
  { name: "Lenovo", logo: LogoLenovo },
  { name: "Xiaomi", logo: LogoXiaomi },
  { name: "Revolut", logo: LogoRevolut },
  { name: "Ubisoft", logo: LogoUbisoft },
  { name: "TCL", logo: LogoTCL },
  { name: "Lacoste", logo: LogoLacoste },
  { name: "Universal", logo: LogoUniversal },
  { name: "Tencent", logo: LogoTencent },
  { name: "Zalando", logo: LogoZalando },
];

function ClientsSection() {
  return (
    <section
      id="clients"
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background gradient blobs - PRIMARY PINK & DEEP GREEN */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#FF3E81]/5 rounded-full blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#0D5232]/5 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-6xl mx-auto px-4 space-y-12">
        {/* Header */}
        <div className="text-center space-y-4 opacity-0 animate-fadeUp" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
          <p className="uppercase text-[11px] tracking-[0.3em] text-white/50 font-peace">
            Trusted Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold leading-[1.05] tracking-tight font-peace">
            <span className="block text-white">
              Brands that trust
            </span>
            <span className="block bg-gradient-to-r from-[#FFF9F0] via-[#FF3E81] to-[#FFF9F0] bg-clip-text text-transparent">
              Micrion
            </span>
          </h2>
          <p className="text-sm md:text-base text-[#FFF9F0] max-w-2xl mx-auto leading-relaxed font-peace">
            From fast-growing startups to global brands, we support teams that
            believe in long-term creator relationships.
          </p>
        </div>

        {/* Marquee with logos and text */}
        <div className="relative overflow-hidden py-8 opacity-0 animate-fadeUp" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {[...clients, ...clients].map((client, i) => {
              const LogoComponent = client.logo;
              return (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 px-4 group cursor-pointer transition-all duration-300"
                >
                  {/* Logo - HOVER PINK GLOW */}
                  <div className="text-white/60 group-hover:text-[#FF3E81] transition-all duration-300 transform group-hover:scale-110 shadow-lg shadow-[#FF3E81]/0 group-hover:shadow-[#FF3E81]/50">
                    <LogoComponent />
                  </div>
                  {/* Brand name */}
                  <p className="text-xs md:text-sm font-semibold text-white/70 group-hover:text-[#FF3E81] transition-colors duration-300 tracking-wide font-peace">
                    {client.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes fadeUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>
    </section>
  );
}

export default ClientsSection;
