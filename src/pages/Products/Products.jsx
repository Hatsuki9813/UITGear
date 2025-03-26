import FilterBar from "./components/FilterBar";
import ProductList from "./components/ProductList";

export default () => {
    return (
        <div className="flex flex-col flex-1 bg-white rounded-sm shadow-md px-4 py-4">
            <FilterBar />
            <ProductList />
        </div>
    );
};
