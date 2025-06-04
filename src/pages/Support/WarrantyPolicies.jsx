import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import styles from "./WarrantyPolicies.module.css";
export default function WarrantyPolicies() {
    return (
        <Container fluid className="py-5 px-4">
            <Row>
                <Col lg={10} className="mx-auto">
                    <Card className="p-4 shadow-sm">
                        <h1 className={styles.h1}>Chính sách bảo hành</h1>
                        <div>
                            Tất cả sản phẩm tại UITGear kinh doanh đều là sản phẩm chính hãng và
                            được bảo hành theo đúng chính sách của nhà sản xuất (*). Ngoài ra
                            UITGear cũng hỗ trợ gửi bảo hành miễn phí giúp khách hàng đối với cả sản
                            phẩm do UITGear bán ra và sản phẩm Quý khách mua tại các chuỗi bán lẻ
                            khác.
                        </div>

                        <h5 className="mt-4">Quyền lợi khi mua hàng tại UITGear:</h5>
                        <ListGroup className="mb-3">
                            <ListGroup.Item>
                                Bảo hành đổi sản phẩm mới ngay tại shop trong 30 ngày nếu có lỗi
                                NSX.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Gửi bảo hành chính hãng không mất phí vận chuyển.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Theo dõi tiến độ bảo hành nhanh chóng qua kênh hotline.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Hỗ trợ làm việc với hãng để xử lý phát sinh trong quá trình bảo
                                hành.
                            </ListGroup.Item>
                        </ListGroup>

                        <h5 className="mt-4">Các trường hợp không được bảo hành:</h5>
                        <ListGroup className="mb-3">
                            <ListGroup.Item>Sản phẩm hết hạn bảo hành.</ListGroup.Item>
                            <ListGroup.Item>
                                Đã sửa chữa tại nơi không được ủy quyền.
                            </ListGroup.Item>
                            <ListGroup.Item>Sử dụng sai hướng dẫn gây hư hỏng.</ListGroup.Item>
                            <ListGroup.Item>Lỗi do nước, bụi, kể cả đạt chuẩn IP68.</ListGroup.Item>
                            <ListGroup.Item>
                                Bị nứt vỡ, trầy xước nặng do tác động bên ngoài.
                            </ListGroup.Item>
                            <ListGroup.Item>Rỉ sét, oxy hóa do hóa chất.</ListGroup.Item>
                            <ListGroup.Item>
                                Hư hại do thiên tai, côn trùng, động vật.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Bị khóa tài khoản như iCloud, Samsung Cloud...
                            </ListGroup.Item>
                            <ListGroup.Item>Dùng phần mềm không bản quyền.</ListGroup.Item>
                            <ListGroup.Item>Màn hình có từ 1–4 điểm chết.</ListGroup.Item>
                        </ListGroup>

                        <h5 className="mt-4">Lưu ý:</h5>
                        <ListGroup>
                            <ListGroup.Item>
                                Chính sách bảo hành bắt đầu từ thời điểm xuất hóa đơn.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Mỗi dòng sản phẩm có chính sách riêng tùy Hãng/Nhà cung cấp.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Liên hệ CSKH UITGear: 1800 6616 để biết chi tiết.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Có thể tra cứu tình trạng bảo hành online.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Dữ liệu trong máy có thể bị xóa khi bảo hành, Quý khách nên sao lưu
                                trước.
                            </ListGroup.Item>
                            <ListGroup.Item>
                                Thiết bị bị khóa sẽ không được tiếp nhận bảo hành.
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
