import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./FilterPopup.module.css";

export default ({ filters, isOpen, onClose, selectedFilters, setSelectedFilters }) => {
    const toggleFilter = (field, value) => {
        setSelectedFilters((prev) => {
            const current = prev[field] || [];
            let updated;

            if (current.includes(value)) {
                updated = current.filter((v) => v !== value);
            } else {
                updated = [...current, value];
            }

            // Sort lại
            updated.sort((a, b) => a.localeCompare(b, "vi", { sensitivity: "base" }));

            return {
                ...prev,
                [field]: updated,
            };
        });
    };

    useEffect(() => {
        const preventScroll = (e) => e.preventDefault();

        if (isOpen) {
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
    }, [isOpen]);

    const [mouseDownInside, setMouseDownInside] = useState(false);

    const fieldLabels = {
        brand: "Hãng",
        ram: "RAM",
        storage: "Bộ nhớ",
        connection: "Kiểu kết nối",
    };

    return (
        <div className={styles.FilterPopup}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.overlay}
                        onMouseDown={() => setMouseDownInside(false)}
                        onMouseUp={() => {
                            if (!mouseDownInside) {
                                onClose();
                            }
                        }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className={styles.main}
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                setMouseDownInside(true);
                            }}>
                            <div className={styles.header}>
                                <span className={styles.headerName}>Bộ lọc sản phẩm</span>
                                <button onClick={onClose} className={styles.closeButton}>
                                    <XMarkIcon className={styles.closeIcon} />
                                </button>
                            </div>
                            <div className={styles.filterContent}>
                                {Object.entries(filters).map(([key, values]) => (
                                    <div key={key} className={styles.filterGroup}>
                                        <span className={styles.filterTitle}>
                                            {fieldLabels[key] || key}
                                        </span>
                                        <div className={styles.filterOptions}>
                                            {values.map((value) => {
                                                const isSelected =
                                                    selectedFilters[key]?.includes(value);
                                                return (
                                                    <button
                                                        key={value}
                                                        className={`${styles.filterOption} ${
                                                            isSelected ? styles.selected : ""
                                                        }`}
                                                        onClick={() => toggleFilter(key, value)}>
                                                        {value}
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
