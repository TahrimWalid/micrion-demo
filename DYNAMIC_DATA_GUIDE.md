# Dynamic Influencer Data Management Guide

## Overview
This system provides a scalable architecture for managing influencer data with **three clean layers**:

1. **API Service Layer** (`src/api/influencerService.js`) - Backend communication
2. **Custom Hook** (`src/hooks/useInfluencers.js`) - Data fetching & state logic
3. **Components** (InfluencerCard, InfluencerGrid, FilterBar) - UI presentation

---

## File Structure

```
src/
├── api/
│   └── influencerService.js        ← API calls (backend communication)
├── hooks/
│   └── useInfluencers.js           ← Custom hook (state & logic)
├── data/
│   └── influencers.js              ← Mock data (for development)
├── components/
│   ├── InfluencerCard.jsx          ← Individual card (unchanged)
│   ├── InfluencerGrid.jsx          ← Grid container (updated below)
│   └── FilterBar.jsx               ← Filters (updated below)
└── App.jsx                         ← Main app (updated below)
```

---

## How to Use

### Step 1: Use the Hook in Your Component

```jsx
// In component that shows influencers (e.g., App.jsx)
import { useInfluencers } from "./hooks/useInfluencers.js";

function InfluencersSection() {
  const {
    influencers,
    loading,
    error,
    filters,
    updateFilters,
    resetFilters,
    updateInfluencer,
    deleteInfluencer,
    createInfluencer,
    refresh,
  } = useInfluencers();

  return (
    <>
      <FilterBar 
        filters={filters} 
        onChange={updateFilters}
      />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!loading && <InfluencerGrid influencers={influencers} />}
    </>
  );
}
```

---

## API Service Functions

### `fetchInfluencers()`
Fetch all influencers from the backend.

```javascript
const influencers = await influencerService.fetchInfluencers();
```

### `fetchInfluencerById(id)`
Get a single influencer by ID.

```javascript
const influencer = await influencerService.fetchInfluencerById("inf-a");
```

### `updateInfluencer(id, updates)`
Update influencer data (e.g., follower counts).

```javascript
const updated = await influencerService.updateInfluencer("inf-a", {
  instagramFollowers: 1500000,
  youtubeSubscribers: 900000,
});
```

### `deleteInfluencer(id)`
Remove an influencer.

```javascript
await influencerService.deleteInfluencer("inf-a");
```

### `createInfluencer(data)`
Add a new influencer.

```javascript
const newInfluencer = await influencerService.createInfluencer({
  name: "New Creator",
  field: "Beauty",
  region: "Asia",
  instagramFollowers: 500000,
  youtubeSubscribers: 100000,
  twitterFollowers: 50000,
  imageUrl: "https://...",
  platforms: ["instagram", "youtube"],
});
```

### `searchInfluencers(filters)`
Search with filters (search term, field, region, platform).

```javascript
const results = await influencerService.searchInfluencers({
  search: "fitness",
  field: "Fitness",
  region: "Europe",
  platform: "instagram",
});
```

---

## Hook Methods

All methods from `useInfluencers()`:

```javascript
const {
  // State
  influencers,          // Array of influencer objects
  loading,              // Boolean - true while fetching
  error,                // String - error message or null
  filters,              // Object - current filter state

  // Actions
  updateFilters,        // Update search/field/region/platform filters
  resetFilters,         // Clear all filters
  updateInfluencer,     // Modify existing influencer
  deleteInfluencer,     // Remove influencer
  createInfluencer,     // Add new influencer
  refresh,              // Manually refetch from API
} = useInfluencers();
```

---

## Connecting to Real Backend

When there is a real backend API, update `src/api/influencerService.js`:

### Example: Replace Mock with Real API

**Before (Mock):**
```javascript
export async function fetchInfluencers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockData), 300);
  });
}
```

**After (Real API):**
```javascript
export async function fetchInfluencers() {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/influencers`
  );
  if (!response.ok) throw new Error("Failed to fetch influencers");
  return await response.json();
}
```

### Set Backend URL
Create `.env.local`:
```
REACT_APP_API_URL=http://localhost:3000/api
```

---

## Real-Time Updates Example

### Auto-refresh every 5 minutes:
```javascript
useEffect(() => {
  const interval = setInterval(() => {
    refresh();
  }, 5 * 60 * 1000); // 5 minutes

  return () => clearInterval(interval);
}, [refresh]);
```

### Update when filter changes:
```javascript
// The hook already handles this!
// Just call updateFilters() and data refetches automatically
```

### Manual update (e.g., from admin panel):
```javascript
await updateInfluencer("inf-a", {
  instagramFollowers: 1500000,
});
// UI updates automatically
```

---

## Component Usage Examples

### FilterBar.jsx (No changes needed!)
Already works with the filters object:
```jsx
<FilterBar filters={filters} onChange={updateFilters} />
```

### InfluencerGrid.jsx (No changes needed!)
Just pass the influencers array:
```jsx
<InfluencerGrid influencers={influencers} />
```

### Handle Loading State:
```jsx
{loading && (
  <div className="text-center py-12">
    <p className="text-white/60">Loading influencers...</p>
  </div>
)}
```

### Handle Errors:
```jsx
{error && (
  <div className="rounded-2xl border border-red-500/50 bg-red-500/10 px-4 py-3">
    <p className="text-red-400">Error: {error}</p>
    <button onClick={refresh} className="mt-2 text-sm underline">
      Retry
    </button>
  </div>
)}
```

---

## Quick Start Checklist

- [ ] Copy `src/api/influencerService.js` - API layer
- [ ] Copy `src/hooks/useInfluencers.js` - Data hook
- [ ] Use `useInfluencers()` in main component
- [ ] Pass filters to `<FilterBar />`
- [ ] Pass influencers to `<InfluencerGrid />`
- [ ] Add loading/error UI
- [ ] When backend is ready, update API calls
- [ ] Set `REACT_APP_API_URL` in `.env.local`

---

## Benefits of This Approach

✅ **Separation of Concerns** - API, logic, and UI are separate  
✅ **Easy to Test** - Mock API for testing  
✅ **Scalable** - Add more features without touching components  
✅ **Reusable** - Use hook anywhere, not just one component  
✅ **Real-time Ready** - Easy to add WebSocket/polling  
✅ **Backend Agnostic** - Works with any backend  
✅ **Type-safe** - Easy to add TypeScript later  

---

## Next Steps

1. **Start using the hook** in main component
2. **Replace mock data** with real API calls when backend is ready
3. **Add error handling** UI for better UX
4. **Implement pagination** if there are many influencers (add to hook)
5. **Add caching** to reduce API calls (add to service)
6. **Add WebSocket** for real-time updates (update service)
