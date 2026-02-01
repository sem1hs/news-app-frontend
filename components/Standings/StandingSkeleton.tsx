const StandingSkeleton = () => {
    return (
        <div className="bg-[#111517] border border-white/5 rounded-lg overflow-hidden animate-pulse">

            <div className="grid grid-cols-[40px_1fr_repeat(8,50px)] px-4 py-2 border-b border-white/5">
                {Array.from({ length: 10 }).map((_, i) => (
                    <div
                        key={i}
                        className="h-3 bg-white/10 rounded"
                    />
                ))}
            </div>

            {Array.from({ length: 10 }).map((_, rowIndex) => (
                <div
                    key={rowIndex}
                    className="grid grid-cols-[40px_1fr_repeat(8,50px)] px-4 py-3 border-b border-white/5"
                >
                    <div className="h-4 w-6 bg-white/10 rounded" />
                    <div className="h-4 w-32 bg-white/10 rounded" />

                    {Array.from({ length: 8 }).map((_, colIndex) => (
                        <div
                            key={colIndex}
                            className="h-4 w-8 bg-white/10 rounded"
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default StandingSkeleton;
