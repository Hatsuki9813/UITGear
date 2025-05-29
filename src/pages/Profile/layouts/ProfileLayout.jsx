import { Outlet, NavLink, useNavigate } from "react-router-dom";
import styles from "./ProfileLayout.module.css";
import { useAuthStore } from "../../../store/useAuthStore";

export const ProfileLayout = () => {
    const logout = useAuthStore((state) => state.logout); // your logout action
    const navigate = useNavigate();
    const handleLogout = () => {
        logout(); // clear user state
        localStorage.removeItem("token"); // remove token if stored
        navigate("/login"); // redirect to login page
    };

    return (
        <div className={styles.ProfileLayout}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <NavLink
                        to="/profile"
                        end
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                        }>
                        Thông tin cá nhân
                    </NavLink>
                    <NavLink
                        to="/profile/address"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                        }>
                        Địa chỉ giao hàng
                    </NavLink>
                    <NavLink
                        to="/profile/history"
                        className={({ isActive }) =>
                            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
                        }>
                        Lịch sử mua hàng
                    </NavLink>
                    <button className={styles.link} onClick={handleLogout}>
                        Đăng xuất
                    </button>
                </div>

                <div className={styles.content}>
                    <Outlet /> {/* Hiển thị route con ở đây */}
                </div>
            </div>

            {/* <ProductCarousel data={[data, data2, data, data]} background="bg-white" title="SẢN PHẨM ĐÃ XEM" titleColor="text-black" cardItemBorder={1} /> */}
        </div>
    );
};
