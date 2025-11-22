// src/components/Hero.jsx
import React, { useEffect, useState } from "react";

const FULL_HEADING = "Global brands,\nmicro-level trust.";

function Hero() {
  const [typedHeading, setTypedHeading] = useState("");
  const [stats, setStats] = useState({ categories: 0, countries: 0, engagement: 0 });

  useEffect(() => {
    const fadeDuration = 700;
    const typingSpeed = 45;

    let intervalId;
    const timeoutId = setTimeout(() => {
      let i = 0;
      intervalId = setInterval(() => {
        i += 1;
        setTypedHeading(FULL_HEADING.slice(0, i));
        if (i >= FULL_HEADING.length) {
          clearInterval(intervalId);
        }
      }, typingSpeed);
    }, fadeDuration);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  // Number counter animation
  useEffect(() => {
    const counters = [
      { key: "categories", target: 50, duration: 1500 },
      { key: "countries", target: 20, duration: 1500 },
      { key: "engagement", target: 3, duration: 1500 },
    ];

    const startTime = Date.now() + 1100;

    const animateCounters = () => {
      const now = Date.now();
      const elapsed = now - startTime;

      const newStats = { categories: 0, countries: 0, engagement: 0 };
      let allDone = true;

      counters.forEach(({ key, target, duration }) => {
        if (elapsed < 0) {
          newStats[key] = 0;
          allDone = false;
        } else if (elapsed < duration) {
          newStats[key] = Math.floor((elapsed / duration) * target);
          allDone = false;
        } else {
          newStats[key] = target;
        }
      });

      setStats(newStats);

      if (!allDone) {
        requestAnimationFrame(animateCounters);
      }
    };

    const frameId = requestAnimationFrame(animateCounters);
    return () => cancelAnimationFrame(frameId);
  }, []);

  const headingLines = typedHeading.split("\n");

  return (
    <section id="top" className="relative overflow-hidden pt-28 pb-20">
      {/* Animated blob - More dynamic movement */}
      <div className="pointer-events-none absolute -top-48 -left-48 h-96 w-96 rounded-full bg-gradient-to-br from-[#FF3E81] via-[#D4346B] to-[#FF3E81] blur-3xl micrion-hero-blob-enhanced" />

      <div className="relative max-w-6xl mx-auto px-4 grid md:grid-cols-[1.7fr,1.3fr] gap-10 items-center">
        {/* LEFT: whole text block */}
        <div className="space-y-6 micrion-hero-textBlock">
          {/* kicker */}
          <p className="uppercase text-[12px] tracking-[0.35em] text-white/60 font-peace">
            Micro-influencer agency
          </p>

          {/* main heading with typewriter effect */}
          <h1 className="micrion-hero-heading text-[2.6rem] md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.05] tracking-tight">
            {headingLines.map((line, idx) => {
              const isSecondLine = idx === 1;
              return (
                <span
                  key={idx}
                  className={
                    isSecondLine
                      ? "block bg-gradient-to-r from-[#FFF9F0] via-[#FF3E81] to-[#FFF9F0] bg-clip-text text-transparent"
                      : "block text-white"
                  }
                >
                  {line}
                </span>
              );
            })}
          </h1>

          {/* sub copy */}
          <p className="micrion-hero-subtext text-base md:text-lg text-white/75 max-w-xl">
            Micrion partners with handpicked micro-influencers around the
            world. Smaller audiences, deeper engagement, smarter campaigns.
          </p>

          {/* CTAs */}
          <div className="micrion-hero-ctas flex flex-wrap gap-3">
            <button
              onClick={() =>
                document
                  .getElementById("influencers")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="micrion-hero-btn-primary inline-flex items-center px-6 py-3 rounded-full bg-[#FF3E81] text-[18px] font-semibold text-white shadow-lg shadow-[#FF3E81]/40 hover:shadow-[#FF3E81]/80 transition-all hover:scale-105 active:scale-95 font-peace"
            >
              Discover creators
            </button>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="micrion-hero-btn-secondary inline-flex items-center px-6 py-3 rounded-full border border-[#FF3E81]/50 text-[18px] font-semibold text-[#FF3E81] hover:bg-[#FF3E81]/10 transition-all hover:scale-105 active:scale-95 font-peace"
            >
              Talk to our team
            </button>
          </div>

          {/* Stats row with icons */}
          <div className="micrion-hero-stats flex flex-wrap gap-4 text-xs text-white/70">
            {/* 50+ categories */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3E81]/40 transition-all">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/10">
                <svg
                  className="w-3 h-3 text-white/80"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="2" y="2" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="10" y="2" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="2" y="10" width="4" height="4" rx="1" fill="currentColor" />
                  <rect x="10" y="10" width="4" height="4" rx="1" fill="currentColor" />
                </svg>
              </span>
              <span>
                <span className="micrion-stat-number font-semibold text-white mr-1">
                  {stats.categories}
                </span>
                categories
              </span>
            </div>

            {/* 20 countries */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3E81]/40 transition-all">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/10">
                <svg
                  className="w-3 h-3 text-white/80"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                  <path
                    d="M4 8h8M8 2c1.5 2 1.5 6 0 8-1.5-2-1.5-6 0-8Z"
                    stroke="currentColor"
                    strokeWidth="1.0"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <span>
                <span className="micrion-stat-number font-semibold text-white mr-1">
                  {stats.countries}
                </span>
                countries
              </span>
            </div>

            {/* 3x average engagement */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-[#FF3E81]/40 transition-all">
              <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-white/10">
                <svg
                  className="w-3 h-3 text-white/80"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 10.5 6 7l2.5 3L13.5 4.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span>
                <span className="micrion-stat-number font-semibold text-white mr-1">
                  {stats.engagement}x
                </span>
                average engagement
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT column reserved for future hero visual */}
        <div className="hidden md:block" />
      </div>

      <style>{`
        /* Floating blob animation - More dynamic */
        @keyframes micrionHeroBlobFloat {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          15% {
            transform: translate(50px, -60px) scale(1.2);
          }
          30% {
            transform: translate(-40px, 70px) scale(0.85);
          }
          45% {
            transform: translate(60px, 30px) scale(1.15);
          }
          60% {
            transform: translate(-50px, -50px) scale(0.9);
          }
          75% {
            transform: translate(40px, 60px) scale(1.1);
          }
        }

        .micrion-hero-blob-enhanced {
          animation: micrionHeroBlobFloat 10s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}

export default Hero;
