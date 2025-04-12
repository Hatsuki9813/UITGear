import React from "react";
import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaArrowRight, FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import { useAuthStore } from "../../store/useAuthStore";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router';

export default function Login() {
  const navigate = useNavigate();

  const {
    loginData,
    registerData,
    errors,
    isAgreed,
    handleChange,
    handleLogin,
    handleRegister,
    setIsAgreed,
    handleGoogleLogin,
  } = useAuthStore();

  return (
    <div className={styles.FormContainer}>
      <Tabs defaultActiveKey="dangnhap" justify>
        {/* Đăng nhập */}
        <Tab eventKey="dangnhap" title="Đăng Nhập">
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Nhập email"
              value={loginData.email}
              onChange={(e) => handleChange(e, "login")}
            />
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              value={loginData.password}
              onChange={(e) => handleChange(e, "login")}
            />
          </Form.Group>
          <Link to="/forgotpassword" style={{ textDecoration: 'none' }}><div className={styles.forgotpass}>Quên mật khẩu?</div></Link>
          <Button
            className={styles.SubmitButton}
            onClick={() => handleLogin(navigate)}
          >
            Đăng nhập <FaArrowRight />
          </Button>

          <div className={styles.divider}>hoặc</div>
          <Button className={styles.LoginMethod}>
            <FaPhone className={styles.methodicon} /> Đăng nhập với số điện
            thoại
          </Button>
          <Button className={styles.LoginMethod}>
            <FaFacebook className={styles.methodicon} /> Đăng nhập với Facebook
          </Button>
          <Button className={styles.LoginMethod} onClick={handleGoogleLogin}>
            <FaGoogle className={styles.methodicon} /> Đăng nhập với Google
          </Button>
        </Tab>

        {/* Đăng ký */}
        <Tab eventKey="dangki" title="Đăng kí">
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={registerData.email}
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.email && (
              <small className={styles.error}>{errors.email}</small>
            )}
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={registerData.phone}
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.phone && (
              <small className={styles.error}>{errors.phone}</small>
            )}
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={registerData.name}
              onChange={(e) => handleChange(e, "register")}
            />
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="password"
              value={registerData.password}
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.password && (
              <small className={styles.error}>{errors.password}</small>
            )}
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              value={registerData.confirmPassword}
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.confirmPassword && (
              <small className={styles.error}>{errors.confirmPassword}</small>
            )}
          </Form.Group>
          <Form.Check
            type="radio"
            label="Bạn có đồng ý với Điều khoản và Chính sách bảo mật của UITGear không?"
            checked={isAgreed}
            onChange={setIsAgreed}
          />
          <Button
            className={styles.SubmitButton}
            onClick={handleRegister}
            disabled={!isAgreed}
          >
            Đăng kí <FaArrowRight />
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}
