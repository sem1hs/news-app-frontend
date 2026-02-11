import GetLeagues from '@/components/AdminPanel/league/GetLeagues'
import { LeagueTableSkeleton } from '@/components/AdminPanel/skeleton/LeagueTableSkeleton'
import { Suspense } from 'react'

const GetLeaguesPage = () => {
    return (
        <div className="h-full">
            <h1 className="text-xl md:text-3xl font-bold text-white text-center py-6">
                Ligleri Görüntüle
            </h1>

            <Suspense fallback={<LeagueTableSkeleton />}>
                <GetLeagues />
            </Suspense>
        </div>
    )
}

export default GetLeaguesPage
