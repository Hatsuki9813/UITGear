import React, { useState } from 'react';
import styles from './Cart.module.css';
import CartItem from '../../components/Cart/CartItem';
import { FaArrowRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

export default function Cart() {
    return (
        <div className={styles.CartContainer}>

            <div className={styles.ItemList}>
                <div className={styles.ListHeader}>
                    <span>Tên sản phẩm</span>
                    <span>Giá thành</span>
                    <span>Số lượng</span>
                </div>
                <CartItem />
                <CartItem />
                <CartItem />
            </div>
            <div className={styles.CheckoutContainer}>
                <div className={styles.CheckoutHeader}>Thành tiền</div>
                <div className={styles.divider}></div>
                <div className={styles.CheckoutContent}>
                    <span>Tổng cộng</span>
                    <span>15.000.000đ</span>
                </div>
                <div className={styles.CheckoutContent}>
                    <span>Phí vận chuyển</span>
                    <span>15.000.000đ</span>
                </div>
                <div className={styles.CheckoutContent}>
                    <span>Khuyến mãi</span>
                    <span>-15.000.000đ</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.CheckoutContent}>
                    <span>Cần thanh toán</span>
                    <span>15.000.000đ</span>
                </div>
                <Button className={styles.SubmitButton}>
                    Xác nhận thanh toán
                    <FaArrowRight className={styles.loginicon} />
                </Button>
            </div>
        </div>
    )
}
