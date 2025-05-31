import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./PurchaseHistory.module.css";
import useOrderStore from "../../store/useOrderStore";
import { useAuthStore } from "../../store/useAuthStore";
import formatCurrency from "../../utils/formatCurrency";

const ITEMS_PER_PAGE = 5;

export const PurchaseHistory = () => {
    const navigate = useNavigate();
    const [currentPage, setCurrentPage] = useState(1);
    const user = useAuthStore((state) => state.user);

    const { orders, fetchOrders, loading, error } = useOrderStore();
    useEffect(() => {
        if (user?._id) {
            fetchOrders(user._id);
        }
    }, [user?._id, fetchOrders]);

    const totalPages = Math.ceil(orders.length / ITEMS_PER_PAGE);

    const paginatedData = orders.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const getStatusColor = (status) => {
        switch (status) {
            case "pending":
                return "orange";
            case "processing":
                return "blue";
            case "shipped":
                return "purple";
            case "delivered":
                return "green";
            case "cancelled":
                return "red";
            default:
                return "black";
        }
    };

    return (
        <div className={styles.PurchaseHistory}>
            <h1>LỊCH SỬ MUA HÀNG</h1>

            {loading && <div>Đang tải dữ liệu...</div>}
            {error && <div style={{ color: "red" }}>Lỗi: {error}</div>}
            {!loading && orders.length === 0 && <div>Chưa có đơn hàng nào.</div>}

            {!loading && orders.length > 0 && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th style={{ textAlign: "center" }}>Mã đơn hàng</th>
                                <th style={{ textAlign: "center" }}>Trạng thái</th>
                                <th style={{ textAlign: "center" }}>Ngày đặt</th>
                                <th style={{ textAlign: "center" }}>Tổng tiền</th>
                            </tr>
                        </thead>
                        <tbody>
                            {paginatedData.map((item) => (
                                <tr
                                    key={item._id}
                                    onClick={() => navigate(`/order-details/${item._id}`)}>
                                    <td style={{ textAlign: "center" }}>{item._id}</td>
                                    <td
                                        style={{
                                            textAlign: "center",
                                            color: getStatusColor(item.order_status),
                                            fontWeight: 600,
                                        }}>
                                        {item.order_status?.toUpperCase()}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {new Date(item.createdAt).toLocaleDateString()}
                                    </td>
                                    <td style={{ textAlign: "center" }}>
                                        {formatCurrency(item.total_price)}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className={styles.pagination}>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                            disabled={currentPage === 1}>
                            Trước
                        </button>
                        <span>
                            Trang {currentPage} / {totalPages}
                        </span>
                        <button
                            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                            disabled={currentPage === totalPages}>
                            Sau
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};
