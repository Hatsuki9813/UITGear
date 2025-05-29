import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProductStore = create((set) => ({
    products: [],
    totalProducts: 0,
    totalPages: 0,
    fetchSearchProducts: async (query) => {
        try {
            const res = await axiosInstance.get(`/product/search?q=${query}&rcm=0`);
            if (res.status === 200) {
                set({
                    products: res.data.products || [],
                    totalProducts: res.data.totalProducts || 0,
                    totalPages: res.data.totalPages || 0,
                });
            } else {
                toast.error("Failed to fetch search results.");
            }
        } catch (error) {
            console.error("Error fetching search products:", error);
            toast.error("An error occurred while searching for products.");
        }
    },

    fetchProducts: async ({
        category = "",
        brand = "",
        product_line = "",
        page = 1,
        limit = 20,
        sort = "price",
        order = "desc",
    }) => {
        try {
            console.log("page", page);
            const url = "/product";
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
