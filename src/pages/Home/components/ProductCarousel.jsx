import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CardItem from "../../../components/CardItem";
import { motion } from "framer-motion";

export default ({ data, background, title, titleColor, cardItemBorder }) => {
    const [index, setIndex] = useState(data.length);
    const [isTransitioning, setIsTransitioning] = useState(true); // Điều khiển animation
    const itemWidth = 220; // Chiều rộng mỗi sản phẩm
    const gap = 25; // Khoảng cách giữa các sản phẩm
    const offset = itemWidth + gap; // Khoảng cách trượt
    const lastClickTime = useRef(0); // Lưu thời gian click cuối
    const clickDelay = 800;

    // Nhân đôi danh sách để tạo hiệu ứng vô tận
    const extendedData = data.concat(data).concat(data);

    const handleSlide = (direction) => {
        const now = Date.now();
        if (now - lastClickTime.current < clickDelay) return; // Chặn nếu click quá nhanh
        lastClickTime.current = now; // Cập nhật thời gian click cuối

        setIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));
    };

    // Khi hết danh sách, đặt lại vị trí giữa danh sách
    useEffect(() => {
        if (index >= data.length * 2) {
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(data.length);
            }, 750); // Delay để tránh giật
        }
        if (index < data.length - 1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(data.length);
            }, 750);
        }
        setIsTransitioning(true);
    }, [index]);

    return (
        <section className={`relative ${background} rounded-sm shadow-md py-4`}>
            <span className={`font-bold ${titleColor} text-2xl flex justify-center mb-4`}>{title}</span>
            <div className="flex flex-1 items-center">
                <div className="flex flex-1 items-center px-10">
                    <div className="w-300 justify-center overflow-hidden">
                        <motion.div
                            className="flex gap-[25px]"
                            animate={{ x: -index * offset }}
                            transition={isTransitioning ? { type: "spring", stiffness: 100, damping: 15 } : { duration: 0 }} // Tắt animation khi reset vị trí
                        >
                            {extendedData.map((item, idx) => (
                                <div key={idx}>
                                    <CardItem data={item} border={cardItemBorder} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <button
                    className="absolute left-4 text-white z-10 bg-[#6e6e6e] opacity-50 hover:opacity-100 transition-opacity duration-150 rounded-full p-2 cursor-pointer"
                    onClick={() => handleSlide("prev")}
                >
                    <ChevronLeftIcon className="h-6" />
                </button>
                <button
                    className="absolute right-4 text-white z-10 bg-[#6e6e6e] opacity-50 hover:opacity-100 transition-opacity duration-150 rounded-full p-2 cursor-pointer"
                    onClick={() => handleSlide("next")}
                >
                    <ChevronRightIcon className="h-6" />
                </button>
            </div>
        </section>
    );
};
