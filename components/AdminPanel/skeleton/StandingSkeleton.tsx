type Props = {
    rowCount?: number;
};

export default function StandingTableSkeleton({ rowCount = 10 }: Props) {
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
                    </tr>
                </thead>

                <tbody>
                    {Array.from({ length: rowCount }).map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {Array.from({ length: 10 }).map((_, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="p-2 border border-amber-500"
                                >
                                    <div className="h-4 w-full rounded bg-white/10 animate-pulse" />
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
