import React, { useEffect, useState } from "react";
import styles from "./CheckoutInfo.module.css";
import Form from "react-bootstrap/Form";
import cash from "../../assets/icons/cash.svg";
import momo from "../../assets/icons/momo.svg";
import vnpay from "../../assets/icons/vnpay.svg";
import { FaArrowRight } from "react-icons/fa";
import { Button } from "react-bootstrap";
import OrderCart from "../../components/Cart/OrderCart";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/useCartStore";
import { useCheckOut } from "../../store/useCheckOut";
import toast from "react-hot-toast";
import { useAuthStore } from "../../store/useAuthStore";
export default function CheckoutInfo() {
    const navigate = useNavigate();
    const { createOrder } = useCheckOut();
    const user = useAuthStore((state) => state.user);
    const fetchCart = useCartStore((state) => state.fetchCart);
    const cartItems = useCartStore((state) => state.cartItems);
    useEffect(() => {
        if (user?._id) {
            fetchCart(user._id);
        }
    }, [user?._id, fetchCart]);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        note: "",
        paymentMethod: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const price = item.product_detail?.price || 0;
        return total + price * item.quantity;
    }, 0);

    const totalDiscount = cartItems.reduce((discount, item) => {
        const product = item.product_detail;
        const discountAmount = ((product?.price || 0) * (product?.discount || 0)) / 100;
        return discount + discountAmount * item.quantity;
    }, 0);

    const handleSubmit = async () => {
        const shipping_address = `${formData.address}, ${formData.name}, ${formData.phone},${FormData.note}`;
        const data = {
            user_id: user?._id, // Thay bằng user id thật nếu có
            payment_name: formData.paymentMethod,
            shipping_address,
        };

        try {
            const result = await createOrder(data);
            if (result?.paymentUrl) {
                window.location.href = result.paymentUrl;
            } else {
                toast.success("Đặt hàng thành công!");
                navigate("/ordertrack");
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.CheckoutContainer}>
            <div className={styles.CheckoutInfo}>
                <div className={styles.CheckoutHeader}>Thông tin thanh toán</div>

                <Form>
                    <Form.Group className={styles.Input}>
                        <div className="row">
                            <div className="col-sm">
                                <Form.Label>Họ tên</Form.Label>
                                <Form.Control
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </Form.Group>

                    <Form.Group className={styles.Input}>
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className={styles.Input}>
                        <div className="row">
                            <div className="col-sm">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-sm">
                                <Form.Label>Số điện thoại</Form.Label>
                                <Form.Control
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                    </Form.Group>
                </Form>

                <div className={styles.CheckoutHeader}>Phương thức thanh toán</div>
                <div className={styles.PaymentMethods}>
                    <div className={styles.Method}>
                        <img src={cash} alt="cash" />
                        <p>Tiền mặt</p>
                        <Form.Check
                            type="radio"
                            name="paymentMethod"
                            value="cash"
                            onChange={handleChange}
                            checked={formData.paymentMethod === "cash"}
                        />
                    </div>
                    <div className={styles.Method}>
                        <img src={momo} alt="momo" />
                        <p>Ví điện tử Momo</p>
                        <Form.Check
                            type="radio"
                            name="paymentMethod"
                            value="momo"
                            onChange={handleChange}
                            checked={formData.paymentMethod === "momo"}
                        />
                    </div>
                    <div className={styles.Method}>
                        <img src={vnpay} alt="vnpay" />
                        <p>Ví điện tử VNpay</p>
                        <Form.Check
                            type="radio"
                            name="paymentMethod"
                            value="vnpay"
                            onChange={handleChange}
                            checked={formData.paymentMethod === "vnpay"}
                        />
                    </div>
                </div>

                <div className={styles.CheckoutHeader}>Ghi chú</div>
                <div className={styles.Notes}>
                    <Form.Group className={styles.Input}>
                        <Form.Control
                            as="textarea"
                            rows={4}
                            name="note"
                            value={formData.note}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
            </div>

            <div className={styles.Order}>
                <div className={styles.OrderContent}>
                    <span>Tổng cộng</span>
                    <span>{totalPrice.toLocaleString()}₫</span>
                </div>
                <div className={styles.OrderContent}>
                    <span>Phí vận chuyển</span>
                    <span>Free</span>
                </div>
                <div className={styles.OrderContent}>
                    <span>Khuyến mãi</span>
                    <span>{totalDiscount.toLocaleString()}₫</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.OrderContent}>
                    <span>Cần thanh toán</span>
                    <span>{(totalPrice - totalDiscount).toLocaleString()}₫</span>
                </div>
                <Button className={styles.SubmitButton} onClick={handleSubmit}>
                    ĐẶT HÀNG <FaArrowRight className={styles.loginicon} />
                </Button>
            </div>
        </div>
    );
}
