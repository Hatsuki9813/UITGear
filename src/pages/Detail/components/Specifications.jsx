import styles from "./Specifications.module.css";

// Tất cả key đều viết thường để đồng bộ tra cứu
const labelMap = {
    processor: "Bộ vi xử lý",
    ram: "RAM",
    storage: "Lưu trữ",
    graphics: "Card đồ họa",
    display: "Màn hình",
    battery: "Pin",
    weight: "Trọng lượng",
    os: "Hệ điều hành",
    port: "Cổng kết nối",
    size: "Kích thước",
    color: "Màu sắc",
    connection: "Kết nối",
    keycap: "Keycap",
    switch: "Switch",
    led: "Đèn LED",
    dpi: "DPI",
    speed: "Tốc độ",
};

export default function Specifications({ specification_obj }) {
    const data = Object.entries(specification_obj)
        .filter(([_, value]) => value && value.trim() !== "") // loại bỏ giá trị rỗng
        .map(([key, value]) => {
            const lowerKey = key.toLowerCase();
            return {
                name: labelMap[lowerKey] || key,
                value,
            };
        });

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
                            }}>
                            <td style={{ fontWeight: 600, padding: "18px 12px" }}>{item.name}</td>
                            <td style={{ padding: "18px 12px 18px 36px" }}>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
