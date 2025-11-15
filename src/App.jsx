// src/App.jsx
import React, { useMemo, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import AchievementsSlider from "./components/AchievementsSlider.jsx";
import ClientsSection from "./components/ClientsSection.jsx";
import FilterBar from "./components/FilterBar.jsx";
import InfluencerGrid from "./components/InfluencerGrid.jsx";
import Footer from "./components/Footer.jsx";
import { influencers } from "./data/influencers.js";

function App() {
  const [filters, setFilters] = useState({
    search: "",
    field: "all",
    region: "all",
    platform: "all",
  });

  const filteredInfluencers = useMemo(() => {
    return influencers.filter((inf) => {
      const matchesSearch =
        !filters.search ||
        inf.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        inf.field.toLowerCase().includes(filters.search.toLowerCase());

      const matchesField =
        filters.field === "all" || inf.field === filters.field;

      const matchesRegion =
        filters.region === "all" || inf.region === filters.region;

      const matchesPlatform =
        filters.platform === "all" || inf.platforms.includes(filters.platform);

      return (
        matchesSearch &&
        matchesField &&
        matchesRegion &&
        matchesPlatform
      );
    });
  }, [filters]);

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#050814] via-[#071322] to-[#050814]]">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <Hero />

        {/* About / Achievements */}
        <section className="py-20">
          <AchievementsSlider />
        </section>

        {/* Influencers */}
        <section
          id="influencers"
          className="max-w-6xl mx-auto px-4 pb-24 pt-10 space-y-6"
        >
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-tight">
              Our Micro-Influencers
            </h2>
            <p className="text-sm text-white/70 max-w-xl">
              Curated creators across fitness, tech, fashion and more. Use
              filters to narrow down by region and platform.
            </p>
          </div>

          <FilterBar filters={filters} onChange={setFilters} />
          <InfluencerGrid influencers={filteredInfluencers} />
        </section>

        {/* Clients */}
        <section className="py-16">
          <ClientsSection />
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
