import OptionBox from "./OptionBox";
import styles from "./OptionSection.module.css";

export default ({ title, values }) => {
    return (
        <div className={styles.OptionSection}>
            <span className={styles.title}>{title}</span>
            <span className={styles.options}>
                {values.map((value, i) => {
                    return <OptionBox key={i} value={value} />;
                })}
            </span>
        </div>
    );
};
