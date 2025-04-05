import React, { useState } from 'react'
import styles from './Header.module.css'
import logo from '../../assets/icons/croppedlogonobgr.png'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/icons/laptop.png'
import { CiUser } from "react-icons/ci";
import menunavigation from '../../assets/icons/menunavigation.svg'
import menucash from '../../assets/icons/menucash.svg'
import menusaving from '../../assets/icons/menusaving.svg'
import menunews from '../../assets/icons/menunews.svg'
import menuwarranty from '../../assets/icons/menuwarranty.svg'
import laptop from '../../assets/icons/laptop.png'
import console from '../../assets/icons/console.png'
import accessory from '../../assets/icons/accessory.png'
import service from '../../assets/icons/services.png'
import news from '../../assets/icons/news.png'
import windowicon from '../../assets/icons/windows.png'
import saleicon from '../../assets/icons/sales.png'
import LaptopMenu from '../Menu/LaptopMenu';
import GamingMenu from '../Menu/GamingMenu';
import AccessoryMenu from '../Menu/AccessoryMenu';
import ServiceMenu from '../Menu/ServiceMenu';
import SoftwareMenu from '../Menu/SoftwareMenu';
export default function Header() {
    const [openSubmenu, setOpenSubmenu] = useState(null);
    const [openChildMenu, setopenChildMenu] = useState(null);
    const [cartCount, setCartCount] = useState(0); 

    const toggleSubmenu = (menu) => {
        setOpenSubmenu(openSubmenu === menu ? null : menu);
    };
    const toggleChildmenu = (Childmenu) => {
        setopenChildMenu(openChildMenu === Childmenu ? null : Childmenu);
    };
    return (
        <div className={styles.AllHeader}>
            <div className={styles.HeaderContainer}>
                <img src={logo} className={styles.logoimg} alt="logo" />
                <InputGroup size="sm" className={styles.searchBar}>
                    <Form.Control
                        aria-label="Small"
                        aria-describedby="inputGroup-sizing-sm"
                        placeholder='Tìm kiếm...'
                    />
                    <InputGroup.Text className={styles.searchButton}>
                        <FaSearch />
                    </InputGroup.Text>
                </InputGroup>
                <div className={styles.avatarcontainer} onClick={() => console.log('clicked')}>
                    <CiUser className={styles.avatar} />
                </div>
                <Button className={styles.cartButton}>
                    <FaShoppingCart /> 
                    {cartCount >= 0 && <span className={styles.badge}>{cartCount}</span>}
                    Giỏ hàng
                </Button>
            </div>
            <div className={styles.functioncontainer}>
                <ul>
                    <li onMouseEnter={() => toggleSubmenu("SubMenu")} onMouseLeave={() => toggleSubmenu(null)}>
                        <img src={menunavigation} className={styles.menuicon} alt="Menu Icon" />
                        <span>Danh mục sản phẩm</span>
                        {openSubmenu === "SubMenu" && (
                            <div className={styles.submenuContainer}>

                            <ul className={styles.submenu}>
                                <li onMouseEnter={() => toggleChildmenu("LaptopChildMenu")} onMouseLeave={() => toggleChildmenu(null)}>
                                    <div className={styles.menuitem} >
                                        <img src={laptop} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Laptop</span>

                                    </div>
                                    {openChildMenu === "LaptopChildMenu" && (<LaptopMenu />)}

                                </li>

                                
                                <li onMouseEnter={() => toggleChildmenu("gamingmenu")} onMouseLeave={() => toggleChildmenu(null)}>
                                    <div className={styles.menuitem} >
                                        <img src={console} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Laptop Gaming</span>
                                    </div>
                                    {openChildMenu === "gamingmenu" && (<GamingMenu />)}
                                </li>
                                <li onMouseEnter={() => toggleChildmenu("accessorymenu")} onMouseLeave={() => toggleChildmenu(null)}>
                                    <div className={styles.menuitem} >
                                        <img src={accessory} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Phụ kiện</span>
                                    </div>
                                    {openChildMenu === "accessorymenu" && (<AccessoryMenu />)}

                                </li>
                                <li onMouseEnter={() => toggleChildmenu("servicemenu")} onMouseLeave={() => toggleChildmenu(null)}>
                                    <div className={styles.menuitem} >
                                        <img src={service} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Dịch vụ</span>
                                    </div>
                                    {openChildMenu === "servicemenu" && (<ServiceMenu />)}
                                </li>
                                <li onMouseEnter={() => toggleChildmenu("softmenu")} onMouseLeave={() => toggleChildmenu(null)}>
                                    <div className={styles.menuitem} >
                                        <img src={windowicon} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Phần mềm</span>
                                    </div>
                                    {openChildMenu === "softmenu" && (<SoftwareMenu />)}

                                </li>
                                <li>
                                    <div className={styles.menuitem}>
                                        <img src={news} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Tin tức</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.menuitem}>
                                        <img src={saleicon} className={styles.menuicon} alt="Menu Icon" />
                                        <span style={{ color: "white" }}>Khuyến mãi</span>
                                    </div>
                                </li>
                            </ul>
                            
                            </div>
                        )}
                    </li>
                    <li>
                        <img src={menucash} className={styles.menuicon} alt="Menu Icon" />
                        <span>Hướng dẫn thanh toán</span>
                    </li>
                    <li>
                        <img src={menuwarranty} className={styles.menuicon} alt="Menu Icon" />
                        <span>Chính sách bảo hành</span>
                    </li>
                    <li>
                        <img src={menusaving} className={styles.menuicon} alt="Menu Icon" />
                        <span>Hướng dẫn trả góp</span>
                    </li>
                    <li>
                        <img src={menunews} className={styles.menuicon} alt="Menu Icon" />
                        <span>Tin tức công nghệ</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}
