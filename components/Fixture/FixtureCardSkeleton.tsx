const FixtureCardSkeleton = () => {
    return (
        <div className="bg-[#111517] border border-white/5 rounded-lg px-4 py-3 flex items-center justify-between animate-pulse">

            <div className="w-32 h-4 bg-white/10 rounded" />

            <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 min-w-[420px]">

                <div className="h-4 bg-white/10 rounded w-full" />

                <div className="h-4 bg-white/10 rounded w-16 mx-auto" />

                <div className="h-4 bg-white/10 rounded w-full" />
            </div>

            <div className="w-20 h-4 bg-white/10 rounded" />
        </div>
    )
}

export default FixtureCardSkeleton
