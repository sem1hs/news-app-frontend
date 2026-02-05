export default function TodayFixtureEmptyState() {
    return (
        <div className="mt-10 flex flex-col items-center justify-center gap-4 rounded-lg px-6 py-12 text-center text-white">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-amber-500/20 text-amber-500 text-3xl">
                ⚽
            </div>

            <h2 className="text-lg font-semibold">
                Bugün oynanacak maç yok
            </h2>

            <p className="max-w-md text-sm text-white/70">
                Bugün için sisteme tanımlı herhangi bir fikstür bulunmuyor.
            </p>
        </div>
    );
}
