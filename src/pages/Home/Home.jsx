import styles from "./Home.module.css";

// import SideNavigation from "./components/SideNavigation";
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
        <div className={styles.HomeContainer}>
            {/* <section>
                <SideNavigation />
            </section> */}
            <AdsCarousel imageList={imageList} />
            <ProductCarousel data={[data, data2, data3]} background="linear-gradient(to bottom, #F9415C, #FD4F47)" title="DEAL SỐC HÔM NAY - GIẢM GIÁ SẬP SÀN" titleColor="white" />
            <ProductCarousel data={[data]} background="white" title="LAPTOP" titleColor="black" cardItemBorder={1} />
            <ProductCarousel data={[data, data2]} background="linear-gradient(to bottom, #4DD6CF, #FCD2B3)" title="SẢN PHẨM ĐÃ XEM" titleColor="text-black" cardItemBorder={0} />
        </div>
    );
}
