import React, { useState } from 'react'
import styles from './CheckoutInfo.module.css'
import Form from 'react-bootstrap/Form';
import cash from '../../assets/icons/cash.svg';
import momo from '../../assets/icons/momo.svg';
import vnpay from '../../assets/icons/vnpay.svg';
import { FaArrowRight } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import OrderCart from '../../components/Cart/OrderCart';

export default function CheckoutInfo() {
    return (
        <div className={styles.CheckoutContainer}>
            <div className={styles.CheckoutInfo}>
                <div className={styles.CheckoutHeader}>Thông tin thanh toán</div>

                <Form>
                    <Form.Group className={styles.Input}>
                        <div className="row">
                            <div className="col-sm">
                                <Form.Label>Họ tên</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="col-sm">
                                <Form.Label>Tên công ty</Form.Label>
                                <Form.Control type="text" />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className={styles.Input}>
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control type="text" />
                    </Form.Group>
                    <Form.Group className={styles.Input}>
                        <div className="row">
                            <div className="col-sm">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" />
                            </div>
                            <div className="col-sm">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control type="text" />
                            </div>
                        </div>
                    </Form.Group>
                    <Form.Group className={styles.Input}>
                        <div className="row">
                            <div className="col-sm">
                                <Form.Label>Tỉnh</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="col-sm">
                                <Form.Label>Quận/Huyện</Form.Label>
                                <Form.Control type="text" />
                            </div>
                            <div className="col-sm">
                                <Form.Label>Xã</Form.Label>
                                <Form.Control type="text" />
                            </div>
                        </div>
                    </Form.Group>
                </Form>
                <div className={styles.CheckoutHeader}>Phương thức thanh toán</div>

                <div className={styles.PaymentMethods}>
                    <div className={styles.Method}>
                    <img src={cash} alt="cash" />
                    <p>Tiền mặt</p>
                        <Form.Check
                            type='radio'
                            id={`default-radio`}
                        />
                    </div>
                    <div className={styles.Method}>
                    <img src={momo} alt="cash" />
                    <p>Ví điện tử Momo</p>
                        <Form.Check
                            type='radio'
                            id={`default-radio`}
                        />
                    </div>
                    <div className={styles.Method}>
                    <img src={vnpay} alt="cash" />
                    <p>Ví điện tử VNpay</p>
                        <Form.Check
                            type='radio'
                            id={`default-radio`}
                        />
                    </div>
            
                </div>
                <div className={styles.CheckoutHeader}>Ghi chú</div>
                <div className={styles.Notes}>
                    <Form.Group className={styles.Input}>
                        <Form.Control as="textarea" rows={4} />
                    </Form.Group>
                </div>
            </div>
            <div className={styles.Order}>

            <div className={styles.OrderHeader}>Sản phẩm đã đặt</div>
            <OrderCart />
                <div className={styles.divider}></div>
                <div className={styles.OrderContent}>
                    <span>Tổng cộng</span>
                    <span>15.000.000đ</span>
                </div>
                <div className={styles.OrderContent}>
                    <span>Phí vận chuyển</span>
                    <span>15.000.000đ</span>
                </div>
                <div className={styles.OrderContent}>
                    <span>Khuyến mãi</span>
                    <span>-15.000.000đ</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.OrderContent}>
                    <span>Cần thanh toán</span>
                    <span>15.000.000đ</span>
                </div>
                <Button className={styles.SubmitButton}>
                        ĐẶT HÀNG
                    <FaArrowRight className={styles.loginicon} />
                </Button>
            </div>
        </div>
    )
}
