import { useQuery } from "@tanstack/react-query";
import { fetchBreakingNews } from "@/api/news/news";

const useBreakingNews = () => {
    const query = useQuery({
        queryKey: ["news"],
        queryFn: () => fetchBreakingNews(),
        refetchInterval: 1000 * 60 * 10,
    });

    return {
        breakingNews: query.data,
        isLoading: query.isLoading,
    };
};

export default useBreakingNews;
