import React from "react";
import styles from "./OrderFind.module.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";

export default function OrderFind() {
    return (
        <div className={styles.OrderFindContainer}>
            <div className={styles.HeaderText}>Trạng thái đơn hàng</div>
            <div className={styles.contenttext}>
                Để theo dõi đơn hàng của bạn, vui lòng nhập ID đơn hàng của bạn vào trường nhập bên
                dưới và nhấn nút “Theo dõi đơn hàng”. Thông tin này đã được trao cho bạn trên biên
                nhận và trong email xác nhận mà lẽ ra bạn phải nhận được.
            </div>
            <Form>
                <Form.Group className={styles.form}>
                    <div className="row">
                        <div className="col-sm">
                            <Form.Label>Nhập mã đơn hàng</Form.Label>
                            <Form.Control type="text" />
                        </div>
                        <div className="col-sm">
                            <Form.Label>Nhập email</Form.Label>
                            <Form.Control type="text" />
                        </div>
                    </div>
                </Form.Group>
            </Form>
            <Button className={styles.SubmitButton}>
                THEO DÕI ĐƠN HÀNG
                <FaArrowRight className={styles.loginicon} />
            </Button>
        </div>
    );
}
