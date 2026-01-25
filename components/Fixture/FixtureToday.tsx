"use client";
import FixtureCard from "./FixtureCard";
import useFixtureToday from "@/hooks/useFixtureToday";
import FixtureCardSkeleton from "./FixtureCardSkeleton";

const FixtureToday = () => {
  const { fixture: todayFixture, isLoading } = useFixtureToday();

  if (isLoading) return <FixtureCardSkeleton />;

  return (
    <div className="space-y-4">
      {todayFixture &&
        Object.entries(todayFixture).map(([leagueName, fixtures]) => (
          <div key={leagueName} className="mb-4">
            <h2 className="text-lg font-semibold mb-4 text-gray-300">
              {leagueName}
            </h2>

            <div className="flex flex-col gap-2">
              {fixtures.map((fixture) => (
                <FixtureCard key={fixture.id} fixture={fixture} />
              ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default FixtureToday;
