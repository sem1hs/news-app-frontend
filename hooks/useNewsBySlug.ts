import { fetchNewsBySlug } from "@/api/news/news";
import { useQuery, useQueryClient } from "@tanstack/react-query";

type NewsProps = {
    slug: string;

}

const useNewsBySlug = ({ slug, }: NewsProps) => {
    const queryClient = useQueryClient();

    const getBySlug = useQuery({
        queryKey: ["team", "slug", slug],
        queryFn: () => fetchNewsBySlug(slug as string),
        enabled: !!slug,
        staleTime: 1000 * 60 * 10,
    });

    return {
        news: getBySlug.data,
        isLoading: getBySlug.isLoading,
    };
}

export default useNewsBySlug
