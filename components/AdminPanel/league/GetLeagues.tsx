"use client"
import { useLeagues } from '@/hooks/useLeagues';
import React, { useCallback, useState } from 'react'
import EmptyState from '../skeleton/EmptyState';
import LeagueTable from '../tables/LeagueTable';
import { LeagueTableSkeleton } from '../skeleton/LeagueTableSkeleton';

const GetLeagues = () => {
    const { leagues, isLoading } = useLeagues()
    const [visible, setVisible] = useState<boolean>(false);

    const handleClick = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setVisible(true);
        },
        []
    );

    if (isLoading) return <LeagueTableSkeleton />

    return (
        <div className='mt-6 px-6'>
            <button
                onClick={handleClick}
                className="cursor-pointer block mb-6 mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
            >
                {isLoading ? "Yükleniyor..." : "Takımları Getir"}
            </button>
            {visible && (leagues && leagues.length !== 0) && <LeagueTable data={leagues} />}
            {visible && (!leagues || leagues.length === 0) && <EmptyState title='Ligler Tanımlanmamış' description='Henüz ligler eklenmemiş.' />}
        </div>
    )
}

export default GetLeagues
