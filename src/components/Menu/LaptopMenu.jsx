import React from 'react'
import styles from './LaptopMenu.module.css'
import { Link } from 'react-router-dom';
export default function LaptopMenu() {
  return ( 
  <div className={styles.megamenu}>
    <div className={styles.megamenuColumn}>
      <h4>Asus</h4>
      <ul>
        <li> <Link to="/products" className={styles.linkStyle}>Asus Vivobook</Link></li>
        <li><Link to="/products" className={styles.linkStyle}> Asus Zenbook</Link></li>
        <li><Link  to="/products" className={styles.linkStyle} > Business Laptop</Link></li>
      </ul>
    </div>
    <div className={styles.megamenuColumn}>
      <h4>Acer</h4>
      <ul>
        <li><Link  to="/products" className={styles.linkStyle}> Acer Aspire</Link></li>
        <li><Link to="/products" className={styles.linkStyle}> Acer Swift</Link></li>
      </ul>
    </div>
    <div className={styles.megamenuColumn}>
      <h4>Giá</h4>
      <ul>
        <li><Link to="/products" className={styles.linkStyle}>Dưới 15 triệu</Link></li>
        <li><Link to="/products" className={styles.linkStyle}>15-30 triệu</Link></li>
        <li><Link to="/products" className={styles.linkStyle}>Trên 30 triệu</Link></li>
      </ul>
    </div>
    <div className={styles.megamenuColumn}>
      <h4>Lenovo</h4>
      <ul>
        <li><Link to="/products" className={styles.linkStyle}> Lenovo ThinkPad</Link></li>
        <li><Link to="/products" className={styles.linkStyle}> Lenovo IdeaPad</Link></li>
        <li><Link to="/products" className={styles.linkStyle}> Lenovo ThinkBook</Link></li>
      </ul>
    </div>

  </div>
  )
};
