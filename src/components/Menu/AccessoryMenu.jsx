import React from "react";
import styles from "./LaptopMenu.module.css";
import { Link } from "react-router-dom";

export default function AccessoryMenu() {
  return (
    <div className={styles.megamenu}>
      <div className={styles.megamenuColumn}>
        <h4>Bàn phím</h4>
        <ul>
          <li>
            {" "}
            <Link to="/products?brand=Aula" className={styles.linkStyle}>
              Aula
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/products?brand=Dareu" className={styles.linkStyle}>
              Dareu
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.megamenuColumn}>
        <h4> Chuột</h4>
        <ul>
          <li>
            {" "}
            <Link to="/products?brand=Dareu" className={styles.linkStyle}>
              Dareu
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/products?brand=Logitech" className={styles.linkStyle}>
              Logitech
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.megamenuColumn}>
        <h4>Giá</h4>
        <ul>
          <li>
            {" "}
            <Link to="/products" className={styles.linkStyle}>
              Dưới 1 triệu
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/products" className={styles.linkStyle}>
              Trên 1 triệu
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
