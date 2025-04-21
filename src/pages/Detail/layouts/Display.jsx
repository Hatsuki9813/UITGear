import ImageSlider from "../components/ImageSlider";
import Details from "../components/Details";

const ProductPage = ({ product }) => {
  return (
    <div style={containerStyle}>
      <ImageSlider img_obj={product.img_obj} />
      <Details product={product} />
    </div>
  );
};

const containerStyle = {
  display: "flex",
  flex: 1,
  flexWrap: "wrap",
  backgroundColor: "white",
  borderRadius: "0.375rem", // rounded-md
  height: "fit-content", // h-fit
};

export default ProductPage;
