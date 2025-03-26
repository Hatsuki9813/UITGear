import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 flex items-center justify-center bg-[rgba(0,0,0,0.5)] z-50"
                    onClick={onClose}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white p-6 rounded-lg shadow-lg w-132"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center pb-4 border-b">
                            <span className="font-semibold">{isEditing ? "Cập nhật địa chỉ" : "Thêm địa chỉ"}</span>
                            <button onClick={onClose} className="text-gray-500 hover:text-black">
                                ×
                            </button>
                        </div>
                        <form className="flex flex-col gap-4 mt-4 px-5">
                            <div className="flex flex-col gap-2">
                                <span className="font-medium">Họ và tên</span>
                                <input placeholder="Nhập họ và tên" className="border border-gray-300 rounded-sm p-2 outline-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium">Số điện thoại</span>
                                <input placeholder="Nhập số điện thoại" className="border border-gray-300 rounded-sm p-2 outline-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium">Địa chỉ</span>
                                <input placeholder="Nhập địa chỉ" className="border border-gray-300 rounded-sm p-2 outline-none" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <span className="font-medium">Địa chỉ mặc định</span>
                                <div className="flex flex-1 justify-between items-center">
                                    <span>Khi đặt hàng, địa chỉ này sẽ được chọn trước</span>
                                    <input type="checkbox" className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="mt-4 flex justify-center">
                                <button
                                    type="button"
                                    className="border-2 rounded-sm transition-colors ease-in duration-200 border-[#02457a] hover:text-black text-white hover:bg-white bg-[#02457a] py-2 w-full cursor-pointer font-medium"
                                >
                                    {isEditing ? "Cập nhật địa chỉ" : "Thêm địa chỉ"}
                                </button>
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
