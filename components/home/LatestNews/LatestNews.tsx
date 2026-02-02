"use client";

import { useState } from "react";
import FeaturedNewsCard from "./FeaturedNewsCard";
import SmallNewsCard from "./SmallNewsCard";
import useLatestNews from "@/hooks/useLatestNews";
import { NewsCategory } from "@/types/news";
import FeaturedNewsCardSkeleton from "./FeaturedNewsCardSkeleton";
import NotFound from "@/components/NotFound/NotFound";
import { TABS } from "@/constants/LATEST_NEWS"


export default function LatestNews() {
  const [activeTab, setActiveTab] = useState<NewsCategory>(NewsCategory.SUPER_LIG);
  const { latestNews, isLoading, isError } = useLatestNews(activeTab)

  if (isLoading) return <><FeaturedNewsCardSkeleton /></>
  if (latestNews === undefined || isError) return <NotFound />

  const currentNews = latestNews ?? [];
  const featured = currentNews[0];
  const others = currentNews.slice(1, 5);

  return (
    <section className="w-full py-12">
      <div className="container mx-auto px-4">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl font-bold text-white">Son Haberler</h2>

          <div className="flex gap-4 text-sm">
            {TABS.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as NewsCategory)}
                className={`pb-1 text-white  transition cursor-pointer ${activeTab === tab.key ? "border-b-2 border-primary font-semibold text-primary" : ""}`}>
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {featured && (
            <div className="h-[420px]">
              <FeaturedNewsCard {...featured} />
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            {others.map((news) => (
              <SmallNewsCard key={news.slug} {...news} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
