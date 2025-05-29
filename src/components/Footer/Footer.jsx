import { Link } from "react-router-dom";
import styles from "./Footer.module.css"; // Import CSS module
import logo from "../../assets/icons/croppedlogonobgr.png";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
const Footer = () => {
    return (
        <div className={styles.backgroundContainer}>
            <footer className={styles.footercontainer}>
                <div className={styles.infoContainer}>
                    <div className={styles.info}>
                        <img src={logo} className={styles.logoimg} />
                        <span className={styles.stacontenttext}>
                            UITGEAR - Chuyên cung cấp Laptop & phụ kiện cao cấp chính hãng.
                        </span>
                        <span className={styles.titletext}>Hotline Hỗ trợ</span>
                        <span className={styles.stacontenttext}>0799479950</span>
                    </div>
                    <div className={styles.grid}>
                        <div>
                            <span className={styles.titletext}>Hướng dẫn</span>
                            <Link to="/">
                                <span className={styles.contenttext}>Hướng dẫn thanh toán</span>
                            </Link>
                            <Link to="/">
                                <span className={styles.contenttext}>Hướng dẫn trả góp</span>
                            </Link>
                            <Link to="/">
                                <span className={styles.contenttext}>Tra cứu bảo hành</span>
                            </Link>
                            <Link to="/">
                                <span className={styles.contenttext}>Chính sách bảo hành</span>
                            </Link>
                            <Link to="/">
                                <span className={styles.contenttext}>Tin công nghệ</span>
                            </Link>
                            <Link to="/">
                                <span className={styles.contenttext}>Về chúng tôi</span>
                            </Link>
                        </div>
                        <div>
                            <span className={styles.titletext}>Danh mục được yêu thích</span>
                            <Link to="/" className={styles.contenttext}>
                                Laptop
                            </Link>
                            <Link to="/" className={styles.contenttext}>
                                Laptop Gaming
                            </Link>
                            <Link to="/" className={styles.contenttext}>
                                Bàn phím
                            </Link>
                            <Link to="/" className={styles.contenttext}>
                                Chuột
                            </Link>
                        </div>
                        <div>
                            <span className={styles.titletext}>Liên hệ với chúng tôi</span>
                            <div className={styles.iconcontainer}>
                                <FaFacebook className={styles.footericon} />
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    className={styles.contenttext}>
                                    UITGear Fanpage
                                </a>
                            </div>
                            <div className={styles.iconcontainer}>
                                <FaInstagram className={styles.footericon} />
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    className={styles.contenttext}>
                                    UITGear Instagram
                                </a>
                            </div>
                            <div className={styles.iconcontainer}>
                                <FaYoutube className={styles.footericon} />
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    className={styles.contenttext}>
                                    UITGear Youtube
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <span className={styles.copyrightText}>
                    © Copyright 2025, All Rights Reserved by UITGear Company
                </span>
            </footer>
        </div>
    );
};

export default Footer;
