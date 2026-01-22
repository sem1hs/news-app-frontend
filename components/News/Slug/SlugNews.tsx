"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import NewsSkeleton from "./SlugNewsSkeleton";
import NotFound from "../../NotFound/NotFound";
import useNewsBySlug from "@/hooks/useNewsBySlug";

const News = () => {
  const { slug } = useParams<{ slug: string }>();
  const { news, isLoading } = useNewsBySlug({ slug });

  if (isLoading) return <NewsSkeleton />;
  if (!news) {
    return (
      <NotFound
        title="Haber bulunamadı"
        description="Bu haber silinmiş veya yayından kaldırılmış olabilir."
        backHref="/news"
        backText="Tüm Haberler"
      />
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-0 py-6 sm:py-10">
      <div className="flex flex-wrap gap-2 mb-3 sm:mb-4">
        <span className="px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full bg-emerald-600/20 text-emerald-400">
          {news.leagueName}
        </span>
        {news.teamName && (
          <span className="px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full bg-blue-600/20 text-blue-400">
            {news.teamName}
          </span>
        )}
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-6">
        {news.title}
      </h1>

      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden mb-6 sm:mb-8">
        <Image
          src={news.imageUrl}
          alt={news.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-gray-300 leading-relaxed">
        {news.content}
      </div>
    </article>
  );
};

export default News;
