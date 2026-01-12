"use client";
import { useNews } from "@/hooks/useNews";
import Image from "next/image";
import { useParams } from "next/navigation";

const News = () => {
  const { slug } = useParams<{ slug: string }>();
  const { newsBySlug, newsBySlugLoading } = useNews(slug);

  if (newsBySlugLoading) return <div>Loading...</div>;
  if (!newsBySlug) return <div>Haber bulunamadı.</div>;

  return (
    <article className="max-w-4xl mx-auto px-4 py-10">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-600/20 text-emerald-400">
          {newsBySlug.leagueName}
        </span>
        {newsBySlug.teamName && (
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-600/20 text-blue-400">
            {newsBySlug.teamName}
          </span>
        )}
      </div>

      <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-6">
        {newsBySlug.title}
      </h1>

      <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-8">
        <Image
          src={newsBySlug.imageUrl}
          alt={newsBySlug.title}
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed">
        {newsBySlug.content}
      </div>
    </article>
  );
};

export default News;
