🟣 Micrion — Global Micro-Influencer Agency Website

Responsive, animated, modern influencer discovery platform built with React + Vite + Tailwind CSS.

Live Demo: Coming Soon (GitHub Pages deployment instructions below)

🚀 Overview

Micrion is a polished, cinematic, highly animated showcase website for a micro-influencer agency.
It features:

Beautiful hero animations

Scroll-triggered cinematic effects

Dynamic influencer filtering

Custom dropdown UI

Achievements slider

Clients showcase

Fully mobile-responsive design

Everything is designed to feel premium and agency-grade.

🛠 Tech Stack
Layer	Tech
Frontend Framework	React + Vite
Styling	Tailwind CSS (with custom animations)
Animation	Custom CSS keyframes + IntersectionObserver
Assets	SVG icons, gradients, glassmorphism
Mock Data	Local JS files (prepared for API integration)
Deployment	GitHub Pages
📁 Project Structure
src/
├── api/
│   └── influencerService.js
├── hooks/
│   └── useInfluencers.js
├── data/
│   └── influencers.js
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── AchievementsSlider.jsx
│   ├── ClientsSection.jsx
│   ├── InfluencerCard.jsx
│   ├── InfluencerGrid.jsx
│   ├── FilterBar.jsx
│   └── Footer.jsx
├── index.css
└── App.jsx

✨ Key Features
🎨 Cinematic UI + Animations

Blob float animation

Letter-typing headers

Scroll-triggered fade-lift

Glass panels

Premium glow + scale effects

🔍 Dynamic Influencer Search + Filters

Search by name/category

Filter by field, region, and platform

Custom dropdown UI

Smooth transitions + chip glow animation

📊 Achievements Slider

Auto-rotating

Fade-transition

Gradient cards

Scroll-triggered reveal

👥 Influencer Cards

SVG platform logos

Staggered animation

Clean, fast grid layout

🔧 Setup Instructions
1️⃣ Install dependencies
npm install

2️⃣ Run development server
npm run dev

3️⃣ Build for production
npm run build

📡 Backend Ready

The architecture already includes:

api/influencerService.js

hooks/useInfluencers.js

These allow easy transition from mock data → real backend API without touching components.
