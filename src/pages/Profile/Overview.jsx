import { UserIcon } from "@heroicons/react/24/outline";
import styles from "./Overview.module.css";

export default () => {
    return (
        <div className={styles.Overview}>
            <h1>THÔNG TIN CÁ NHÂN</h1>
            <form>
                <div>
                    <div className={styles.avatarContainer}>
                        <UserIcon className={styles.avatar} />
                    </div>
                </div>
                <div>
                    <span className={styles.title}>Họ và tên</span>
                    <input placeholder="Input here" className={styles.inputField}></input>
                </div>
                <div>
                    <span className={styles.title}>Ngày sinh</span>
                    <input type="date" placeholder="Input here" className={styles.inputField}></input>
                </div>
                <div>
                    <span className={styles.title}>Giới tính</span>
                    <div className={styles.genderContainer}>
                        <div
                            style={{
                                display: "flex",
                                gap: "0.5rem",
                            }}
                        >
                            <input type="radio" value="Nam" name="gender-radio" placeholder="Input here" />
                            <span>Nam</span>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                gap: "0.5rem",
                            }}
                        >
                            <input type="radio" value="Nữ" name="gender-radio" placeholder="Input here" />
                            <span>Nữ</span>
                        </div>
                    </div>
                </div>
                <div>
                    <span className={styles.title}>Email</span>
                    <input placeholder="Input here" className={styles.inputField}></input>
                </div>
                <div>
                    <span className={styles.title}>Số điện thoại</span>
                    <input placeholder="Input here" className={styles.inputField}></input>
                </div>
                <div>
                    <span className={styles.title}>Địa chỉ</span>
                    <input placeholder="Input here" className={styles.inputField}></input>
                </div>
                <button className={styles.confirmButton}>Cập nhật thông tin</button>
            </form>
        </div>
    );
};
