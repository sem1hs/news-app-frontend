const TodayFixturesMiniSkeleton = () => {
    return (
        <section className="bg-[#111517] border border-white/5 rounded-lg p-4 animate-pulse">
            <div className="flex items-center justify-between mb-3">
                <div className="h-4 w-32 bg-white/10 rounded" />
                <div className="h-3 w-12 bg-white/10 rounded" />
            </div>

            <div className="space-y-2">
                {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="border border-white/5 rounded-md px-3 py-2">
                        <div className="flex items-center justify-between gap-3">
                            <div className="h-4 w-48 bg-white/10 rounded" />
                            <div className="h-4 w-14 bg-white/10 rounded" />
                        </div>
                        <div className="h-3 w-24 bg-white/10 rounded mt-2" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default TodayFixturesMiniSkeleton;
