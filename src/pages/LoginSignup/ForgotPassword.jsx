import React, { useState } from "react";
import styles from "./ForgotPassword.module.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom"; // Sử dụng useNavigate
import { useAuthStore } from "../../store/useAuthStore";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const { forgotPassword, resendOtp } = useAuthStore();
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Vui lòng nhập email.");
      return;
    }

    try {
      navigate("/otp", { state: { email } }); // Chuyển hướng đến trang xác thực OTP
      await forgotPassword(email); // Gọi hàm forgotPassword từ store
    } catch (error) {
      setError("Có lỗi xảy ra khi gửi mã!");
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      setError("Vui lòng nhập email trước khi gửi lại mã.");
      return;
    }
    try {
      await resendOtp(email); // Gọi hàm resendOtp từ store
      setError(""); // Xóa lỗi nếu có
    } catch (err) {
      setError("Có lỗi xảy ra khi gửi lại mã!");
    }
  };

  return (
    <div className={styles.FormContainer}>
      <div className={styles.HeaderText}>Vui lòng nhập email đăng kí</div>
      <div className={styles.SubHeaderText}>
        Mã OTP sẽ được gửi đến email này
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Nhập email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {error && <div className={styles.ErrorText}>{error}</div>}
        <Button type="submit" className={styles.SubmitButton}>
          Gửi mã
        </Button>
      </Form>
      <Nav onClick={handleResendOtp} className={styles.links}>
        <Nav.Link>Gửi lại mã</Nav.Link>
      </Nav>
      <div className={styles.divider}></div>
      <div className={styles.SubHeaderText}>
        Bạn đã có tài khoản? <Link to="/authenticate"> Đăng nhập tại đây</Link>
      </div>
    </div>
  );
}
