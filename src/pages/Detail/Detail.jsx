import Display from "./layouts/Display";
import InfoAndSpecifications from "./layouts/InfoAndSpecifications";

export default () => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                flex: 1,
            }}
        >
            <Display />
            <InfoAndSpecifications />
        </div>
    );
};
