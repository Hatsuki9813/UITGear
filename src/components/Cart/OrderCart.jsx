import React, { useState } from 'react'
import styles from './OrderCart.module.css'
import logo from '../../assets/react.svg'
export default function OrderCart() {
    return (
        <div className={styles.OrderCart}>
            <img src={logo} alt="product" className={styles.ProductImage} />

            <div className={styles.ProductInfo}>
                <p className={styles.ProductName}>Laptop Gaming Lenovo LOQ 15IAX9 83GS000RVN</p>
                <p className={styles.QuantityPrice}>2 x 15,000,000đ</p>
            </div>
        </div>
    )
}
