import React from "react";
import styles from "./LaptopMenu.module.css";
import { Link } from "react-router-dom";

export default function ServiceMenu() {
    return (
        <div className={styles.megamenu}>
            <div className={styles.megamenuColumn}>
                <h4>Vệ sinh laptop</h4>
                <ul>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            Dịch vụ vệ sinh laptop 2 trong 1
                        </Link>
                    </li>
                </ul>
            </div>

            <div className={styles.megamenuColumn}>
                <h4>Cân màu màn hình</h4>
                <ul>
                    <li>
                        <Link to="/products/:category" className={styles.linkStyle}>
                            Cân màu màn hình bằng SpyderX
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
