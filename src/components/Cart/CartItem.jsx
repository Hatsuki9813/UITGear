import React, { useState } from 'react'
import reactlogo from '../../assets/react.svg'
import styles from './CartItem.module.css'
import Form from 'react-bootstrap/Form';
import { TiDeleteOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

export default function CartItem() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };


  return (
    <Container className={styles.CartItemContainer}>
      <Row className={styles.ProductInfo}>
        <Col xs={12} md={5} className={styles.ProductDetails}>
          <img src={reactlogo} alt="product" className={styles.ProductImage} />
          <p className={styles.ProductName}>Laptop Gaming Lenovo LOQ 15IAX9</p>
        </Col>
        <Col xs={6} md={3} className={styles.PriceWrapper}>
          <p className={styles.Price}>15.000.000đ</p>
        </Col>
        <Col xs={6} md={4} className={styles.QuantityWrapper}>
          <div className={styles.IncreaseDecreaseContainer}>
            <button onClick={decrease} disabled={count === 1} className={styles.IncreaseDecrease}>-</button>
            <span>{count}</span>
            <button onClick={increase} className={styles.IncreaseDecrease}>+</button>
          </div>
          <TiDeleteOutline className={styles.deleteicon}/>

        </Col>
        
      </Row>
      <Row className={styles.CouponContainer}>
        <div className={styles.CouponHeader}>Chọn gói giảm giá</div>
        <Form.Check // prettier-ignore
          type='radio'
          id={`default-radio`}
          label={`Giảm 10% trực tiếp vào giá máy`}
        />
        <Form.Check // prettier-ignore
          type='radio'
          id={`default-radio`}
          label={`Tặng thêm ram 16gb`}
        />
    </Row>
 </Container >
  )
}
