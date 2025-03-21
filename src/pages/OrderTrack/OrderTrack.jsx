import React from 'react';
import styles from './OrderTrack.module.css';
import orderstatus from '../../assets/icons/orderdone.svg'
export default function OrderTrack() {
    return (
        <div className={styles.OrderTrackContainer}>
            <div className={styles.HeaderContainer}>
                <div className={styles.ProductInfo}>
                    <p className={styles.OrderID}>#YUSAH123456</p>
                    <p className={styles.ContentText}>Đặt hàng: 10:10 - Ngày 00/00/2025</p>
                    <p className={styles.ContentText}>Dự kiến giao: 00/00/2025</p>
                </div>
                <p className={styles.Price}>25,000,000đ</p>
            </div>
            <p className={styles.HeaderText}>Trạng thái đơn hàng</p>
            <div className={styles.status}>
                <img src={orderstatus} />
                <div className={styles.ordercontent}>Đơn hàng đã được đặt</div>
            </div>
        </div>
    );
}
