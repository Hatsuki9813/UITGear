import { useState, useEffect, useRef } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const imageList = [
    { src: "/image-slider/1.png", index: 0 },
    { src: "/image-slider/2.png", index: 1 },
    { src: "/image-slider/3.png", index: 2 },
    { src: "/image-slider/4.png", index: 3 },
    { src: "/image-slider/5.png", index: 4 },
    { src: "/image-slider/6.png", index: 5 },
    { src: "/image-slider/7.png", index: 6 },
    { src: "/image-slider/8.png", index: 7 },
    { src: "/image-slider/9.png", index: 8 },
    { src: "/image-slider/10.png", index: 9 },
];

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
            className={`w-16 sm:w-22 h-16 sm:h-22 flex bg-white border-2 ${
                item.index == index ? "border-[#02457a]" : "border-[#e0e0e0]"
            } rounded-sm cursor-pointer hover:border-[#02457a] transition-colors duration-200 flex items-center`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
        >
            <img
                src={item.src}
                alt="carousel"
                className="object-contain"
                onDragStart={(e) => {
                    if (window.innerWidth >= 1024) e.preventDefault();
                }}
            />
        </button>
    );
};

const ImageSlider = () => {
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

    const selectIndex = (index) => {
        setIndex(index);
    };

    const handleSlide = (direction) => {
        if ((direction === "prev" && firstSlotIndex == 0) || (direction === "next" && firstSlotIndex + 5 == imageList.length)) return;
        setFirstSlotIndex((prev) => (direction === "next" ? prev + 1 : prev - 1));
    };

    useEffect(() => {
        const visibleCount = 5; // Số ảnh được hiển thị cùng lúc
        const totalImages = imageList.length; // Tổng số ảnh trong danh sách
        const lastVisibleIndex = firstSlotIndex + visibleCount - 1; // Vị trí index cuối cùng đang hiển thị

        if (index > lastVisibleIndex) {
            // Nếu index nhảy qua khỏi vùng hiển thị (kéo sang phải)
            setFirstSlotIndex(index - visibleCount + 1);
        } else if (index < firstSlotIndex) {
            // Nếu index nhỏ hơn firstSlotIndex (kéo sang trái)
            setFirstSlotIndex(index);
        }

        // 🔥 Xử lý ngoại lệ: nếu index nhảy từ 0 → cuối hoặc từ cuối → 0
        if (index === totalImages - 1 && firstSlotIndex === 0) {
            setFirstSlotIndex(totalImages - visibleCount); // Hiển thị nhóm cuối
        } else if (index === 0 && firstSlotIndex === totalImages - visibleCount) {
            setFirstSlotIndex(0); // Quay lại hiển thị nhóm đầu tiên
        }
    }, [index, containerWidth]);

    useEffect(() => {
        const updateWidth = () => {
            if (containerRef.current) {
                setContainerWidth(containerRef.current.offsetWidth);
            }
        };

        updateWidth(); // Gọi khi component mount
        window.addEventListener("resize", updateWidth); // Lắng nghe sự kiện resize

        return () => window.removeEventListener("resize", updateWidth); // Cleanup khi unmount
    }, []);

    const [maxDrag, setMaxDrag] = useState(0);

    useEffect(() => {
        if (containerRef.current) {
            setMaxDrag(containerRef.current.offsetWidth); // Lấy chiều rộng của vùng hiển thị
        }
    }, []);

    const [startX, setStartX] = useState(0);

    return (
        <div className="flex flex-col w-full lg:w-136 h-fit p-4 lg:p-8 gap-4">
            <div className="border-2 border-[#e0e0e0] rounded-sm relative h-50 md:h-100 sm:h-75 group w-full">
                {imageList.map((img, i) => (
                    <motion.img
                        key={i}
                        src={img.src}
                        alt="carousel"
                        className="absolute inset-0 w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: i === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                        drag="x"
                        dragConstraints={{ left: 0, right: 0 }}
                        onDragStart={(event, info) => setStartX(info.point.x)}
                        onDragEnd={(event, info) => {
                            const deltaX = info.point.x - startX;
                            if (deltaX > 10) {
                                handlePrev(); // Kéo sang phải → ảnh trước
                            } else if (deltaX < -10) {
                                handleNext(); // Kéo sang trái → ảnh tiếp theo
                            }
                        }}
                    />
                ))}

                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white z-10 bg-[#6e6e6e] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full p-2 cursor-pointer"
                    onClick={handlePrev}
                >
                    <ChevronLeftIcon className="h-6" />
                </button>

                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-10 bg-[#6e6e6e] opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded-full p-2 cursor-pointer"
                    onClick={handleNext}
                >
                    <ChevronRightIcon className="h-6" />
                </button>
            </div>

            <div className="group relative flex h-22">
                <div className="w-full justify-center overflow-hidden">
                    <div ref={containerRef} className="h-22 w-full flex items-center justify-center relative overflow-hidden">
                        <motion.div
                            className="flex gap-[10px] flex-nowrap absolute left-0 pointer-events-auto"
                            animate={{ x: -firstSlotIndex * offset }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                            {...(window.innerWidth < 1024 && { drag: "x", dragConstraints: { left: -maxDrag, right: 0 }, dragElastic: 0.1 })}
                        >
                            {imageList.map((item, idx) => (
                                <div className="h-fit shrink-0 w-16 sm:w-22 pointer-events-auto" key={idx}>
                                    <ImagePicker item={item} index={index} selectIndex={selectIndex} />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>

                <button
                    className="absolute left-2 top-1/2 -translate-y-1/2 text-white z-10 bg-[#6e6e6e] opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-full p-2 cursor-pointer"
                    onClick={() => handleSlide("prev")}
                >
                    <ChevronLeftIcon className="h-6" />
                </button>
                <button
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-white z-10 bg-[#6e6e6e] opacity-0 group-hover:opacity-100 transition-opacity duration-150 rounded-full p-2 cursor-pointer"
                    onClick={() => handleSlide("next")}
                >
                    <ChevronRightIcon className="h-6" />
                </button>
            </div>
        </div>
    );
};

export default ImageSlider;
