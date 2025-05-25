import { useState } from "react";
import { ComputerDesktopIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function SideNavigation() {
    const [hoverIndex, setHoverIndex] = useState(null);

    const menuItems = [
        { name: "Laptop", subMenu: ["Gaming", "Văn phòng", "Đồ họa"] },
        { name: "Màn hình", subMenu: ["Full HD", "2K", "4K"] },
        { name: "Bàn phím", subMenu: ["Cơ", "Membrane", "Không dây"] },
        { name: "Chuột, lót chuột", subMenu: ["Có dây", "Không dây"] },
        { name: "Tai nghe", subMenu: ["Over-ear", "In-ear", "Không dây"] },
        { name: "RAM, ổ cứng", subMenu: ["SSD", "HDD", "DDR4", "DDR5"] },
        { name: "Loa", subMenu: ["Bluetooth", "USB", "Dàn âm thanh"] },
        { name: "Webcam", subMenu: ["HD", "Full HD", "4K"] },
    ];

    return (
        <nav className="relative flex flex-1 bg-white rounded-sm flex-col font-semibold text-base h-fit shadow-md">
            {menuItems.map((item, index) => (
                <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={(e) => {
                        if (!e.relatedTarget?.closest(".submenu-container")) {
                            setHoverIndex(null);
                        }
                    }}>
                    <Link
                        to={`/products/:category/`}
                        className={`flex flex-row px-4 py-2 transition-colors ease-in duration-100 cursor-pointer justify-between ${
                            hoverIndex === index
                                ? "bg-[#02457a] text-white" // Giữ màu hover khi tooltip hiển thị
                                : "text-[#333333] hover:bg-[#02457a] hover:text-white"
                        }`}>
                        <span className="flex flex-row gap-2 items-center">
                            <ComputerDesktopIcon className="h-5" />
                            <span>{item.name}</span>
                        </span>
                        <span className="flex items-center">
                            <ChevronRightIcon className="h-4" />
                        </span>
                    </Link>

                    {/* Tooltip hiển thị subMenu */}
                    {hoverIndex === index && (
                        <div
                            className="absolute left-full top-0 ml-0 submenu-container z-20"
                            onMouseEnter={() => setHoverIndex(index)} // Giữ tooltip khi rê chuột vào
                            onMouseLeave={(e) => {
                                if (!e.relatedTarget?.closest(".submenu-container")) {
                                    setHoverIndex(null);
                                }
                            }}>
                            {/* Tạo khoảng trống vô hình để tránh mất hover khi di chuột qua */}
                            <div className="absolute -left-2 top-0 w-2 h-full"></div>

                            {/* Nội dung tooltip */}
                            <div className="bg-white shadow-lg rounded-sm w-40">
                                {item.subMenu.map((subItem, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        to={`/products/:category/${subItem
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                        className="block px-4 py-2 text-gray-700 hover:bg-[#02457a] hover:text-white transition-colors">
                                        {subItem}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            ))}
        </nav>
    );
}
