import { useState, useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import Modal from "react-modal";
import styles from "./ProfileLayout.module.css";
import { useAuthStore } from "../../../store/useAuthStore";
import { Button } from "react-bootstrap";

Modal.setAppElement("#root");

export const ProfileLayout = () => {
    const logout = useAuthStore((state) => state.logout); // your logout action
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state

    const handleLogout = () => {
        logout(); // clear user state
        localStorage.removeItem("token"); // remove token if stored
        navigate("/login"); // redirect to login page
    };

    useEffect(() => {
        const preventScroll = (e) => e.preventDefault();

        if (isModalOpen) {
            document.addEventListener("wheel", preventScroll, { passive: false });
            document.addEventListener("touchmove", preventScroll, { passive: false });
        } else {
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        }

        return () => {
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        };
    }, [isModalOpen]);

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
                    <button className={styles.link} onClick={() => setIsModalOpen(true)}>
                        Đăng xuất
                    </button>
                </div>

                <div className={styles.content}>
                    <Outlet /> {/* Hiển thị route con ở đây */}
                </div>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={() => setIsModalOpen(false)}
                className={styles.modalContainer}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1000,
                    },
                }}>
                <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Đăng xuất</div>
                <div>Bạn có chắc chắn muốn đăng xuất?</div>
                <div className={styles.modalButtons}>
                    <Button style={{ width: "80px" }} variant="danger" onClick={handleLogout}>
                        Đồng ý
                    </Button>
                    <Button
                        style={{ width: "80px" }}
                        variant="secondary"
                        onClick={() => setIsModalOpen(false)}>
                        Hủy
                    </Button>
                </div>
            </Modal>

            {/* <ProductCarousel data={[data, data2, data, data]} background="bg-white" title="SẢN PHẨM ĐÃ XEM" titleColor="text-black" cardItemBorder={1} /> */}
        </div>
    );
};
