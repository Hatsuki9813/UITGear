import { useState } from "react";
import FilterButton from "./FilterButton";
import FilterPopup from "./FilterPopup";
import SortButton from "./SortButton";

export default () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "42px",
            }}
        >
            <FilterButton onClick={() => setIsOpen(true)} />
            <FilterPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
            <SortButton />
        </div>
    );
};
