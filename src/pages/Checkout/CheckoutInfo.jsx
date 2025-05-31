import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import { Button } from "react-bootstrap";
import { AnimatePresence, motion } from "framer-motion";

import styles from "./CheckoutInfo.module.css";

import Form from "react-bootstrap/Form";
import cash from "../../assets/icons/cash.svg";
import momo from "../../assets/icons/momo.svg";
import vnpay from "../../assets/icons/vnpay.svg";

import { FaArrowRight } from "react-icons/fa";
import { XMarkIcon, PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";

import useCartStore from "../../store/useCartStore";
import { useCheckOut } from "../../store/useCheckOut";
import { useAuthStore } from "../../store/useAuthStore";
import { useAddressStore } from "../../store/useAddressStore";

import formatCurrency from "../../utils/formatCurrency";

export default function CheckoutInfo() {
    const navigate = useNavigate();
    const { createOrder } = useCheckOut();
    const user = useAuthStore((state) => state.user);
    const fetchCart = useCartStore((state) => state.fetchCart);
    const cartItems = useCartStore((state) => state.cartItems);
    const selectedDiscounts = useCartStore((state) => state.selectedDiscounts);
    const { addresses, initializeAddresses } = useAddressStore();
    const [isOpen, setIsOpen] = useState(false);
    const [mouseDownInside, setMouseDownInside] = useState(false);

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

    const handleAddressSelect = (data) => {
        setFormData({
            ...formData,
            name: data.name || "",
            phone: data.phone || "",
            address: data.address || "",
        });
        setIsOpen(false);
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

    useEffect(() => {
        const preventScroll = (e) => e.preventDefault();

        if (isOpen) {
            document.addEventListener("wheel", preventScroll, { passive: false });
            document.addEventListener("touchmove", preventScroll, { passive: false });
        } else {
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        }

        return () => {
            document.removeEventListener("wheel", preventScroll);
            document.removeEventListener("touchmove", preventScroll);
        };
    }, [isOpen]);

    return (
        <div className={styles.CheckoutContainer}>
            <div className={styles.CheckoutInfo}>
                <div style={{ display: "flex", flexDirection: "column" }}>
                    <div className={styles.CheckoutHeader}>Thông tin thanh toán</div>
                    <button className={styles.openPopup} onClick={() => setIsOpen(true)}>
                        Chọn địa chỉ
                    </button>
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

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className={styles.overlay}
                        onMouseDown={() => setMouseDownInside(false)}
                        onMouseUp={() => {
                            if (!mouseDownInside) {
                                setIsOpen(false);
                            }
                        }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className={styles.main}
                            onMouseDown={(e) => {
                                e.stopPropagation();
                                setMouseDownInside(true);
                            }}>
                            <div className={styles.header}>
                                <span className={styles.headerName}>Chọn địa chỉ</span>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className={styles.closeButton}>
                                    <XMarkIcon className={styles.closeIcon} />
                                </button>
                            </div>
                            <div className={styles.content}>
                                {Object.entries(addresses).map(([key, values]) => (
                                    <button
                                        onClick={() => handleAddressSelect(values)}
                                        key={key}
                                        className={styles.addressRow}>
                                        <div
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-between",
                                            }}>
                                            <span style={{ fontWeight: 600 }}>{values.name}</span>
                                            <span style={{ display: "flex", alignItems: "center" }}>
                                                <PhoneIcon className={styles.icon} />
                                                {values.phone}
                                            </span>
                                        </div>
                                        <div style={{ textAlign: "left" }}>
                                            <MapPinIcon className={styles.icon} />
                                            <span>{values.address}</span>
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
