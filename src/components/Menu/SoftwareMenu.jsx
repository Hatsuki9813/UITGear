import React from 'react'
import styles from './LaptopMenu.module.css'
import { Link } from 'react-router-dom';

export default function SoftwareMenu() {
    return (
          <div className={styles.megamenu}>
            <div className={styles.megamenuColumn}>
              <h4>Microsoft Window</h4>
              <ul>
                <li><Link className={styles.linkStyle}>Window 10</Link></li>
                <li><Link className={styles.linkStyle}>Window 11</Link></li>
              </ul>
            </div>
    
            <div className={styles.megamenuColumn}>
              <h4>Microsoft Office</h4>
              <ul>
                <li><Link className={styles.linkStyle}>Office 365</Link></li>
              </ul>
            </div>
          </div>
      );
    
  
}
