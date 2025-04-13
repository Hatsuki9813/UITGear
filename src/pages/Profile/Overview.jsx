import { useState, useEffect } from "react";
import { UserIcon } from "@heroicons/react/24/outline";
import styles from "./Overview.module.css";
import { useAuthStore } from "../../store/useAuthStore";
import { useProfileStore } from "../../store/useProfileStore";

export const Overview = () => {
  const { editProfile } = useProfileStore();
  const user = useAuthStore((state) => state.user);
  const fetchUser = useAuthStore((state) => state.fetchUser);
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

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  useEffect(() => {
    if (user) {
      setFormData({
        fullname: user.fullname || "",
        dob: user.dob ? new Date(user.dob).toISOString().split("T")[0] : "",
        gender: user.gender || "",
        email: user.email || "",
        phone: user.phone || "",
        address: user.address || "",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await editProfile(formData);
    setIsEditing(false); // Đặt lại chế độ chỉnh sửa sau khi cập nhật
  };

  if (!user) {
    return <p>Đang tải dữ liệu người dùng...</p>;
  }

  return (
    <div className={styles.Overview}>
      <h1>THÔNG TIN CÁ NHÂN</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.avatarContainer}>
          <UserIcon className={styles.avatar} />
        </div>

        {/* Họ và tên */}
        <div>
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

        {/* Ngày sinh */}
        <div>
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
        <div>
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

        {/* Email */}
        <div>
          <span className={styles.title}>Email</span>
          <input
            name="email"
            placeholder="Input here"
            className={styles.inputField}
            value={formData.email}
            onChange={handleChange}
            readOnly={!isEditing}
          />
        </div>

        {/* Số điện thoại */}
        <div>
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

        {/* Địa chỉ */}
        <div>
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

        {/* Nút cập nhật và chỉnh sửa */}
        <div className={styles.buttonGroup}>
          {isEditing && (
            <button
              type="submit"
              onClick={handleSubmit}
              className={styles.confirmButton}
            >
              Cập nhật thông tin
            </button>
          )}
          <button
            type="button"
            className={styles.editButton}
            onClick={() => setIsEditing((prev) => !prev)}
          >
            {isEditing ? "Hủy chỉnh sửa" : "Chỉnh sửa thông tin"}
          </button>
        </div>
      </form>
    </div>
  );
};
