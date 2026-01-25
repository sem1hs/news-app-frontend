import { fetchFixtureByLeagueAndWeek } from "@/api/fixtures/fixture";
import { useQuery } from "@tanstack/react-query";

type Params = {
  leagueId: number;
  week: number;
};

const useFixtureByLeagueAndWeek = ({ leagueId, week }: Params) => {
  const getFixtureByLeagueAndWeek = useQuery({
    queryKey: ["fixture", leagueId, week],
    queryFn: () => fetchFixtureByLeagueAndWeek({ leagueId, week }),
    enabled: !!leagueId && !!week,
    staleTime: 1000 * 60 * 10,
  });

  return {
    fixture: getFixtureByLeagueAndWeek.data,
    isLoading: getFixtureByLeagueAndWeek.isLoading,
  };
};

export default useFixtureByLeagueAndWeek;
