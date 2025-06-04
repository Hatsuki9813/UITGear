import { useState } from "react";
import formatCurrency from "../../../utils/formatCurrency";

import useCartStore from "../../../store/useCartStore"; // Zustand store for cart
import styles from "./Details.module.css";
import { useAuthStore } from "../../../store/useAuthStore";
import toast from "react-hot-toast";

import { useNavigate } from "react-router-dom";

const isOption = true;

export default function Details({ product }) {
    const navigate = useNavigate();
    //const [quantity, setQuantity] = useState(1);
    const { addCart } = useCartStore();
    const { user } = useAuthStore();
    const handleAddToCart = () => {
        if (!user) {
            toast.error("Vui lòng đăng nhập để thêm vào giỏ hàng!");
            return;
        }
        if (product.is_available) {
            addCart(user._id, product.product_id);
            toast.success("Thêm vào giỏ hàng thành công!");
        } else {
            toast.error("Sản phẩm đã hết hàng!");
        }
    };

    const handleBuyNow = () => {
        if (!user) {
            toast.error("Vui lòng đăng nhập để mua hàng!");
            return;
        }
        if (product.is_available) {
            addCart(user._id, product.product_id);
            navigate("/cart");
        } else {
            toast.error("Sản phẩm đã hết hàng!");
        }
    };

    return (
        <div className={styles.Details}>
            <div className={styles.container}>
                <span className={styles.productName}>{product.name}</span>
                <div className={styles.statusContainer}>
                    <span>
                        Tình trạng:&nbsp;
                        <span className={styles.availability}>
                            {product.is_available ? "Còn hàng" : "Hết hàng"}
                        </span>
                    </span>
                    <span> | </span>
                    <span>
                        Mã:&nbsp;<span className={styles.id}>{product.product_id}</span>
                    </span>
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{formatCurrency(product.price)}</span>
                    {product.discount > 0 && (
                        <span className={styles.discountPriceContainer}>
                            <span className={styles.discountPrice}>
                                {formatCurrency(product.price * (1 - product.discount / 100))}
                            </span>
                            <span className={styles.discountPercent}>-{product.discount}%</span>
                        </span>
                    )}
                </div>
            </div>

            <div
                style={{
                    ...(isOption && { marginTop: "1.5rem" }),
                }}
                className={styles.buyContainer}>
                <button onClick={handleAddToCart} className={styles.addToCart}>
                    THÊM VÀO GIỎ HÀNG
                </button>
                <button onClick={handleBuyNow} className={styles.buyButton}>
                    MUA NGAY
                </button>
            </div>
        </div>
    );
}
