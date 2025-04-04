import { Outlet, NavLink } from "react-router-dom";
import ProductCarousel from "../../Home/components/ProductCarousel";
import styles from "./ProfileLayout.module.css";

const data = {
    img: "/item-test.svg",
    name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
    price: "15000000",
    discountPrice: "12000000",
};

const data2 = {
    img: "/item-test.svg",
    name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
    price: "10000",
    discountPrice: "10000",
};

export default function ProfileLayout() {
    return (
        <div className={styles.ProfileLayout}>
            <div className={styles.container}>
                <div className={styles.navbar}>
                    <NavLink to="/profile" end className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : styles.link)}>
                        Thông tin cá nhân
                    </NavLink>
                    <NavLink to="/profile/address" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : styles.link)}>
                        Địa chỉ giao hàng
                    </NavLink>
                    <NavLink to="/profile/history" className={({ isActive }) => (isActive ? `${styles.link} ${styles.linkActive}` : styles.link)}>
                        Lịch sử mua hàng
                    </NavLink>
                </div>

                <div className={styles.content}>
                    <Outlet /> {/* Hiển thị route con ở đây */}
                </div>
            </div>

            {/* <ProductCarousel data={[data, data2, data, data]} background="bg-white" title="SẢN PHẨM ĐÃ XEM" titleColor="text-black" cardItemBorder={1} /> */}
        </div>
    );
}
