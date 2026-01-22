import FixtureLeague from "./FixtureLeague";
import FixtureToday from "./FixtureToday";

type Props = {
    queryParam: Promise<{ [key: string]: string | string[] | undefined }>;
}

const Fixture = async ({ queryParam }: Props) => {
    const { league } = await queryParam;

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 text-white">

            <h1 className="text-2xl font-bold mb-8">
                {league !== undefined ? "Haftanın Maçları" : "Bugünün Maçları"}
            </h1>

            <div className="space-y-10">
                {league !== undefined ? <FixtureLeague leagueName={league} /> : <FixtureToday />}
            </div>
        </section>
    );
};

export default Fixture;
