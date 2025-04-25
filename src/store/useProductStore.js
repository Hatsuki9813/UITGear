import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
  products: [],
  totalProducts: 0,
  totalPages: 0,
  fetchProducts: async ({
    slug = null, // Thêm slug vào params, mặc định là null
    page = 1,
    limit = 20,
    sort = "price",
    order = "desc",
  }) => {
    try {
      // Xây dựng URL động dựa trên slug
      const url = slug ? `/product/${slug}` : "/product";
      // Truyền các tham số qua query params
      const response = await axiosInstance.get(url, {
        params: { page, limit, sort, order },
      });

      if (response.status === 200) {
        set({
          products: response.data.products || [], // Đảm bảo products là mảng
          totalProducts: response.data.totalProducts || 0,
          totalPages: response.data.totalPages || 0, // Cập nhật totalPages
        });
      } else {
        toast.error("Failed to fetch products.");
      }
    } catch (error) {
      console.error("Error fetching products:", error);
      toast.error("An error occurred while fetching the products.");
    }
  },
}));
