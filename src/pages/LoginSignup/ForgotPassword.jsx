import React, { useRef, useState } from "react"
import styles from './ForgotPassword.module.css'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router';
export default function ForgotPassword() {
  const [otp, setOtp] = useState('');

  const isOtpValid = otp.trim().length >= 6;

  return (
    <div className={styles.FormContainer}>
      <div className={styles.HeaderText}>Quên mật khẩu</div>
      <div className={styles.SubHeaderText}>Hãy nhập email khôi phục và mã OTP được gửi để đổi mật khẩu</div>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Label>Nhập Email</Form.Label>
        <Form.Control type="email" placeholder="Nhập email" />
        <Form.Label>Nhập OTP</Form.Label>
        <Form.Control type="text" placeholder="Nhập OTP" value={otp} onChange={(e) => setOtp(e.target.value)} />
      </Form.Group>
    <Button className={styles.SubmitButton}>
        Gửi mã
      </Button> 
      <Nav className={styles.links} ><Nav.Link>Gửi lại mã</Nav.Link></Nav>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Label>Nhập mật khẩu mới</Form.Label>
        <Form.Control type="password" placeholder="Nhập mật khẩu mới" disabled={!isOtpValid} />
        <Form.Label>Nhập lại mật khẩu</Form.Label>
        <Form.Control type="password" placeholder="Nhập lại mật khẩu" disabled={!isOtpValid}/>
      </Form.Group>
      <Button className={styles.SubmitButton}>
        Xác nhận
      </Button>
      <div className={styles.divider}></div>
      <div className={styles.SubHeaderText}>Bạn đã có tài khoản? <a href="/authenticate"> Đăng nhập tại đây</a></div>
    </div>
  )
}
