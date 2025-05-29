import React from "react";
import styles from "./LaptopMenu.module.css";
import { Link } from "react-router-dom";
export default function GamingMenu() {
    return (
        <div style={{ left: "calc(100%/7)" }} className={styles.megamenu}>
            <div className={styles.megamenuColumn}>
                <h4>Asus</h4>
                <ul>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Asus%20TUF"
                            className={styles.linkStyle}>
                            Asus TUF
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Asus%20ROG"
                            className={styles.linkStyle}>
                            Asus ROG
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>Lenovo</h4>
                <ul>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Lenovo%20LOQ"
                            className={styles.linkStyle}>
                            Lenovo LOQ
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Lenovo%20Legion"
                            className={styles.linkStyle}>
                            Lenovo Legion
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>MSI</h4>
                <ul>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=MSI%20GF"
                            className={styles.linkStyle}>
                            MSI GF
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=MSI%20Cyborg"
                            className={styles.linkStyle}>
                            MSI Cyborg
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=MSI%20Steath"
                            className={styles.linkStyle}>
                            MSI Steath
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4>Acer</h4>
                <ul>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Acer%20Nitro%20V"
                            className={styles.linkStyle}>
                            Acer Nitro V
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Acer%20Nitro%20Tiger"
                            className={styles.linkStyle}>
                            Acer Nitro Tiger
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/products?category=Laptop%20gaming&product_line=Acer%20Helios"
                            className={styles.linkStyle}>
                            Acer Helios
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
