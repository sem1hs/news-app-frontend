"use client";

import useBreakingNews from "@/hooks/useBreakingNews";
import Link from "next/link";

const BreakingNewsBar = () => {
    const { breakingNews, isLoading } = useBreakingNews();

    if (isLoading || !breakingNews || breakingNews.length === 0) return null;

    return (
        <div className="w-full bg-[#111517] border-y border-white/5 mt-2">
            <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-4">

                <span className="flex items-center gap-2 font-semibold text-xs sm:text-sm whitespace-nowrap">
                    <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                    <span className="text-red-400">SON DAKİKA</span>
                </span>

                <div className="relative overflow-hidden flex-1">
                    <div className="flex gap-8 animate-breaking-scroll whitespace-nowrap text-sm text-gray-200">
                        {breakingNews.map((news) => (
                            <Link
                                key={news.id}
                                href={`/news/${news.slug}`}
                                className="hover:text-white transition"
                            >
                                {news.title}
                            </Link>
                        ))}

                        {breakingNews.map((news) => (
                            <Link
                                key={`clone-${news.id}`}
                                href={`/news/${news.slug}`}
                                className="hover:text-white transition"
                            >
                                {news.title}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreakingNewsBar;
