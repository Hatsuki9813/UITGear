import Info from "../components/Info";
import Specifications from "../components/Specifications";

export default ({ product }) => {
  console.log("product in InfoAndSpecifications", product);
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
      <Info description_obj={product.description_obj} />
      <Specifications specification_obj={product.specification_obj} />
    </div>
  );
};
