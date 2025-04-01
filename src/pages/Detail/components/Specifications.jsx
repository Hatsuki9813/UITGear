import styles from "./Specifications.module.css";

const data = [
    { name: "Màn hình", value: "13,6 inch Liquid Retina, 2560 x 1664 pixel" },
    { name: "Bộ vi xử lý", value: "Apple M3, CPU 8 nhân" },
    { name: "Bộ nhớ", value: "8GB hợp nhất, có thể nâng cấp lên 24GB" },
    { name: "Lưu trữ", value: "512GB SSD, có thể nâng cấp" },
    { name: "Cổng kết nối", value: "MagSafe, 2x USB-C, jack 3.5mm" },
    { name: "Hệ điều hành", value: "macOS Sonoma" },
    { name: "Pin", value: "Lên đến 18 giờ phát video" },
];

export default () => {
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
};
