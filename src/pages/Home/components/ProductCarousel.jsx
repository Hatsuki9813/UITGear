import { useEffect, useState, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import CardItem from "../../../components/CardItem/CardItem";
import { motion } from "framer-motion";
import styles from "./ProductCarousel.module.css";
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
        <div
            style={{
                background: background,
            }}
            className={styles.ProductCarousel}
        >
            <span
                style={{
                    color: titleColor,
                }}
            >
                {title}
            </span>
            <div className={styles.slideContainer}>
                <div className={styles.slide}>
                    <div className={styles.motionContainer}>
                        <motion.div
                            style={{
                                display: "flex",
                                gap: "25px",
                            }}
                            animate={{ x: -index * offset }}
                            transition={isTransitioning ? { type: "spring", stiffness: 100, damping: 15 } : { duration: 0 }} // Tắt animation khi reset vị trí
                        >
                            {extendedData.map((item, idx) => (
                                <div key={idx}>

                                    <CardItem data={item} border={cardItemBorder} />
                                </div>
                            ))}
                        </motion.div>
                        <button className={styles.prevButton} onClick={() => handleSlide("prev")}>
                            <ChevronLeftIcon className={styles.iconButton} />
                        </button>
                        <button className={styles.nextButton} onClick={() => handleSlide("next")}>
                            <ChevronRightIcon className={styles.iconButton} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
