import CardItem from "../../../components/CardItem/CardItem";
import styles from "./ProductList.module.css";

const products = Array.from({ length: 23 }, (_, i) => ({
    name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
    img: "/item-test.svg",
    price: 129000000,
    priceDiscount: 99000000,
}));

export default () => {
    return (
        <div className={`${styles.ProductList} ${styles.container}`}>
            <div className={styles.list}>
                {products.map((product, index) => (
                    <CardItem
                        key={index}
                        data={{
                            name: product.name,
                            img: product.img,
                            price: product.price,
                            discountPrice: product.priceDiscount,
                        }}
                        border={1}
                        whereToUse={"list"}
                    />
                ))}
            </div>
            <div className={styles.buttonContainer}>
                <button>Hiển thị thêm 20 sản phẩm</button>
            </div>
        </div>
    );
};
