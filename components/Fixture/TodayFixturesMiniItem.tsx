import { FIXTURE_STATUS_LABEL, FixtureResponse } from "@/types/fixture";
import { formatMatchTime } from "@/lib/helper";

type Props = {
    fixture: FixtureResponse;
};

const TodayFixtureMiniItem = ({ fixture }: Props) => {
    const isFinished = fixture.status === "FINISHED";
    const isScheduled = fixture.status === "SCHEDULED";

    return (
        <div className="border border-white/5 rounded-md px-3 py-2 flex items-center justify-between hover:border-white/20 transition">
            <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                    <span className="text-sm font-medium truncate">
                        {fixture.homeTeamName}
                    </span>

                    <span className="text-xs text-gray-400">vs</span>

                    <span className="text-sm font-medium truncate">
                        {fixture.awayTeamName}
                    </span>
                </div>

                <div className="text-[11px] text-gray-400 mt-1">
                    {FIXTURE_STATUS_LABEL[fixture.status]}
                </div>
            </div>

            <div className="ml-3 w-16 text-right font-bold">
                {isFinished && (
                    <span className="text-green-400 text-sm">
                        {fixture.homeScore}-{fixture.awayScore}
                    </span>
                )}

                {isScheduled && (
                    <span className="text-gray-200 text-sm">
                        {formatMatchTime(fixture.matchDate)}
                    </span>
                )}

                {!isFinished && !isScheduled && (
                    <span className="text-gray-200 text-sm">
                        {fixture.homeScore}-{fixture.awayScore}
                    </span>
                )}
            </div>
        </div>
    );
};

export default TodayFixtureMiniItem;
