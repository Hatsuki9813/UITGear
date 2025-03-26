import { useState } from "react";

import AddressRow from "./components/AddressRow";
import AddressEditPopup from "./components/AddressEditPopup";

export default () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);

    const openAddPopup = () => {
        setIsEditing(false); // Chế độ thêm mới
        setIsOpen(true);
    };

    const openEditPopup = () => {
        setIsEditing(true); // Chế độ cập nhật
        setIsOpen(true);
    };

    return (
        <div className="flex flex-col gap-4 px-20">
            <h1 className="font-semibold text-xl flex justify-center mb-4">ĐỊA CHỈ GIAO HÀNG</h1>
            <button
                className="self-end border-2 rounded-sm transition-colors ease-in duration-200 border-[#02457a] hover:text-black text-white hover:bg-white bg-[#02457a] w-fit py-2 px-4 cursor-pointer font-medium"
                onClick={openAddPopup}
            >
                Thêm địa chỉ mới
            </button>

            <div className="flex flex-col gap-4">
                <AddressRow edit={openEditPopup} defaultAddress={true} />
                <AddressRow edit={openEditPopup} />
                <AddressRow edit={openEditPopup} />
            </div>

            {/* Hiển thị Popup */}
            <AddressEditPopup isOpen={isOpen} onClose={() => setIsOpen(false)} isEditing={isEditing} />
        </div>
    );
};
