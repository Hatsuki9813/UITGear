import { useEffect } from "react";
import styles from "./CartItem.module.css";
import formatCurrency from "../../utils/formatCurrency";

export default function CartItem({ product, quantity, onDiscountSelect }) {
    if (!product || !product.img_obj) {
        return <div>Loading...</div>; // Hoặc có thể trả về một thông báo "Đang tải..."
    }
    const handleDiscountChange = (e) => {
        const selectedValue = e.target.value;
        onDiscountSelect(product.product_id, selectedValue);
    };

    useEffect(() => {
        onDiscountSelect(product.product_id, "discount");
    }, [product]);

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.col1}>
                    <div className={styles.imageContainer}>
                        <img
                            src={product.img_obj.productimg || ""}
                            alt="product"
                            className={styles.image}
                        />
                    </div>
                    <span className={styles.name}>{product.name}</span>
                </div>
                <div className={styles.col2}>{formatCurrency(product.price * quantity)}</div>
                <div className={styles.col3}>{quantity}</div>
            </div>
            <div className={styles.discount}>
                <div className={styles.title}>Chọn gói giảm giá:</div>
                <select onChange={handleDiscountChange}>
                    <option value="discount">Giảm {product.discount}% trực tiếp vào giá máy</option>
                    <option value="bonus_ram">Tặng thêm 16GB RAM</option>
                </select>
            </div>
        </div>
    );
}
