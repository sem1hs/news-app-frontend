export default function FixtureSkeleton() {
    const skeletonRows = Array.from({ length: 5 });

    return (
        <div className="mt-6 px-6 flex flex-col gap-8">
            {Array.from({ length: 2 }).map((_, groupIndex) => (
                <div key={groupIndex}>
                    <div className="mb-3 h-6 w-40 rounded bg-[#1a1f26] animate-pulse" />

                    <div className="overflow-x-auto custom-scrollbar max-w-full">
                        <table className="bg-[#111517] text-sm text-white mx-auto w-full">
                            <thead className="bg-amber-500 text-black">
                                <tr>
                                    {[
                                        "ID",
                                        "Lig",
                                        "Hafta",
                                        "Ev Sahibi",
                                        "Skor",
                                        "Deplasman",
                                        "Saat",
                                        "Stadyum",
                                        "Sezon",
                                        "Durum",
                                        "İşlemler",
                                    ].map((_, i) => (
                                        <th key={i} className="p-2 border">
                                            &nbsp;
                                        </th>
                                    ))}
                                </tr>
                            </thead>

                            <tbody>
                                {skeletonRows.map((_, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {Array.from({ length: 11 }).map((_, colIndex) => (
                                            <td
                                                key={colIndex}
                                                className="p-2 border border-amber-500"
                                            >
                                                <div className="h-4 w-full rounded bg-[#1a1f26] animate-pulse" />
                                            </td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </div>
    );
}
