import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import styles from "./SortButton.module.css";

export default function DropdownSort({ onSort }) {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Giá giảm dần");
    const [sortType, setSortType] = useState(null);
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
        <div className={styles.SortButton} ref={dropdownRef}>
            <label>Sắp xếp theo</label>
            {/* Nút bấm */}
            <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <span>{buttonText}</span>
                    {isOpen ? <ChevronUpIcon className={styles.icon} /> : <ChevronDownIcon className={styles.icon} />}
                </div>
            </button>

            {/* Dropdown */}
            {isOpen && (
                <div className={styles.dropdown2}>
                    <button className={styles.sortOption} onClick={() => handleSort("name")}>
                        Tên từ A đến Z
                    </button>
                    <button className={styles.sortOption} onClick={() => handleSort("price")}>
                        Giá giảm dần
                    </button>
                </div>
            )}
        </div>
    );
}
