import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";

export default function DropdownSort({ onSort }) {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Giá giảm dần");
    const dropdownRef = useRef(null); // Tạo ref để tham chiếu đến dropdown

    // Đóng dropdown nếu click bên ngoài
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isOpen]);

    const handleSort = (type) => {
        // onSort(type);
        setIsOpen(false);
        setButtonText(type === "name" ? "Tên từ A đến Z" : "Giá giảm dần");
    };

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <span className="pr-4">Sắp xếp theo</span>
            {/* Nút bấm */}
            <button className="border-[#CFCFCF] border-1 w-52 py-3 rounded-sm cursor-pointer font-medium text-left px-4" onClick={() => setIsOpen(!isOpen)}>
                <div className="flex justify-between items-center">
                    <span className="font-semibold">{buttonText}</span>
                    {isOpen ? <ChevronUpIcon className="h-4 w-4" /> : <ChevronDownIcon className="h-4 w-4" />}
                </div>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white shadow-md rounded-sm overflow-hidden border border-gray-200">
                    <button className="block w-full text-left px-4 py-3 hover:bg-gray-200 cursor-pointer" onClick={() => handleSort("name")}>
                        Tên từ A đến Z
                    </button>
                    <button className="block w-full text-left px-4 py-3 hover:bg-gray-200 cursor-pointer" onClick={() => handleSort("price")}>
                        Giá giảm dần
                    </button>
                </div>
            )}
        </div>
    );
}
