import React, {useState} from 'react'
import styles from './Login.module.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { FaArrowRight, FaFacebook, FaGoogle , FaPhone  } from "react-icons/fa";

export default function Login() {

  return (
    <div className={styles.FormContainer}>
      <Tabs defaultActiveKey="dangnhap" justify  >
      <Tab eventKey="dangnhap" title="Đăng Nhập" className={styles.customTabs}>
      <div className={styles.Header}>
      </div>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Nhập email" />
      </Form.Group>
      <Form.Group className={styles.FormGroup} controlId="formBasicPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control type="password" placeholder="Nhập mật khẩu" />
      </Form.Group>
      <div className={styles.forgotpass}>Quên mật khẩu?</div>
      <Button className={styles.SubmitButton}>
        Đăng nhập
        <FaArrowRight className={styles.loginicon}/>
      </Button>
      <div className={styles.divider}>hoặc</div>
      <Button className={styles.LoginMethod}>
      <FaPhone className={styles.methodicon} />
      Đăng nhập với số điện thoại
      </Button>
      <Button className={styles.LoginMethod}>        
        <FaFacebook className={styles.methodicon}/>
      Đăng nhập với Facebook
      </Button>
      <Button
      className={styles.LoginMethod}>
      <FaGoogle className={styles.methodicon} />
        <span>Đăng nhập với Google</span>
      </Button>
      </Tab>
      <Tab eventKey="dangki" title="Đăng kí"  >
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"   />
      </Form.Group>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Label>Số điện thoại</Form.Label>
        <Form.Control type="email"  />
      </Form.Group>
      <Form.Group className={styles.FormGroup} controlId="formBasicEmail">
        <Form.Label>Họ tên</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className={styles.FormGroup} controlId="formBasicPassword">
        <Form.Label>Mật khẩu</Form.Label>
        <Form.Control type="password" />
      </Form.Group>
      <Form.Group className={styles.FormGroup} controlId="formBasicPassword">
        <Form.Label>Xác nhận mật khẩu </Form.Label>
        <Form.Control type="password"  />
      </Form.Group>
      <Form.Check // prettier-ignore
            type='radio'
            id={`default-radio`}
            label={`Bạn có đồng ý với Điều khoản và Chính sách bảo mật của UITGear không?`}
          />
      <Button className={styles.SubmitButton}>
        Đăng kí
        <FaArrowRight className={styles.loginicon}/>
      </Button>
     
      </Tab>
    </Tabs>
      
    </div>
  )
}
