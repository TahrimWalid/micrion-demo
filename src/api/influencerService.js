//src/api/influencerService.js
/**
 * Influencer Service - Centralized API calls
 * 
 * This service handles all communication with the backend.
 * When you have a real backend, just replace these mock functions.
 */

// Mock data for development - replace with API calls when backend is ready
import { influencers as mockData } from "../data/influencers.js";

/**
 * Fetch all influencers
 * @returns {Promise<Array>}
 */
export async function fetchInfluencers() {
  try {
    // TODO: Replace with real API call
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/influencers`);
    // return await response.json();

    // For now, simulate API delay and return mock data
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockData), 300);
    });
  } catch (error) {
    console.error("Failed to fetch influencers:", error);
    throw error;
  }
}

/**
 * Fetch single influencer by ID
 * @param {string} id - Influencer ID
 * @returns {Promise<Object>}
 */
export async function fetchInfluencerById(id) {
  try {
    // TODO: Replace with real API call
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/influencers/${id}`);
    // return await response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        const influencer = mockData.find((inf) => inf.id === id);
        resolve(influencer || null);
      }, 200);
    });
  } catch (error) {
    console.error(`Failed to fetch influencer ${id}:`, error);
    throw error;
  }
}

/**
 * Update influencer data
 * @param {string} id - Influencer ID
 * @param {Object} updates - Fields to update
 * @returns {Promise<Object>}
 */
export async function updateInfluencer(id, updates) {
  try {
    // TODO: Replace with real API call
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/influencers/${id}`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(updates),
    // });
    // return await response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        const influencer = mockData.find((inf) => inf.id === id);
        if (influencer) {
          const updated = { ...influencer, ...updates };
          // In real app, this would be saved to backend
          resolve(updated);
        } else {
          throw new Error("Influencer not found");
        }
      }, 200);
    });
  } catch (error) {
    console.error(`Failed to update influencer ${id}:`, error);
    throw error;
  }
}

/**
 * Delete influencer
 * @param {string} id - Influencer ID
 * @returns {Promise<void>}
 */
export async function deleteInfluencer(id) {
  try {
    // TODO: Replace with real API call
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/influencers/${id}`, {
    //   method: "DELETE",
    // });
    // return await response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        const index = mockData.findIndex((inf) => inf.id === id);
        if (index !== -1) {
          mockData.splice(index, 1);
          resolve();
        }
      }, 200);
    });
  } catch (error) {
    console.error(`Failed to delete influencer ${id}:`, error);
    throw error;
  }
}

/**
 * Create new influencer
 * @param {Object} data - New influencer data
 * @returns {Promise<Object>}
 */
export async function createInfluencer(data) {
  try {
    // TODO: Replace with real API call
    // const response = await fetch(`${process.env.REACT_APP_API_URL}/influencers`, {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // });
    // return await response.json();

    return new Promise((resolve) => {
      setTimeout(() => {
        const newInfluencer = {
          id: `inf-${Date.now()}`,
          ...data,
        };
        mockData.push(newInfluencer);
        resolve(newInfluencer);
      }, 200);
    });
  } catch (error) {
    console.error("Failed to create influencer:", error);
    throw error;
  }
}

/**
 * Search influencers with filters
 * @param {Object} filters - Search criteria
 * @returns {Promise<Array>}
 */
export async function searchInfluencers(filters) {
  try {
    // TODO: Replace with real API call
    // const queryParams = new URLSearchParams(filters);
    // const response = await fetch(
    //   `${process.env.REACT_APP_API_URL}/influencers?${queryParams}`
    // );
    // return await response.json();

    // For now, filter mock data
    return new Promise((resolve) => {
      setTimeout(() => {
        let results = [...mockData];

        if (filters.search) {
          const query = filters.search.toLowerCase();
          results = results.filter(
            (inf) =>
              inf.name.toLowerCase().includes(query) ||
              inf.field.toLowerCase().includes(query)
          );
        }

        if (filters.field && filters.field !== "all") {
          results = results.filter((inf) => inf.field === filters.field);
        }

        if (filters.region && filters.region !== "all") {
          results = results.filter((inf) => inf.region === filters.region);
        }

        if (filters.platform && filters.platform !== "all") {
          results = results.filter((inf) =>
            inf.platforms.includes(filters.platform)
          );
        }

        resolve(results);
      }, 200);
    });
  } catch (error) {
    console.error("Failed to search influencers:", error);
    throw error;
  }
}
