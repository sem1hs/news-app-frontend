import NewsList from "./NewsList";

type Props = {
  queryParam: Promise<{ [key: string]: string | string[] | undefined }>;
}

const News = async ({ queryParam }: Props) => {
  const { league } = await queryParam;

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white">
          Futbol Haberleri
        </h1>
      </div>

      <>
        {league !== undefined ? <NewsList leagueName={league} /> : <NewsList />}
      </>

      <div className="flex justify-center mt-10">
        <button className="px-6 py-2.5 rounded-lg bg-amber-500 transition text-sm font-bold text-black cursor-pointer">
          Daha Fazla Yükle
        </button>
      </div>
    </section>
  );
};

export default News;
