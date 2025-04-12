import { create } from "zustand";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useProfileStore = create((set, get) => ({}));
