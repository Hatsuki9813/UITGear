import { useState, useEffect } from "react";
import styles from "./CartItem.module.css";
import formatCurrency from "../../utils/formatCurrency";

export default function CartItem({ product, quantity, onDiscountSelect, onUpdateQuantity }) {
    const [quantityValue, setQuantityValue] = useState(quantity);

    useEffect(() => {
        // Nếu props thay đổi (do backend trả về sau khi gọi API), cập nhật lại
        setQuantityValue(quantity);
    }, [quantity]);

    if (!product || !product.img_obj) {
        return <div>Loading...</div>;
    }

    const handleDiscountChange = (e) => {
        const selectedValue = e.target.value;
        onDiscountSelect(product.product_id, selectedValue);
    };

    const validateQuantityInput = (value) => {
        const num = parseInt(value, 10);

        if (isNaN(num)) return 1; // Nếu không phải số => về 1
        if (num < 1) return 1; // Nhỏ hơn 1 => về 1
        if (num > 99) return 99; // Lớn hơn 99 => về 99
        return num; // Hợp lệ => giữ nguyên
    };

    const handleInputChange = (e) => {
        const newQuantity = validateQuantityInput(Number(e.target.value));
        if (newQuantity >= 1) {
            setQuantityValue(newQuantity);
            onUpdateQuantity(newQuantity); // gọi API luôn
        }
    };

    const handleDecrease = () => {
        const newQuantity = quantityValue > 1 ? quantityValue - 1 : 1;
        setQuantityValue(newQuantity);
        onUpdateQuantity(newQuantity); // gọi API luôn
    };

    const handleIncrease = () => {
        const newQuantity = quantityValue >= 99 ? 99 : quantityValue + 1;
        setQuantityValue(newQuantity);
        onUpdateQuantity(newQuantity); // gọi API luôn
    };

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
                <div className={styles.col2}>{formatCurrency(product.price * quantityValue)}</div>
                <div className={styles.col3}>
                    <button className={styles.quantityButton} onClick={handleDecrease}>
                        -
                    </button>
                    <input
                        name="quantity"
                        className={styles.quantityInput}
                        value={quantityValue}
                        onChange={handleInputChange}
                    />
                    <button className={styles.quantityButton} onClick={handleIncrease}>
                        +
                    </button>
                </div>
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
