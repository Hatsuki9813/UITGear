import React from "react";
import styles from "./CartItem.module.css";
import Form from "react-bootstrap/Form";
import { TiDeleteOutline } from "react-icons/ti";
import { Container, Row, Col } from "react-bootstrap";

export default function CartItem({ product, quantity, onDiscountSelect }) {
  if (!product || !product.img_obj) {
    return <div>Loading...</div>; // Hoặc có thể trả về một thông báo "Đang tải..."
  }
  const handleDiscountChange = (e) => {
    const selectedValue = e.target.value;
    onDiscountSelect(product.product_id, selectedValue);
  };
  return (
    <Container className={styles.CartItemContainer}>
      <Row className={styles.ProductInfo}>
        <Col xs={12} md={5} className={styles.ProductDetails}>
          <img
            src={product.img_obj.productimg || ""}
            alt="product"
            className={styles.ProductImage}
          />
          <p className={styles.ProductName}>{product.name}</p>
        </Col>
        <Col xs={6} md={3} className={styles.PriceWrapper}>
          <p className={styles.Price}>
            {(product.price * quantity).toLocaleString("vi-VN")}đ
          </p>
        </Col>
        <Col xs={6} md={4} className={styles.QuantityWrapper}>
          {quantity}
        </Col>
      </Row>

      <Row className={styles.CouponContainer}>
        <div className={styles.CouponHeader}>Chọn gói giảm giá</div>
        <div className={styles.CouponDescription}>
          <Form.Check
            type="radio"
            id={`discount-10-${product.product_id}`}
            label={`Giảm ${product.discount}% trực tiếp vào giá máy`}
            value="discount"
            name={`coupon-${product.product_id}`}
            onChange={handleDiscountChange}

          />
          <Form.Check
            type="radio"
            id={`bonus-ram-${product.product_id}`}
            label={`Tặng thêm RAM 16GB`}
            value="bonus_ram"
            name={`coupon-${product.product_id}`}
            onChange={handleDiscountChange}
          />
        </div>
      </Row>
    </Container>
  );
}
