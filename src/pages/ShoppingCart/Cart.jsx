import React, { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "../../components/Cart/CartItem";
import { FaArrowRight } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { useAuthStore } from "../../store/useAuthStore";
import useCartStore from "../../store/useCartStore";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Thêm cho accessibility

export default function Cart() {
  const user = useAuthStore((state) => state.user);
  const fetchCart = useCartStore((state) => state.fetchCart);
  const cartItems = useCartStore((state) => state.cartItems);
  const deleteCart = useCartStore((state) => state.deleteCart);

  const [isModalOpen, setIsModalOpen] = useState(false); // Để điều khiển mở đóng modal
  const [itemToDelete, setItemToDelete] = useState(null); // Sản phẩm cần xóa
  const [selectedDiscounts, setSelectedDiscounts] = useState({});
  const setSelectedDiscountsStore = useCartStore((state) => state.setSelectedDiscounts);

  useEffect(() => {
    if (user?._id) {
      fetchCart(user._id);
    }
  }, [user?._id, fetchCart]);
  const handleDiscountSelect = (productId, selectedValue) => {
    setSelectedDiscounts((prev) => ({
      ...prev,
      [productId]: selectedValue,
    }));
  };
  // Tính tổng giá
  const totalPrice = cartItems.reduce((total, item) => {
    const price = item.product_detail?.price || 0;
    return total + price * item.quantity;
  }, 0);

  // Tính tổng khuyến mãi
  const totalDiscount = cartItems.reduce((discount, item) => {
    const product = item.product_detail;
    const isDiscountApplied = selectedDiscounts[item.product_id] === "discount";
    if (!isDiscountApplied) return discount;

    const discountAmount =
      ((product?.price || 0) * (product?.discount || 0)) / 100;
    return discount + discountAmount * item.quantity;
  }, 0);

  const handleDeleteItem = (productid) => {
    // Mở modal xác nhận
    setItemToDelete(productid);
    setIsModalOpen(true);
  };

  const confirmDelete = async () => {
    // Xoá sản phẩm khi người dùng xác nhận
    if (itemToDelete) {
      await deleteCart(user._id, itemToDelete);
    }
    fetchCart(user._id);
    console.log("Xóa sản phẩm có id:", itemToDelete);
    setIsModalOpen(false); // Đóng modal
  };

  const cancelDelete = () => {
    setIsModalOpen(false); // Đóng modal khi người dùng hủy
  };

  const handleCreateOrder = () => {
    setSelectedDiscountsStore(selectedDiscounts); // lưu vào store
    navigate("/checkout");

  };
  return (
    <Container fluid className={styles.CartContainer}>
      <Row>
        <Col xs={12} md={8} className={styles.itemList}>
          <Row className={styles.ListHeader}>
            <Col xs={12} md={5}>
              Tên sản phẩm
            </Col>
            <Col xs={6} md={2}>
              Giá thành
            </Col>
            <Col xs={6} md={3}>
              Số lượng
            </Col>
          </Row>

          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item) => (

              <div key={item._id} className={styles.CartItemWrapper}>
                <div className={styles.CartItemContent}>
                  <CartItem
                    product={item.product_detail}
                    quantity={item.quantity}
                    onDiscountSelect={handleDiscountSelect}

                  />
                </div>
                <div className={styles.DeleteWrapper}>
                  <TiDeleteOutline
                    onClick={() => handleDeleteItem(item.product_id)}
                    className={styles.deleteicon}
                  />
                </div>
              </div>

            ))
          ) : (
            <p className={styles.EmptyCart}>Giỏ hàng của bạn đang trống!</p>
          )}
        </Col>

        <Col xs={12} md={4} className={styles.CheckoutContainer}>
          <div className={styles.CheckoutHeader}>Thành tiền</div>
          <div className={styles.divider}></div>

          <div className={styles.CheckoutContent}>
            <span>Tổng cộng</span>
            <span>{totalPrice.toLocaleString("vi-VN")}đ</span>
          </div>

          <div className={styles.CheckoutContent}>
            <span>Phí vận chuyển</span>
            <span>Free</span>
          </div>

          <div className={styles.CheckoutContent}>
            <span>Khuyến mãi</span>
            <span>-{totalDiscount.toLocaleString("vi-VN")}đ</span>
          </div>

          <div className={styles.divider}></div>

          <div className={styles.CheckoutContent}>
            <span>Cần thanh toán</span>
            <span>{(totalPrice - totalDiscount).toLocaleString("vi-VN")}đ</span>
          </div>

          <Link to="/checkout" style={{ textDecoration: "none" }}>
            <Button className={styles.SubmitButton} onClick={handleCreateOrder}>
              Xác nhận thanh toán
              <FaArrowRight className={styles.loginicon} />
            </Button>
          </Link>
        </Col>
      </Row>

      {/* Modal xác nhận xóa sản phẩm */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={cancelDelete}
        className={styles.Modal}
      >
        <h2>Xác nhận xóa sản phẩm</h2>
        <p>Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?</p>
        <div className={styles.ModalButtons}>
          <Button variant="danger" onClick={confirmDelete}>
            Xóa
          </Button>
          <Button variant="secondary" onClick={cancelDelete}>
            Hủy
          </Button>
        </div>
      </Modal>
    </Container>
  );
}
