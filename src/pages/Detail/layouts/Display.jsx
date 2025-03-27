import ImageSlider from "../components/ImageSlider";
import Details from "../components/Details";

export default () => {
    return (
        <div className="flex flex-1 flex-wrap bg-white lg:flex-nowrap rounded-md h-fit shadow-md">
            <ImageSlider />
            <Details />
        </div>
    );
};
