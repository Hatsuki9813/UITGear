import SideNavigation from "./components/SideNavigation";
import AdsCarousel from "./components/AdsCarousel";
import ProductCarousel from "./components/ProductCarousel";

export default function Home() {
    const imageList = ["/carousel/carousel-6.png", "/carousel/carousel-7.png"];

    const data = {
        img: "/item-test.svg",
        name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
        price: "15000000",
        discountPrice: "12000000",
    };

    const data2 = {
        img: "/item-test.svg",
        name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
        price: "10000",
        discountPrice: "10000",
    };

    const data3 = {
        img: "/logo-2.svg",
        name: "Laptop Acer Nitro 16 Phoenix Gaming AN16-41-R50Z R57640HS 16GB/512GB/Nvidia Geforce RTX4050 6GB/Win11",
        price: "2",
        discountPrice: "1",
    };

    return (
        <div className="flex flex-col flex-1 gap-8">
            <section className="flex flex-row gap-20 flex-1">
                <SideNavigation />
                <AdsCarousel imageList={imageList} />
            </section>

            <ProductCarousel data={[data, data3]} background="bg-gradient-to-b from-[#F9415C] to-[#FD4F47]" title="DEAL SỐC HÔM NAY - GIẢM GIÁ SẬP SÀN" titleColor="text-white" />
            <ProductCarousel data={[data]} background="bg-white" title="LAPTOP" titleColor="text-black" cardItemBorder={1} />
            <ProductCarousel data={[data, data2]} background="bg-gradient-to-b from-[#4DD6CF] to-[#FCD2B3]" title="SẢN PHẨM ĐÃ XEM" titleColor="text-black" cardItemBorder={0} />
        </div>
    );
}
