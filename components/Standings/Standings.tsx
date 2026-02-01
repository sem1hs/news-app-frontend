import StandingLeague from "./StandingLeague";

type Props = {
    queryParam: Promise<{ [key: string]: string | string[] | undefined }>;
}
const Standings = async ({ queryParam }: Props) => {
    const { league } = await queryParam;

    const DEFAULT_LEAGUE = "Süper Lig";

    return (
        <section className="max-w-7xl mx-auto px-4 py-8 text-white">

            <h1 className="text-2xl font-bold mb-8">
                Puan Durumu
            </h1>

            <StandingLeague leagueName={league || DEFAULT_LEAGUE} />
        </section>
    )
}

export default Standings
