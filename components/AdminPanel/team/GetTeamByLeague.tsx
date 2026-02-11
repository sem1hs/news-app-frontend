"use client"
import { useLeagues } from '@/hooks/useLeagues';
import { useTeams } from '@/hooks/useTeams';
import React, { useCallback, useState } from 'react'
import LeagueAndWeekSelect from '../fixture/LeagueAndWeekSelect';
import EmptyState from '../skeleton/EmptyState';
import TeamTable from '../tables/TeamTable';
import { TeamTableSkeleton } from '../skeleton/TeamTableSkeleton';

const GetTeamByLeague = () => {
    const { leagues } = useLeagues()
    const [visible, setVisible] = useState<boolean>(false);
    const [leagueId, setLeagueId] = useState<number>(6);
    const { teams, isLoading } = useTeams({ leagueId });

    const handleClick = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setVisible(true);
        },
        []
    );

    if (isLoading) return <TeamTableSkeleton />


    return (
        <div className='mt-6 px-6'>
            <button
                onClick={handleClick}
                className="cursor-pointer block mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
            >
                {isLoading ? "Yükleniyor..." : "Takımları Getir"}
            </button>
            {visible && teams && < LeagueAndWeekSelect leagueId={leagueId} setLeagueId={setLeagueId} leagues={leagues} />}
            {visible && (teams && teams.length !== 0) && <TeamTable data={teams} />}
            {visible && (!teams || teams.length === 0) && <EmptyState title='Bu lig için takımlar tanımlanmamış' description='Seçilen lig için henüz takım eklenmemiş.' />}
        </div>
    )
}

export default GetTeamByLeague
