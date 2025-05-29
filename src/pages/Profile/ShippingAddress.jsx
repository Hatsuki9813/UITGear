import { useEffect, useState } from "react";

import AddressRow from "./components/AddressRow";
import AddressEditPopup from "./components/AddressEditPopup";

import styles from "./ShippingAddress.module.css";

import { useAddressStore } from "../../store/useAddressStore";
import { useAuthStore } from "../../store/useAuthStore"; // import hook auth

export const ShippingAddress = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const { addresses, initializeAddresses, deleteAddress } = useAddressStore();
    const [selectedAddress, setSelectedAddress] = useState(null);
    const user = useAuthStore((state) => state.user);

    const openAddPopup = () => {
        setIsEditing(false); // Chế độ thêm mới
        setIsOpen(true);
    };

    const openEditPopup = (address) => {
        setIsEditing(true); // Chế độ cập nhật
        setIsOpen(true);
        setSelectedAddress(address.index);
    };

    useEffect(() => {
        if (user && user.shippingAddresses) {
            initializeAddresses(); // chỉ chạy khi user có dữ liệu
        }
    }, [user]);

    return (
        <div className={styles.ShippingAddress}>
            <h1>ĐỊA CHỈ GIAO HÀNG</h1>

            {addresses.length === 0 && <div>Bạn chưa có địa chỉ giao hàng nhanh nào.</div>}

            <button className={styles.addButton} onClick={openAddPopup}>
                Thêm địa chỉ mới
            </button>

            <div className={styles.list}>
                {addresses.map((addr, index) => (
                    <AddressRow
                        key={index}
                        data={addr}
                        onEdit={openEditPopup}
                        onDelete={(address) => {
                            if (confirm("Bạn có chắc chắn muốn xoá địa chỉ này?")) {
                                deleteAddress(address.index);
                            }
                        }}
                    />
                ))}
            </div>

            {/* Hiển thị Popup */}
            <AddressEditPopup
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                isEditing={isEditing}
                data={
                    isEditing ? addresses.find((addr) => addr.index === selectedAddress) : undefined
                }
            />
        </div>
    );
};
