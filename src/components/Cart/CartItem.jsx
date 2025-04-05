import React, {useState} from 'react'
import reactlogo from '../../assets/react.svg'
import styles from './CartItem.module.css'
import Form from 'react-bootstrap/Form';
import { TiDeleteOutline } from "react-icons/ti";
import Button from 'react-bootstrap/Button';

export default function CartItem() {
  const [count, setCount] = useState(1);

  const decrease = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increase = () => {
    setCount(count + 1);
  };


  return (
    <div className={styles.CartItemContainer}> 
     <div className={styles.ItemContainer}>
      <div className={styles.ProductInfo}> 
      <TiDeleteOutline />
        <img src={reactlogo} alt="product" className={styles.ProductImage}/>
        <p className={styles.ProductName}>Laptop Gaming Lenovo LOQ 15IAX9 83GS000RVN</p>
        <p className={styles.Price}>15000000đ</p>
    <div className={styles.IncreaseDecreaseContainer}>
      <button onClick={decrease} disabled={count === 1} className={styles.IncreaseDecrease}>-</button>
      <span>{count}</span>
      <button onClick={increase} className={styles.IncreaseDecrease}>+</button>
    </div>
    </div>
    <div className={styles.CouponContainer}>
    <div className={styles.CouponHeader}>Chọn gói giảm giá</div>
    <Form.Check // prettier-ignore
            type='radio'
            id={`default-radio`}
            label={`Giảm 10% trực tiếp vào giá máy`}
          />
          <Form.Check // prettier-ignore
            type='radio'
            id={`default-radio`}
            label={`Tặng thêm ram 16gb`}
          />
    </div>
    </div>
    </div>
  )
}
