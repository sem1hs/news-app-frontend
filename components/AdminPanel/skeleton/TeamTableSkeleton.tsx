export const TeamTableSkeleton = () => {
    return (
        <div className="max-h-[600px] overflow-y-auto overflow-x-auto custom-scrollbar animate-pulse">
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
                    {[...Array(6)].map((_, index) => (
                        <tr key={index}>
                            <td className="p-2 border border-amber-500 text-center">
                                <div className="h-4 w-6 bg-gray-700 rounded mx-auto" />
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="h-8 w-8 bg-gray-700 rounded-full mx-auto" />
                            </td>

                            <td className="p-2 border border-amber-500">
                                <div className="h-4 w-32 bg-gray-700 rounded" />
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="h-4 w-16 bg-gray-700 rounded mx-auto" />
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="h-4 w-10 bg-gray-700 rounded mx-auto" />
                            </td>

                            <td className="p-2 border border-amber-500 text-center">
                                <div className="flex gap-2 justify-center">
                                    <div className="h-6 w-16 bg-gray-700 rounded" />
                                    <div className="h-6 w-12 bg-gray-700 rounded" />
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
