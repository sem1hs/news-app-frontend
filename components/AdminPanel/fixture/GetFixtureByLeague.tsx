"use client"
import useFixtureByLeague from '@/hooks/useFixtureByLeague';
import React, { useCallback, useMemo, useState } from 'react'
import FixtureSkeleton from '../skeleton/FixtureSkeleton';
import LeagueAndWeekSelect from './LeagueAndWeekSelect';
import { useLeagues } from '@/hooks/useLeagues';
import { FixtureResponse } from '@/types/fixture';
import FixtureTable from '../tables/FixtureTable';
import EmptyState from '../skeleton/EmptyState';

const GetFixtureByLeague = () => {
    const { leagues } = useLeagues()
    const [visible, setVisible] = useState<boolean>(false);
    const [leagueId, setLeagueId] = useState<number>(6);
    const { fixture, isLoading } = useFixtureByLeague({ leagueId })

    const groupedData = useMemo(() => {
        if (!fixture) return {};
        return fixture.reduce<Record<string, FixtureResponse[]>>(
            (acc, item) => {
                acc[`${item.week}. Hafta`] = item.fixtures;
                return acc;
            },
            {}
        );
    }, [fixture]);

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
            {visible && fixture && < LeagueAndWeekSelect leagueId={leagueId} setLeagueId={setLeagueId} leagues={leagues} />}
            {visible && Object.keys(groupedData).length !== 0 && <FixtureTable grouped data={groupedData} />}
            {visible && Object.keys(groupedData).length === 0 && <EmptyState title='Bu lig için fikstür tanımlanmamış' description='Seçilen lig için henüz fikstür eklenmemiş.' />}
        </div>
    );
}

export default GetFixtureByLeague
