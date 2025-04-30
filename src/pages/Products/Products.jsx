import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom"; // Lấy các tham số từ URL
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { useProductStore } from "../../store/useProductStore";

export default function ProductPage() {
  const location = useLocation(); // Lấy thông tin từ URL
  const params = new URLSearchParams(location.search); // Lấy brand, category, product_line từ query params
  const { products, fetchProducts, totalPages } = useProductStore();
  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("price");
  const [order, setOrder] = useState("desc");

  const prevParams = useRef({
    brand: params.get("brand"),
    category: params.get("category"),
    product_line: params.get("product_line"),
  });

  // Fetch products khi các tham số thay đổi
  useEffect(() => {
    const brand = params.get("brand") || "";
    const category = params.get("category") || "";
    const product_line = params.get("product_line") || "";

    // So sánh các tham số hiện tại với các tham số cũ trong useRef
    if (
      brand !== prevParams.current.brand ||
      category !== prevParams.current.category ||
      product_line !== prevParams.current.product_line
    ) {
      prevParams.current = { brand, category, product_line }; // Cập nhật tham số cũ

      fetchProducts({
        brand,
        category,
        product_line,
        page,
        limit: 20,
        sort,
        order,
      });
    }
  }, [params, page, sort, order, fetchProducts]);

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
    <div>
      <FilterBar onSort={handleSort} />
      <ProductList products={products} />
      <div>
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
