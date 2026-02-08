"use client"

import { useLeagues } from "@/hooks/useLeagues";
import useStandingsByLeagueId from "@/hooks/useStandingsByLeagueId";
import { useCallback, useState } from "react";
import LeagueAndWeekSelect from "../fixture/LeagueAndWeekSelect";
import StandingTable from "../tables/StandingTable";
import EmptyState from "../skeleton/EmptyState";
import StandingSkeleton from "@/components/Standings/StandingSkeleton";

const GetStanding = () => {
    const { leagues } = useLeagues()
    const [visible, setVisible] = useState<boolean>(false);
    const [leagueId, setLeagueId] = useState<number>(6);
    const { standings, isLoading } = useStandingsByLeagueId(leagueId);

    const handleClick = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setVisible(true);
        },
        []
    );

    if (isLoading) return <StandingSkeleton />

    return (
        <div className='mt-6 px-6'>
            <button
                onClick={handleClick}
                className="cursor-pointer block mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
            >
                {isLoading ? "Yükleniyor..." : "Puan Durumu Getir"}
            </button>
            {visible && standings && < LeagueAndWeekSelect leagueId={leagueId} setLeagueId={setLeagueId} leagues={leagues} />}
            {visible && (standings && standings.length !== 0) && <StandingTable data={standings} />}
            {visible && (!standings || standings.length === 0) && <EmptyState title='Bu lig için puan durumu tanımlanmamış' description='Seçilen lig için henüz puan durumu eklenmemiş.' />}
        </div>
    )
}

export default GetStanding
