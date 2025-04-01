import styles from "./Info.module.css";

export default () => {
    return (
        <div className={styles.Info}>
            <div className={styles.header}>GIỚI THIỆU</div>
            <p className={styles.content}>
                MacBook Pro mạnh mẽ nhất từng có ở đây. Với chip M1 Pro hoặc M1 Max cực nhanh - silicon đầu tiên của Apple được thiết kế dành cho các chuyên gia - bạn sẽ có được hiệu năng đột phá và
                thời lượng pin đáng kinh ngạc. Thêm vào đó là màn hình Liquid Retina XDR tuyệt đẹp, camera và âm thanh tốt nhất từng có trên máy tính xách tay Mac và tất cả các cổng bạn cần. Chiếc máy
                tính xách tay đầu tiên thuộc loại này, chiếc MacBook Pro này là một con quái vật. M1 Pro đưa hiệu năng vượt trội của kiến ​​trúc M1 lên một tầm cao mới dành cho người dùng chuyên
                nghiệp..
                <br></br>
                <br></br>
                Ngay cả những dự án đầy tham vọng nhất cũng có thể được xử lý dễ dàng với tối đa 10 lõi CPU, tối đa 16 lõi GPU, Công cụ thần kinh 16 lõi và các công cụ mã hóa và giải mã chuyên dụng hỗ
                trợ codec H.264, HEVC và ProRes.
            </p>
        </div>
    );
};
