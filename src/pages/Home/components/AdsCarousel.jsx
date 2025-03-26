import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default ({ imageList }) => {
    const [index, setIndex] = useState(0);
    const intervalRef = useRef(null); // Dùng useRef để giữ interval

    const startAutoSlide = () => {
        clearInterval(intervalRef.current); // Dừng interval cũ trước khi tạo mới
        intervalRef.current = setInterval(() => {
            setIndex((prev) => (prev + 1) % imageList.length);
        }, 3000);
    };

    useEffect(() => {
        startAutoSlide(); // Khởi động auto slide khi component mount
        return () => clearInterval(intervalRef.current); // Xóa interval khi unmount
    }, []);

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % imageList.length);
        startAutoSlide(); // Restart interval
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
        startAutoSlide(); // Restart interval
    };

    return (
        <div className="relative flex flex-4 h-80 shadow-xs">
            {imageList.map((img, i) => (
                <motion.img
                    key={i}
                    src={img}
                    alt="carousel"
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
            <button
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white z-10 bg-[#6e6e6e] opacity-50 hover:opacity-100 transition-opacity duration-150 rounded-full p-2 cursor-pointer"
                onClick={handlePrev}
            >
                <ChevronLeftIcon className="h-6" />
            </button>
            <button
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white z-10 bg-[#6e6e6e] opacity-50 hover:opacity-100 transition-opacity duration-150 rounded-full p-2 cursor-pointer"
                onClick={handleNext}
            >
                <ChevronRightIcon className="h-6" />
            </button>
        </div>
    );
};
