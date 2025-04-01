import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";

export default () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                backgroundColor: "white",
                borderRadius: "0.25rem", // rounded-sm
                // boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // shadow-md
                padding: "1rem",
            }}
        >
            <FilterBar />
            <ProductList />
        </div>
    );
};
