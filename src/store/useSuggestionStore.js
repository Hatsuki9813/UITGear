import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useSuggestionStore = create((set) => ({
  suggestions: [],
  fetchSuggestions: async (query) => {
    if (!query) {
      set({ suggestions: [] });
      return;
    }
    try {
      const res = await axiosInstance.get(`/product/search?q=${query}`);
      set({ suggestions: res.data });
      console.log(res.data, "suggestions data");
    } catch (err) {
      console.error("Error fetching suggestions:", err);
      set({ suggestions: [] });
    }
  },
  clearSuggestions: () => set({ suggestions: [] }),
}));

export default useSuggestionStore;
