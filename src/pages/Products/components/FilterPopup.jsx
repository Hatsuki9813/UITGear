import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";
import styles from "./FilterPopup.module.css";

export default ({ isOpen, onClose }) => {
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

    return (
        <div className={styles.FilterPopup}>
            <AnimatePresence>
                {isOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className={styles.overlay} onClick={onClose}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className={styles.main}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={styles.header}>
                                <span className={styles.headerName}>Bộ lọc sản phẩm</span>
                                <button onClick={onClose} className={styles.closeButton}>
                                    <XMarkIcon className={styles.closeIcon} />
                                </button>
                            </div>
                            <div>content</div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
