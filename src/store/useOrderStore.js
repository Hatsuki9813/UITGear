import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
const useOrderStore = create((set) => ({
    orders: [],
    loading: false,
    error: null,

    fetchOrders: async (user_id) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.get(`/order/${user_id}`);
            set({ orders: response.data, loading: false });
        } catch (error) {
            console.error("Error fetching order:", error);
            set({ error: error.message, loading: false });
        }
    },
    updateStatusOrder: async (orderId, status) => {
        set({ loading: true, error: null });
        try {
            const response = await axiosInstance.put(`/order/${orderId}`, {
                order_status: status,
            });
            console.log("Order status updated:", response.data);
            set((state) => ({
                orders: state.orders.map((order) =>
                    order._id === orderId ? { ...order, order_status: status } : order
                ),
                loading: false,
            }));
        } catch (error) {
            console.error("Error updating order status:", error);
            set({ error: error.message, loading: false });
        }
    },
}));
export default useOrderStore;
