import styles from "./AddressRow.module.css";
import { HomeIcon, PhoneIcon } from "@heroicons/react/24/outline";

export default ({ data, onEdit, onDelete }) => {
    return (
        <div className={styles.AddressRow}>
            <div className={styles.container}>
                <div>{data.name}</div>
                <div className={styles.phoneAndAddress}>
                    <PhoneIcon className={styles.icon} />
                    <span>{data.phone}</span>
                </div>
                <div className={styles.phoneAndAddress}>
                    <HomeIcon className={styles.icon} />
                    <span>{data.address}</span>
                </div>
            </div>

            <div className={styles.buttonsContainer}>
                {data.isDefault && <span className={styles.defaultAddress}>*Mặc định</span>}
                <button className={styles.editButton} onClick={() => onEdit(data)}>
                    Sửa
                </button>
                <button className={styles.deleteButton} onClick={() => onDelete(data)}>
                    Xoá
                </button>
            </div>
        </div>
    );
};
