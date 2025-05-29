import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import styles from "./ImageSlider.module.css"; // Import your CSS module

const ImagePicker = ({ item, index, selectIndex }) => {
    const [isDragging, setIsDragging] = useState(false);
    let startX = 0;

    const handleMouseDown = (e) => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (Math.abs(e.clientX - startX) > 5) {
            setIsDragging(true);
        }
    };

    const handleMouseUp = () => {
        if (!isDragging) {
            selectIndex(item.index);
        }
    };

    return (
        <button
            style={{
                border: item.index == index ? "1px solid #02457a" : "1px solid #e0e0e0",
            }}
            className={styles.ImagePicker}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}>
            <img
                src={item.src}
                alt="carousel"
                style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                }}
                onDragStart={(e) => {
                    if (window.innerWidth >= 1024) e.preventDefault();
                }}
            />
        </button>
    );
};

const ImageSlider = ({ img_obj }) => {
    const imageList = [
        { src: img_obj.productimg, index: 0 },
        { src: img_obj.slider_image1, index: 1 },
        { src: img_obj.slider_image2, index: 2 },
        { src: img_obj.slider_image3, index: 3 },
        { src: img_obj.slider_image4, index: 4 },
        // Nếu có nhiều ảnh hơn thì bạn có thể push vào tiếp nhé!
    ].filter((item) => item.src); // lọc bỏ ảnh bị undefined hoặc null

    const [index, setIndex] = useState(0);
    const [firstSlotIndex, setFirstSlotIndex] = useState(0);
    const containerRef = useRef(null);
    const [containerWidth, setContainerWidth] = useState(0);

    const itemWidth = 4 * 22;
    const gap = 10;
    const offset = itemWidth + gap;

    const handleNext = () => {
        setIndex((prev) => (prev + 1) % imageList.length);
        if (index == firstSlotIndex + 4 + 1) {
            setFirstSlotIndex((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        setIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
        if (index == firstSlotIndex - 1) {
            setFirstSlotIndex((prev) => prev - 1);
        }
    };

    const selectIndex = (index) => setIndex(index);

    const handleSlide = (direction) => {
        if (
            (direction === "prev" && firstSlotIndex === 0) ||
            (direction === "next" && firstSlotIndex + 5 >= imageList.length)
        )
            return;

        setFirstSlotIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));
    };

    useEffect(() => {
        const visibleCount = 5;
        const totalImages = imageList.length;
        const lastVisibleIndex = firstSlotIndex + visibleCount - 1;

        if (index > lastVisibleIndex) {
            setFirstSlotIndex(index - visibleCount + 1);
        } else if (index < firstSlotIndex) {
            setFirstSlotIndex(index);
        }

        if (index === totalImages - 1 && firstSlotIndex === 0) {
            setFirstSlotIndex(totalImages - visibleCount);
        } else if (index === 0 && firstSlotIndex === totalImages - visibleCount) {
            setFirstSlotIndex(0);
        }
    }, [index, containerWidth]);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    }, []);

    const [maxDrag, setMaxDrag] = useState(0);
    useEffect(() => {
        if (containerRef.current) {
            setMaxDrag(containerRef.current.offsetWidth);
        }
    }, []);

    const [startX, setStartX] = useState(0);

    return (
        <div className={styles.ImageSlider}>
            <div className={styles.main}>
                {imageList.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img.src}
                        alt={`carousel-${i}`}
                        className={styles.mainImg}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragStart={(event, info) => setStartX(info.point.x)}
                        onDragEnd={(event, info) => {
                            const deltaX = info.point.x - startX;
                            if (deltaX > 10) handlePrev();
                            else if (deltaX < -10) handleNext();
                        }}
                    />
                ))}
                <button
                    className={`${styles.slideButton} ${styles.prevButton}`}
                    onClick={handlePrev}>
                    <ChevronLeftIcon className={styles.buttonIcon} />
                </button>
                <button
                    className={`${styles.slideButton} ${styles.nextButton}`}
                    onClick={handleNext}>
                    <ChevronRightIcon className={styles.buttonIcon} />
                </button>
            </div>

            <div className={styles.slider}>
                <div className={styles.sliderContainer}>
                    <div
                        ref={containerRef}
                        style={{
                            height: "5.5rem",
                            width: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            position: "relative",
                            overflow: "hidden",
                        }}>
                        <motion.div
                            style={{
                                display: "flex",
                                gap: "10px",
                                flexWrap: "nowrap",
                                width: "fit-content",
                                position: "absolute",
                                left: 0,
                                pointerEvents: "auto",
                            }}
                            animate={{ x: -firstSlotIndex * offset }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            {...(window.innerWidth < 1024 && {
                                drag: "x",
                                dragConstraints: { left: -maxDrag, right: 0 },
                                dragElastic: 0.1,
                            })}>
                            {imageList.map((item, idx) => (
                                <div className={styles.child} key={idx}>
                                    <ImagePicker
                                        item={item}
                                        index={index}
                                        selectIndex={selectIndex}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <button
                    className={`${styles.slideButton} ${styles.prevButton}`}
                    onClick={() => handleSlide("prev")}>
                    <ChevronLeftIcon className={styles.buttonIcon} />
                </button>
                <button
                    className={`${styles.slideButton} ${styles.nextButton}`}
                    onClick={() => handleSlide("next")}>
                    <ChevronRightIcon className={styles.buttonIcon} />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
