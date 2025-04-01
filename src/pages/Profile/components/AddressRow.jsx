import styles from "./AddressRow.module.css";

export default ({ edit, defaultAddress }) => {
    return (
        <div className={styles.AddressRow}>
            <div className={styles.container}>
                <span>Trung Thuận</span>
                <span>0356210749</span>
                <span>20/12 Đường 25, TP. Thủ Đức</span>
            </div>
            {defaultAddress && <span className={styles.defaultAddress}>*Mặc định</span>}
            <div className={styles.buttonsContainer}>
                <button className={styles.editButton} onClick={edit}>
                    Sửa
                </button>
                <button className={styles.deleteButton}>Xoá</button>
            </div>
        </div>
    );
};
