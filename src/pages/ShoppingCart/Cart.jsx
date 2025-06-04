import { useState, useEffect } from "react";
import styles from "./Cart.module.css";
import CartItem from "../../components/Cart/CartItem";
import { FaArrowRight } from "react-icons/fa";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Button from "react-bootstrap/Button";
import { useAuthStore } from "../../store/useAuthStore";
import useCartStore from "../../store/useCartStore";
import Modal from "react-modal";
import { useNavigate } from "react-router";
import formatCurrency from "../../utils/formatCurrency";
Modal.setAppElement("#root"); // Thêm cho accessibility

export default function Cart() {
    const user = useAuthStore((state) => state.user);
    const [localCartItems, setLocalCartItems] = useState([]);
    const fetchCart = useCartStore((state) => state.fetchCart);
    const cartItems = useCartStore((state) => state.cartItems);
    const deleteCart = useCartStore((state) => state.deleteCart);
    const updateCart = useCartStore((state) => state.updateCart);

    const [isModalOpen, setIsModalOpen] = useState(false); // Để điều khiển mở đóng modal
    const [itemToDelete, setItemToDelete] = useState(null); // Sản phẩm cần xóa
    const [selectedDiscounts, setSelectedDiscounts] = useState({});
    const setSelectedDiscountsStore = useCartStore((state) => state.setSelectedDiscounts);

    useEffect(() => {
        setLocalCartItems(cartItems);
    }, [cartItems]);

    const navigate = useNavigate();
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
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalDiscount, setTotalDiscount] = useState(0);

    useEffect(() => {
        const totalPrice = localCartItems.reduce((total, item) => {
            const price = item.product_detail?.price || 0;
            return total + price * item.quantity;
        }, 0);

        const totalDiscount = localCartItems.reduce((discount, item) => {
            const product = item.product_detail;
            const isDiscountApplied = selectedDiscounts[item.product_id] === "discount";
            if (!isDiscountApplied) return discount;

            const discountAmount = ((product?.price || 0) * (product?.discount || 0)) / 100;
            return discount + discountAmount * item.quantity;
        }, 0);

        setTotalPrice(totalPrice);
        setTotalDiscount(totalDiscount);
        console.log("Tổng giá:", totalPrice);
    }, [selectedDiscounts, localCartItems]);

    useEffect(() => {
        if (cartItems && cartItems.length > 0) {
            const initialDiscounts = {};
            cartItems.forEach((item) => {
                // Nếu chưa có trong selectedDiscounts thì set mặc định là "discount"
                if (!selectedDiscounts[item.product_id]) {
                    initialDiscounts[item.product_id] = "discount";
                }
            });
            // Gộp vào state hiện tại (để không reset nếu user đã chọn cái khác)
            setSelectedDiscounts((prev) => ({
                ...initialDiscounts,
                ...prev,
            }));
        }
    }, [cartItems]);

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

    useEffect(() => {
        const preventScroll = (e) => e.preventDefault();

        if (isModalOpen) {
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
    }, [isModalOpen]);

    return (
        <div className={styles.container}>
            <div className={styles.itemList}>
                <div className={styles.headerRow}>
                    <div className={styles.col1}>Tên sản phẩm</div>
                    <div className={styles.col2}>Giá thành</div>
                    <div className={styles.col3}>Số lượng</div>
                </div>
                {cartItems && cartItems.length > 0 ? (
                    cartItems.map((item) => (
                        <div key={item._id} className={styles.row}>
                            <CartItem
                                product={item.product_detail}
                                quantity={item.quantity}
                                onUpdateQuantity={(newQuantity) => {
                                    // Gửi lên backend
                                    updateCart(user._id, item.product_id, newQuantity);

                                    // Cập nhật local state để render lại ngay
                                    setLocalCartItems((prev) =>
                                        prev.map((i) =>
                                            i.product_id === item.product_id
                                                ? { ...i, quantity: newQuantity }
                                                : i
                                        )
                                    );
                                }}
                                onDiscountSelect={(productId, selectedValue) =>
                                    handleDiscountSelect(productId, selectedValue)
                                }
                            />
                            <button
                                className={styles.deleteButton}
                                onClick={() => handleDeleteItem(item.product_id)}>
                                <XMarkIcon className={styles.deleteIcon} />
                            </button>
                        </div>
                    ))
                ) : (
                    <div className={styles.emptyCart}>Giỏ hàng của bạn đang trống!</div>
                )}
            </div>

            <div className={styles.checkout}>
                <div className={styles.price}>
                    <span>Tổng cộng</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(totalPrice)}</span>
                </div>
                <div className={styles.price}>
                    <span>Phí vận chuyển</span>
                    <span style={{ fontWeight: 700 }}>Free</span>
                </div>
                <div className={styles.price}>
                    <span>Khuyến mãi</span>
                    <span style={{ fontWeight: 700 }}>{formatCurrency(totalDiscount)}</span>
                </div>
                <div className={styles.divider}></div>
                <div className={styles.price}>
                    <span>Cần thanh toán</span>
                    <span style={{ fontWeight: 700 }}>
                        {formatCurrency(totalPrice - totalDiscount)}
                    </span>
                </div>
                <button
                    disabled={!cartItems || cartItems.length === 0}
                    className={styles.submitButton}
                    onClick={handleCreateOrder}>
                    <span>ĐIỀN THÔNG TIN THANH TOÁN</span>&nbsp;
                    <FaArrowRight />
                </button>
            </div>

            <Modal
                isOpen={isModalOpen}
                onRequestClose={cancelDelete}
                className={styles.modalContainer}
                style={{
                    overlay: {
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        zIndex: 1000,
                    },
                }}>
                <div style={{ fontWeight: "bold", fontSize: "1.25rem" }}>Xác nhận xóa sản phẩm</div>
                <div>Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?</div>
                <div className={styles.modalButtons}>
                    <Button variant="danger" onClick={confirmDelete}>
                        Xóa
                    </Button>
                    <Button variant="secondary" onClick={cancelDelete}>
                        Hủy
                    </Button>
                </div>
            </Modal>
        </div>
    );
}
