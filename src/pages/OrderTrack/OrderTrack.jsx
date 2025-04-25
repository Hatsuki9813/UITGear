import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useOrderStore from "../../store/useOrderStore"; // đường dẫn tới file useOrderStore
import styles from "./OrderTrack.module.css";
import orderstatus from "../../assets/icons/orderdone.svg";

export default function OrderTrack() {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get("orderInfo");
  const { updateStatusOrder } = useOrderStore();

  const [statusUpdated, setStatusUpdated] = useState(false);

  useEffect(() => {
    if (orderId && !statusUpdated) {
      updateStatusOrder(orderId, "Đã thanh toán");
      console.log("Order status updated to 'Đã thanh toán'");
      setStatusUpdated(true);
    }
  }, [orderId]);

  return (
    <div className={styles.OrderTrackContainer}>
      <h1 className={styles.ThankYouText}>🎉 Cảm ơn bạn đã đặt hàng!</h1>
      <div className={styles.HeaderContainer}>
        <div className={styles.ProductInfo}>
          <p className={styles.OrderID}>Mã đơn: #{orderId}</p>
          <p className={styles.ContentText}>
            Đơn hàng đã được thanh toán qua Momo
          </p>
          <p className={styles.ContentText}>Cảm ơn bạn đã sử dụng dịch vụ!</p>
        </div>
      </div>

      <p className={styles.HeaderText}>Trạng thái đơn hàng</p>
      <div className={styles.status}>
        <img src={orderstatus} />
        <div className={styles.ordercontent}>
          Đơn hàng đã được đặt thành công
        </div>
      </div>
    </div>
  );
}
