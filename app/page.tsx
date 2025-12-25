import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import NewsCarousel from "@/components/home/Carousel/NewsCarousel";

const Page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
        <NewsCarousel />
        {/* diğer bölümler */}
      </main>
      <Footer />
    </>
  );
};

export default Page;
