import { fetchNewsByLeagueName } from '@/api/news/news';
import { useQuery, useQueryClient } from '@tanstack/react-query';

type NewsProps = {
    leagueName: string;
}

const useNewsByLeagueName = ({ leagueName }: NewsProps) => {
    const queryClient = useQueryClient();

    const getByLeagueName = useQuery({
        queryKey: ["leagueName", leagueName],
        queryFn: () => fetchNewsByLeagueName({ leagueName }),
        enabled: !!leagueName,
        staleTime: 1000 * 60 * 10,
    });
    return {
        news: getByLeagueName.data,
        isLoading: getByLeagueName.isLoading,
    }
}

export default useNewsByLeagueName
