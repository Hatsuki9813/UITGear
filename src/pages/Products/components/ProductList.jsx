import CardItem from "../../../components/CardItem/CardItem";
import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  return (
    <div className={`${styles.ProductList} ${styles.container}`}>
      <div className={styles.list}>
        {products.map((product, index) => (
          <CardItem
            key={index}
            data={{
              name: product.name,
              img: product.img_obj?.productimg,
              price: product.price,
              discountPrice: product.price / (product.discount / 9),
              id: product._id,
            }}
            border={1}
            whereToUse={"list"}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
