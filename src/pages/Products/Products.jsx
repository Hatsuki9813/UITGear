import { useEffect, useState, useRef, use } from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { useProductStore } from "../../store/useProductStore";

export default function ProductPage() {
  const location = useLocation(); // Lấy thông tin từ URL
  const params = new URLSearchParams(location.search); // Lấy brand, category, product_line từ query params
  const { products, fetchProducts, totalPages } = useProductStore();
  const [productsToShow, setProductsToShow] = useState(products);
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

  useEffect(() => {
    setProductsToShow(products);
  }, [products]);

  const handleFilter = ({ brand, ram, storage }) => {
    const filteredProducts = products.filter((product) => {
      const productBrand = (product.brand || "").toLowerCase();
      const productRam = (product.specification_obj?.ram || "").toLowerCase();
      const productStorage = (
        product.specification_obj?.storage || ""
      ).toLowerCase();

      const matchesBrand = Array.isArray(brand)
        ? brand.length === 0
          ? true
          : brand.some((b) => productBrand.includes((b || "").toLowerCase()))
        : brand
        ? productBrand.includes((brand || "").toLowerCase())
        : true;

      const matchesRam = Array.isArray(ram)
        ? ram.length === 0
          ? true
          : ram.some((r) => productRam.includes((r || "").toLowerCase()))
        : ram
        ? productRam.includes((ram || "").toLowerCase())
        : true;

      const matchesStorage = Array.isArray(storage)
        ? storage.length === 0
          ? true
          : storage.some((s) =>
              productStorage.includes((s || "").toLowerCase())
            )
        : storage
        ? productStorage.includes((storage || "").toLowerCase())
        : true;

      return matchesBrand && matchesRam && matchesStorage;
    });

    setProductsToShow(filteredProducts);
  };
  console.log(productsToShow, "productsToShow");
  return (
    <div>
      <FilterBar
        onFilter={handleFilter}
        products={products}
        category={params.get("category")}
        onSort={handleSort}
      />
      <ProductList products={productsToShow} />
      <div>
        {totalPages > 1 && (
          <button
            onClick={() =>
              setPage((prev) => (prev < totalPages ? prev + 1 : prev))
            }
            disabled={page >= totalPages}
          >
            Xem thêm
          </button>
        )}
      </div>
    </div>
  );
}
