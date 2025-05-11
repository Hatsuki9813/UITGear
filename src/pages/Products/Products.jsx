import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import { FilterBar } from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { useProductStore } from "../../store/useProductStore";

export default function ProductPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const { products, fetchProducts, totalPages } = useProductStore();

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("price");
  const [order, setOrder] = useState("desc");

  const prevParams = useRef({
    brand: params.get("brand"),
    category: params.get("category"),
    product_line: params.get("product_line"),
  });

  useEffect(() => {
    const brand = params.get("brand") || "";
    const category = params.get("category") || "";
    const product_line = params.get("product_line") || "";

    if (
      brand !== prevParams.current.brand ||
      category !== prevParams.current.category ||
      product_line !== prevParams.current.product_line ||
      sort !== prevParams.current.sort ||
      order !== prevParams.current.order
    ) {
      prevParams.current = { brand, category, product_line, sort, order };

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
  }, [location.search, page, sort, order]);

  const handleSort = (type, sortOrder) => {
    setSort(type);
    setOrder(sortOrder);
    setPage(1); // Reset về trang 1 khi thay đổi sort
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
