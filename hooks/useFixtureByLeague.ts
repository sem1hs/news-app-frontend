import { fetchFixtureByLeague } from "@/api/fixtures/fixture";
import { useQuery } from "@tanstack/react-query";

type Params = {
    leagueId: number;
};

const useFixtureByLeague = ({ leagueId }: Params) => {
    const getFixtureByLeague = useQuery({
        queryKey: ["fixture", leagueId],
        queryFn: () => fetchFixtureByLeague({ leagueId }),
        enabled: !!leagueId,
        staleTime: 1000 * 60 * 10,
    });

    return {
        fixture: getFixtureByLeague.data,
        isLoading: getFixtureByLeague.isLoading,
    };
};

export default useFixtureByLeague;
