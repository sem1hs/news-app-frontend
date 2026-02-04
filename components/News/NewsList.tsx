"use client";

import PopularNewsCard from "../home/PopularNews/PopularNewsCard";
import NewsSkeleton from "./NewsSkeleton";
import NotFound from "../NotFound/NotFound";
import { useInfiniteNews } from "@/hooks/useInfiniteNews";

type Props = {
    leagueName?: string | string[];
    search?: string | string[];
};

const NewsList = ({ leagueName, search }: Props) => {
    const { news: data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, } = useInfiniteNews({ leagueName: leagueName as string, search: search as string });

    if (isLoading) return <NewsSkeleton />;
    if (!data) return <NotFound />;

    const news = data.pages.flatMap((page) => page.content);

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {news.map((item) => (
                    <PopularNewsCard
                        key={item.id}
                        title={item.title}
                        imageUrl={item.imageUrl}
                        category={item.category}
                        slug={item.slug}
                        viewCount={item.views}
                    />
                ))}
            </div>

            {hasNextPage && (
                <div className="flex justify-center mt-10">
                    <button
                        onClick={() => fetchNextPage()}
                        disabled={isFetchingNextPage}
                        className="px-6 py-2.5 rounded-lg bg-amber-500 text-sm font-bold text-black disabled:opacity-50"
                    >
                        {isFetchingNextPage ? "Yükleniyor..." : "Daha Fazla Yükle"}
                    </button>
                </div>
            )}
        </>
    );
};

export default NewsList;
