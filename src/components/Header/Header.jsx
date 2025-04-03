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
                    <FaShoppingCart /> Giỏ hàng
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



{/* 
<Dropdown.Menu className={styles.dropdownMenu}>
                                    <Row>
                                        <Col xs="12" md="6" className="text-left">
                                            <Dropdown.Header>
                                                Catering
                                            </Dropdown.Header>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Corporate
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Private
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>

                                            <Dropdown.Divider />
                                            <Dropdown.Header>
                                                Classes
                                            </Dropdown.Header>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Barista 101
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        History of Coffee
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Intro to Cafe Snobbery
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Divider className="d-md-none" />
                                        </Col>

                                        <Col xs="12" md="6" className="text-left">
                                            <Dropdown.Header>
                                                Rentals
                                            </Dropdown.Header>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Fireside Room
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Roasting Room
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Divider />
                                            <Dropdown.Header>
                                                Seasonal
                                            </Dropdown.Header>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link" role="button">
                                                        Coldbrew Night
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                            <Dropdown.Item>
                                                <Link href="/">
                                                    <a className="nav-link text-wrap" role="button">
                                                        Campfire Coffee Class
                                                    </a>
                                                </Link>
                                            </Dropdown.Item>
                                        </Col>
                                    </Row>
                                    </Dropdown.Menu>
    */}

{/*
        <Navbar expand="lg" className={styles.navbar}>
                    <Container className={styles.container}>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                    <Nav.Link href="#home">
                                        <div className={styles.functionitem}> 
                                        <img src={menunavigation} className={styles.menuicon} alt="Menu Icon" />
                                        <div>Danh mục sản phẩm</div>
                                        </div>
                                    </Nav.Link>
                                
                                <Nav.Link href="#home">
                                    <div className={styles.functionitem}>
                                        <img src={menucash} className={styles.menuicon} />
                                        <div>Hướng dẫn thanh toán</div>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#home">
                                    <div className={styles.functionitem}>
                                        <img src={menuwarranty} className={styles.menuicon} />
                                        <div>Chính sách bảo hành</div>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#home">
                                    <div className={styles.functionitem}>
                                        <img src={menusaving} className={styles.menuicon} />
                                        <div>Hướng dẫn trả góp</div>
                                    </div>
                                </Nav.Link>
                                <Nav.Link href="#home">
                                    <div className={styles.functionitem}>
                                        <img src={menunews} className={styles.menuicon} />
                                        <div>Tin tức công nghệ</div>
                                    </div>
                                </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>*/}