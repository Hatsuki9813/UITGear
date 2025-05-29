import { useState } from "react";
export const test = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div classname="header">
            <div className="navbar">
                <div>show submenu</div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            {isOpen && <div className="submenu"></div>}
        </div>
    );
};
