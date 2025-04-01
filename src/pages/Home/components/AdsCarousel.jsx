import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import styles from "./AdsCarousel.module.css";

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
        <div className={styles.AdsCarousel}>
            {imageList.map((img, i) => (
                <motion.img
                    key={i}
                    src={img}
                    alt="carousel"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: i === index ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                />
            ))}
            <button className={styles.prevButton} onClick={handlePrev}>
                <ChevronLeftIcon className={styles.iconButton} />
            </button>
            <button className={styles.nextButton} onClick={handleNext}>
                <ChevronRightIcon className={styles.iconButton} />
            </button>
        </div>
    );
};
