import { formatMatchDayLabel, formatMatchTime } from "@/lib/helper";
import { FIXTURE_STATUS_LABEL, FixtureResponse } from "@/types/fixture";
import Image from "next/image";

type Props = {
  fixture: FixtureResponse;
};
const FixtureCard = ({ fixture }: Props) => {
  return (
    <div className="bg-[#111517] border border-white/5 rounded-lg px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 hover:border-white/20 transition">
      <div className="flex gap-1 items-center text-xs sm:text-sm text-gray-400 sm:w-32">
        <span>{formatMatchDayLabel(fixture.matchDate)}</span>
        <span>-</span>
        <span>{formatMatchTime(fixture.matchDate)}</span>
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 sm:gap-3 sm:min-w-[420px]">
        <div className="flex items-center justify-end gap-2 min-w-0">
          <span className="truncate text-sm font-medium">
            {fixture.homeTeamName}
          </span>
          <div className="w-5 h-5 flex items-center justify-center shrink-0">
            <Image
              src={fixture.homeTeamUrl}
              alt={fixture.homeTeamName}
              width={20}
              height={20}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        <span className="text-center font-bold w-12 sm:w-16">
          {fixture.status === "FINISHED" && (
            <span className="text-green-400">
              {fixture.homeScore} - {fixture.awayScore}
            </span>
          )}

          {fixture.status === "SCHEDULED" && (
            <span className="text-gray-300">-</span>
          )}
        </span>

        <div className="flex items-center justify-start gap-2 min-w-0">
          <div className="w-5 h-5 flex items-center justify-center shrink-0">
            <Image
              src={fixture.awayTeamUrl}
              alt={fixture.awayTeamName}
              width={20}
              height={20}
              className="object-contain w-full h-full"
            />
          </div>
          <span className="truncate text-sm font-medium">
            {fixture.awayTeamName}
          </span>
        </div>
      </div>

      <span className="text-[10px] sm:text-xs text-gray-400 sm:w-20 sm:text-right self-end sm:self-auto">
        {FIXTURE_STATUS_LABEL[fixture.status]}
      </span>
    </div>
  );
};

export default FixtureCard;
