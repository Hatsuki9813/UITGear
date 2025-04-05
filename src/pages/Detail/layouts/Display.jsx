import ImageSlider from "../components/ImageSlider";
import Details from "../components/Details";

export default () => {
    return (
        <div
            style={{
                display: "flex",
                flex: 1,
                flexWrap: "wrap",
                backgroundColor: "white",
                borderRadius: "0.375rem", // rounded-md
                height: "fit-content", // h-fit
            }}
        >
            <ImageSlider />
            <Details />
        </div>
    );
};
