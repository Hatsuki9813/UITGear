import { Outlet, NavLink } from "react-router-dom";
import ProductCarousel from "../../Home/components/ProductCarousel";

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

const getLinkClass = (isActive) =>
    `block px-4 py-3 transition-all duration-200 ` + (isActive ? "bg-gradient-to-r from-[#97cadb] to-[#d6e8ee] font-semibold" : "bg-white text-[#5F6C72] hover:bg-gray-50");

export default function ProfileLayout() {
    return (
        <div className="flex flex-1 flex-col gap-8">
            <div className="flex flex-1 flex-row gap-8">
                <div className="w-72 bg-white h-fit rounded-sm shadow-md">
                    <div className="flex flex-col">
                        <NavLink to="/profile" end className={({ isActive }) => getLinkClass(isActive)}>
                            Thông tin cá nhân
                        </NavLink>
                        <NavLink to="/profile/address" className={({ isActive }) => getLinkClass(isActive)}>
                            Địa chỉ giao hàng
                        </NavLink>
                        <NavLink to="/profile/history" className={({ isActive }) => getLinkClass(isActive)}>
                            Lịch sử mua hàng
                        </NavLink>
                    </div>
                </div>

                <div className="w-full bg-white h-fit rounded-sm shadow-md p-4">
                    <Outlet /> {/* Hiển thị route con ở đây */}
                </div>
            </div>

            <ProductCarousel data={[data, data2, data, data]} background="bg-white" title="SẢN PHẨM ĐÃ XEM" titleColor="text-black" cardItemBorder={1} />
        </div>
    );
}
