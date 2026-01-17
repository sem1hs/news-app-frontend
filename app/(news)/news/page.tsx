import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import News from "@/components/News/News";
import NewsSkeleton from "@/components/News/NewsSkeleton";
import { Suspense } from "react";

const NewsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  return (
    <>
      <Header />
      <MobileHeader />
      <Suspense fallback={<NewsSkeleton />}>
        <main>
          <News queryParam={searchParams} />
        </main>
      </Suspense>
      <Footer />
    </>
  );
};

export default NewsPage;
