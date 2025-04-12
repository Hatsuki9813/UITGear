import React, { useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/icons/croppedlogonobgr.png";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import { CiUser } from "react-icons/ci";
import menunavigation from "../../assets/icons/menunavigation.svg";
import menucash from "../../assets/icons/menucash.svg";
import menusaving from "../../assets/icons/menusaving.svg";
import menunews from "../../assets/icons/menunews.svg";
import menuwarranty from "../../assets/icons/menuwarranty.svg";
import laptop from "../../assets/icons/laptop.png";
import console from "../../assets/icons/console.png";
import accessory from "../../assets/icons/accessory.png";
import service from "../../assets/icons/services.png";
import news from "../../assets/icons/news.png";
import windowicon from "../../assets/icons/windows.png";
import saleicon from "../../assets/icons/sales.png";
import LaptopMenu from "../Menu/LaptopMenu";
import GamingMenu from "../Menu/GamingMenu";
import AccessoryMenu from "../Menu/AccessoryMenu";
import ServiceMenu from "../Menu/ServiceMenu";
import SoftwareMenu from "../Menu/SoftwareMenu";
import { Link } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";

import Select, { components } from 'react-select';
import AsyncSelect from 'react-select/async';

const options = [
    { value: 'Lenovo LOQ 15IAX9', label: 'Lenovo LOQ 15IAX9', findimg: "https://product.hstatic.net/200000722513/product/pic_3_8cb2b6a7156b43128c86ffeee5196263_grande.png" },
    { value: 'Acer Nitro V', label: 'Acer Nitro V', findimg: "https://product.hstatic.net/200000722513/product/pic_3_8cb2b6a7156b43128c86ffeee5196263_grande.png" },
    { value: 'Asus TUF', label: 'Asus TUF', findimg: "https://product.hstatic.net/200000722513/product/pic_3_8cb2b6a7156b43128c86ffeee5196263_grande.png" }
]
const loadOptions = (inputValue, callback) => {
    if (!inputValue) return callback([]);

    fetch(`http://localhost:5000/api/laptops?search=${inputValue}`)
        .then((res) => res.json())
        .then((data) => {
            const options = data.map((item) => ({
                value: item._id,
                label: item.name,
                findimg: item.image,
            }));
            callback(options);
        })
        .catch((err) => {
            console.error(err);
            callback([]);
        });
};

const customFormatOptionLabel = ({ label, findimg }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {findimg && <img src={findimg} alt="" style={{ width: 40, height: 40 }} />}
        <span>{label}</span>
    </div>
);

const SingleValue = (props) => (
    <components.SingleValue {...props}>
        {props.data.label}
    </components.SingleValue>
);


export default function Header() {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openChildMenu, setopenChildMenu] = useState(null);
  const [cartCount, setCartCount] = useState(0);

  //Check auth
  const token = localStorage.getItem("token");
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };
  const toggleChildmenu = (Childmenu) => {
    setopenChildMenu(openChildMenu === Childmenu ? null : Childmenu);
  };
  return (
    <div className={styles.AllHeader}>
      <div className={styles.HeaderContainer}>
        <Link to="/">
          <img src={logo} className={styles.logoimg} alt="logo" />
        </Link>

        <AsyncSelect
                    cacheOptions
                    loadOptions={loadOptions}
                    defaultOptions={false}
                    formatOptionLabel={customFormatOptionLabel}
                    components={{ SingleValue }}
                    placeholder="Tìm kiếm..."
                    styles={{
                        control: (base) => ({
                            ...base,
                            maxWidth: '500px',
                            width: '500px',
                            height: '45px',
                            borderRadius: '25px',
                        }),
                        menu: (base) => ({
                            ...base,
                            maxHeight: '200px',
                            overflowY: 'auto',
                        }),
                    }}
                />
        {token ? (
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <div
              className={styles.avatarcontainer}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <CiUser className={styles.avatar} />
            </div>
          </Link>
        ) : (
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div
              className={styles.avatarcontainer}
              onClick={() => {
                console.log("clicked");
              }}
            >
              <CiUser className={styles.avatar} />
            </div>
          </Link>
        )}
        <Link to="/cart" style={{ textDecoration: "none" }}>
          <Button className={styles.cartButton}>
            <FaShoppingCart />
            {cartCount >= 0 && (
              <span className={styles.badge}>{cartCount}</span>
            )}
            <span>Giỏ hàng</span>
          </Button>
        </Link>
      </div>
      <div className={styles.functioncontainer}>
        <ul>
          <li
            onMouseEnter={() => toggleSubmenu("SubMenu")}
            onMouseLeave={() => toggleSubmenu(null)}
          >
            <img
              src={menunavigation}
              className={styles.menuicon}
              alt="Menu Icon"
            />
            <span>Danh mục sản phẩm</span>
            {openSubmenu === "SubMenu" && (
              <div className={styles.submenuContainer}>
                <ul className={styles.submenu}>
                  <li
                    onMouseEnter={() => toggleChildmenu("LaptopChildMenu")}
                    onMouseLeave={() => toggleChildmenu(null)}
                  >
                    <Link to="/products" style={{ textDecoration: "none" }}>
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
                  </li>

                  <li
                    onMouseEnter={() => toggleChildmenu("gamingmenu")}
                    onMouseLeave={() => toggleChildmenu(null)}
                  >
                    <Link to="/products" style={{ textDecoration: "none" }}>
                      <div className={styles.menuitem}>
                        <img
                          src={console}
                          className={styles.menuicon}
                          alt="Menu Icon"
                        />
                        <span style={{ color: "white" }}>Laptop Gaming</span>
                      </div>
                    </Link>
                    {openChildMenu === "gamingmenu" && <GamingMenu />}
                  </li>
                  <li
                    onMouseEnter={() => toggleChildmenu("accessorymenu")}
                    onMouseLeave={() => toggleChildmenu(null)}
                  >
                    <Link to="/products" style={{ textDecoration: "none" }}>
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
                  </li>
                  <li
                    onMouseEnter={() => toggleChildmenu("servicemenu")}
                    onMouseLeave={() => toggleChildmenu(null)}
                  >
                    <Link to="/products" style={{ textDecoration: "none" }}>
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
                  </li>
                  <li
                    onMouseEnter={() => toggleChildmenu("softmenu")}
                    onMouseLeave={() => toggleChildmenu(null)}
                  >
                    <div className={styles.menuitem}>
                      <img
                        src={windowicon}
                        className={styles.menuicon}
                        alt="Menu Icon"
                      />
                      <span style={{ color: "white" }}>Phần mềm</span>
                    </div>
                    {openChildMenu === "softmenu" && <SoftwareMenu />}
                  </li>
                  <li>
                    <div className={styles.menuitem}>
                      <img
                        src={news}
                        className={styles.menuicon}
                        alt="Menu Icon"
                      />
                      <span style={{ color: "white" }}>Tin tức</span>
                    </div>
                  </li>
                  <li>
                    <div className={styles.menuitem}>
                      <img
                        src={saleicon}
                        className={styles.menuicon}
                        alt="Menu Icon"
                      />
                      <span style={{ color: "white" }}>Khuyến mãi</span>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <Link to="/question" style={{ textDecoration: "none" }}>
            <li>
              <img src={menucash} className={styles.menuicon} alt="Menu Icon" />
              <span>Hướng dẫn thanh toán</span>
            </li>
          </Link>
          <Link to="/question" style={{ textDecoration: "none" }}>
            <li>
              <img
                src={menuwarranty}
                className={styles.menuicon}
                alt="Menu Icon"
              />
              <span>Chính sách bảo hành</span>
            </li>
          </Link>
          <Link to="/question" style={{ textDecoration: "none" }}>
            <li>
              <img
                src={menusaving}
                className={styles.menuicon}
                alt="Menu Icon"
              />
              <span>Hướng dẫn trả góp</span>
            </li>
          </Link>
          <Link to="/question" style={{ textDecoration: "none" }}>
            <li>
              <img src={menunews} className={styles.menuicon} alt="Menu Icon" />
              <span>Tin tức công nghệ</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
