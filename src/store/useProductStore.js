import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
  products: [],
  totalProducts: 0,
  totalPages: 0,
  fetchProducts: async ({
    category = "", // Thêm category vào params, mặc định là ""
    brand = "", // Thêm brand vào params, mặc định là ""
    product_line = "", // Thêm productLine vào params, mặc định là ""
    page = 1,
    limit = 20,
    sort = "price",
    order = "desc",
  }) => {
    try {
      // Xây dựng URL với các tham số category, brand, productLine
      const url = "/product"; // Giữ URL chung cho tất cả các trường hợp
      console.log("Fetching products with params:", {
        category,
        brand,
        product_line,
        page,
        limit,
        sort,
        order,
      });
      // Truyền các tham số qua query params
      const response = await axiosInstance.get(url, {
        params: {
          category,
          brand,
          product_line,
          page,
          limit,
          sort,
          order,
        },
      });

      if (response.status === 200) {
        set({
          products: response.data.products || [],
          totalProducts: response.data.totalProducts || 0,
          totalPages: response.data.totalPages || 0,
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
