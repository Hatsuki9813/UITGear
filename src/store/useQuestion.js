import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useQuestionStore = create((set) => ({
  questions: [], // trạng thái lưu danh sách câu hỏi
  loading: false,

  getAllQuestions: async () => {
    set({ loading: true });
    try {
      const response = await axiosInstance.get("/question/all");
      set({ questions: response.data, loading: false });
    } catch (error) {
      console.error("Lỗi khi lấy danh sách câu hỏi:", error);
      toast.error("Không thể tải câu hỏi.");
      set({ loading: false });
    }
  },
}));
