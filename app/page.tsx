import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import NewsCarousel from "@/components/home/Carousel/NewsCarousel";
import LatestNews from "@/components/home/LatestNews/LatestNews";
import PopularNews from "@/components/home/PopulerNews/PopularNews";

const Page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
        <NewsCarousel />
        <PopularNews />
        <LatestNews />
      </main>
      <Footer />
    </>
  );
};

export default Page;
