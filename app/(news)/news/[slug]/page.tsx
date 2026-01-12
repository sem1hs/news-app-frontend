import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import News from "@/components/News/News";
import { Suspense } from "react";

const NewsPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
        <Suspense fallback={<div>loading...</div>}>
          <News />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
