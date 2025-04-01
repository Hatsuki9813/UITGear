import styles from "./OptionBox.module.css";

export default ({ value }) => {
    return <span className={styles.OptionBox}>{value}</span>;
};
