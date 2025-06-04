import { useState, useEffect, useRef } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import styles from "./SortButton.module.css";

export default function SortButton({ onSort }) {
    const [isOpen, setIsOpen] = useState(false);
    const [buttonText, setButtonText] = useState("Giá giảm dần");
    const dropdownRef = useRef(null);

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

    const handleSort = (type, order) => {
        onSort?.(type, order);

        let label = "";
        if (type === "name") {
            label = order === "asc" ? "Tên A → Z" : "Tên Z → A";
        } else if (type === "price") {
            label = order === "asc" ? "Giá tăng dần" : "Giá giảm dần";
        }

        setButtonText(label);
        setIsOpen(false);
    };

    return (
        <div className={styles.SortButton} ref={dropdownRef}>
            <label>Sắp xếp theo</label>
            <button className={styles.button} onClick={() => setIsOpen(!isOpen)}>
                <div>
                    <span>{buttonText}</span>
                    {isOpen ? (
                        <ChevronUpIcon className={styles.icon} />
                    ) : (
                        <ChevronDownIcon className={styles.icon} />
                    )}
                </div>
            </button>

            {isOpen && (
                <div className={styles.dropdown2}>
                    <button className={styles.sortOption} onClick={() => handleSort("name", "asc")}>
                        Tên A → Z
                    </button>
                    <button
                        className={styles.sortOption}
                        onClick={() => handleSort("name", "desc")}>
                        Tên Z → A
                    </button>
                    <button
                        className={styles.sortOption}
                        onClick={() => handleSort("price", "asc")}>
                        Giá tăng dần
                    </button>
                    <button
                        className={styles.sortOption}
                        onClick={() => handleSort("price", "desc")}>
                        Giá giảm dần
                    </button>
                </div>
            )}
        </div>
    );
}
