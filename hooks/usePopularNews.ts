import { fetchPopularNews } from "@/api/news/news";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const DAY_RANGE: number = 7;

const usePopularNews = () => {
    const queryClient = useQueryClient();

    const getPopular = useQuery({
        queryKey: ["news", "popular"],
        queryFn: () => fetchPopularNews(DAY_RANGE),
        staleTime: 1000 * 60 * 10,
    });

    return {
        popularNews: getPopular.data,
        isLoading: getPopular.isLoading,
        isError: getPopular.isError
    };
}

export default usePopularNews
