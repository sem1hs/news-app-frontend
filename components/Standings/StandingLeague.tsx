"use client";

import { getLeagueIdByLabel } from "@/lib/helper";
import NotFound from "../NotFound/NotFound";
import StandingTable from "./StandingTable";
import useStandingsByLeagueId from "@/hooks/useStandingsByLeagueId";
import StandingSkeleton from "./StandingSkeleton";
import { useLeagueByName } from "@/hooks/useLeagueByName";
import Image from "next/image";
import WorldCupStandingTable from "./WorldCupStandingTable";

type Props = {
    leagueName?: string | string[];
};

const StandingLeague = ({ leagueName }: Props) => {
    const leagueId = getLeagueIdByLabel(leagueName as string);

    const { standings, isLoading } = useStandingsByLeagueId(leagueId as number);

    const { league, isLoading: isLeagueLoading } = useLeagueByName(leagueName as string);


    if (isLoading) return <StandingSkeleton />;
    if (!standings || standings.length === 0) return <NotFound />;

    const isWorldCup = leagueName === "World Cup";

    return (
        <div className="space-y-4">
            <div className="flex items-center gap-3">
                {!isLeagueLoading && (
                    <Image
                        src={league?.logoUrl as string}
                        alt={league?.name as string}
                        width={36}
                        height={36}
                        className="w-9 h-9 object-contain"
                    />
                )}

                <h2 className="text-lg font-semibold text-gray-300">
                    {leagueName}
                </h2>
            </div>

            {
                isWorldCup ? (
                    <WorldCupStandingTable standings={standings} />
                ) : (
                    <StandingTable standings={standings} />
                )
            }
        </div>
    );
};

export default StandingLeague;
