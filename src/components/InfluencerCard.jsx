// src/components/InfluencerCard.jsx
import React, { useState, useRef } from "react";

function formatNumber(n) {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1) + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(0) + "K";
  return n.toString();
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="ig" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f58529" />
          <stop offset="50%" stopColor="#dd2a7b" />
          <stop offset="100%" stopColor="#8134af" />
        </linearGradient>
      </defs>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        fill="url(#ig)"
      />
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.6" />
      <circle cx="16.4" cy="7.8" r="0.9" fill="white" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      aria-hidden="true"
      focusable="false"
    >
      <rect
        x="2.5"
        y="5"
        width="19"
        height="14"
        rx="4"
        fill="#ff0000"
      />
      <polygon points="10,9 16,12 10,15" fill="white" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-4 h-4"
      aria-hidden="true"
      focusable="false"
    >
      <rect x="3" y="3" width="18" height="18" rx="4" fill="#0f172a" />
      <path
        d="M10.4 8.1L12.9 11l3-3.9h1.7l-3.8 4.8 4 5h-1.7l-3.2-4.1-3.1 4.1H8.2l3.8-4.9-3.9-4.9h1.7z"
        fill="white"
      />
    </svg>
  );
}

function InfluencerCard({ influencer, index }) {
  const {
    name,
    field,
    instagramFollowers,
    youtubeSubscribers,
    twitterFollowers,
    imageUrl,
    region,
  } = influencer;

  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((centerX - x) / centerX) * 5;
    
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <article
      ref={cardRef}
      className="micrion-card overflow-hidden rounded-3xl glass-panel flex flex-col border border-white/10 hover:border-[#FF3E81]/40 transition-all duration-500 group"
      style={{ 
        animation: `micrionCardEnter 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
        animationDelay: `${index * 60}ms`,
        opacity: 0,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateZ(20px)`,
        transition: "transform 0.3s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Image container with overlay */}
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Enhanced gradient overlay - PRIMARY PINK GLOW */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 micrion-card-image-overlay shadow-inner shadow-[#FF3E81]/20" />

        {/* Field badge - DEEP GREEN ACCENT */}
        <span className="micrion-profile-badge absolute left-4 bottom-4 rounded-full bg-gradient-to-r from-[#0D5232]/90 to-[#0D5232]/70 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-white font-peace font-semibold shadow-lg shadow-[#0D5232]/40 border border-[#0D5232]/50">
          {field}
        </span>
      </div>

      {/* Content section */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Name and region */}
        <div>
          <h3 className="text-lg font-semibold leading-snug font-peace text-white">
            {name}
          </h3>
          <p className="text-xs text-white/50 font-peace font-medium">{region}</p>
        </div>

        {/* Social stats - CREATIVE PINK/GREEN HOVER */}
        <div className="space-y-1.5 text-xs flex-1">
          {/* Instagram */}
          <div className="micrion-stat-row flex items-center justify-between px-2 py-1.5 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#FF3E81]/10 hover:to-[#0D5232]/10 hover:border hover:border-[#FF3E81]/20">
            <div className="flex items-center gap-2">
              <span className="micrion-social-icon inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#FF3E81]/30 group-hover:shadow-lg group-hover:shadow-[#FF3E81]/40 transition-all duration-300">
                <InstagramIcon />
              </span>
              <span className="text-white/65 font-peace">Instagram</span>
            </div>
            <span className="font-peace font-semibold text-white/90">
              {formatNumber(instagramFollowers)}
            </span>
          </div>

          {/* YouTube */}
          <div className="micrion-stat-row flex items-center justify-between px-2 py-1.5 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#FF3E81]/10 hover:to-[#0D5232]/10 hover:border hover:border-[#FF3E81]/20">
            <div className="flex items-center gap-2">
              <span className="micrion-social-icon inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-red-500/30 group-hover:shadow-lg group-hover:shadow-red-500/40 transition-all duration-300">
                <YouTubeIcon />
              </span>
              <span className="text-white/65 font-peace">YouTube</span>
            </div>
            <span className="font-peace font-semibold text-white/90">
              {formatNumber(youtubeSubscribers)}
            </span>
          </div>

          {/* Twitter/X */}
          <div className="micrion-stat-row flex items-center justify-between px-2 py-1.5 rounded-lg transition-all duration-300 cursor-pointer hover:bg-gradient-to-r hover:from-[#FF3E81]/10 hover:to-[#0D5232]/10 hover:border hover:border-[#FF3E81]/20">
            <div className="flex items-center gap-2">
              <span className="micrion-social-icon inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:bg-white/30 group-hover:shadow-lg group-hover:shadow-white/30 transition-all duration-300">
                <TwitterIcon />
              </span>
              <span className="text-white/65 font-peace">Twitter</span>
            </div>
            <span className="font-peace font-semibold text-white/90">
              {formatNumber(twitterFollowers)}
            </span>
          </div>
        </div>

        {/* View profile button - PRIMARY PINK GRADIENT */}
        <button className="micrion-profile-btn mt-2 inline-flex items-center justify-center gap-1.5 w-full rounded-full border border-[#FF3E81]/40 px-4 py-2 text-[12px] font-semibold font-peace text-white/85 bg-gradient-to-r from-[#FF3E81]/5 to-[#0D5232]/5 hover:from-[#FF3E81]/15 hover:to-[#0D5232]/15 hover:border-[#FF3E81]/60 hover:text-white shadow-md shadow-[#FF3E81]/20 hover:shadow-[#FF3E81]/40 hover:scale-105 active:scale-95 transition-all duration-300">
          View profile
          <span className="text-xs">↗</span>
        </button>
      </div>
    </article>
  );
}

export default InfluencerCard;
