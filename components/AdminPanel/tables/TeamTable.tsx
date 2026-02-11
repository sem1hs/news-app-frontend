"use client"

import { useTeams } from '@/hooks/useTeams';
import { TeamResponse } from '@/types/teams';
import Image from 'next/image';
import { useCallback, useState } from 'react';
import UpdateTeamModal from '../modal/UpdateTeamModal';

type Props = {
    data: TeamResponse[];
};

const TeamTable = ({ data }: Props) => {
    const { deleteTeam } = useTeams({});
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedTeam, setSelectedTeam] = useState<TeamResponse | null>(null);

    const handleDelete = useCallback(
        (teamId: number) => {
            const confirmed = confirm("Bu takımı silmek istiyor musunuz?");
            if (!confirmed) return;
            deleteTeam(teamId)
        },
        [deleteTeam]
    );

    const handleUpdate = useCallback((team: TeamResponse) => {
        setSelectedTeam(team);
        setIsModalOpen(true);
    }, []);

    return (
        <div className="max-h-[600px] overflow-y-auto overflow-x-auto custom-scrollbar">
            <table className="bg-[#111517] text-sm text-white mx-auto w-full">
                <thead className="bg-amber-500 text-black">
                    <tr>
                        <th className="p-2 border">#</th>
                        <th className="p-2 border">Logo</th>
                        <th className="p-2 border">Takım</th>
                        <th className="p-2 border">Kısa Ad</th>
                        <th className="p-2 border">League ID</th>
                        <th className="p-2 border">İşlemler</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((team, index) => (
                        <tr key={team.id}>
                            <td className="p-2 border border-amber-500 text-center">
                                {index + 1}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {team.logoUrl ? (
                                    <Image
                                        src={team.logoUrl}
                                        alt={team.name}
                                        className="h-8 w-8 object-contain mx-auto"
                                    />
                                ) : (
                                    <span className="text-gray-400 text-xs">
                                        Yok
                                    </span>
                                )}
                            </td>

                            <td className="p-2 border border-amber-500 font-medium">
                                {team.name}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {team.shortName}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {team.leagueId}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="flex gap-2 justify-center">
                                    <button
                                        onClick={() => handleUpdate(team)}
                                        className="rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black hover:bg-amber-400 transition"
                                    >
                                        Düzenle
                                    </button>

                                    <button
                                        onClick={() => handleDelete(team.id)}
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

            {isModalOpen && selectedTeam && (
                <UpdateTeamModal
                    team={selectedTeam}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default TeamTable
