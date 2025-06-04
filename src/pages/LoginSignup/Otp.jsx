import React, { useRef, useState } from "react";
import styles from "./Otp.module.css";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";
import { useAuthStore } from "../../store/useAuthStore";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Sử dụng useNavigate

export default function Otp({ length = 6, onComplete }) {
  const inputRef = useRef(Array(length).fill(null));
  const navigate = useNavigate(); // Khởi tạo useNavigate

  const handleTextChange = (input, index) => {
    const newPin = [...OTP];
    newPin[index] = input;
    setOTP(newPin);

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus();
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus();
    }
  };

  const { otpVerify, email } = useAuthStore();

  const [OTP, setOTP] = useState(Array(length).fill(""));

  // Gửi lên server khi bấm nút
  const handleSubmit = async () => {
    const otpString = OTP.join("");
    await otpVerify(email, otpString);
    navigate("/changepassword"); // Chuyển hướng đến trang đăng nhập sau khi xác thực thành công
  };

  return (
    <div className={styles.FormContainer}>
      <div className={styles.Header}></div>
      <div className={styles.HeaderText}>Nhập mã xác thực</div>
      <div className={styles.SubHeaderText}>
        Mã OTP đã được gửi đến email của bạn, có hiệu lực trong 00:30
      </div>

      <Nav className={styles.links}>
        <Link to="/forgotpassword">Đổi địa chỉ email</Link>
      </Nav>

      <div className={styles.OTPContainer}>
        {Array.from({ length }, (_, index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            value={OTP[index]}
            onChange={(e) => handleTextChange(e.target.value, index)}
            ref={(ref) => (inputRef.current[index] = ref)}
            style={{ marginRight: index === length - 1 ? "0" : "10px" }}
          />
        ))}

        <Button
          type="button"
          className={styles.SubmitButton}
          onClick={handleSubmit}
        >
          Xác nhận
        </Button>

        <Nav className={styles.links}>
          <Nav.Link>Gửi lại mã</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}
