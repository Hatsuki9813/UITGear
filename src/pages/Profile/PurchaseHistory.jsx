import { useState } from "react";
import styles from "./PurchaseHistory.module.css";

const data = [
  {
    orderId: "DH001",
    status: "Đã giao",
    deliveryDate: "2024-03-20",
    total: "1.500.000 VND",
  },
  {
    orderId: "DH002",
    status: "Chờ xác nhận",
    deliveryDate: "2024-03-22",
    total: "3.200.000 VND",
  },
  {
    orderId: "DH003",
    status: "Đang giao",
    deliveryDate: "2024-03-25",
    total: "750.000 VND",
  },
  { orderId: "DH004", status: "Đã hủy", deliveryDate: "-", total: "0 VND" },
  {
    orderId: "DH005",
    status: "Đã giao",
    deliveryDate: "2024-03-18",
    total: "2.100.000 VND",
  },
];

const ITEMS_PER_PAGE = 4;

const getStatusColor = (status) => {
  switch (status) {
    case "Đã giao":
      return "#2DB224";
    case "Đã hủy":
      return "#EE5858";
    case "Đang giao":
      return "#FA8232";
    case "Chờ xác nhận":
      return "black";
    default:
      return "";
  }
};

export const PurchaseHistory = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / ITEMS_PER_PAGE);

  const paginatedData = data.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className={styles.PurchaseHistory}>
      <h1>LỊCH SỬ MUA HÀNG</h1>
      <table>
        <thead>
          <tr>
            <th>Mã đơn hàng</th>
            <th>Trạng thái</th>
            <th>Ngày giao</th>
            <th>Tổng tiền</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item, index) => (
            <tr key={index}>
              <td>{item.orderId}</td>
              <td
                style={{
                  color: getStatusColor(item.status),
                  fontWeight: 600,
                }}
              >
                {item.status.toUpperCase()}
              </td>
              <td>{item.deliveryDate}</td>
              <td>{item.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Trước
        </button>
        <span>
          Trang {currentPage} / {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          Sau
        </button>
      </div>
    </div>
  );
};
