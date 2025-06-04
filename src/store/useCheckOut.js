import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export const useCheckOut = create((set, get) => ({
    createOrder: async (data) => {
        try {
            const response = await axiosInstance.post("/checkout", data);
            toast.success("Order created successfully!");
            return response.data; // Trả dữ liệu về để component có thể xử lý tiếp
        } catch (error) {
            console.error("Error creating order:", error);
            toast.error("An error occurred while creating the order.");
            throw error; // Cho phép caller xử lý lỗi
        }
    },
}));
