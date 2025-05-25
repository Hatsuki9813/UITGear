import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
  loginData: { email: "", password: "" },
  registerData: {
    email: "",
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
  },
  errors: {},
  isAgreed: false,
  user: null,
  token: null,
  isAuthenticated: false,
  sendOtp: false,
  otp: "",
  email: "",
  // Cập nhật user và token vào store
  setAuth: (user, token) => set({ user, token }),
  setSendOtp: (sendOtp) => set({ sendOtp }),
  checkAuth: () => {
    const token = localStorage.getItem("token");
    if (token) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false });
    }
  },

  // Đăng xuất
  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },

  // Thay đổi dữ liệu form
  handleChange: (e, type) => {
    const { name, value } = e.target;
    set((state) => {
      if (type === "login") {
        return { loginData: { ...state.loginData, [name]: value } };
      } else {
        return { registerData: { ...state.registerData, [name]: value } };
      }
    });
  },

  // Validate form đăng ký
  validateRegister: () => {
    let newErrors = {};
    const state = get();
    if (!state.registerData.email.includes("@")) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (!/^\d{10,11}$/.test(state.registerData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
    }
    if (state.registerData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    }
    if (state.registerData.password !== state.registerData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";
    }
    set({ errors: newErrors });
    return Object.keys(newErrors).length === 0;
  },

  // Gửi yêu cầu đăng nhập
  handleLogin: async (navigate) => {
    const state = get();
    if (!state.loginData.email || !state.loginData.password) {
      toast.error("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }
    try {
      const res = await axiosInstance.post("/auth/login", state.loginData);
      const { user, token } = res.data;

      if (!user || !token) {
        toast.error("Lỗi phản hồi từ máy chủ!");
        return;
      }

      localStorage.setItem("token", token);
      get().setAuth(user, token);
      toast.success("Đăng nhập thành công!");
      navigate("/");
    } catch (error) {
      console.error("Login error:", error.response?.data);
      toast.error("Tài khoản hoặc mật khẩu không hợp lệ");
    }
  },

  // Gửi yêu cầu đăng ký
  handleRegister: async () => {
    const state = get();
    if (!state.validateRegister()) return;
    try {
      toast.success("Vui lòng chờ trong giây lát");
      const res = await axiosInstance.post(
        "/auth/register",
        state.registerData
      );

      if (res.status === 201) {
        toast.success(res.data.message); // Thành công mới hiện success
        window.location.reload();
      } else {
        toast.error(res.data.message || "Đăng ký thất bại!");
      }
    } catch (error) {
      console.log(error);
      toast.error(
        error.response?.data?.message || "Có lỗi xảy ra khi đăng ký!"
      );
    }
  },

  // Xử lý đăng nhập bằng Google
  handleGoogleLogin: async () => {
    window.open(
      "http://localhost:3000/api/auth/google",
      "googleLogin",
      "width=500,height=600"
    );

    const listener = async (event) => {
      if (event.origin !== "http://localhost:3000") return;

      if (event.data.token) {
        const token = event.data.token;
        localStorage.setItem("token", token);
        // Gọi API /me để lấy user
        try {
          const res = await axiosInstance.get("/auth/me", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          useAuthStore.getState().setAuth(res.data.user, token);
          toast.success("Đăng nhập thành công!");
          window.location.href = "/home";
        } catch (error) {
          console.error(
            "Lỗi lấy thông tin người dùng sau Google login:",
            error
          );
          toast.error("Không lấy được thông tin người dùng!");
        }
      } else {
        alert("Google login failed");
      }

      window.removeEventListener("message", listener);
    };

    window.addEventListener("message", listener);
  },
  fetchUser: async () => {
    const token = localStorage.getItem("token");
    if (!token) return;

    try {
      const res = await axiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({ user: res.data });
    } catch (err) {
      console.error("Lỗi khi fetch user:", err);
      localStorage.removeItem("token");
      set({ user: null, token: null });
    }
  },

  forgotPassword: async (data) => {
    try {
      await axiosInstance.post("/auth/forgot-password", { email: data });
      set({ email: data });
      toast.success("Mã OTP đã được gửi đến email của bạn!");
    } catch (error) {
      console.error("Lỗi quên mật khẩu:", error.response?.data);
      toast.error("Có lỗi xảy ra khi gửi yêu cầu!");
    }
  },
  otpVerify: async (email, otp) => {
    try {
      const res = await axiosInstance.post("/auth/verify-otp", { email, otp });
      set({ otp: otp });
      toast.success(res.data.message);
    } catch (error) {
      console.error("Lỗi xác thực OTP:", error.response?.data);
      toast.error("Có lỗi xảy ra khi xác thực OTP!");
    }
  },
  resetPassword: async (email, newPassword) => {
    try {
      const res = await axiosInstance.put("/auth/reset-password", {
        email,
        newPassword,
      });
      toast.success(res.data.message);
    } catch (error) {
      console.error("Lỗi đặt lại mật khẩu:", error.response?.data);
      toast.error("Có lỗi xảy ra khi đặt lại mật khẩu!");
    }
  },
  resendOtp: async (email) => {
    try {
      const res = await axiosInstance.post("/auth/resend-otp", { email });
      toast.success(res.data.message);
    } catch (error) {
      console.error("Lỗi gửi lại OTP:", error.response?.data);
      toast.error("Có lỗi xảy ra khi gửi lại OTP!");
    }
  },

  // Toggle checkbox đồng ý điều khoản
  setIsAgreed: () => set((state) => ({ isAgreed: !state.isAgreed })),
}));
