import styles from "./LaptopMenu.module.css";
import { Link } from "react-router-dom";

export default function AccessoryMenu() {
    const encodedCategory = encodeURIComponent("Phụ kiện");
    const encodedMouseProductLine = encodeURIComponent("Chuột");
    const encodedKeyboardProductLine = encodeURIComponent("Bàn phím cơ");

    return (
        <div className={styles.megamenu}>
            <div className={styles.megamenuColumn}>
                <h4>Bàn phím</h4>
                <ul>
                    <li>
                        <Link
                            to={`/products?category=${encodedCategory}&product_line=${encodedKeyboardProductLine}&brand=Aula`}
                            className={styles.linkStyle}>
                            Aula
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/products?category=${encodedCategory}&product_line=${encodedKeyboardProductLine}&brand=Dareu`}
                            className={styles.linkStyle}>
                            Dareu
                        </Link>
                    </li>
                </ul>
            </div>
            <div className={styles.megamenuColumn}>
                <h4> Chuột</h4>
                <ul>
                    <li>
                        <Link
                            to={`/products?category=${encodedCategory}&product_line=${encodedMouseProductLine}&brand=Dareu`}
                            className={styles.linkStyle}>
                            Dareu
                        </Link>
                    </li>
                    <li>
                        <Link
                            to={`/products?category=${encodedCategory}&product_line=${encodedMouseProductLine}&brand=Logitech`}
                            className={styles.linkStyle}>
                            Logitech
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}
