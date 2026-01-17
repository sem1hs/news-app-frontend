import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import News from "@/components/News/Slug/SlugNews";
import NewsSkeleton from "@/components/News/Slug/SlugNewsSkeleton";
import { Metadata, ResolvingMetadata } from "next";
import { Suspense } from "react";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = (await params).slug;

  const res = await fetch(`${process.env.API_BASE_URL}/news/slug/${slug}`, {
    method: "GET",
    cache: "no-store",
  });

  if (!res.ok) {
    return {
      title: "Haber bulunamadı | Futbol Haberleri",
    };
  }

  const news = await res.json();

  return {
    metadataBase: new URL("http://localhost:3000"),

    title: `${news.title} | Futbol Haberleri`,
    description: news.spot ?? news.content?.slice(0, 160),

    openGraph: {
      title: news.title,
      description: news.spot,
      images: [
        {
          url: news.imageUrl,
          width: 1200,
          height: 630,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.spot,
      images: [news.imageUrl],
    },
  };
}

const NewsPage = () => {
  return (
    <>
      <Header />
      <MobileHeader />
      <main>
        <Suspense fallback={<NewsSkeleton />}>
          <News />
        </Suspense>
      </main>
      <Footer />
    </>
  );
};

export default NewsPage;
