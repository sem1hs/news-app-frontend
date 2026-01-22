"use client"
import { useNews } from '@/hooks/useNews';
import PopularNewsCard from '../home/PopularNews/PopularNewsCard'
import NewsSkeleton from './NewsSkeleton';
import NotFound from '../NotFound/NotFound';
import useNewsByLeagueName from '@/hooks/useNewsByLeagueName';

type Props = {
    leagueName?: string | string[];
}
const NewsList = ({ leagueName }: Props) => {
    const { news: newsByLeagueName, isLoading: newsByLeagueNameLoading, } = useNewsByLeagueName({ leagueName });
    const { news, isLoading } = useNews()

    const data = leagueName ? newsByLeagueName : news;

    const loading = leagueName ? newsByLeagueNameLoading : isLoading;

    if (loading) return <NewsSkeleton />;

    if (!data) return <NotFound />;

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {data.content.map((item: any) => (
                <PopularNewsCard
                    key={item.id}
                    title={item.title}
                    imageUrl={item.imageUrl}
                    category={item.leagueName}
                    slug={item.slug}
                    viewCount={1200}
                />
            ))}
        </div>
    );
}

export default NewsList
