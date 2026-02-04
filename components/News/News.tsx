import { Suspense } from "react";
import NewsList from "./NewsList";
import NewsSkeleton from "./NewsSkeleton";

type Props = {
  queryParam: Promise<{ [key: string]: string | string[] | undefined }>;
}

const News = async ({ queryParam }: Props) => {
  const { league, search } = await queryParam;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Futbol Haberleri
        </h1>

        {search !== undefined && <h1 className="text-md sm:text-xl font-bold text-white">
          “{search}” için arama sonuçları
        </h1>}
      </div>

      <Suspense fallback={<NewsSkeleton />}>
        {league === undefined && search === undefined && <NewsList />}
        {league === undefined && search !== undefined && <NewsList search={search} />}
        {league !== undefined && search === undefined && <NewsList leagueName={league} />}
      </Suspense>
    </section >
  );
};

export default News;
