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
                        <Link
                            to="/products?category=Laptop&product_line=Asus%20Vivobook"
                            className={styles.linkStyle}>
                            Asus Vivobook
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=Asus%20Zenbook"
                            className={styles.linkStyle}>
                            Asus Zenbook
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=Business"
                            className={styles.linkStyle}>
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
                            to="/products?category=Laptop&product_line=Acer%20Aspire"
                            className={styles.linkStyle}>
                            Acer Aspire
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=Acer%20Swift"
                            className={styles.linkStyle}>
                            Acer Swift
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>Lenovo</h4>
                <ul>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=Lenovo%20Thinkpad"
                            className={styles.linkStyle}>
                            Lenovo Thinkpad
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=Lenovo%20product_ideapad"
                            className={styles.linkStyle}>
                            Lenovo IdeaPad
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=Lenovo%20Thinkbook"
                            className={styles.linkStyle}>
                            Lenovo Thinkbook
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>MSI</h4>
                <ul>
                    <li>
                        <Link
                            to="/products?category=Laptop&product_line=MSI%20Modern"
                            className={styles.linkStyle}>
                            MSI Modern
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
