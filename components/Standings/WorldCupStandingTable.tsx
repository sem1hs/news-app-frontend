import { groupStandingsByWorldCupGroup } from "@/lib/helper";
import StandingTable from "./StandingTable";
import { StandingResponse } from "@/types/standing";

type Props = {
    standings: StandingResponse[];
};

const WorldCupStandingTable = ({ standings }: Props) => {
    const groupedStandings = groupStandingsByWorldCupGroup(standings);

    return (
        <div className="space-y-8">
            {groupedStandings.map((group) => (
                <div key={group.groupName}>
                    <h3 className="mb-3 text-lg font-bold text-gray-300">
                        Grup {group.groupName}
                    </h3>

                    <StandingTable standings={group.standings} />
                </div>
            ))}
        </div>
    );
};

export default WorldCupStandingTable;

