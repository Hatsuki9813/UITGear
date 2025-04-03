import React from 'react'
import styles from './LaptopMenu.module.css'
import { Link } from 'react-router-dom';

export default function AccessoryMenu() {
  return (
    <div className={styles.megamenu}>
      <div className={styles.megamenuColumn}>
        <h4>Bàn phím</h4>
        <ul>
          <li> <Link className={styles.linkStyle}>Aula</Link></li>
          <li> <Link className={styles.linkStyle}>Dareu</Link></li>
        </ul>
      </div>
      <div className={styles.megamenuColumn}>
        <h4> Chuột</h4>
        <ul>
          <li> <Link className={styles.linkStyle}>Dareu</Link></li>
          <li> <Link className={styles.linkStyle}>Logitech</Link></li>
        </ul>
      </div>
      <div className={styles.megamenuColumn}>
        <h4>Giá</h4>
        <ul>
          <li> <Link className={styles.linkStyle}>Dưới 1 triệu</Link></li>
          <li> <Link className={styles.linkStyle}>Trên 1 triệu</Link></li>
        </ul>
      </div>


    </div>
  );


}
