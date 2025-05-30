import { useEffect, useState } from "react";
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
import formatCurrency from "../../utils/formatCurrency";
import { useAddressStore } from "../../store/useAddressStore";

export default function CheckoutInfo() {
    const navigate = useNavigate();
    const { createOrder } = useCheckOut();
    const user = useAuthStore((state) => state.user);
    const fetchCart = useCartStore((state) => state.fetchCart);
    const cartItems = useCartStore((state) => state.cartItems);
    const selectedDiscounts = useCartStore((state) => state.selectedDiscounts);
    const { addresses, initializeAddresses } = useAddressStore();

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        note: "",
        paymentMethod: "",
    });

    const setDefaultAddress = () => {
        const defaultAddress = addresses?.find((addr) => addr.isDefault) || {};
        setFormData((prev) => ({
            ...prev,
            name: defaultAddress.name || "",
            phone: defaultAddress.phone || "",
            address: defaultAddress.address || "",
        }));
    };

    useEffect(() => {
        if (user?._id) {
            fetchCart(user._id);
            if (!addresses || addresses.length === 0) {
                initializeAddresses();
            } else setDefaultAddress();
        }
    }, [user?._id, fetchCart, initializeAddresses, addresses]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleMethodSelect = (method) => {
        setFormData({ ...formData, paymentMethod: method });
    };

    const totalPrice = cartItems.reduce((total, item) => {
        const price = item.product_detail?.price || 0;
        return total + price * item.quantity;
    }, 0);

    const totalDiscount = cartItems.reduce((discount, item) => {
        const product = item.product_detail;
        const isDiscountApplied = selectedDiscounts[item.product_id] === "discount";

        if (!isDiscountApplied) return discount;

        const discountAmount = ((product?.price || 0) * (product?.discount || 0)) / 100;
        return discount + discountAmount * item.quantity;
    }, 0);

    const handleSubmit = async () => {
        const total = cartItems.reduce((total, item) => {
            const price = item.product_detail?.price || 0;
            return total + price * item.quantity;
        }, 0);

        const discount = cartItems.reduce((discount, item) => {
            const product = item.product_detail;
            const isDiscountApplied = selectedDiscounts[item.product_id] === "discount";

            if (!isDiscountApplied) return discount;

            const discountAmount = ((product?.price || 0) * (product?.discount || 0)) / 100;
            return discount + discountAmount * item.quantity;
        }, 0);

        const pr = total - discount;

        const shipping_address = `${formData.address}, ${formData.name}, ${formData.phone},${FormData.note}`;
        const data = {
            user_id: user?._id, // Thay bằng user id thật nếu có
            payment_name: formData.paymentMethod,
            shipping_address,
            pr,
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
                <div>
                    <div className={styles.CheckoutHeader}>Thông tin thanh toán</div>
                    <Form style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <Form.Group className={styles.Input}>
                            <div className="row">
                                <div className="col-sm">
                                    <Form.Label style={{ fontWeight: 500 }}>Họ tên</Form.Label>
                                    <Form.Control
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="col-sm">
                                    <Form.Label style={{ fontWeight: 500 }}>
                                        Số điện thoại
                                    </Form.Label>
                                    <Form.Control
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                        </Form.Group>

                        <Form.Group className={styles.Input}>
                            <Form.Label style={{ fontWeight: 500 }}>Địa chỉ</Form.Label>
                            <Form.Control
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                            />
                        </Form.Group>
                    </Form>
                </div>

                <div>
                    <div className={styles.CheckoutHeader}>Phương thức thanh toán</div>
                    <div className={styles.PaymentMethods}>
                        <button
                            style={{
                                backgroundColor:
                                    formData.paymentMethod === "cash" ? "#02457a" : "white",
                                color: formData.paymentMethod === "cash" ? "white" : "black",
                            }}
                            onClick={() => handleMethodSelect("cash")}
                            className={styles.Method}>
                            <img src={cash} alt="cash" className={styles.methodLogo} />
                            <div>Tiền mặt</div>
                        </button>
                        <button
                            style={{
                                backgroundColor:
                                    formData.paymentMethod === "momo" ? "#02457a" : "white",
                                color: formData.paymentMethod === "momo" ? "white" : "black",
                            }}
                            onClick={() => handleMethodSelect("momo")}
                            className={styles.Method}>
                            <img src={momo} alt="momo" className={styles.methodLogo} />
                            <div>Ví điện tử MoMo</div>
                        </button>
                        <button
                            style={{
                                backgroundColor:
                                    formData.paymentMethod === "vnpay" ? "#02457a" : "white",
                                color: formData.paymentMethod === "vnpay" ? "white" : "black",
                            }}
                            onClick={() => handleMethodSelect("vnpay")}
                            className={styles.Method}>
                            <img src={vnpay} alt="vnpay" className={styles.methodLogo} />
                            <div>Ví điện tử VNPAY</div>
                        </button>
                    </div>
                </div>

                <div>
                    <div className={styles.CheckoutHeader}>Ghi chú</div>
                    <div className={styles.Notes}>
                        <Form.Group className={styles.Input}>
                            <Form.Control
                                as="textarea"
                                rows={4}
                                name="note"
                                value={formData.note}
                                onChange={handleChange}
                                style={{ borderRadius: "4px" }}
                            />
                        </Form.Group>
                    </div>
                </div>
            </div>

            <div className={styles.Order}>
                <div className={styles.OrderContent}>
                    <span>Tổng cộng</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(totalPrice)}</span>
                </div>
                <div className={styles.OrderContent}>
                    <span>Phí vận chuyển</span>
                    <span style={{ fontWeight: 700 }}>Free</span>
                </div>
                <div className={styles.OrderContent}>
                    <span>Khuyến mãi</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(totalDiscount)}</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.OrderContent}>
                    <span>Cần thanh toán</span>
                    <span style={{ fontWeight: 700 }}>
                        {formatCurrency(totalPrice - totalDiscount)}
                    </span>
                </div>
                <Button className={styles.SubmitButton} onClick={handleSubmit}>
                    <span>ĐẶT HÀNG</span>&nbsp;
                    <FaArrowRight />
                </Button>
            </div>
        </div>
    );
}
