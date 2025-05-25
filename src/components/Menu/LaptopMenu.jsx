import React from "react";
import styles from "./LaptopMenu.module.css";
import { Link } from "react-router-dom";
export default function LaptopMenu() {
    return (
        <div className={styles.megamenu}>
            <div className={styles.megamenuColumn}>
                <h4>Asus</h4>
                <ul>
                    <li>
                        {" "}
                        <Link
                            to="/products/:category?product_line=Asus%20Vivobook"
                            className={styles.linkStyle}>
                            Asus Vivobook
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products/:category?product_line=Asus%20Zenbook"
                            className={styles.linkStyle}>
                            {" "}
                            Asus Zenbook
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products/:category?product_line=Business"
                            className={styles.linkStyle}>
                            {" "}
                            Business Laptop
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>Acer</h4>
                <ul>
                    <li>
                        <Link
                            to="/products/:category?product_line=Acer%20Aspire"
                            className={styles.linkStyle}>
                            {" "}
                            Acer Aspire
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products/:category?product_line=Acer%20Swift"
                            className={styles.linkStyle}>
                            {" "}
                            Acer Swift
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>Giá</h4>
                <ul>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            Dưới 15 triệu
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            15-30 triệu
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            Trên 30 triệu
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>Lenovo</h4>
                <ul>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            {" "}
                            Lenovo ThinkPad
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            {" "}
                            Lenovo IdeaPad
                        </Link>
                    </li>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            {" "}
                            Lenovo ThinkBook
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>MSI</h4>
                <ul>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            {" "}
                            MSI Modern
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
