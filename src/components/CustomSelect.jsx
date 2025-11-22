import React, { useState, useRef, useEffect } from "react";

function CustomSelect({ value, onChange, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const selectedLabel = options.find((opt) => opt.value === value)?.label || "Select...";

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="micrion-select flex items-center justify-between w-full px-4 py-3 rounded-full border-2 border-transparent bg-[#050814]/40 backdrop-blur-md text-white/90 font-medium transition-all duration-200 hover:bg-[#050814]/60"
        style={{
          borderImage: isOpen 
            ? "linear-gradient(135deg, #FF3E81, #0D5232) 1" 
            : "linear-gradient(135deg, rgba(255, 62, 129, 0.5), rgba(13, 82, 50, 0.5)) 1",
        }}
      >
        <span>{selectedLabel}</span>
        <span className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}>
          ▾
        </span>
      </button>

      {/* Dropdown Panel */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 rounded-lg bg-[#050814]/40 border border-white/15 backdrop-blur-md shadow-lg z-50 overflow-hidden">
          {options.map((option) => (
            <button
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`w-full px-3 py-2 text-left text-[11px] transition-all duration-150 ${
                value === option.value
                  ? "bg-[#FF3E81]/30 text-white font-medium border-l-2 border-[#FF3E81]"
                  : "text-white/80 hover:bg-[#FF3E81]/20 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}

      <style>{`
        .micrion-select:focus-visible {
          outline: none;
        }
      `}</style>
    </div>
  );
}

export default CustomSelect;
