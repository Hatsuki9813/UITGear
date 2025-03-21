import React, { useRef, useState } from "react"
import styles from './Otp.module.css'
import Nav from 'react-bootstrap/Nav';
import { FaPenToSquare } from "react-icons/fa6";
import Button from 'react-bootstrap/Button';
import { FaArrowRight } from "react-icons/fa";
export default function otp({ length = 6, onComplete }) {
  const inputRef = useRef(Array(length).fill(null))

  // if you're not using Typescript, do useState()
  const [OTP, setOTP] = useState(Array(length).fill(""))

  const handleTextChange = (input, index) => {
    const newPin = [...OTP]
    newPin[index] = input
    setOTP(newPin)

    // check if the user has entered the first digit, if yes, automatically focus on the next input field and so on.

    if (input.length === 1 && index < length - 1) {
      inputRef.current[index + 1]?.focus()
    }

    if (input.length === 0 && index > 0) {
      inputRef.current[index - 1]?.focus()
    }

    // if the user has entered all the digits, grab the digits and set as an argument to the onComplete function.

    if (newPin.every(digit => digit !== "")) {
      onComplete(newPin.join(""))
    }
  }
  return (
    <div className={styles.FormContainer}>
        <div className={styles.Header}>
        </div>
        <div className={styles.HeaderText}>Nhập mã xác thực</div>
        <div className={styles.SubHeaderText}>Mã OTP đã được gửi đến email của bạn, có hiệu lực trong 00:30</div>
        <Nav className={styles.links}><Nav.Link>Đổi địa chỉ email</Nav.Link></Nav>
        <div className={styles.OTPContainer}> 
        {Array.from({ length }, (_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={OTP[index]}
          onChange={e => handleTextChange(e.target.value, index)}
          ref={ref => (inputRef.current[index] = ref)}
          style={{ marginRight: index === length - 1 ? "0" : "10px" }}
        />
      ))}

        <Button className={styles.SubmitButton}>
        Xác nhận
      </Button>
      <Nav className={styles.links}><Nav.Link>Gửi lại mã</Nav.Link></Nav>

      </div>
    </div>
  )
}
