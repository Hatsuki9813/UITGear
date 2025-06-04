import React, { useState } from "react";
import styles from "./UsuallyAskedButton.module.css";
import {
    FaTruck,
    FaLock,
    FaCcMastercard,
    FaUser,
    FaReceipt,
    FaLayerGroup,
    FaShoppingCart,
} from "react-icons/fa";
import { FaShop } from "react-icons/fa6";
export default function UsuallyAskedButton({ IconComponent, content }) {
    return (
        <div className={styles.UsuallyAskedButtonContainer}>
            {IconComponent && <IconComponent className={styles.ButtonLogo} />}
            <div className={styles.contenttext}>{content}</div>
        </div>
    );
}
UsuallyAskedButton.defaultProps = {
    IconComponent: FaTruck,
    content: "UsuallyAskedButton",
};
