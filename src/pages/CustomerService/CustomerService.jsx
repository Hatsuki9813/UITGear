import React, { useState } from "react";
import styles from "./CustomerService.module.css";
import {
    FaTruck,
    FaLock,
    FaCcMastercard,
    FaUser,
    FaReceipt,
    FaLayerGroup,
    FaShoppingCart,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
import UsuallyAskedButton from "../../components/CustomerService/UsuallyAskedButton";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";
import { LuDot } from "react-icons/lu";
import phonecall from "../../assets/icons/phonecall.svg";
import message from "../../assets/icons/message.svg";
import logo from "../../assets/react.svg";
export default function CustomerService() {
    return (
        <div className={styles.CustomerCustomerServiceContainer}>
            <div className={styles.HeaderText}>Bạn đang gặp khó khăn về?</div>
            <div className={styles.ButtonContainer}>
                <UsuallyAskedButton IconComponent={FaTruck} content="Giao hàng nhanh" />
                <UsuallyAskedButton IconComponent={FaLock} content="Lấy lại mật khẩu" />
                <UsuallyAskedButton
                    IconComponent={FaCcMastercard}
                    content="Phương thức thanh toán"
                />
                <UsuallyAskedButton IconComponent={FaUser} content="Tài khoản" />
                <UsuallyAskedButton IconComponent={FaReceipt} content="Hóa đơn" />
                <UsuallyAskedButton IconComponent={FaLayerGroup} content="So sánh" />

                <UsuallyAskedButton IconComponent={FaShoppingCart} content="Mua hàng" />
                <UsuallyAskedButton IconComponent={FaShop} content="Mặt hàng" />
            </div>
            <div className={styles.HeaderText}>Câu hỏi thường gặp</div>
            <div className={styles.Question}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-column">
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Làm cách nào để tôi có thể trả lại hàng?
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Chính sách bảo hành của cửa hàng như thế nào?
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Làm sao để yêu cầu hoàn tiền?
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="d-flex flex-column">
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Các đợt giảm giá trong năm của cửa hàng là gì?
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Thời hạn giao hàng là gì?
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Tự nâng cấp ram cho laptop có làm mất bảo hành không?
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="d-flex flex-column">
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Làm sao để đổi mật khẩu?
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Cách hủy đơn hàng?
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        • Cách cập nhật thông tin thanh toán?
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className={styles.HeaderText}>Liên hệ với chúng tôi</div>
            <div className={styles.CardContainer}>
                <div className={styles.supportCard}>
                    <img src={phonecall} alt="call image" className={styles.spLogo} />
                    <div className={styles.SpInfo}>
                        <div className={styles.SpName}>Hotline liên hệ (8:00 - 20:00)</div>
                        <Nav>
                            <Nav.Link
                                href="https://www.facebook.com/"
                                className={styles.contenttext}>
                                07999479950
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
                <div className={styles.supportCard}>
                    <img src={message} alt="call image" className={styles.spLogo} />
                    <div className={styles.SpInfo}>
                        <div className={styles.SpName}>Chat với nhân viên (8:00 - 20:00)</div>
                        <Nav>
                            <Nav.Link
                                href="https://www.facebook.com/"
                                className={styles.contenttext}>
                                UITGear Fanpage
                            </Nav.Link>
                        </Nav>
                    </div>
                </div>
            </div>
        </div>
    );
}
