import { useState } from "react";
import formatCurrency from "../../../utils/formatCurrency";

import OptionSection from "./OptionSection";
import QuantitySelector from "./QuantitySelector";

import styles from "./Details.module.css";

const isOption = true;

export default function Details({ product }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={styles.Details}>
      <div className={styles.container}>
        <span className={styles.productName}>{product.name}</span>
        <div className={styles.statusContainer}>
          <span>
            Tình trạng:{" "}
            <span className={styles.availability}>
              {product.is_available ? "Còn hàng" : "Hết hàng"}
            </span>
          </span>
          <span> | </span>
          <span>
            Mã: <span className={styles.id}>{product.product_id}</span>
          </span>
        </div>
        <div className={styles.priceContainer}>
          <span className={styles.price}>{formatCurrency(product.price)}</span>
          {product.discount > 0 && (
            <span className={styles.discountPriceContainer}>
              <span className={styles.discountPrice}>
                {formatCurrency(product.price * (1 - product.discount / 100))}
              </span>
              <span className={styles.discountPercent}>
                -{product.discount}%
              </span>
            </span>
          )}
        </div>
      </div>

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
