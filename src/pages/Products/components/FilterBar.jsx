import FilterButton from "./FilterButton";
import SortButton from "./SortButton";

export default () => {
    return (
        <div className="flex flex-row flex-1 justify-between">
            <FilterButton />
            <SortButton />
        </div>
    );
};
