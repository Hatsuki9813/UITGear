import formatCurrency from "../../utils/formatCurrency";
import styles from "./CardItem.module.css";
import { Link } from "react-router";

export const CardItem = ({ data, border, whereToUse }) => {
  return (
    <div
      style={{
        width: whereToUse === "list" ? "100%" : "220px",
        border: border ? "1px solid #CFCFCF" : "none",
      }}
      className={styles.CardItem}
    >
      <Link to={`/detail/${data._id}`} style={{ textDecoration: "none" }}>
        <div className={styles.imgContainer}>
          <img src={data.img_obj?.productimg || data.img} alt={data.name} />
        </div>
        <span className={styles.name}>{data.name}</span>

        {data.discountPrice && (
          <span className={styles.price}>{formatCurrency(data.price)}</span>
        )}

        <div className={styles.discountPriceContainer}>
          <span className={styles.discountPrice}>
            {data.discountPrice
              ? formatCurrency(data.discountPrice)
              : formatCurrency(data.price)}
          </span>

          {data.discountPrice && (
            <span className={styles.discountPercent}>
              {Math.round((data.discountPrice / data.price - 1) * 100)}%
            </span>
          )}
        </div>
      </Link>
    </div>
  );
};
