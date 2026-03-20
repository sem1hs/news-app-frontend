import { FIXTURE_STATUS_LABEL, FixtureResponse } from "@/types/fixture";
import { formatMatchTime } from "@/lib/helper";
import Image from "next/image";

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
          <div className="flex items-center gap-1 min-w-0">
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <Image
                src={fixture.homeTeamUrl}
                alt={fixture.homeTeamName}
                width={16}
                height={16}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-sm font-medium truncate">
              {fixture.homeTeamName}
            </span>
          </div>

          <span className="text-xs text-gray-400">vs</span>

          <div className="flex items-center gap-1 min-w-0">
            <div className="w-4 h-4 flex items-center justify-center shrink-0">
              <Image
                src={fixture.awayTeamUrl}
                alt={fixture.awayTeamName}
                width={16}
                height={16}
                className="object-contain w-full h-full"
              />
            </div>
            <span className="text-sm font-medium truncate">
              {fixture.awayTeamName}
            </span>
          </div>
        </div>
      </div>

      <div className="ml-3 flex items-center gap-2 text-sm font-medium">
        {isFinished && (
          <span className="text-green-400">
            {fixture.homeScore}-{fixture.awayScore}
          </span>
        )}

        {isScheduled && (
          <span className="text-gray-200">
            {formatMatchTime(fixture.matchDate)}
          </span>
        )}

        {!isFinished && !isScheduled && (
          <span className="text-gray-200">
            {fixture.homeScore}-{fixture.awayScore}
          </span>
        )}

        <span className="text-xs text-gray-400">
          {FIXTURE_STATUS_LABEL[fixture.status]}
        </span>
      </div>
    </div>
  );
};

export default TodayFixtureMiniItem;
