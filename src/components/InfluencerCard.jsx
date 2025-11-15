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
  // Using the "X" style icon
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
      className="micrion-card overflow-hidden rounded-3xl glass-panel flex flex-col border border-white/10 hover:border-blue-500/30 transition-all duration-500"
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
      <div className="relative overflow-hidden group">
        <img
          src={imageUrl}
          alt={name}
          className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Smooth gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 micrion-card-image-overlay" />

        {/* Field badge */}
        <span className="micrion-profile-badge absolute left-4 bottom-4 rounded-full bg-black/90 px-3 py-1.5 text-[11px] uppercase tracking-[0.18em] text-micrionYellow font-medium">
          {field}
        </span>
      </div>

      {/* Content section */}
      <div className="p-4 space-y-3 flex-1 flex flex-col">
        {/* Name and region */}
        <div>
          <h3 className="text-lg font-semibold leading-snug">{name}</h3>
          <p className="text-xs text-white/50 font-medium">{region}</p>
        </div>

        {/* Social stats */}
        <div className="space-y-1.5 text-xs flex-1">
          <div className="micrion-stat-row flex items-center justify-between hover:bg-blue-500/10 px-2 py-1.5 rounded-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="micrion-social-icon inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                <InstagramIcon />
              </span>
              <span className="text-white/65">Instagram</span>
            </div>
            <span className="font-semibold text-white/90">
              {formatNumber(instagramFollowers)}
            </span>
          </div>

          <div className="micrion-stat-row flex items-center justify-between hover:bg-blue-500/10 px-2 py-1.5 rounded-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="micrion-social-icon inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                <YouTubeIcon />
              </span>
              <span className="text-white/65">YouTube</span>
            </div>
            <span className="font-semibold text-white/90">
              {formatNumber(youtubeSubscribers)}
            </span>
          </div>

          <div className="micrion-stat-row flex items-center justify-between hover:bg-blue-500/10 px-2 py-1.5 rounded-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center gap-2">
              <span className="micrion-social-icon inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-300">
                <TwitterIcon />
              </span>
              <span className="text-white/65">Twitter</span>
            </div>
            <span className="font-semibold text-white/90">
              {formatNumber(twitterFollowers)}
            </span>
          </div>
        </div>

        {/* View profile button */}
        <button className="micrion-profile-btn mt-2 inline-flex items-center justify-center gap-1.5 w-full rounded-full border border-white/20 px-4 py-2 text-[12px] font-medium text-white/80 hover:border-white/50 hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-300">
          View profile
          <span className="text-xs">↗</span>
        </button>
      </div>
    </article>
  );
}

export default InfluencerCard;
