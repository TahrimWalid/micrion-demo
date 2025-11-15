// src/components/AchievementsSlider.jsx
import React, { useEffect, useRef, useState } from "react";

const slides = [
  {
    number: "700+",
    label: "Brand activations in 2024",
    bgClass:
      "bg-gradient-to-br from-[#ffe58c] via-[#ffb347] to-[#ff6b5a] text-black",
  },
  {
    number: "3B",
    label: "Cumulative social views",
    bgClass:
      "bg-gradient-to-br from-[#89f7fe] via-[#66d2ff] to-[#4f46e5] text-black",
  },
  {
    number: "300+",
    label: "Active clients worldwide",
    bgClass:
      "bg-gradient-to-br from-[#fef3c7] via-[#facc15] to-[#fb923c] text-black",
  },
  {
    number: "7,000",
    label: "Sponsored posts delivered",
    bgClass:
      "bg-gradient-to-br from-[#fecaca] via-[#f97373] to-[#ef4444] text-black",
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
        {/* subtle background glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[75%] h-40 rounded-full bg-emerald-400/20 blur-3xl opacity-60" />
          <div className="absolute -right-24 bottom-0 w-64 h-64 rounded-full bg-micrionRed/25 blur-3xl opacity-50 micrion-glow-drift" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto space-y-10 md:space-y-12">
          {/* main heading with staggered animations */}
          <div className="text-center space-y-3">
            <p className="micrion-achievement-kicker uppercase text-[11px] tracking-[0.3em] text-white/60">
              About Micrion
            </p>
            <h2 className="micrion-achievement-heading text-3xl md:text-4xl font-semibold tracking-tight">
              At the core of our agency
            </h2>
            <p className="micrion-achievement-description text-sm md:text-base text-white/70 max-w-2xl mx-auto">
              We tailor each campaign to the creator and their community.
              Strategy, creative and execution are built together — not
              copy-pasted.
            </p>
          </div>

          {/* centered "Creators at the center" copy with staggered animation */}
          <div className="micrion-achievement-copy max-w-2xl mx-auto text-center space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold">
              Creators at the center
            </h3>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              Our team works like a boutique studio: we get close to each
              micro-influencer&apos;s audience and align them with campaigns
              that actually make sense.
            </p>
            <p className="text-sm md:text-base text-white/75 leading-relaxed">
              From concept to reporting, Micrion keeps both brand and creator
              experience smooth, transparent and measurable.
            </p>
          </div>

          {/* slider centered bottom of card */}
          <div className="micrion-achievement-slider flex justify-center pt-4">
            <div className="relative w-full max-w-xl">
              {/* soft shadow */}
              <div className="absolute inset-3 rounded-[64px] bg-black/60 blur-2xl opacity-70" />

              {/* Slide card with enhanced styling */}
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
                  <div className="micrion-achievement-number text-5xl md:text-6xl lg:text-7xl font-extrabold mb-2 tracking-tight">
                    {current.number}
                  </div>
                  <div className="text-sm md:text-lg font-medium opacity-90">
                    {current.label}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* interactive dots indicator */}
          <div className="flex justify-center gap-3 pt-6">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`h-[6px] rounded-full transition-all duration-300 cursor-pointer hover:bg-white/60 ${
                  i === index 
                    ? "w-8 bg-white micrion-dot-active" 
                    : "w-2 bg-white/40"
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
