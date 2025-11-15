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
        className="micrion-select flex items-center justify-between w-full"
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
                  ? "bg-blue-500/30 text-white font-medium border-l-2 border-blue-500"
                  : "text-white/80 hover:bg-blue-500/20 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CustomSelect;
