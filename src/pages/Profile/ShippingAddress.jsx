import { useState } from "react";

import AddressRow from "./components/AddressRow";
import AddressEditPopup from "./components/AddressEditPopup";

import styles from "./ShippingAddress.module.css";

export const ShippingAddress = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const openAddPopup = () => {
    setIsEditing(false); // Chế độ thêm mới
    setIsOpen(true);
  };

  const openEditPopup = () => {
    setIsEditing(true); // Chế độ cập nhật
    setIsOpen(true);
  };

  return (
    <div className={styles.ShippingAddress}>
      <h1>ĐỊA CHỈ GIAO HÀNG</h1>
      <button className={styles.addButton} onClick={openAddPopup}>
        Thêm địa chỉ mới
      </button>

      <div className={styles.list}>
        <AddressRow edit={openEditPopup} defaultAddress={true} />
        <AddressRow edit={openEditPopup} />
        <AddressRow edit={openEditPopup} />
      </div>

      {/* Hiển thị Popup */}
      <AddressEditPopup
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        isEditing={isEditing}
      />
    </div>
  );
};
