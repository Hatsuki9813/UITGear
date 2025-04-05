import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

import styles from "./AddressEditPopup.module.css";

export default ({ isOpen, onClose, isEditing }) => {
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
        <div className={styles.EditPopup}>
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
                                <span className={styles.headerName}>{isEditing ? "Cập nhật địa chỉ" : "Thêm địa chỉ"}</span>
                                <button onClick={onClose} className={styles.closeButton}>
                                    <XMarkIcon className={styles.closeIcon} />
                                </button>
                            </div>
                            <form className={styles.contentContainer}>
                                <div className={styles.inputSection}>
                                    <span className={styles.inputLabel}>Họ và tên</span>
                                    <input placeholder="Nhập họ và tên" className={styles.inputField} />
                                </div>
                                <div className={styles.inputSection}>
                                    <span className={styles.inputLabel}>Số điện thoại</span>
                                    <input placeholder="Nhập số điện thoại" className={styles.inputField} />
                                </div>
                                <div className={styles.inputSection}>
                                    <span className={styles.inputLabel}>Địa chỉ</span>
                                    <input placeholder="Nhập địa chỉ" className={styles.inputField} />
                                </div>
                                <div className={styles.inputSection}>
                                    <span className={styles.inputLabel}>Địa chỉ mặc định</span>
                                    <div className={styles.defaultAddress}>
                                        <span>Khi đặt hàng, địa chỉ này sẽ được chọn trước</span>
                                        <input type="checkbox" className={styles.checkBox} />
                                    </div>
                                </div>
                                <div className={styles.confirmButtonContainer}>
                                    <button>{isEditing ? "Cập nhật địa chỉ" : "Thêm địa chỉ"}</button>
                                </div>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};
