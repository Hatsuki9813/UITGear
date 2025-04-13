import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProfileStore = create((set, get) => ({
  editProfile: async (data) => {
    try {
      const response = await axiosInstance.put("/user", data);
      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        set({ profile: response.data });
      } else {
        toast.error("Failed to update profile.");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      toast.error("An error occurred while updating the profile.");
    }
  },
}));
