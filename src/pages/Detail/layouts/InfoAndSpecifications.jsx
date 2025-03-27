import Info from "../components/Info";
import Specifications from "../components/Specifications";

export default () => {
    return (
        <div className="flex flex-1 flex-wrap h-fit gap-8">
            <Info />
            <Specifications />
        </div>
    );
};
