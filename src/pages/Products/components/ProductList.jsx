import CardItem from "../../../components/CardItem";

const products = Array.from({ length: 23 }, (_, i) => ({
    name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
    img: "/item-test.svg",
    price: 129000000,
    priceDiscount: 99000000,
}));

export default () => {
    return (
        <div className="flex flex-1 flex-col items-center h-fit">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 place-items-center gap-4 py-8">
                {products.map((product, index) => (
                    <CardItem
                        key={index}
                        data={{
                            name: product.name,
                            img: product.img,
                            price: product.price,
                            discountPrice: product.priceDiscount,
                        }}
                        border={1}
                        whereToUse={"list"}
                    />
                ))}
            </div>
            <button className="border-2 rounded-sm transition-colors ease-in duration-200 border-[#02457a] hover:text-white hover:bg-[#02457a] w-fit py-2 px-4 cursor-pointer font-medium">
                Hiển thị thêm 20 sản phẩm
            </button>
        </div>
    );
};
