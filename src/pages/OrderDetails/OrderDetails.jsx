import { useEffect } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { useParams } from "react-router-dom";
import styles from "./OrderDetails.module.css";
import useOrderStore from "../../store/useOrderStore";
import formatCurrency from "../../utils/formatCurrency";
import { useNavigate } from "react-router-dom";

export default () => {
    const { totalPrice, orderDetails, getOrderDetails } = useOrderStore();
    const { orderId } = useParams();
    const user = useAuthStore((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (user?._id && orderId) {
            getOrderDetails(user._id, orderId);
        }
    }, [user?._id, orderId, getOrderDetails]);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Chi tiết đơn hàng</h1>
            <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                Mã đơn hàng:&nbsp;<span className={styles.OrderId}>{orderId}</span>
            </div>
            <table>
                <thead>
                    <tr className={styles.tableHead}>
                        <th className={styles.nameCol}>Tên sản phẩm</th>
                        <th className={styles.priceCol}>Giá thành</th>
                        <th className={styles.quantityCol}>Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetails.map((item) => {
                        const { product_info, price, quantity, _id } = item;
                        return (
                            <tr key={_id} className={styles.tableRow}>
                                <td
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "10px",
                                        padding: "10px 0",
                                    }}>
                                    <div
                                        className={styles.imageContainer}
                                        onClick={() => navigate(`/detail/${product_info._id}`)}>
                                        <img
                                            src={product_info.img_obj.productimg}
                                            alt={product_info.name}
                                            className={styles.productImg}
                                        />
                                    </div>
                                    <span
                                        onClick={() => navigate(`/detail/${product_info._id}`)}
                                        style={{ fontWeight: 600, cursor: "pointer" }}>
                                        {product_info.name}
                                    </span>
                                </td>
                                <td className={styles.priceCol}>{formatCurrency(price)}</td>
                                <td className={styles.quantityCol}>{quantity}</td>
                            </tr>
                        );
                    })}
                </tbody>
                <tfoot>
                    <tr className={styles.tableFoot}>
                        <td style={{ fontWeight: 600 }} className={styles.nameCol}>
                            Tổng cộng
                        </td>
                        <td
                            style={{ fontWeight: 600, fontSize: "1.25rem" }}
                            className={styles.priceCol}>
                            {formatCurrency(totalPrice)}
                        </td>
                        <td className={styles.quantityCol}></td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};
