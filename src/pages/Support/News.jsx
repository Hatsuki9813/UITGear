import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import styles from './News.module.css';
const newsItems = [
    {
        id: 1,
        title: "Báo cáo tài chính Intel quý I: Lỗ 821 triệu USD, cắt giảm nhân sự trong quý II",
        image: "https://photo2.tinhte.vn/data/attachment-files/2025/04/8716210_Intel-cover.jpg", // đặt ảnh trong thư mục public hoặc import nếu dùng Webpack
        link: "https://tinhte.vn/thread/intel-nova-lake-cong-nghe-chong-chip-foveros-va-emib-se-tao-ra-chip-x3d-cua-doi-xanh.4015797/",
    },
    {
        id: 2,
        title: "Nvidia bị chê vì ra mắt RTX 5060",
        image: "https://images2.thanhnien.vn/528068263637045248/2024/10/17/1bz979igeudx7fj2a1-mdw-1729134944684-17291349476511329194185.jpeg",
        link: "https://tinhte.vn/thread/nvidia-bi-che-vi-ra-mat-rtx-5060-con-amd-thi-vua-tuyen-bo-hiem-ai-can-hon-8gb-ram.4020834/",
    },
    {
        id: 3,
        title: "NVIDIA mất 600 tỷ đô la giá trị vốn hoá sau một đêm vì DeepSeek",
        image: "https://photo2.tinhte.vn/data/attachment-files/2025/01/8628109_cover-nvidia-mat-600-ty-do-vi-deepseek.jpg",
        link: "https://tinhte.vn/thread/nvidia-mat-600-ty-do-la-gia-tri-von-hoa-sau-mot-dem-vi-deepseek.3953407/",
    },
];

export default function News() {
    return (
        <Container fluid className="py-5 px-4">
            <h2 className="text-center mb-4">Tin tức công nghệ</h2>

            <Row className="mt-4 g-4">
                {newsItems.map((item) => (
                    <Col key={item.id} md={6} lg={4}>
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.title}
                                className={styles.newImage}
                            />                            <Card.Body>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                >
                                    {item.title}
                                </a>

                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>

        </Container>
    )
}
