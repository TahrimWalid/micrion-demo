// src/components/InfluencerGrid.jsx
import React from "react";
import InfluencerCard from "./InfluencerCard.jsx";

function InfluencerGrid({ influencers }) {
  return (
    <div className="mt-6">
      <div className="grid gap-6 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {influencers.map((inf, index) => (
          <div 
            key={inf.id}
            className="micrion-grid-item"
            style={{
              animation: `micrionGridItemEnter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards`,
              animationDelay: `${index * 80}ms`,
              opacity: 0,
            }}
          >
            <InfluencerCard influencer={inf} index={0} />
          </div>
        ))}
      </div>

      {influencers.length === 0 && (
        <div className="micrion-empty-state mt-8 rounded-2xl border border-dashed border-white/20 bg-gradient-to-br from-white/5 to-white/2 px-6 py-8 text-center">
          <div className="text-4xl mb-3">🔍</div>
          <p className="text-sm text-white/70 font-medium">
            No influencers match your filters yet.
          </p>
          <p className="text-xs text-white/50 mt-2">
            Try removing some filters or contact us for a custom shortlist.
          </p>
        </div>
      )}
    </div>
  );
}

export default InfluencerGrid;
