"use client"

import usePopularNews from "@/hooks/usePopularNews";
import PopularNewsCard from "./PopularNewsCard";
import PopularNewsCardSkeleton from "./PopularNewsCardSkeleton";
import NotFound from "@/components/NotFound/NotFound";

const PopularNewsGrid = () => {
    const { popularNews, isLoading, isError } = usePopularNews();

    if (isLoading) return <PopularNewsCardSkeleton />
    if (popularNews === undefined || isError) return <NotFound />

    return (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4">
            {popularNews.map((news, index) => (
                <PopularNewsCard
                    key={index}
                    title={news.title}
                    imageUrl={news.imageUrl}
                    category={news.category}
                    slug={news.slug}
                    viewCount={news.views}
                />
            ))}
        </div>
    )
}

export default PopularNewsGrid
