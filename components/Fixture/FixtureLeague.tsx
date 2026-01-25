"use client";

import useFixtureByLeagueAndWeek from "@/hooks/useFixtureByLeagueAndWeek";
import { getLeagueIdByLabel } from "@/lib/helper";
import FixtureCard from "./FixtureCard";
import { useState } from "react";
import WeekSelect from "./WeekSelect";
import FixtureCardSkeleton from "./FixtureCardSkeleton";
import NotFound from "../NotFound/NotFound";

type Props = {
  leagueName?: string | string[];
};

const FixtureLeague = ({ leagueName }: Props) => {
  const leagueId = getLeagueIdByLabel(leagueName as string);
  const [week, setWeek] = useState<number>(21);

  const { fixture: fixtures, isLoading } = useFixtureByLeagueAndWeek({
    leagueId: leagueId as number,
    week,
  });

  if (isLoading) return <FixtureCardSkeleton />;
  if (fixtures === undefined) return <NotFound />;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold mb-4 text-gray-300">
          {leagueName}
        </h2>

        <WeekSelect value={week} onChange={setWeek} />
      </div>

      {!isLoading &&
        fixtures.map((fixture) => (
          <FixtureCard key={fixture.id} fixture={fixture} />
        ))}
    </div>
  );
};

export default FixtureLeague;
