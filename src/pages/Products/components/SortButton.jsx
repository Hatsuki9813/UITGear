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

    const handleSort = (type) => {
        onSort(type);
        setButtonText(type === "name" ? "Tên từ A đến Z" : "Giá giảm dần");
        setIsOpen(false);
    };
<<<<<<< HEAD

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
=======

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
>>>>>>> 1b5c195c9a0365b401f3b074c9b1f7977855c79e

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
<<<<<<< HEAD
    );
=======
      </button>

      {isOpen && (
        <div className={styles.dropdown2}>
          <button
            className={styles.sortOption}
            onClick={() => handleSort("name", "asc")}
          >
            Tên A → Z
          </button>
          <button
            className={styles.sortOption}
            onClick={() => handleSort("name", "desc")}
          >
            Tên Z → A
          </button>
          <button
            className={styles.sortOption}
            onClick={() => handleSort("price", "asc")}
          >
            Giá tăng dần
          </button>
          <button
            className={styles.sortOption}
            onClick={() => handleSort("price", "desc")}
          >
            Giá giảm dần
          </button>
        </div>
      )}
    </div>
  );
>>>>>>> 1b5c195c9a0365b401f3b074c9b1f7977855c79e
}
