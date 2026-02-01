import { fetchStandingsByLeagueId } from "@/api/standings/standings";
import { useQuery } from "@tanstack/react-query";

const useStandingsByLeagueId = (leagueId: number) => {
    const query = useQuery({
        queryKey: ["standings", leagueId],
        queryFn: () => fetchStandingsByLeagueId(leagueId),
        enabled: !!leagueId,
        staleTime: 1000 * 60 * 10,
    });

    return {
        standings: query.data,
        isLoading: query.isLoading,
    };
};

export default useStandingsByLeagueId;
