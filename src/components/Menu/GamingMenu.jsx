import React from 'react'
import styles from './LaptopMenu.module.css'
import { Link } from 'react-router-dom';
export default function GamingMenu() {
  return (
     <div className={styles.megamenu}>
       <div className={styles.megamenuColumn}>
         <h4>Asus</h4>
         <ul>
           <li><Link to="/products" className={styles.linkStyle}>Asus TUF</Link></li>
           <li><Link to="/products" className={styles.linkStyle}>Asus ROG</Link></li>
         </ul>
       </div>
       <div className={styles.megamenuColumn}>
         <h4>Lenovo</h4>
         <ul>
           <li><Link to="/products" className={styles.linkStyle}>Lenovo LOQ</Link></li>
           <li><Link  to="/products" className={styles.linkStyle}>Lenovo Legion</Link></li>
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
         <h4>MSI</h4>
         <ul>
           <li><Link  to="/products" className={styles.linkStyle}>MSI GF</Link></li>
           <li><Link to="/products" className={styles.linkStyle}>MSI Cyborg</Link></li>
           <li><Link to="/products" className={styles.linkStyle}>MSI Steath</Link></li>
         </ul>
       </div>
       <div className={styles.megamenuColumn}>
         <h4>Acer</h4>
         <ul>
           <li><Link to="/products" className={styles.linkStyle}>Acer Nitro V</Link></li>
           <li><Link to="/products" className={styles.linkStyle} >Acer Nitro Tiger</Link></li>
           <li><Link to="/products" className={styles.linkStyle}>Acer Helios</Link></li>
         </ul>
       </div>
     </div>
  );


}
