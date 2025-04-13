import React, { useRef, useState } from "react";
import styles from "./ForgotPassword.module.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router";
export default function ChangePassword() {
  const { email, otp } = useAuthStore();

  const handleResetPassword = async () => {
    await resetPassword(email, otpString, newPassword); // Gọi hàm resetPassword từ store
    navigate("/login"); // Chuyển hướng đến trang đăng nhập sau khi xác thực thành công
  };
  return (
    <div className={styles.FormContainer}>
      <div className={styles.HeaderText}>Đổi mật khẩu</div>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Control
          type="password"
          placeholder="Nhập mật khẩu mới"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </Form.Group>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Control type="password" placeholder="Nhập lại mật khẩu" />
      </Form.Group>
      <Button className={styles.SubmitButton} onClick={handleResetPassword}>
        Đổi mật khẩu
      </Button>
    </div>
  );
}
