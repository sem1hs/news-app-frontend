"use client";

import useStanding from "@/hooks/useStanding";
import { StandingResponse } from "@/types/standing";
import { useCallback, useState } from "react";
import UpdateStandingModal from "../modal/UpdateStandingModal";

type Props = {
    data: StandingResponse[];
}

export default function StandingTable({ data }: Props) {
    const { deleteStanding } = useStanding()
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStanding, setSelectedStanding] = useState<StandingResponse | null>(null);

    const handleDelete = useCallback(
        ({ leagueId, teamId }: { leagueId: number, teamId: number }) => {
            const confirmed = confirm("Bu haberi silmek istiyor musunuz?");
            if (!confirmed) return;
            deleteStanding({ leagueId, teamId });
        },
        [deleteStanding]
    );

    const handleUpdate = useCallback((standing: StandingResponse) => {
        setSelectedStanding(standing);
        setIsModalOpen(true);
    }, []);

    return (
        <div className="overflow-x-auto custom-scrollbar max-w-full">
            <table className="bg-[#111517] text-sm text-white mx-auto w-full">
                <thead className="bg-amber-500 text-black">
                    <tr>
                        <th className="p-2 border">#</th>
                        <th className="p-2 border">Takım</th>
                        <th className="p-2 border">O</th>
                        <th className="p-2 border">G</th>
                        <th className="p-2 border">B</th>
                        <th className="p-2 border">M</th>
                        <th className="p-2 border">A.G.</th>
                        <th className="p-2 border">Y.G.</th>
                        <th className="p-2 border">AV</th>
                        <th className="p-2 border">P</th>
                        <th className="p-2 border">İşlemler</th>
                    </tr>
                </thead>

                <tbody>
                    {data.map((standing, index) => (
                        <tr key={standing.teamId}>
                            <td className="p-2 border border-amber-500 text-center">
                                {index + 1}
                            </td>

                            <td className="p-2 border border-amber-500 font-medium">
                                {standing.teamName}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {standing.played}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {standing.won}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {standing.draw}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {standing.lost}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {standing.goalsFor}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                {standing.goalsAgainst}
                            </td>

                            <td className="p-2 border border-amber-500 text-center font-semibold">
                                {standing.goalDifference}
                            </td>

                            <td className="p-2 border border-amber-500 text-center font-bold">
                                {standing.points}
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="flex gap-2 justify-center">
                                    <button onClick={() => handleUpdate(standing)} className="rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black hover:bg-amber-400 transition">
                                        Düzenle
                                    </button>

                                    <button onClick={() => handleDelete({ leagueId: standing.leagueId, teamId: standing.teamId })} className="rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white hover:bg-red-400">
                                        Sil
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {isModalOpen && selectedStanding && (
                <UpdateStandingModal
                    standing={selectedStanding}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}
