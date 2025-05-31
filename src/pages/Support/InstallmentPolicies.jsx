import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { ListGroup } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import styles from "./WarrantyPolicies.module.css";
export default function InstallmentPolicies() {
    return (
        <Container fluid className="py-5 px-4">
            <Row>
                <Col lg={10} className="mx-auto">
                    <Card className="p-4 shadow-sm">
                        <h1 className={styles.h1}>Chính sách trả góp</h1>
                        <div>
                            Nhằm mang tới sự thuận tiện trong quá trình mua hàng, giúp Quý khách
                            nhanh chóng sở hữu sản phẩm mong muốn, đi kèm với đó là các chương trình
                            hấp dẫn. UITGear cung cấp dịch vụ trả góp đa dạng, dễ dàng tiếp cận,
                            trong đó bao gồm trả góp qua thẻ tín dụng, trả góp qua Kredivo, trả góp
                            qua Home PayLater, trả góp qua MoMo và trả góp qua Công ty tài chính.
                        </div>

                        <h5 className="mt-4">Trả góp qua thẻ tín dụng:</h5>
                        <span>
                            Hiệu lực còn lại của thẻ phải lớn hơn kỳ hạn trả góp, riêng MB, Kiên
                            Long Bank thì hiệu lực của thẻ phải lớn hơn kỳ hạn trả góp ít nhất (01)
                            tháng. Số dư thẻ phải lớn hơn hoặc bằng tổng giá trị trả góp. Khách hàng
                            phải nhập đúng số thẻ, ngày hết hạn và số CVV khi thực hiện giao dịch.
                            Thời gian trả góp 3, 6, 9, 12, 15, 18, 24, 36 tháng (tuỳ từng ngân
                            hàng). Số lần mua trả góp tuỳ thuộc vào hạn mức thẻ tín dụng. Giá trị
                            thanh toán phải đạt số tiền trả góp tối thiểu như sau:
                            <ul>
                                <li>Từ 500.000đ trở lên với Muadee by HDBank.</li>

                                <li>Từ 1.000.000đ trở lên với NCB, Sacombank.</li>

                                <li>
                                    Từ 2.000.000đ trở lên đối với Techcombank, VIB, Home Credit và
                                    Lotte Finance.
                                </li>

                                <li>Từ 3.000.000đ trở lên đối với các ngân hàng còn lại.</li>
                            </ul>
                        </span>

                        <h5 className="mt-4">Trả góp qua MoMo</h5>
                        <span>
                            Chương trình trả góp MoMo áp dụng cho các sản phẩm chính thuộc ngành
                            hàng Apple, gồm: iPhone, iPad, Apple Watch, MacBook, iMac, Màn hình
                            Apple. Ngoài ra, khách hàng có thể mua thêm các sản phẩm phụ đi kèm như
                            phụ kiện hoặc dịch vụ tại UITGear, tạo điều kiện thuận lợi để bạn sở hữu
                            trọn bộ sản phẩm mong muốn.
                            <h6>Điều kiện và quy định áp dụng</h6>
                            <ul>
                                <li>
                                    <strong>Khách hàng được MoMo cấp hạn mức: </strong>
                                    Trước tiên, khách hàng cần có tài khoản MoMo với hạn mức được
                                    phê duyệt sẵn. Quá trình này rất dễ dàng và bạn có thể hoàn tất
                                    trong vài phút ngay trên ứng dụng MoMo.
                                </li>
                                <li>
                                    <strong> Điều kiện đối với sản phẩm Apple: </strong>
                                    Sau khi xuất hóa đơn, khách hàng cần khui seal và kích hoạt máy
                                    tại cửa hàng UITGear. Điều này nhằm đảm bảo sản phẩm là mới 100%
                                    và không có lỗi kỹ thuật trước khi giao đến tay khách hàng.
                                </li>
                                <li>
                                    <strong> Quy định về giá trị khoản vay: </strong>
                                    Tổng giá trị khoản vay cho đơn hàng trả góp qua MoMo dao động từ
                                    3 triệu đồng đến tối đa 100 triệu đồng. Mỗi đơn hàng trả góp chỉ
                                    được phép mua 1 sản phẩm chính, đồng thời có thể mua kèm tối đa
                                    5 sản phẩm phụ (bao gồm phụ kiện và dịch vụ). Tổng giá trị các
                                    sản phẩm phụ không được vượt quá 5 triệu đồng và không được
                                    nhiều hơn giá trị sản phẩm chính.
                                </li>
                                <li>
                                    <strong> Chính sách hoàn hủy: </strong>
                                    Hợp đồng trả góp sau khi đã hoàn tất và kích hoạt khoản vay sẽ
                                    không được hoàn hoặc hủy dưới bất kỳ hình thức nào. UITGear chỉ
                                    chấp nhận trả hàng trong trường hợp khoản vay đã được tất toán.
                                </li>
                            </ul>
                        </span>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}
