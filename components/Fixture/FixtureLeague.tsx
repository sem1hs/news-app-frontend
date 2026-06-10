"use client";

import useFixtureByLeagueAndWeek from "@/hooks/useFixtureByLeagueAndWeek";
import { getLeagueIdByLabel, getMaxWeekByLeagueId } from "@/lib/helper";
import { useEffect, useState } from "react";
import WeekSelect from "./WeekSelect";
import FixtureCardSkeleton from "./FixtureCardSkeleton";
import NotFound from "../NotFound/NotFound";
import { useLeagueByName } from "@/hooks/useLeagueByName";
import Image from "next/image";
import FixtureCard from "./FixtureCard";
import GroupFixtureList from "./GroupFixtureList";

type Props = {
  leagueName?: string | string[];
};

const FixtureLeague = ({ leagueName }: Props) => {
  const leagueId = getLeagueIdByLabel(leagueName as string);
  const maxWeek = leagueId ? getMaxWeekByLeagueId(leagueId) : 0;
  const [week, setWeek] = useState<number>(maxWeek);

  const { league, isLoading: isLeagueLoading } = useLeagueByName(
    leagueName as string
  );

  const { fixture: fixtures, isLoading } = useFixtureByLeagueAndWeek({
    leagueId: leagueId as number,
    week,
  });

  useEffect(() => {
    setWeek(maxWeek);
  }, [maxWeek]);

  if (isLoading) return <FixtureCardSkeleton />;
  if (!fixtures) return <NotFound />;

  const isWorldCup = leagueName === "World Cup";

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
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

        <WeekSelect
          value={week}
          onChange={setWeek}
          maxWeek={maxWeek}
        />
      </div>

      {isWorldCup ? (
        <GroupFixtureList fixtures={fixtures} />
      ) : (
        fixtures.map((fixture) => (
          <FixtureCard
            key={fixture.id}
            fixture={fixture}
          />
        ))
      )}
    </div>
  );
};

export default FixtureLeague;