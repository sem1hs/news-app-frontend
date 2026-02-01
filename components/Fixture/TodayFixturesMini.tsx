"use client";

import useFixtureToday from "@/hooks/useFixtureToday";
import TodayFixtureMiniItem from "./TodayFixturesMiniItem";
import { FixtureResponse } from "@/types/fixture";
import TodayFixturesMiniSkeleton from "./TodayFixturesMiniSkeleton";

const MAX_MATCH = 5;

const TodayFixturesMini = () => {
    const { fixture: data, isLoading } = useFixtureToday();

    if (isLoading) return <TodayFixturesMiniSkeleton />;
    if (!data) return null;

    let shownCount = 0;

    return (
        <section className="w-full py-6">
            <div className="container mx-auto px-4">
                <div className="bg-[#111517] border border-white/5 rounded-lg text-white p-4">

                    <h2 className="text-base sm:text-lg font-semibold text-gray-200 mb-3">
                        Bugünün Maçları
                    </h2>

                    <div className="space-y-4 max-h-[340px] overflow-y-auto pr-1 mask-fade scrollbar-mini">
                        {Object.entries(data).map(([leagueName, fixtures]) => {
                            if (shownCount >= MAX_MATCH) return null;

                            const leagueFixtures: FixtureResponse[] = fixtures.slice(
                                0,
                                MAX_MATCH - shownCount
                            );

                            shownCount += leagueFixtures.length;

                            return (
                                <div key={leagueName} className="space-y-2">
                                    <div className="text-xs font-semibold text-gray-400">
                                        {leagueName}
                                    </div>

                                    {leagueFixtures.map((fixture) => (
                                        <TodayFixtureMiniItem
                                            key={fixture.id}
                                            fixture={fixture}
                                        />
                                    ))}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TodayFixturesMini;
