import { useState, useMemo, useEffect } from "react";
import FilterButton from "./FilterButton";
import FilterPopup from "./FilterPopup";
import SortButton from "./SortButton";
import FilterList from "./FilterList";

<<<<<<< HEAD
export default ({ products, category, onSort, onFilter }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilters, setSelectedFilters] = useState({});
=======
export const FilterBar = ({ onSort }) => {
  const [isOpen, setIsOpen] = useState(false);
>>>>>>> 1b5c195c9a0365b401f3b074c9b1f7977855c79e

    const categoryFilters = {
        laptop: ["brand", "ram", "storage"],
        mouse: ["brand", "type"],
        keyboard: ["brand", "switch"],
    };

    const filters = useMemo(() => {
        const fields = categoryFilters[category] || [];
        const result = {};

        fields.forEach((field) => {
            const values = products
                .map((p) => {
                    const value = p[field] ?? p.specification_obj?.[field] ?? null;

                    if (!value) return null;

                    // Chuẩn hóa RAM
                    if (field === "ram") {
                        const match = value.match(/(\d+)\s*gb/i);
                        return match ? `${match[1]}GB` : null;
                    }

                    // Chuẩn hóa Storage
                    if (field === "storage") {
                        const match = value.match(/(\d+)\s*(gb|tb)/i);
                        return match ? `${match[1]}${match[2].toUpperCase()}` : null;
                    }

                    // Mặc định
                    return value;
                })
                .filter(Boolean);

            // Loại trùng và sắp xếp
            const unique = [...new Set(values)];

            // Nếu là số dạng GB/TB, thì sort theo số
            if (field === "ram" || field === "storage") {
                unique.sort((a, b) => {
                    const numA = parseInt(a);
                    const numB = parseInt(b);
                    return numA - numB;
                });
            } else {
                unique.sort((a, b) => a.localeCompare(b)); // sort text alphabetically
            }

            result[field] = unique;
        });

        return result;
    }, [products, category]);

    useEffect(() => {
        onFilter(selectedFilters);
    }, [selectedFilters]);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "42px",
            }}>
            <div style={{ display: "flex", gap: "1rem" }}>
                <FilterButton onClick={() => setIsOpen(true)} />
                <FilterList selectedFilters={selectedFilters} />
            </div>
            <FilterPopup
                filters={filters}
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                selectedFilters={selectedFilters}
                setSelectedFilters={setSelectedFilters}
            />
            <SortButton onSort={onSort} />
        </div>
    );
};
