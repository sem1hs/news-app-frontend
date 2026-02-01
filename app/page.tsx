import BreakingNewsBar from "@/components/BreakingNews/BreakingNewsBar";
import TodayFixturesMini from "@/components/Fixture/TodayFixturesMini";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import NewsCarousel from "@/components/home/Carousel/NewsCarousel";
import LatestNews from "@/components/home/LatestNews/LatestNews";
import PopularNews from "@/components/home/PopularNews/PopularNews";

const Page = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
        <BreakingNewsBar />
        <NewsCarousel />
        <LatestNews />
        <TodayFixturesMini />
        <PopularNews />
      </main>
      <Footer />
    </>
  );
};

export default Page;
