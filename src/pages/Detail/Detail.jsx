import { useEffect } from "react";
import { useParams } from "react-router-dom"; // for dynamic routes like /product/:product_id
import useProductDetail from "../../store/useDetailStore"; // Zustand store for product details
import Display from "./layouts/Display";
import InfoAndSpecifications from "./layouts/InfoAndSpecifications";

export default () => {
  const { product_id } = useParams(); // Get the product_id from the URL
  const { product, isLoading, error, fetchProduct } = useProductDetail(); // Fetch the state from the store
  useEffect(() => {
    if (product_id) {
      fetchProduct(product_id); // Fetch the product details by ID
    }

    return () => {
      // Optional: Clear product details when unmounting (if you want)
      useProductDetail.getState().clearProduct();
    };
  }, [product_id, fetchProduct]);

  if (isLoading) return <div>Đang tải...</div>; // Display loading state
  if (error) return <div>Có lỗi: {error}</div>; // Display error state
  if (!product) return <div>Không tìm thấy sản phẩm!</div>; // If no product found

  console.log("product in detail", product);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        flex: 1,
      }}
    >
      {/* Product Display Section */}
      <Display product={product} />
      {/* Product Info and Specifications Section */}
      <InfoAndSpecifications product={product} />
    </div>
  );
};
