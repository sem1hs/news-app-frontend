import Link from "next/link";
import PopularNewsGrid from "./PopularNewsGrid";
import { Suspense } from "react";
import PopularNewsCardSkeleton from "./PopularNewsCardSkeleton";

const PopularNews = () => {
  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4">
        <div className="mb-8 flex items-center justify-between text-white">
          <h2 className="text-3xl font-bold tracking-tight">
            Popüler Haberler
          </h2>

          <Link
            href="/news"
            className="text-sm text-muted-foreground cursor-pointer hover:underline text-amber-500"
          >
            Tümünü Gör →
          </Link>
        </div>

        <Suspense fallback={<PopularNewsCardSkeleton />}>
          <PopularNewsGrid />
        </Suspense>
      </div>
    </section>
  );
};

export default PopularNews;
