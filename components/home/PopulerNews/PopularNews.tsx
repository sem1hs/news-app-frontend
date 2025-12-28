import Link from "next/link";
import PopularNewsCard from "./PopularNewsCard";

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

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <PopularNewsCard
              key={index}
              title="Galatasaray’dan son dakika transfer hamlesi son dakika transfer hamlesi son dakika transfer hamlesi"
              imageUrl="/muci-trabzonspor.png"
              category="Süper Lig"
              slug="muci"
              viewCount={12450}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularNews;
