import styles from "./Specifications.module.css";

export default function Specifications({ specification_obj }) {
  const data = [
    { name: "Bộ vi xử lý", value: specification_obj.processor },
    { name: "RAM", value: specification_obj.ram },
    { name: "Lưu trữ", value: specification_obj.storage },
    { name: "Card đồ họa", value: specification_obj.graphics },
    { name: "Màn hình", value: specification_obj.display || "Đang cập nhật" },
    { name: "Pin", value: specification_obj.battery },
    { name: "Trọng lượng", value: specification_obj.weight },
    { name: "Hệ điều hành", value: specification_obj.os },
    { name: "Cổng kết nối", value: specification_obj.port },
    { name: "Kích thước", value: specification_obj.size || "Đang cập nhật" },
    { name: "Màu sắc", value: specification_obj.color || "Đang cập nhật" },
  ];

  return (
    <div className={styles.Specifications}>
      <div className={styles.header}>THÔNG SỐ KĨ THUẬT</div>

      <table>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              style={{
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#ececec",
              }}
            >
              <td
                style={{
                  fontWeight: 600,
                  padding: "18px 12px",
                }}
              >
                {item.name}
              </td>
              <td
                style={{
                  padding: "18px 12px 18px 36px",
                }}
              >
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
