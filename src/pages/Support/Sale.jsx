import { Container, Row, Col, Card } from 'react-bootstrap';
import styles from './Sale.module.css'; // nếu dùng CSS Module (tùy chọn)

const saleItems = [
    {
        id: 1,
        title: 'Back to School: Giảm giá 10% khi mua laptop mới',
        description: 'Áp dụng đến hết 09/2025',
        image: 'https://vn.store.asus.com/media/wysiwyg/khuyenmai/asusb2s/khuyen-mai-tuu-truong-asus-back-to-school-2023-main-phase-header-mobile.png',
    },
    {
        id: 2,
        title: 'Lenovo x AMD day',
        description: 'Tặng ngay game pass khi mua Laptop Lenovo với chip AMD từ 15/11/2025 - 15/12/2025.',
        image: 'https://www.phucanh.vn/media/news/0212_Postface-LenovoGiangsinh.png',
    },
    {
        id: 3,
        title: 'Vệ sinh laptop miễn phí',
        description: 'Chương trình vệ sinh laptop miễn phí từ ngày 1/12/2025 - 30/12/2025.',
        image: 'https://hacom.vn/media/lib/07-04-2021/6fa34a8167b595ebcca4.jpg',
    },
];

export default function Sale() {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-4">Chương trình khuyến mãi nổi bật</h2>
            <Row>
                {saleItems.map((item) => (
                    <Col key={item.id} md={6} lg={4} className="mb-4">
                        <Card className="h-100 shadow-sm">
                            <Card.Img
                                variant="top"
                                src={item.image}
                                alt={item.title}
                                className={styles.saleImage}
                            />
                            <Card.Body>
                                <Card.Title>{item.title}</Card.Title>
                                <Card.Text>{item.description}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
