import FixtureCard from "./FixtureCard";
import { FixtureResponse } from "@/types/fixture";
import { groupFixturesByWorldCupGroup } from "@/lib/helper";

type Props = {
    fixtures: FixtureResponse[];
};

const GroupFixtureList = ({ fixtures }: Props) => {
    const groupedFixtures = groupFixturesByWorldCupGroup(fixtures);

    return (
        <div className="space-y-8">
            {Object.entries(groupedFixtures).map(([groupName, fixtures]) => (
                <div key={groupName}>
                    <h3 className="mb-4 text-xl font-bold text-gray-300">
                        Grup {groupName}
                    </h3>

                    <div className="space-y-3">
                        {fixtures.map((fixture) => (
                            <FixtureCard
                                key={fixture.id}
                                fixture={fixture}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default GroupFixtureList;