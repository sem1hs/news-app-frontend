import PopularNewsCardSkeleton from "../home/PopularNews/PopularNewsCardSkeleton";

const NewsSkeleton = () => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-8 animate-pulse">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
                <div className="h-8 w-64 bg-gray-700 rounded" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                {Array.from({ length: 16 }).map((_, index) => (
                    <PopularNewsCardSkeleton key={index} />
                ))}
            </div>

            <div className="flex justify-center mt-10">
                <div className="h-10 w-44 bg-gray-700 rounded-lg" />
            </div>
        </section>
    );
};

export default NewsSkeleton;
