/**
 * useInfluencers - Custom hook for influencer data
 * 
 * Handles fetching, filtering, and state management
 * Supports search, filtering, sorting, and pagination
 */

import { useEffect, useState, useCallback } from "react";
import * as influencerService from "../api/influencerService.js";

export function useInfluencers() {
  const [influencers, setInfluencers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: "",
    field: "all",
    region: "all",
    platform: "all",
  });

  /**
   * Load all influencers on mount
   */
  useEffect(() => {
    loadInfluencers();
  }, [loadInfluencers]);

  /**
   * Apply filters whenever they change
   */
  useEffect(() => {
    applyFilters();
  }, [applyFilters]);

  /**
   * Fetch influencers from API
   */
  const loadInfluencers = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await influencerService.fetchInfluencers();
      setInfluencers(data);
    } catch (err) {
      setError(err.message || "Failed to load influencers");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  /**
   * Apply search and filter logic
   */
  const applyFilters = useCallback(async () => {
    try {
      setLoading(true);
      const results = await influencerService.searchInfluencers(filters);
      setInfluencers(results);
    } catch (err) {
      setError(err.message || "Failed to filter influencers");
    } finally {
      setLoading(false);
    }
  }, [filters]);

  /**
   * Update a single influencer's data
   */
  const updateInfluencer = useCallback(async (id, updates) => {
    try {
      const updated = await influencerService.updateInfluencer(id, updates);
      setInfluencers((prev) =>
        prev.map((inf) => (inf.id === id ? updated : inf))
      );
      return updated;
    } catch (err) {
      setError(err.message || "Failed to update influencer");
      throw err;
    }
  }, []);

  /**
   * Delete an influencer
   */
  const deleteInfluencer = useCallback(async (id) => {
    try {
      await influencerService.deleteInfluencer(id);
      setInfluencers((prev) => prev.filter((inf) => inf.id !== id));
    } catch (err) {
      setError(err.message || "Failed to delete influencer");
      throw err;
    }
  }, []);

  /**
   * Create a new influencer
   */
  const createInfluencer = useCallback(async (data) => {
    try {
      const newInfluencer = await influencerService.createInfluencer(data);
      setInfluencers((prev) => [...prev, newInfluencer]);
      return newInfluencer;
    } catch (err) {
      setError(err.message || "Failed to create influencer");
      throw err;
    }
  }, []);

  /**
   * Update filter state
   */
  const updateFilters = useCallback((newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  }, []);

  /**
   * Reset all filters
   */
  const resetFilters = useCallback(() => {
    setFilters({
      search: "",
      field: "all",
      region: "all",
      platform: "all",
    });
  }, []);

  /**
   * Manually trigger a refresh
   */
  const refresh = useCallback(() => {
    loadInfluencers();
  }, [loadInfluencers]);

  return {
    // State
    influencers,
    loading,
    error,
    filters,

    // Actions
    updateFilters,
    resetFilters,
    updateInfluencer,
    deleteInfluencer,
    createInfluencer,
    refresh,
  };
}

export default useInfluencers;
