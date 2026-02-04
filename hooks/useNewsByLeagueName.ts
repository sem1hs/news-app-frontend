import { fetchNewsByLeagueName } from '@/api/news/news';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type NewsProps = {
    leagueName: string;
    page?: number;
    size?: number;
}

const useNewsByLeagueName = ({ leagueName, page, size }: NewsProps) => {
    const queryClient = useQueryClient();

    const getByLeagueName = useQuery({
        queryKey: ["leagueName", leagueName, page],
        queryFn: () => fetchNewsByLeagueName({ leagueName, page, size }),
        enabled: !!leagueName,
        staleTime: 1000 * 60 * 10,
    });
    return {
        news: getByLeagueName.data,
        isLoading: getByLeagueName.isLoading,
    }
}

export default useNewsByLeagueName
