// src/components/Footer.jsx
import React, { useEffect, useRef } from "react";

function Footer() {
  const formRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger animations when form comes into view
        }
      },
      { threshold: 0.2 }
    );

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="contact"
      className="relative mt-auto bg-gradient-to-b from-transparent via-[#050814]/50 to-[#050814] backdrop-blur-xl overflow-hidden"
    >
      {/* Background gradient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-micrionBlue/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-micrionRed/5 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 py-20 space-y-20">
        {/* Top Section - CTA + Form Grid */}
        <div className="grid gap-12 md:grid-cols-[1.3fr,1.7fr]">
          {/* Left - CTA Text */}
          <div className="space-y-8 opacity-0 animate-fadeUp" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <div>
              <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-micrionYellow via-micrionCream to-micrionRed bg-clip-text text-transparent mb-6 pb-2">
                Start your next campaign
              </h3>
              <p className="text-sm md:text-base text-micrionCream/70 max-w-md leading-relaxed">
                Share a bit about your brand and what you&apos;re planning. We&apos;ll
                respond with a curated shortlist of micro-influencers.
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-3 pt-4">
              {[
                "Curated creator matches",
                "Campaign strategy insights",
                "Performance projections"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-xs text-micrionCream/60 opacity-0 animate-fadeUp" style={{ animationDelay: `${0.3 + i * 0.1}s`, animationFillMode: "forwards" }}>
                  <div className="w-1.5 h-1.5 rounded-full bg-micrionYellow" />
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <form
            ref={formRef}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Demo only – connect this to a backend or email service later.");
            }}
            className="space-y-4 opacity-0 animate-fadeUp" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <div className="grid gap-3 md:grid-cols-3">
              <input
                required
                placeholder="Your name"
                className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-xs text-micrionCream placeholder:text-white/40 outline-none transition-all duration-300 hover:bg-white/8 hover:border-white/25 focus:bg-white/10 focus:border-micrionYellow/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)]"
              />
              <input
                required
                type="email"
                placeholder="Work email"
                className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-xs text-micrionCream placeholder:text-white/40 outline-none transition-all duration-300 hover:bg-white/8 hover:border-white/25 focus:bg-white/10 focus:border-micrionYellow/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)]"
              />
              <input
                placeholder="Brand / company"
                className="rounded-xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-xs text-micrionCream placeholder:text-white/40 outline-none transition-all duration-300 hover:bg-white/8 hover:border-white/25 focus:bg-white/10 focus:border-micrionYellow/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)]"
              />
            </div>
            <textarea
              rows={3}
              placeholder="What kind of creators are you looking for?"
              className="w-full rounded-2xl border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-3 text-xs text-micrionCream placeholder:text-white/40 outline-none transition-all duration-300 hover:bg-white/8 hover:border-white/25 focus:bg-white/10 focus:border-micrionYellow/50 focus:shadow-[0_0_20px_rgba(250,204,21,0.1)] resize-none"
            />
            <button
              type="submit"
              className="relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-tr from-micrionRed to-orange-400 text-xs font-semibold text-white shadow-lg shadow-orange-500/40 hover:shadow-orange-500/60 transition-all duration-300 hover:scale-105 active:scale-95 group overflow-hidden"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
              <span className="relative">Send brief</span>
              <span className="relative text-lg">→</span>
            </button>
          </form>
        </div>

        {/* Contact Information - Full Width */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-white/10">
          {[
            {
              icon: "✉️",
              label: "Email",
              value: "hello@micrion.co",
              href: "mailto:hello@micrion.co"
            },
            {
              icon: "📱",
              label: "Phone",
              value: "+1 (415) 555-2671",
              href: "tel:+14155552671"
            },
            {
              icon: "📍",
              label: "Address",
              value: "520 3rd Street, San Francisco, CA 94107",
              href: null
            }
          ].map((contact, i) => (
            <div 
              key={i}
              className="opacity-0 animate-fadeUp"
              style={{ animationDelay: `${0.35 + i * 0.1}s`, animationFillMode: "forwards" }}
            >
              {contact.href ? (
                <a
                  href={contact.href}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 group-hover:bg-micrionYellow/20 transition-all duration-300 flex-shrink-0 text-lg">
                    {contact.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mb-1">
                      {contact.label}
                    </p>
                    <p className="text-xs md:text-sm font-medium text-micrionCream/80 group-hover:text-micrionYellow transition-colors duration-300 break-words">
                      {contact.value}
                    </p>
                  </div>
                </a>
              ) : (
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/10 flex-shrink-0 text-lg">
                    {contact.icon}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-[10px] text-white/40 uppercase tracking-wider font-semibold mb-1">
                      {contact.label}
                    </p>
                    <p className="text-xs md:text-sm font-medium text-micrionCream/80 break-words">
                      {contact.value}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom divider and credits */}
      <div className="relative border-t border-white/10 py-6 text-[11px] text-micrionCream/50 mt-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row md:justify-between gap-4">
          <span className="opacity-0 animate-fadeUp" style={{ animationDelay: "0.65s", animationFillMode: "forwards" }}>© {new Date().getFullYear()} Micrion. All rights reserved.</span>
          <span className="opacity-0 animate-fadeUp" style={{ animationDelay: "0.75s", animationFillMode: "forwards" }}>Connecting brands with micro-influencers. Powered by authentic storytelling.</span>
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
    </footer>
  );
}

export default Footer;
