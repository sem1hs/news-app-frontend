import { LeagueResponse } from '@/types/league';

type Props = {
    leagueId?: number;
    setLeagueId?: (leagueId: number) => void;
    week?: number;
    setWeek?: (week: number) => void;
    leagues?: LeagueResponse[] | undefined
}
const LeagueAndWeekSelect = ({ leagueId, setLeagueId, week, setWeek, leagues }: Props) => {
    return (
        <div className="mb-6 flex gap-4 max-w-xl">
            {leagueId && setLeagueId && <select
                value={leagueId}
                onChange={(e) => setLeagueId(Number(e.target.value))}
                className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
            >
                <option disabled value={0}>Lig Seç</option>
                {leagues?.map((league) => (
                    <option key={league.id} value={league.id}>
                        {league.name}
                    </option>
                ))}
            </select>}


            {week && setWeek && <select
                value={week}
                onChange={(e) => setWeek(Number(e.target.value))}
                className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
            >
                {Array.from({ length: 38 }).map((_, i) => (
                    <option key={i + 1} value={i + 1}>
                        {i + 1}. Hafta
                    </option>
                ))}
            </select>}
        </div>
    )
}

export default LeagueAndWeekSelect
