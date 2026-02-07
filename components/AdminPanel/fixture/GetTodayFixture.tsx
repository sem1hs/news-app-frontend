"use client"
import useFixtureToday from '@/hooks/useFixtureToday';
import React, { useCallback, useState } from 'react'
import FixtureSkeleton from '../skeleton/FixtureSkeleton';
import TodayFixtureEmptyState from '../skeleton/TodayFixtureEmptyState';
import FixtureTable from '../tables/FixtureTable';

const GetTodayFixture = () => {
    const { fixture, isLoading } = useFixtureToday();
    const [visible, setVisible] = useState<boolean>(false);

    const handleClick = useCallback(
        async (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setVisible(true);
        },
        []
    );

    if (isLoading) return <FixtureSkeleton />

    if (!fixture || Object.keys(fixture).length === 0) return <TodayFixtureEmptyState />;


    return (
        <>
            <button
                onClick={handleClick}
                className="cursor-pointer block mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
            >
                {isLoading ? "Yükleniyor..." : "Fikstürü Getir"}
            </button>

            {visible && fixture && <FixtureTable grouped data={fixture} />}
        </>
    );
}

export default GetTodayFixture
