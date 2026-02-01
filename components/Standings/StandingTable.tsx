import { StandingResponse } from "@/types/standing";
import StandingRow from "./StandingRow";

type Props = {
    standings: StandingResponse[];
};

const StandingTable = ({ standings }: Props) => {
    return (
        <div className="overflow-x-auto">
            <div className="bg-[#111517] border border-white/5 rounded-lg min-w-[640px] sm:min-w-full overflow-hidden">

                <div className="grid grid-cols-[40px_1fr_repeat(8,50px)] text-xs text-gray-400 px-4 py-2 border-b border-white/5">
                    <span>#</span>
                    <span>Takım</span>
                    <span>O</span>
                    <span>G</span>
                    <span>B</span>
                    <span>M</span>
                    <span>AG</span>
                    <span>YG</span>
                    <span>AV</span>
                    <span>P</span>
                </div>

                {standings
                    .sort((a, b) => b.points - a.points)
                    .map((standing, index) => (
                        <StandingRow
                            key={standing.teamId}
                            standing={standing}
                            index={index}
                        />
                    ))}
            </div>
        </div>
    );
};

export default StandingTable;
