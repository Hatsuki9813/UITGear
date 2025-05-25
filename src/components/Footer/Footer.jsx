import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router";
import Image from "react-bootstrap/Image";
import styles from "./Footer.module.css"; // Import CSS module
import logo from "../../assets/icons/croppedlogonobgr.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={styles.backgroundContainer}>
            <footer className={styles.footercontainer}>
                <Container fluid>
                    <Row>
                        <Col className="d-flex flex-column">
                            <img src={logo} className={styles.logoimg} />
                            <p className={styles.stacontenttext}>
                                UITGEAR - Chuyên cung cấp Laptop & phụ kiện cao cấp chính hãng.
                            </p>
                            <p className={styles.titletext}>Hotline Hỗ trợ</p>
                            <p className={styles.stacontenttext}>0799479950</p>
                        </Col>
                        <Col className="d-flex flex-column">
                            <p className={styles.titletext}>Hướng dẫn</p>
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        Hướng dẫn thanh toán
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        Hướng dẫn trả góp
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        Tra cứu bảo hành
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        Chính sách bảo hành
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        Tin công nghệ
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>Về chúng tôi</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="d-flex flex-column">
                            <p className={styles.titletext}>Danh mục được yêu thích</p>
                            <Nav className="flex-column">
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>Laptop</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>
                                        Laptap Gaming
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>Bàn phím</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link className={styles.contenttext}>Tai nghe</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col className="d-flex flex-column">
                            <p className={styles.titletext}>Liên hệ với chung tôi</p>
                            <div className={styles.iconcontainer}>
                                <FaFacebook className={styles.footericon} />
                                <Nav>
                                    <Nav.Link
                                        href="https://www.facebook.com/"
                                        className={styles.contenttext}>
                                        UITGear Fanpage
                                    </Nav.Link>
                                </Nav>
                            </div>
                            <div className={styles.iconcontainer}>
                                <FaInstagram className={styles.footericon} />
                                <Nav>
                                    <Nav.Link
                                        href="https://www.youtube.com/"
                                        className={styles.contenttext}>
                                        UITGear Instagram
                                    </Nav.Link>
                                </Nav>
                            </div>
                            <div className={styles.iconcontainer}>
                                <FaYoutube className={styles.footericon} />
                                <Nav>
                                    <Nav.Link
                                        href="https://www.instagram.com/"
                                        className={styles.contenttext}>
                                        UITGear Youtube
                                    </Nav.Link>
                                </Nav>
                            </div>
                        </Col>
                        <p className="text-sm text-center text-white mt-3">
                            © Copyright 2025, All Rights Reserved by UITGear company
                        </p>
                    </Row>
                </Container>
            </footer>
        </div>
    );
};

export default Footer;
