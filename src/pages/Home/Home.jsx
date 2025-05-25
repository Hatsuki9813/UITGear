import { useEffect } from "react";
import { useProductStore } from "../../store/useProductStore"; // Đảm bảo import store đúng
import styles from "./Home.module.css";

// import SideNavigation from "./components/SideNavigation";
import AdsCarousel from "./components/AdsCarousel";
import { ProductCarousel } from "./components/ProductCarousel";

export default function Home() {
  const imageList = ["/carousel/carousel-6.png", "/carousel/carousel-7.png"];

  // Lấy sản phẩm từ store Zustand
  const { products, fetchProducts, loading, error } = useProductStore();

  // Gọi fetchProducts khi component mount
  useEffect(() => {
    fetchProducts({
      page: 1,
      limit: 20,
      sort: "price",
      order: "desc",
    });
  }, [fetchProducts]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles.HomeContainer}>
      {/* <section>
        <SideNavigation />
      </section> */}
      <AdsCarousel imageList={imageList} />
      <ProductCarousel
        data={products} // Truyền sản phẩm vào đây
        background="linear-gradient(to bottom, #F9415C, #FD4F47)"
        title="DEAL SỐC HÔM NAY - GIẢM GIÁ SẬP SÀN"
        titleColor="white"
      />
      <ProductCarousel
        data={products} // Truyền sản phẩm vào đây
        background="white"
        title="LAPTOP"
        titleColor="black"
        cardItemBorder={1}
      />
      <ProductCarousel
        data={products} // Truyền sản phẩm vào đây
        background="linear-gradient(to bottom, #4DD6CF, #FCD2B3)"
        title="SẢN PHẨM ĐÃ XEM"
        titleColor="text-black"
        cardItemBorder={0}
      />
    </div>
  );
}
