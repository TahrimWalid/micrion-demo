// src/components/AchievementsSlider.jsx
import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    number: "700+",
    label: "Brand activations in 2024",
    bgClass:
      "bg-gradient-to-br from-[#FF3E81] via-[#0D5232] to-[#D4346B] text-white",
  },
  {
    number: "3B",
    label: "Cumulative social views",
    bgClass:
      "bg-gradient-to-br from-[#0D5232] via-[#FF3E81] to-[#5EEAC4] text-white",
  },
  {
    number: "300+",
    label: "Active clients worldwide",
    bgClass:
      "bg-gradient-to-br from-[#FF3E81] via-[#5EEAC4] to-[#0D5232] text-white",
  },
  {
    number: "7,000",
    label: "Sponsored posts delivered",
    bgClass:
      "bg-gradient-to-br from-[#D4346B] via-[#FF3E81] to-[#5EEAC4] text-white",
  },
];

function AchievementsSlider() {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  const [inView, setInView] = useState(false);
  const [hasEverBeenVisible, setHasEverBeenVisible] = useState(false);
  const [animCycle, setAnimCycle] = useState(0);

  const wrapperRef = useRef(null);

  // Scroll observer: tracks when the card enters/leaves view
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          setHasEverBeenVisible(true);
          setAnimCycle((c) => c + 1);
        } else {
          setInView(false);
        }
      },
      { threshold: 0.45 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Autoplay slider only when section is in view
  useEffect(() => {
    if (!inView) return;

    const id = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(false);
      }, 300);
    }, 3200);

    return () => clearInterval(id);
  }, [inView]);

  // Handle manual dot click
  const handleDotClick = (newIndex) => {
    if (newIndex !== index) {
      setFade(true);
      setTimeout(() => {
        setIndex(newIndex);
        setFade(false);
      }, 300);
    }
  };

  const current = slides[index];

  return (
    <div className="max-w-6xl mx-auto px-4 py-10" ref={wrapperRef}>
      <div
        key={animCycle}
        id="about"
        className={`relative overflow-hidden px-6 py-14 md:px-10 md:py-20 rounded-[56px] glass-panel backdrop-blur-2xl ${
          hasEverBeenVisible ? "" : "opacity-0"
        } ${inView ? "micrion-anim-zoomGlow" : ""}`}
      >
        {/* subtle background glows - PRIMARY PINK & DEEP GREEN */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[75%] h-40 rounded-full bg-[#0D5232]/30 blur-3xl opacity-60" />
          <div className="absolute -right-24 bottom-0 w-64 h-64 rounded-full bg-[#FF3E81]/25 blur-3xl opacity-50 micrion-glow-drift" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-10 md:space-y-12">
          {/* main heading with staggered animations */}
          <div className="text-center space-y-3">
            <p className="micrion-achievement-kicker uppercase text-[11px] tracking-[0.3em] text-white/60 font-peace">
              About Micrion
            </p>
            <h2 className="micrion-achievement-heading text-3xl md:text-4xl font-semibold tracking-tight font-peace">
              At the core of our agency
            </h2>
            <p className="micrion-achievement-description text-sm md:text-base text-white/70 max-w-2xl mx-auto font-peace">
              We tailor each campaign to the creator and their community.
              Strategy, creative and execution are built together — not
              copy-pasted.
            </p>
          </div>

          {/* centered "Creators at the center" copy with staggered animation */}
          <div className="micrion-achievement-copy max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold font-peace">
              Creators at the center
            </h3>
            <p className="text-sm md:text-base text-white/75 leading-relaxed font-peace">
              Our team works like a boutique studio: we get close to each
              micro-influencer&apos;s audience and align them with campaigns
              that actually make sense.
            </p>
            <p className="text-sm md:text-base text-white/75 leading-relaxed font-peace">
              From concept to reporting, Micrion keeps both brand and creator
              experience smooth, transparent and measurable.
            </p>
          </div>

          {/* slider centered bottom of card */}
          <div className="micrion-achievement-slider flex justify-center pt-4">
            <div className="relative w-full max-w-xl">
              {/* soft shadow */}
              <div className="absolute inset-3 rounded-[64px] bg-black/60 blur-2xl opacity-70" />

              {/* Slide card with enhanced styling - PRIMARY GRADIENT */}
              <div
                key={index}
                className={`relative rounded-[64px] px-10 py-10 md:py-12 text-center shadow-2xl transition-all duration-300 ${
                  fade
                    ? "opacity-0 scale-90 translate-y-4"
                    : "opacity-100 scale-100 translate-y-0 micrion-slide-enter"
                } ${current.bgClass}`}
              >
                {/* Shine effect overlay */}
                <div className="absolute inset-0 rounded-[64px] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 animate-pulse" />
                </div>

                <div className="relative z-10">
                  <div className="micrion-achievement-number text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 tracking-tight font-peace">
                    {current.number}
                  </div>
                  <div className="text-sm md:text-lg font-medium opacity-90 font-peace">
                    {current.label}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* interactive dots indicator - PRIMARY PINK GLOW */}
          <div className="flex justify-center gap-3 pt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer hover:bg-white/60 ${
                  i === index 
                    ? "w-8 bg-gradient-to-r from-[#FF3E81] to-[#0D5232] micrion-dot-active shadow-lg shadow-[#FF3E81]/50" 
                    : "w-2 bg-white/40 hover:bg-white/50"
                }`}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AchievementsSlider;
