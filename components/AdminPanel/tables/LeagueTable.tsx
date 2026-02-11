"use client"
import { useLeagues } from '@/hooks/useLeagues';
import { LeagueResponse } from '@/types/league';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import UpdateLeagueModal from '../modal/UpdateLeagueModal';

type Props = {
    data: LeagueResponse[];
};

const LeagueTable = ({ data }: Props) => {
    const { deleteLeague } = useLeagues();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedLeague, setSelectedLeague] = useState<LeagueResponse | null>(null);

    const handleDelete = useCallback(
        (leagueId: number) => {
            const confirmed = confirm("Bu ligi silmek istiyor musunuz?");
            if (!confirmed) return;
            deleteLeague(leagueId)
        },
        [deleteLeague]
    );

    const handleUpdate = useCallback((league: LeagueResponse) => {
        setSelectedLeague(league);
        setIsModalOpen(true);
    }, []);

    return (
        <div className="max-h-[600px] overflow-y-auto overflow-x-auto custom-scrollbar">
            <table className="bg-[#111517] text-sm text-white mx-auto w-full">
                <thead className="bg-amber-500 text-black">
                    <tr>
                        <th className="p-2 border">#</th>
                        <th className="p-2 border">Logo</th>
                        <th className="p-2 border">Lig Adı</th>
                        <th className="p-2 border">Ülke</th>
                        <th className="p-2 border">İşlemler</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((league, index) => (
                        <tr key={league.id}>
                            <td className="p-2 border border-amber-500 text-center">
                                {index + 1}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {league.logoUrl ? (
                                    <Image
                                        src={league.logoUrl}
                                        alt={league.name}
                                        width={32}
                                        height={32}
                                        className="h-8 w-8 object-contain mx-auto"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-xs">
                                        Yok
                                    </span>
                                )}
                            </td>

                            <td className="p-2 border border-amber-500 font-medium">
                                {league.name}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {league.country}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="flex gap-2 justify-center">
                                    <button
                                        onClick={() => handleUpdate(league)}
                                        className="rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black hover:bg-amber-400 transition"
                                    >
                                        Düzenle
                                    </button>

                                    <button
                                        onClick={() => handleDelete(league.id)}
                                        className="rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white hover:bg-red-400"
                                    >
                                        Sil
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {isModalOpen && selectedLeague && (
                <UpdateLeagueModal
                    league={selectedLeague}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );

}

export default LeagueTable
