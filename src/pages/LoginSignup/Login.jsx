import React, { useState } from "react";
import styles from "./Login.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { FaArrowRight, FaFacebook, FaGoogle, FaPhone } from "react-icons/fa";
import axios from "axios";
import { Link } from 'react-router';
export default function Login() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [registerData, setRegisterData] = useState({
    email: "",
    phone: "",
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [isAgreed, setIsAgreed] = useState(false);

  const handleChange = (e, type) => {
    if (type === "login") {
      const { name, value } = e.target;
      setLoginData((prev) => ({ ...prev, [name]: value }));
    } else {
      setRegisterData({ ...registerData, [e.target.name]: e.target.value });
    }
  };

  const validateRegister = () => {
    let newErrors = {};
    if (!registerData.email.includes("@")) {
      newErrors.email = "Email không hợp lệ!";
    }
    if (!/^\d{10,11}$/.test(registerData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ!";
    }
    if (registerData.password.length < 6) {
      newErrors.password = "Mật khẩu phải có ít nhất 6 ký tự!";
    }
    if (registerData.password !== registerData.confirmPassword) {
      newErrors.confirmPassword = "Mật khẩu xác nhận không khớp!";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLogin = async () => {
    if (!loginData.email || !loginData.password) {
      alert("Vui lòng nhập đầy đủ email và mật khẩu!");
      return;
    }

    try {
      console.log("Sending login request:", loginData);
      const res = await axios.post("http://localhost:3000/api/auth/login", loginData);
      localStorage.setItem("token", res.data.token);
      alert("Đăng nhập thành công!");
    } catch (error) {
      console.error("Login error:", error.response?.data);
      alert(error.response?.data?.message || "Lỗi đăng nhập!");
    }
  };

  const handleRegister = async () => {
    if (!validateRegister()) return;
    console.log("Sending request to:", "http://localhost:3000/api/auth/register");

    try {
      const res = await axios.post("http://localhost:3000/api/auth/register", registerData);
      alert(res.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Lỗi đăng ký!");
    }
  };

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
              onChange={(e) => handleChange(e, "login")}
            />
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => handleChange(e, "login")}
            />
          </Form.Group>
          <Link to="/forgotpassword" style={{ textDecoration: 'none' }}><div className={styles.forgotpass}>Quên mật khẩu?</div></Link>
          <Button className={styles.SubmitButton} onClick={handleLogin}>
            Đăng nhập <FaArrowRight />
          </Button>

          <div className={styles.divider}>hoặc</div>
          <Button className={styles.LoginMethod}>
            <FaPhone className={styles.methodicon} /> Đăng nhập với số điện thoại
          </Button>
          <Button className={styles.LoginMethod}>
            <FaFacebook className={styles.methodicon} /> Đăng nhập với Facebook
          </Button>
          <Button className={styles.LoginMethod}>
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
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.email && <small className={styles.error}>{errors.email}</small>}
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Số điện thoại</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.phone && <small className={styles.error}>{errors.phone}</small>}
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Họ tên</Form.Label>
            <Form.Control
              type="text"
              name="name"
              onChange={(e) => handleChange(e, "register")}
            />
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="password"
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.password && <small className={styles.error}>{errors.password}</small>}
          </Form.Group>
          <Form.Group className={styles.FormGroup}>
            <Form.Label>Xác nhận mật khẩu</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              onChange={(e) => handleChange(e, "register")}
            />
            {errors.confirmPassword && <small className={styles.error}>{errors.confirmPassword}</small>}
          </Form.Group>
          <Form.Check
            type="radio"
            label="Bạn có đồng ý với Điều khoản và Chính sách bảo mật của UITGear không?"
            onChange={() => setIsAgreed(!isAgreed)}
          />
          <Button className={styles.SubmitButton} onClick={handleRegister} disabled={!isAgreed}>
            Đăng kí <FaArrowRight />
          </Button>
        </Tab>
      </Tabs>
    </div>
  );
}
