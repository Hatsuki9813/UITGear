import { FunnelIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative inline-block text-left">
            {/* Nút mở tooltip */}
            <button className="flex items-center border-[#CFCFCF] border-1 px-4 py-3 rounded-sm cursor-pointer font-medium" onClick={() => setIsOpen(!isOpen)}>
                <FunnelIcon className="h-4 w-4" />
                <span className="ml-1">Bộ lọc</span>
            </button>

            {/* Overlay + Tooltip */}
            {isOpen && (
                <>
                    {/* Overlay che toàn bộ màn hình */}
                    <div
                        className="fixed inset-0 bg-black opacity-40 bg-opacity-50 z-18 cursor-pointer"
                        onClick={() => setIsOpen(false)} // Click vào overlay để đóng tooltip
                    ></div>

                    {/* Tooltip */}
                    {isOpen && <div className="absolute left-0 mt-2 w-150 h-60 bg-white shadow-md rounded-sm overflow-hidden border-gray-200 z-19"></div>}
                </>
            )}
        </div>
    );
};
