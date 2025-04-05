import Info from "../components/Info";
import Specifications from "../components/Specifications";

export default () => {
    return (
        <div
            style={{
                display: "flex",
                flex: 1,
                flexWrap: "wrap",
                height: "fit-content",
                gap: "2rem",
            }}
        >
            <Info />
            <Specifications />
        </div>
    );
};
