import { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";
import { useProductStore } from "../../store/useProductStore";

export default function ProductPage() {
    const location = useLocation(); // Lấy thông tin từ URL
    const params = new URLSearchParams(location.search); // Lấy brand, category, product_line từ query params
    const { products, fetchProducts, fetchSearchProducts, totalPages } = useProductStore();
    const [productsToShow, setProductsToShow] = useState(products);
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("price");
    const [order, setOrder] = useState("desc");

    const prevParams = useRef({
        brand: params.get("brand"),
        category: params.get("category"),
        product_line: params.get("product_line"),
    });

    const query = params.get("q") || "";

    useEffect(() => {
        const brand = params.get("brand") || "";
        const category = params.get("category") || "";
        const product_line = params.get("product_line") || "";

        // Nếu có query tìm kiếm => Ưu tiên tìm kiếm
        if (query) {
            fetchSearchProducts(query);
            return; // Ngăn không cho chạy block filter
        }

        // Không có query => xử lý filter như cũ
        const shouldReset =
            brand !== prevParams.current.brand ||
            category !== prevParams.current.category ||
            product_line !== prevParams.current.product_line ||
            sort !== prevParams.current.sort ||
            order !== prevParams.current.order;

        if (shouldReset) {
            prevParams.current = { brand, category, product_line, sort, order };
            setPage(1);
            fetchProducts({
                brand,
                category,
                product_line,
                page: 1,
                limit: 20,
                sort,
                order,
            });
        }
    }, [location.pathname, location.search, sort, order]);

    useEffect(() => {
        if (!query) {
            const brand = params.get("brand") || "";
            const category = params.get("category") || "";
            const product_line = params.get("product_line") || "";

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
    }, [page]);

    const handleSort = (type, sortOrder) => {
        setSort(type);
        setOrder(sortOrder);
        setPage(1); // Reset về trang 1 khi thay đổi sort
    };

    useEffect(() => {
        if (page === 1) {
            setProductsToShow(products);
            console.log("Products reset to initial state");
        } else {
            setProductsToShow((prev) => [...prev, ...products]);
            console.log("Products updated with new data");
        }
    }, [products]);

    const handleFilter = ({ brand, ram, storage }) => {
        const filteredProducts = products.filter((product) => {
            const productBrand = (product.brand || "").toLowerCase();
            const productRam = (product.specification_obj?.ram || "").toLowerCase();
            const productStorage = (product.specification_obj?.storage || "").toLowerCase();

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
                    : storage.some((s) => productStorage.includes((s || "").toLowerCase()))
                : storage
                ? productStorage.includes((storage || "").toLowerCase())
                : true;

            return matchesBrand && matchesRam && matchesStorage;
        });

        setProductsToShow(filteredProducts);
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <FilterBar
                onFilter={handleFilter}
                products={products}
                category={params.get("category") || "default"}
                onSort={handleSort}
            />
            {query != "" && (
                <span
                    style={{
                        fontSize: "1.25rem",
                        flex: 1,
                        alignSelf: "center",
                    }}>
                    Hiển thị kết quả tìm kiếm theo "<b>{query}</b>"
                </span>
            )}
            <ProductList products={productsToShow} />
            <div style={{ display: "flex", justifyContent: "center" }}>
                {totalPages > 1 && (
                    <button
                        style={{
                            border: "2px solid #02457a",
                            borderRadius: "0.25rem",
                            backgroundColor: "#02457a",
                            color: "white",
                            padding: "0.5rem 2rem",
                            fontWeight: "500",
                            opacity: page >= totalPages ? 0.5 : 1,
                            cursor: page >= totalPages ? "not-allowed" : "pointer",
                        }}
                        onClick={() => setPage((prev) => (prev < totalPages ? prev + 1 : prev))}
                        disabled={page >= totalPages}>
                        Xem thêm 20 sản phẩm
                    </button>
                )}
            </div>
        </div>
    );
}
