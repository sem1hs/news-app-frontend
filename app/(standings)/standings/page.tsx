import Footer from '@/components/Footer/Footer'
import Header from '@/components/Header/Header'
import MobileHeader from '@/components/Header/mobile/MobileHeader'
import Standings from '@/components/Standings/Standings'
import StandingSkeleton from '@/components/Standings/StandingSkeleton'
import { Suspense } from 'react'

const StandingPage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    return (
        <>
            <Header />
            <MobileHeader />
            <Suspense>
                <main>
                    <Suspense fallback={<StandingSkeleton />}>
                        <Standings queryParam={searchParams} />
                    </Suspense>
                </main>
            </Suspense>
            <Footer />
        </>
    )
}

export default StandingPage
