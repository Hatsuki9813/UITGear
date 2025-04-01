import { FunnelIcon } from "@heroicons/react/24/outline";
import styles from "./FilterButton.module.css";

export default ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.FilterButton}>
            <FunnelIcon style={{ width: "1rem", height: "1rem" }} />
            <span style={{ marginLeft: "0.5rem" }}>Bộ lọc</span>
        </button>
    );
};
