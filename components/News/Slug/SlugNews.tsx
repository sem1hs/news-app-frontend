"use client";
import { useNews } from "@/hooks/useNews";
import Image from "next/image";
import { useParams } from "next/navigation";
import NewsSkeleton from "./SlugNewsSkeleton";
import NotFound from "../../NotFound/NotFound";

const News = () => {
  const { slug } = useParams<{ slug: string }>();
  const { newsBySlug, newsBySlugLoading } = useNews({ slug });

  if (newsBySlugLoading) return <NewsSkeleton />;
  if (!newsBySlug) {
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
          {newsBySlug.leagueName}
        </span>
        {newsBySlug.teamName && (
          <span className="px-3 py-1 text-[11px] sm:text-xs font-medium rounded-full bg-blue-600/20 text-blue-400">
            {newsBySlug.teamName}
          </span>
        )}
      </div>

      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-snug sm:leading-tight mb-4 sm:mb-6">
        {newsBySlug.title}
      </h1>

      <div className="relative w-full h-[220px] sm:h-[320px] md:h-[420px] rounded-xl overflow-hidden mb-6 sm:mb-8">
        <Image
          src={newsBySlug.imageUrl}
          alt={newsBySlug.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-sm sm:prose-base prose-invert max-w-none text-gray-300 leading-relaxed">
        {newsBySlug.content}
      </div>
    </article>
  );
};

export default News;
