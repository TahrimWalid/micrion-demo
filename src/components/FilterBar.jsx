// src/components/FilterBar.jsx
import React from "react";
import { influencers } from "../data/influencers.js";
import CustomSelect from "./CustomSelect";

function uniqueValues(key) {
  return Array.from(new Set(influencers.map((i) => i[key])));
}

const fields = ["all", ...uniqueValues("field")];
const regions = ["all", ...uniqueValues("region")];
const platforms = ["all", "instagram", "youtube", "twitter"];

function FilterBar({ filters, onChange }) {
  const update = (partial) => onChange({ ...filters, ...partial });

  const pretty = (value) =>
    value === "all" ? "All" : value.charAt(0).toUpperCase() + value.slice(1);

  const regionOptions = regions.map((r) => ({
    value: r,
    label: r === "all" ? "All regions" : pretty(r),
  }));

  const platformOptions = platforms.map((p) => ({
    value: p,
    label: p === "all" ? "All platforms" : pretty(p),
  }));

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="glass-panel rounded-full px-4 py-2 flex items-center gap-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/5 text-white/60 text-xs">
          🔍
        </span>
        <input
          type="text"
          placeholder="Search creators by name or category..."
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          className="flex-1 bg-transparent border-none outline-none text-xs md:text-sm placeholder:text-white/40 text-white"
        />
      </div>

      {/* Category chips */}
      <div className="flex flex-wrap gap-2">
        {fields.map((field, idx) => {
          const active = filters.field === field;
          return (
            <button
              key={field}
              onClick={() => update({ field })}
              className={[
                "px-4 py-1.5 rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95",
                active
                  ? "bg-micrionRed text-white shadow-md shadow-micrionRed/40"
                  : "bg-white/5 text-white/70 hover:bg-white/10 hover:border-white/20 border border-white/10",
              ].join(" ")}
              style={{
                animation: `slideUp 0.4s ease-out ${idx * 0.05}s both`,
              }}
            >
              {field === "all" ? "All" : pretty(field)}
            </button>
          );
        })}
      </div>

      {/* Advanced filters */}
      <div className="flex flex-wrap items-center gap-3 text-[11px] text-white/60 transition-all duration-500 ease-out">
        {/* Region */}
        <div className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
          <span className="uppercase tracking-[0.2em] text-[9px]">
            Region
          </span>
          <div className="w-32 transition-all duration-300">
            <CustomSelect
              value={filters.region}
              onChange={(value) => update({ region: value })}
              options={regionOptions}
            />
          </div>
        </div>

        {/* Platform */}
        <div className="flex items-center gap-2 hover:text-white/80 transition-colors duration-300">
          <span className="uppercase tracking-[0.2em] text-[9px]">
            Platform
          </span>
          <div className="w-32 transition-all duration-300">
            <CustomSelect
              value={filters.platform}
              onChange={(value) => update({ platform: value })}
              options={platformOptions}
            />
          </div>
        </div>

        <button
          onClick={() =>
            onChange({
              search: "",
              field: "all",
              region: "all",
              platform: "all",
            })
          }
          className="ml-auto text-[11px] text-white/60 hover:text-white hover:underline transition-all duration-300 active:scale-95"
        >
          Reset filters
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}

export default FilterBar;
