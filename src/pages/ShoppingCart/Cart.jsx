import React, { useState } from 'react';
import styles from './Cart.module.css';
import CartItem from '../../components/Cart/CartItem';
import { FaArrowRight } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router'
import { Container, Row, Col } from 'react-bootstrap';
export default function Cart() {
    return (
        <Container fluid className={styles.CartContainer}>
            <Row>
                <Col xs={12} md={8} className={styles.itemList}>
                    <Row className={styles.ListHeader}>
                        <Col xs={12} md={5}>Tên sản phẩm</Col>
                        <Col xs={6} md={2}>Giá thành</Col>
                        <Col xs={6} md={3}>Số lượng</Col>
                    </Row>
                    <CartItem />
                    <CartItem />
                    <CartItem />
                </Col>
                <Col xs={12} md={4} className={styles.CheckoutContainer}>
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
                    <Link to="/checkout" style={{ textDecoration: 'none' }}>
                        <Button className={styles.SubmitButton} >
                            Xác nhận thanh toán
                            <FaArrowRight className={styles.loginicon} />
                        </Button>
                    </Link>
                </Col>
            </Row>
        </Container>
    )
}
