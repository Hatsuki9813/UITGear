// src/routes/GuestRoute.jsx
import { Navigate } from "react-router-dom";

const GuestRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    // Nếu đã đăng nhập => chuyển hướng
    if (token) {
        return <Navigate to="/home" replace />;
    }

    return children;
};

export default GuestRoute;
