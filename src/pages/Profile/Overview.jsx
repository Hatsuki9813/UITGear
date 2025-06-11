import { useState, useEffect, useRef } from "react";
import { CameraIcon, TrashIcon } from "@heroicons/react/24/outline";
import styles from "./Overview.module.css";
import { useAuthStore } from "../../store/useAuthStore";
import { useProfileStore } from "../../store/useProfileStore";
import AvatarCropper from "./components/AvatarCropper";

export const Overview = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isCropping, setIsCropping] = useState(false);
    const fileInputRef = useRef();
    const { editProfile } = useProfileStore();
    const user = useAuthStore((state) => state.user);
    const fetchUser = useAuthStore((state) => state.fetchUser);
    const changePassword = useAuthStore((state) => state.changePassword);
    const [isSubmit, setIsSubmit] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        dob: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
        profilePicture: "",
    });
    const [cloneFormData, setCloneFormData] = useState({});
    const [changePasswordData, setChangePasswordData] = useState({
        email: user?.email || "",
        oldPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            setFormData({
                fullname: user.fullname || "",
                dob: user.dob ? new Date(user.dob).toISOString().split("T")[0] : "",
                gender: user.gender || "",
                email: user.email || "",
                phone: user.phone || "",
                address: user.address || "",
                profilePicture: user.profilePicture || "",
            });
        }
    }, [user]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value || "",
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await editProfile(formData);
        setIsSubmit(true);
        setIsEditing(false); // Đặt lại chế độ chỉnh sửa sau khi cập nhật
    };

    const handleChangePassword = (e) => {
        const { name, value } = e.target;
        setChangePasswordData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleChangePasswordSubmit = async (e) => {
        e.preventDefault();
        changePassword(changePasswordData);
    };

    useEffect(() => {
        if (isEditing) {
            // Lưu lại dữ liệu ban đầu khi bắt đầu chỉnh sửa
            setCloneFormData({ ...formData });
        } else {
            if (isSubmit) return;
            setFormData({ ...cloneFormData });
            setIsSubmit(false);
        }
    }, [isEditing]);

    if (!user) {
        return <div>Đang tải dữ liệu người dùng...</div>;
    }

    return (
        <div className={styles.Overview}>
            <h1>THÔNG TIN CƠ BẢN</h1>
            <form onSubmit={handleSubmit}>
                <div style={{ display: "flex", justifyContent: "space-between", flex: 1 }}>
                    <div
                        className={styles.avatarContainer}
                        style={{ cursor: isEditing ? "pointer" : "default" }}
                        onClick={() => {
                            if (isEditing && fileInputRef.current) fileInputRef.current.click();
                        }}>
                        {isEditing && (
                            <div
                                className={styles.removeAvatar}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    if (isEditing) {
                                        setFormData((prev) => ({
                                            ...prev,
                                            profilePicture: "",
                                        }));
                                    }
                                }}>
                                <TrashIcon className={styles.removeIcon} />
                            </div>
                        )}
                        {formData.profilePicture ? (
                            <img
                                src={formData.profilePicture}
                                alt="avatar"
                                className={styles.avatar}
                                title={isEditing ? "Click để thay đổi ảnh đại diện" : ""}
                            />
                        ) : (
                            <CameraIcon style={{ width: "48px", height: "48px" }} />
                        )}
                        <input
                            type="file"
                            accept="image/*"
                            style={{ display: "none" }}
                            ref={fileInputRef}
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                        setSelectedImage(reader.result); // base64
                                        setIsCropping(true);
                                    };
                                    reader.readAsDataURL(file);
                                }
                            }}
                        />
                    </div>
                    {/* Nút cập nhật và chỉnh sửa */}
                    <div className={styles.buttonGroup}>
                        {isEditing && (
                            <button
                                type="submit"
                                onClick={handleSubmit}
                                style={{ backgroundColor: "#2E6F40" }}
                                className={styles.confirmButton}>
                                Cập nhật thông tin
                            </button>
                        )}
                        <button
                            type="button"
                            className={styles.confirmButton}
                            onClick={() => setIsEditing((prev) => !prev)}>
                            {isEditing ? "Hủy chỉnh sửa" : "Chỉnh sửa thông tin"}
                        </button>
                    </div>
                </div>

                <div>
                    {/* Họ và tên */}
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>Họ và tên</span>
                        <input
                            name="fullname"
                            placeholder="Input here"
                            className={styles.inputField}
                            value={formData.fullname}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </div>

                    {/* Địa chỉ */}
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>Địa chỉ</span>
                        <input
                            name="address"
                            placeholder="Input here"
                            className={styles.inputField}
                            value={formData.address}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </div>
                </div>
                <div>
                    {/* Ngày sinh */}
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>Ngày sinh</span>
                        <input
                            name="dob"
                            type="date"
                            className={styles.inputField}
                            value={formData.dob}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </div>
                    {/* Giới tính */}
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>Giới tính</span>
                        <div className={styles.genderContainer}>
                            {["Male", "Female", "Other"].map((gender) => (
                                <div key={gender} style={{ display: "flex", gap: "0.5rem" }}>
                                    <input
                                        type="radio"
                                        value={gender}
                                        name="gender"
                                        checked={formData.gender === gender}
                                        disabled={!isEditing}
                                        onChange={handleChange}
                                    />
                                    <span>
                                        {gender === "Male"
                                            ? "Nam"
                                            : gender === "Female"
                                            ? "Nữ"
                                            : "Khác"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div>
                    {/* Email */}
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>Email</span>
                        <input
                            name="email"
                            className={styles.inputField}
                            value={formData.email}
                            disabled
                        />
                    </div>
                    {/* Số điện thoại */}
                    <div className={styles.infoBlock}>
                        <span className={styles.title}>Số điện thoại</span>
                        <input
                            name="phone"
                            placeholder="Input here"
                            className={styles.inputField}
                            value={formData.phone}
                            onChange={handleChange}
                            readOnly={!isEditing}
                        />
                    </div>
                </div>
            </form>
            <h1 style={{ marginTop: "40px" }}>THAY ĐỔI MẬT KHẨU</h1>
            <form style={{ padding: "0px 250px" }}>
                <div className={styles.infoBlock}>
                    <span className={styles.title}>Mật khẩu hiện tại</span>
                    <input
                        name="oldPassword"
                        placeholder="Nhập mật khẩu hiện tại"
                        className={styles.inputField}
                        value={changePasswordData.oldPassword}
                        onChange={handleChangePassword}
                        type="password"
                    />
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.title}>Mật khẩu mới</span>
                    <input
                        name="newPassword"
                        placeholder="Nhập mật khẩu mới"
                        className={styles.inputField}
                        value={changePasswordData.newPassword}
                        onChange={handleChangePassword}
                        type="password"
                    />
                </div>
                <div className={styles.infoBlock}>
                    <span className={styles.title}>Xác nhận mật khẩu mới</span>
                    <input
                        name="confirmPassword"
                        placeholder="Nhập lại mật khẩu mới"
                        className={styles.inputField}
                        value={changePasswordData.confirmPassword}
                        onChange={handleChangePassword}
                        type="password"
                    />
                </div>
                <button
                    onClick={handleChangePasswordSubmit}
                    style={{ alignSelf: "center" }}
                    className={styles.confirmButton}>
                    Đổi mật khẩu
                </button>
            </form>
            {isCropping && (
                <AvatarCropper
                    image={selectedImage}
                    onCancel={() => setIsCropping(false)}
                    onComplete={(croppedImage) => {
                        setFormData((prev) => ({
                            ...prev,
                            profilePicture: croppedImage || "",
                        }));
                        setIsCropping(false);
                    }}
                />
            )}
        </div>
    );
};
