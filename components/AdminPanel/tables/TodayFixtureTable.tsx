"use client";

import { useCallback, useState } from "react";
import { FixtureResponse, TodayFixtureResponse } from "@/types/fixture";
import useFixture from "@/hooks/useFixture";
import UpdateFixtureModal from "../modal/UpdateFixtureModal";

export default function TodayFixtureTable({
    data,
}: {
    data: TodayFixtureResponse;
}) {
    const { deleteFixture } = useFixture();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedFixture, setSelectedFixture] = useState<FixtureResponse | null>(null);

    const handleDelete = useCallback(
        (fixtureId: number) => {
            const confirmed = confirm("Bu fikstürü silmek istiyor musunuz?");
            if (!confirmed) return;
            deleteFixture(fixtureId);
        },
        [deleteFixture]
    );

    const handleUpdate = useCallback((fixture: FixtureResponse) => {
        setSelectedFixture(fixture);
        setIsModalOpen(true);
    }, []);


    const statusStyle: Record<FixtureResponse["status"], string> = {
        SCHEDULED: "bg-amber-500 text-black",
        LIVE: "bg-red-500 text-white animate-pulse",
        FINISHED: "bg-green-500 text-black",
    };

    return (
        <div className="mt-6 px-6 flex flex-col gap-8">
            {Object.entries(data).map(([groupKey, fixtures]) => (
                <div key={groupKey}>
                    <h2 className="mb-3 text-lg font-semibold text-amber-500">
                        {groupKey}
                    </h2>

                    <div className="overflow-x-auto custom-scrollbar max-w-full">
                        <table className="bg-[#111517] text-sm text-white mx-auto w-full">
                            <thead className="bg-amber-500 text-black">
                                <tr>
                                    <th className="p-2 border">ID</th>
                                    <th className="p-2 border">Lig</th>
                                    <th className="p-2 border">Hafta</th>
                                    <th className="p-2 border">Ev Sahibi</th>
                                    <th className="p-2 border">Skor</th>
                                    <th className="p-2 border">Deplasman</th>
                                    <th className="p-2 border">Saat</th>
                                    <th className="p-2 border">Stadyum</th>
                                    <th className="p-2 border">Sezon</th>
                                    <th className="p-2 border">Durum</th>
                                    <th className="p-2 border">İşlemler</th>
                                </tr>
                            </thead>

                            <tbody>
                                {fixtures.map((fixture) => (
                                    <tr key={fixture.id}>
                                        <td className="p-2 border border-amber-500 text-center">
                                            {fixture.id}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            {fixture.leagueName}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            {fixture.week}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center font-medium">
                                            {fixture.homeTeamName}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center font-semibold">
                                            {fixture.homeScore !== null && fixture.awayScore !== null ? `${fixture.homeScore} - ${fixture.awayScore}` : "-"}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center font-medium">
                                            {fixture.awayTeamName}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            {new Date(fixture.matchDate).toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", })}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            {fixture.stadium ?? "-"}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            {fixture.season}
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            <span className={`rounded px-2 py-0.5 text-xs font-semibold ${statusStyle[fixture.status]}`}>
                                                {fixture.status}
                                            </span>
                                        </td>

                                        <td className="p-2 border border-amber-500 text-center">
                                            <div className="flex gap-2 justify-center">
                                                <button
                                                    onClick={() => handleUpdate(fixture)}
                                                    className="cursor-pointer rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black hover:bg-amber-400 transition"
                                                >
                                                    Düzenle
                                                </button>

                                                <button
                                                    onClick={() => handleDelete(fixture.id)}
                                                    className="cursor-pointer rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white hover:bg-red-400"
                                                >
                                                    Sil
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))
            }
            {isModalOpen && selectedFixture && (
                <UpdateFixtureModal
                    fixture={selectedFixture}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div >
    );
}
