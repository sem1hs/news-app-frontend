"use client";

import { getLeagueIdByLabel } from "@/lib/helper";
import NotFound from "../NotFound/NotFound";
import StandingTable from "./StandingTable";
import useStandingsByLeagueId from "@/hooks/useStandingsByLeagueId";
import StandingSkeleton from "./StandingSkeleton";

type Props = {
    leagueName?: string | string[];
};

const StandingLeague = ({ leagueName }: Props) => {
    const leagueId = getLeagueIdByLabel(leagueName as string);

    const { standings, isLoading } = useStandingsByLeagueId(leagueId as number);

    if (isLoading) return <StandingSkeleton />;
    if (!standings || standings.length === 0) return <NotFound />;

    return (
        <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-300">
                {leagueName}
            </h2>

            <StandingTable standings={standings} />
        </div>
    );
};

export default StandingLeague;
