import { UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useRef } from "react"; // Import useRef
import styles from "./Header.module.css";
import logo from "../../assets/icons/croppedlogonobgr.png";
import {
    menunavigation,
    menucash,
    menusaving,
    menunews,
    menuwarranty,
    laptop,
    consoleIcon,
    accessory,
    service,
    news,
    windowicon,
    saleicon,
} from "../../assets/subHeaderIcons";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import LaptopMenu from "../Menu/LaptopMenu";
import GamingMenu from "../Menu/GamingMenu";
import AccessoryMenu from "../Menu/AccessoryMenu";
import ServiceMenu from "../Menu/ServiceMenu";
import SoftwareMenu from "../Menu/SoftwareMenu";
import { Link } from "react-router";
import SearchBar from "../SearchBar/SearchBar";
import useCartStore from "../../store/useCartStore";
import { useAuthStore } from "../../store/useAuthStore";

export default function Header() {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openChildMenu, setopenChildMenu] = useState(null);
    const { cartCount, fetchCart, isLoading, error } = useCartStore(); //Check auth
    const token = localStorage.getItem("token");
    const user = useAuthStore((state) => state.user);
    const encodedGearText = encodeURI("Phụ kiện");

    // Refs for the main menu item and the submenu container
    const danhMucSanPhamRef = useRef(null); // Ref for "Danh mục sản phẩm" li
    const subMenuRef = useRef(null); // Ref for the submenu div
    const closeSubmenuTimeout = useRef(null); // To store the timeout ID

    const toggleChildmenu = (Childmenu) => {
        setopenChildMenu(openChildMenu === Childmenu ? null : Childmenu);
    };

    useEffect(() => {
        if (user) {
            fetchCart(user._id);
        }
    }, [user, fetchCart]);

    const Greeting = () => {
        const hour = new Date().getHours();
        if (hour >= 5 && hour < 12) {
            return "Chào buổi sáng,";
        } else if (hour >= 12 && hour < 18) {
            return "Chào buổi chiều,";
        } else {
            return "Chào buổi tối,";
        }
    };

    // --- New Event Handlers for "Danh mục sản phẩm" and its submenu ---

    const handleMouseEnterDanhMuc = () => {
        // Clear any pending timeout when entering the main menu item
        clearTimeout(closeSubmenuTimeout.current);
        setOpenSubmenu("SubMenu");
    };

    const handleMouseLeaveDanhMuc = (event) => {
        // Set a timeout to close the submenu.
        // `event.relatedTarget` is the element the mouse cursor moved to.
        // We check if the mouse moved into the submenu itself.
        closeSubmenuTimeout.current = setTimeout(() => {
            if (
                subMenuRef.current && // Ensure the submenu element exists
                !subMenuRef.current.contains(event.relatedTarget) // If the mouse is NOT moving into the submenu
            ) {
                setOpenSubmenu(null);
                setopenChildMenu(null);
            }
        }, 1); // Small delay to allow transition to submenu
    };

    const handleMouseEnterSubmenu = () => {
        // Clear the timeout when entering the submenu, preventing it from closing
        clearTimeout(closeSubmenuTimeout.current);
    };

    const handleMouseLeaveSubmenu = () => {
        // When leaving the submenu, reset the timeout to close it after a delay
        // This ensures it closes if the mouse truly leaves the entire area.
        closeSubmenuTimeout.current = setTimeout(() => {
            setOpenSubmenu(null);
            setopenChildMenu(null);
        }, 1);
    };

    // --- End of New Event Handlers ---

    return (
        <div className={styles.AllHeader}>
            <div className={styles.HeaderContainerBackground}>
                <div className={styles.HeaderContainer}>
                    <Link className={styles.logoLink} to="/">
                        <img src={logo} className={styles.logoimg} alt="logo" />
                    </Link>

                    <SearchBar />
                    {token ? (
                        <Link className={styles.userButton} to="/profile">
                            {user && user.profilePicture ? (
                                <img
                                    src={user.profilePicture}
                                    className={styles.avatar}
                                    alt="Avatar"
                                />
                            ) : (
                                <UserIcon className={styles.avatarIcon} />
                            )}
                            <span style={{ color: "white" }}>
                                <div>{Greeting()}</div>
                                <div style={{ fontWeight: 700 }}>{user && user.fullname}</div>
                            </span>
                        </Link>
                    ) : (
                        <Link className={styles.userButton} to="/login">
                            <UserIcon className={styles.avatarIcon} />
                            <span style={{ color: "white", fontWeight: 500 }}>
                                <div>Đăng nhập</div>
                                <div>Đăng kí</div>
                            </span>
                        </Link>
                    )}
                    <Link className={styles.cartButton} to="/cart">
                        <ShoppingCartIcon className={styles.cartIcon} />
                        {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
                        <span style={{ color: "white", fontWeight: 500 }}>Giỏ hàng</span>
                    </Link>
                </div>
            </div>

            <div className={styles.functioncontainerbackground}>
                <div className={styles.functioncontainer}>
                    <div
                        ref={danhMucSanPhamRef} // Attach ref here
                        onMouseEnter={handleMouseEnterDanhMuc} // Use the new handler
                        onMouseLeave={handleMouseLeaveDanhMuc} // Use the new handler
                        className={styles.dmsp}>
                        <div
                            style={{
                                alignItems: "center",
                                justifyContent: "center",
                                flexDirection: "row",
                                color: "white",
                            }}
                            className={styles.menuitem}>
                            <img src={menunavigation} className={styles.menuicon} alt="Menu Icon" />
                            <span>Danh mục sản phẩm</span>
                        </div>
                    </div>
                    {/* Other menu items remain unchanged */}
                    <Link to="/question" style={{ textDecoration: "none" }}>
                        <QuestionMarkCircleIcon
                            className={styles.menuicon}
                            style={{ marginRight: "10px" }}
                            alt="Menu Icon"
                        />
                        <span>Câu hỏi thường gặp</span>
                    </Link>
                    <Link to="/warranty-policies" style={{ textDecoration: "none" }}>
                        <img src={menuwarranty} className={styles.menuicon} alt="Menu Icon" />
                        <span>Chính sách bảo hành</span>
                    </Link>
                    <Link to="/installment-policies" style={{ textDecoration: "none" }}>
                        <img src={menusaving} className={styles.menuicon} alt="Menu Icon" />
                        <span>Hướng dẫn trả góp</span>
                    </Link>
                    <Link to="/news" style={{ textDecoration: "none" }}>
                        <img src={menunews} className={styles.menuicon} alt="Menu Icon" />
                        <span>Tin tức công nghệ</span>
                    </Link>
                </div>

                {openSubmenu === "SubMenu" && (
                    <div
                        ref={subMenuRef} // Attach ref here
                        onMouseEnter={handleMouseEnterSubmenu} // Use the new handler
                        onMouseLeave={handleMouseLeaveSubmenu} // Use the new handler
                        className={styles.submenuContainer}>
                        <div className={styles.submenu}>
                            <div
                                onMouseEnter={() => toggleChildmenu("LaptopChildMenu")}
                                onMouseLeave={() => toggleChildmenu(null)}>
                                <Link
                                    to="/products?category=Laptop"
                                    style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={laptop}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Laptop</span>
                                    </div>
                                </Link>
                                {openChildMenu === "LaptopChildMenu" && <LaptopMenu />}
                            </div>
                            <div
                                onMouseEnter={() => toggleChildmenu("gamingmenu")}
                                onMouseLeave={() => toggleChildmenu(null)}>
                                <Link
                                    to="/products?category=Laptop%20gaming"
                                    style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={consoleIcon}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Laptop Gaming</span>
                                    </div>
                                </Link>
                                {openChildMenu === "gamingmenu" && <GamingMenu />}
                            </div>
                            <div
                                onMouseEnter={() => toggleChildmenu("accessorymenu")}
                                onMouseLeave={() => toggleChildmenu(null)}>
                                <Link
                                    to={`/products?category=Accessories`}
                                    style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={accessory}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Phụ kiện</span>
                                    </div>
                                </Link>
                                {openChildMenu === "accessorymenu" && <AccessoryMenu />}
                            </div>
                            <div
                                onMouseEnter={() => toggleChildmenu("servicemenu")}
                                onMouseLeave={() => toggleChildmenu(null)}>
                                <Link
                                    to="/products?category=Services"
                                    style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={service}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Dịch vụ</span>
                                    </div>
                                </Link>
                                {openChildMenu === "servicemenu" && <ServiceMenu />}
                            </div>
                            <div
                                onMouseEnter={() => toggleChildmenu("softmenu")}
                                onMouseLeave={() => toggleChildmenu(null)}>
                                <Link
                                    to="/products?category=Software"
                                    style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={windowicon}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Phần mềm</span>
                                    </div>
                                </Link>
                                {openChildMenu === "softmenu" && <SoftwareMenu />}
                            </div>
                            <div>
                                <Link to="/news" style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={news}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Tin tức</span>
                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/sales" style={{ textDecoration: "none" }}>
                                    <div className={styles.menuitem}>
                                        <img
                                            src={saleicon}
                                            className={styles.menuicon}
                                            alt="Menu Icon"
                                        />
                                        <span style={{ color: "white" }}>Khuyến mãi</span>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
