import { useState } from "react";
import formatCurrency from "../../../utils/formatCurrency";

import OptionSection from "./OptionSection";
import QuantitySelector from "./QuantitySelector";

import styles from "./Details.module.css";

const isOption = true;

export default function Details() {
    const [quantity, setQuantity] = useState(1);

    return (
        <div className={styles.Details}>
            <div className={styles.container}>
                <span className={styles.productName}>2020 Apple MacBook Pro with Apple M1 Chip</span>
                <div className={styles.statusContainer}>
                    <span>
                        Tình trạng: <span className={styles.availability}>Còn hàng</span>
                    </span>
                    <span> | </span>
                    <span>
                        Mã: <span className={styles.id}>ABCD1234</span>
                    </span>
                </div>
                <div className={styles.priceContainer}>
                    <span className={styles.price}>{formatCurrency(28990000)}</span>
                    <span className={styles.discountPriceContainer}>
                        <span className={styles.discountPrice}>{formatCurrency(25990000)}</span>
                        <span className={styles.discountPercent}>-12%</span>
                    </span>
                </div>
            </div>

            {isOption && (
                <div className={styles.optionsContainer}>
                    <OptionSection title="Màu sắc" values={["Xám", "Xanh đen", "Bạc"]} />
                    <OptionSection title="Dung lượng" values={["256 GB", "512 GB", "1 TB"]} />
                    <OptionSection title="Kích thước màn hình" values={["13.4 inch", "14 inch", "15.6 inch"]} />
                </div>
            )}
            <div
                style={{
                    ...(isOption && { marginTop: "1.5rem" }),
                }}
                className={styles.buyContainer}
            >
                {/* <QuantitySelector quantity={quantity} setQuantity={setQuantity} /> */}
                <button className={styles.addToCart}>THÊM VÀO GIỎ HÀNG</button>
                <button className={styles.buyButton}>MUA NGAY</button>
            </div>
        </div>
    );
}
