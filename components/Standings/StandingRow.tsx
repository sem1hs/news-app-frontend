import { StandingResponse } from "@/types/standing";
import Image from "next/image";

type Props = {
  standing: StandingResponse;
  index: number;
};

const StandingRow = ({ standing, index }: Props) => {
  return (
    <div className="grid grid-cols-[40px_1fr_repeat(8,50px)] px-4 py-3 text-sm border-b border-white/5 hover:bg-white/5 transition">
      <span className="text-gray-400">{index + 1}</span>
      <div className="flex items-center gap-3 min-w-0">
        <div className="w-6 h-6 flex items-center justify-center shrink-0">
          <Image
            src={standing.logoUrl}
            alt={standing.teamName}
            width={24}
            height={24}
            className="object-contain w-full h-full"
          />
        </div>
        <span className="font-medium truncate">{standing.teamName}</span>
      </div>

      <span>{standing.played}</span>
      <span>{standing.won}</span>
      <span>{standing.draw}</span>
      <span>{standing.lost}</span>
      <span>{standing.goalsFor}</span>
      <span>{standing.goalsAgainst}</span>
      <span>{standing.goalDifference}</span>
      <span className="font-bold text-green-400">{standing.points}</span>
    </div>
  );
};

export default StandingRow;
