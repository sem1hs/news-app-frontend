"use client"
import useFixtureByLeagueAndWeek from '@/hooks/useFixtureByLeagueAndWeek';
import React, { useCallback, useState } from 'react';
import FixtureSkeleton from '../skeleton/FixtureSkeleton';
import LeagueAndWeekSelect from './LeagueAndWeekSelect';
import { useLeagues } from '@/hooks/useLeagues';
import FixtureTable from '../tables/FixtureTable';
import FixtureEmptyState from '../skeleton/WeeklyFixtureEmptyState';

const GetFixtureByLeagueAndWeek = () => {
    const { leagues } = useLeagues();
    const [visible, setVisible] = useState<boolean>(false);
    const [leagueId, setLeagueId] = useState<number>(6);
    const [week, setWeek] = useState<number>(1);
    const { fixture, isLoading } = useFixtureByLeagueAndWeek({ leagueId: leagueId, week: week });

    const handleClick = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setVisible(true);
        },
        []
    );

    if (isLoading) return <FixtureSkeleton />

    return (
        <div className='mt-6 px-6'>
            <button
                onClick={handleClick}
                className="cursor-pointer block mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
            >
                {isLoading ? "Yükleniyor..." : "Fikstürü Getir"}
            </button>
            {visible && fixture && < LeagueAndWeekSelect leagueId={leagueId} setLeagueId={setLeagueId} week={week} setWeek={setWeek} leagues={leagues} />}
            {visible && fixture && fixture && Object.keys(fixture).length !== 0 && <FixtureTable data={fixture} />}
            {visible && fixture && Object.keys(fixture).length === 0 && <FixtureEmptyState title='Bu hafta için maç bulunamadı' description='Seçilen lig ve hafta için henüz fikstür eklenmemiş.' />}
        </div>
    );
}
export default GetFixtureByLeagueAndWeek
