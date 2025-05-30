import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import useOrderStore from "../../store/useOrderStore"; // đường dẫn tới file useOrderStore
import styles from "./OrderTrack.module.css";
import formatCurrency from "../../utils/formatCurrency"; // đường dẫn tới file formatCurrency
import { Link } from "react-router-dom";

export default function OrderTrack() {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get("orderInfo");
    const amount = searchParams.get("amount");
    const resultCode = Number(searchParams.get("resultCode"));
    const message = searchParams.get("message");
    const { updateStatusOrder } = useOrderStore();

    const [statusUpdated, setStatusUpdated] = useState(false);

    useEffect(() => {
        if (orderId && !statusUpdated) {
            updateStatusOrder(orderId, "Đã thanh toán");
            console.log("Order status updated to 'Đã thanh toán'");
            setStatusUpdated(true);
        }
    }, [orderId]);

    useEffect(() => {
        console.log(resultCode);
    }, [resultCode]);
    return (
        <div className={styles.OrderTrackContainer}>
            <h1>KẾT QUẢ THANH TOÁN</h1>
            <div className={styles.infoContainer}>
                {resultCode == 0 ? (
                    <>
                        <div className={styles.result}>🎉 Thanh toán thành công!</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            Mã đơn:&nbsp;
                            <div className={styles.OrderID}>#{orderId}</div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center" }}>
                            Giá trị đơn hàng:&nbsp;
                            <div className={styles.amount}>{formatCurrency(amount)}</div>
                        </div>
                    </>
                ) : (
                    <>
                        <div className={styles.result}>❌ Thanh toán thất bại</div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <div>Mã lỗi:&nbsp;</div>
                            <div className={styles.error}>{resultCode}</div>
                        </div>
                    </>
                )}
            </div>
            {resultCode == 0 ? (
                <>
                    <div style={{ alignSelf: "center" }}>Đơn hàng đã được thanh toán qua MoMo.</div>
                    <div style={{ alignSelf: "center" }}>Cảm ơn bạn đã sử dụng dịch vụ!</div>
                    <div style={{ alignSelf: "center" }}>
                        Kiểm tra đơn hàng tại{" "}
                        <Link target="_blank" to="/profile/history">
                            đây
                        </Link>
                        .
                    </div>
                </>
            ) : (
                <>
                    <div style={{ alignSelf: "center" }}>
                        Đơn hàng thanh toán thất bại do <b>{message}</b>
                    </div>
                </>
            )}
        </div>
    );
}
