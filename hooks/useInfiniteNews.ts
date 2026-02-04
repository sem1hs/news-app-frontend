import { useInfiniteQuery } from "@tanstack/react-query";
import { Page } from "@/types/pageable";
import { NewsResponse } from "@/types/news";
import { fetchNews, fetchNewsByLeagueName, fetchNewsBySearchQuery } from "@/api/news/news";

type Params = {
    leagueName?: string;
    search?: string;
    size?: number;
};

export const useInfiniteNews = ({ leagueName, search, size = 16 }: Params) => {
    const getInfiniteNews = useInfiniteQuery<Page<NewsResponse>>({
        queryKey: ["news", { leagueName, search, size }],
        queryFn: ({ pageParam = 0 }) => {
            if (leagueName && leagueName?.length > 0) return fetchNewsByLeagueName({ leagueName, page: pageParam as number, size });
            if (search && search?.length > 0) return fetchNewsBySearchQuery({ search: search as string, page: pageParam as number, size })

            return fetchNews({ page: pageParam as number, size });
        },
        getNextPageParam: (lastPage) => lastPage.last ? undefined : lastPage.number + 1,
        initialPageParam: 0,
    });

    return {
        news: getInfiniteNews.data,
        isLoading: getInfiniteNews.isLoading,
        fetchNextPage: getInfiniteNews.fetchNextPage,
        hasNextPage: getInfiniteNews.hasNextPage,
        isFetchingNextPage: getInfiniteNews.isFetchingNextPage
    }
};
