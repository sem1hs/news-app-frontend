import GetFixtureByLeague from '@/components/AdminPanel/fixture/GetFixtureByLeague'
import FixtureSkeleton from '@/components/AdminPanel/skeleton/FixtureSkeleton'
import { Suspense } from 'react'

const GetFixtureByLeaguePage = () => {
    return (
        <div className="h-full">
            <h1 className="text-xl md:text-3xl font-bold text-white text-center py-6">
                Lige Göre Tüm Fikstür
            </h1>

            <Suspense fallback={<FixtureSkeleton />}>
                <GetFixtureByLeague />
            </Suspense>
        </div>
    )
}

export default GetFixtureByLeaguePage
