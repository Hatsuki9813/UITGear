import React from 'react'
import styles from './Header.module.css'
import logo from '../../assets/icons/croppedlogonobgr.png'
import InputGroup from 'react-bootstrap/InputGroup'
import Form from 'react-bootstrap/Form';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import avatar from '../../assets/icons/laptop.png'
import { CiUser } from "react-icons/ci";

export default function Header() {
    return (
        <div className={styles.HeaderContainer}>
            <img src={logo} className={styles.logoimg} alt="logo"></img>
            <InputGroup size="sm" className={styles.searchBar}>
                <Form.Control
                    aria-label="Small"
                    aria-describedby="inputGroup-sizing-sm"
                    placeholder='Tìm kiếm...'
                />
                <InputGroup.Text className={styles.searchButton}>
                    <FaSearch /> 
                </InputGroup.Text>
            </InputGroup>
            <div className={styles.avatarcontainer} onClick={() => console.log('clicked')}>
                <CiUser className={styles.avatar} />
            </div>
            <Button className={styles.cartButton}>
                    <FaShoppingCart /> Giỏ hàng
                </Button>
        </div>
        )
}
