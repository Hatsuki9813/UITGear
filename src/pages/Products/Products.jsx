import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Thêm useParams
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { useProductStore } from "../../store/useProductStore";

export default function ProductPage() {
  const { slug } = useParams(); // Lấy slug từ URL
  const { products, fetchProducts, totalPages } = useProductStore();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("price");
  const [order, setOrder] = useState("desc");
  const [loading, setLoading] = useState(false);
  // Fetch products khi page/sort/order/slug thay đổi
  useEffect(() => {
    fetchProducts({ slug, page, limit: 20, sort, order }); // Thêm slug vào fetchProducts
  }, [slug, page, sort, order, fetchProducts]);

  const handleSort = (type) => {
    if (type === "name") {
      setSort("name");
      setOrder("asc");
    } else if (type === "price") {
      setSort("price");
      setOrder("desc");
    }
  };
  if (products.length === 0) {
    return <div>No products available.</div>;
  }
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "white",
        borderRadius: "0.25rem",
        padding: "1rem",
      }}
    >
      <FilterBar onSort={handleSort} />
      {loading ? (
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          Loading products...
        </div>
      ) : products && products.length > 0 ? (
        <ProductList products={products} />
      ) : (
        <div>No products available.</div>
      )}
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        <button
          onClick={() =>
            setPage((prev) => (prev < totalPages ? prev + 1 : prev))
          }
          disabled={page >= totalPages}
        >
          Xem thêm
        </button>
      </div>
    </div>
  );
}
