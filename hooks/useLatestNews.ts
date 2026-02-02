import { fetchLatestNewsByCategory, fetchPopularNews } from "@/api/news/news";
import { NewsCategory } from "@/types/news";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const useLatestNews = (category: NewsCategory) => {
    const queryClient = useQueryClient();

    const getLatestNews = useQuery({
        queryKey: ["news", "latest", category],
        queryFn: () => fetchLatestNewsByCategory(category),
        enabled: !!category,
        staleTime: 1000 * 60 * 10,
    });

    return {
        latestNews: getLatestNews.data,
        isLoading: getLatestNews.isLoading,
        isError: getLatestNews.isError
    };
}

export default useLatestNews
