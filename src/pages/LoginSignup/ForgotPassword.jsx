import React, { useRef, useState } from "react"
import styles from './ForgotPassword.module.css'
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router';
export default function ForgotPassword() {
  return (
    <div className={styles.FormContainer}>
        <div className={styles.HeaderText}>Vui lòng nhập email đăng kí</div>
        <div className={styles.SubHeaderText}>Mã OTP sẽ được gửi đến email này</div>
        <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Nhập email" />
        </Form.Group>

        <Link to="/otp"style={{ textDecoration: 'none' }}><Button className={styles.SubmitButton}>
        Gửi mã
      </Button> </Link>
      <Nav className={styles.links} ><Nav.Link>Gửi lại mã</Nav.Link></Nav>
        <div className={styles.divider}></div>
        <div className={styles.SubHeaderText}>Bạn đã có tài khoản? <a href="/authenticate"> Đăng nhập tại đây</a></div>

    </div>
  )
}
