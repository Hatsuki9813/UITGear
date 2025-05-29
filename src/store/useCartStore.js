// src/store/useCartStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios";

const useCartStore = create((set) => ({
  cartItems: [],
  cartCount: 0,
  isLoading: false,
  error: null,
  selectedDiscounts: {},

  setSelectedDiscounts: (discounts) => set({ selectedDiscounts: discounts }),


  addCart: async (user_id, product_id, quantity) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.post(`cart/add`, {
        user_id,
        product_id,
        quantity,
      });

      const newItem = response.data.cart; // lấy đúng object cart server trả về

      set((state) => {
        const existingIndex = state.cartItems.findIndex(
          (item) => item._id === newItem._id
        );

        let updatedCartItems;

        if (existingIndex !== -1) {
          // Nếu sản phẩm đã có trong cart thì cập nhật
          updatedCartItems = [...state.cartItems];
          updatedCartItems[existingIndex] = newItem;
        } else {
          // Nếu sản phẩm mới => thêm vào
          updatedCartItems = [...state.cartItems, newItem];
        }

        return {
          cartItems: updatedCartItems,
          cartCount: updatedCartItems.reduce(
            (total, item) => total + (item.quantity || 0),
            0
          ),
          isLoading: false,
        };
      });
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to add to cart",
        isLoading: false,
      });
    }
  },

  fetchCart: async (user_id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.get(`cart/${user_id}`);

      const data = response.data; // server trả mảng chi tiết sản phẩm

      // Kiểm tra nếu không có sản phẩm trong giỏ hàng
      if (data.length === 0) {
        set({
          cartItems: [],
          cartCount: 0,
          error: "Giỏ hàng của bạn hiện đang trống!", // Thông báo lỗi nếu giỏ hàng trống
          isLoading: false,
        });
      } else {
        set({
          cartItems: data,
          cartCount: data.reduce(
            (total, item) => total + (item.quantity || 0),
            0
          ),
          isLoading: false,
        });
      }
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to fetch cart items",
        isLoading: false,
      });
    }
  },
  deleteCart: async (user_id, product_id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axiosInstance.delete(`cart/`, {
        data: { user_id, product_id },
      });
      console.log(response.data, "delete cart"); // server trả về cart sau khi xóa
      const deletedItem = response.data.cart;

      set((state) => {
        const updatedCartItems = state.cartItems.filter(
          (item) => item._id !== deletedItem._id
        );

        return {
          cartItems: updatedCartItems,
          cartCount: updatedCartItems.reduce(
            (total, item) => total + (item.quantity || 0),
            0
          ),
          isLoading: false,
        };
      });
    } catch (error) {
      set({
        error:
          error.response?.data?.message ||
          error.message ||
          "Failed to delete cart item",
        isLoading: false,
      });
    }
  },
}));

export default useCartStore;
