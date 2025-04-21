import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
const useProductDetail = create((set) => ({
  product: null,
  isLoading: false,
  error: null,

  fetchProduct: async (product_id) => {
    set({ isLoading: true, error: null });
    try {
      // Replace URL bằng API thật của bạn
      const response = await axiosInstance.get(
        `product/detail/${product_id}`,
        {}
      );

      set({ product: response.data, isLoading: false });
    } catch (err) {
      set({ error: err.message, isLoading: false });
    }
  },

  clearProduct: () => set({ product: null, error: null, isLoading: false }),
}));

export default useProductDetail;
