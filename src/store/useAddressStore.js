import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore"; // import hook auth

export const useAddressStore = create((set, get) => ({
    addresses: [],

    initializeAddresses: () => {
        const user = useAuthStore.getState().user;
        if (user && user.shippingAddresses) {
            set({ addresses: user.shippingAddresses });
        }
    },

    addAddress: async (data) => {
        try {
            const email = useAuthStore.getState().user?.email;
            const payload = { ...data, email };
            const res = await axiosInstance.post("/user/shipping-addresses", payload);
            toast.success("Thêm địa chỉ thành công.");
            set({ addresses: res.data.addresses });
            return 1;
        } catch (error) {
            console.error("Lỗi khi thêm địa chỉ:", error.response?.data);
            toast.error(error.response?.data?.message || "Không thể thêm địa chỉ.");
        }
        return 0;
    },

    updateAddress: async (data) => {
        try {
            const email = useAuthStore.getState().user?.email;
            const payload = { ...data, email };
            const res = await axiosInstance.put("/user/shipping-addresses", payload);
            toast.success("Cập nhật địa chỉ thành công.");
            set({ addresses: res.data.addresses });
            return 1;
        } catch (error) {
            console.error("Lỗi khi cập nhật địa chỉ:", error.response?.data);
            toast.error(error.response?.data?.message || "Không thể cập nhật địa chỉ.");
        }
        return 0;
    },

    deleteAddress: async (index) => {
        try {
            const email = useAuthStore.getState().user?.email;
            const payload = { index, email };
            const res = await axiosInstance.delete("/user/shipping-addresses", {
                data: payload,
            });
            toast.success("Xóa địa chỉ thành công.");
            set({ addresses: res.data.addresses });
        } catch (error) {
            console.error("Lỗi khi xóa địa chỉ:", error.response?.data);
            toast.error(error.response?.data?.message || "Không thể xóa địa chỉ.");
        }
    },
}));
