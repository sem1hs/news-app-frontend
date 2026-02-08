import GetStanding from "@/components/AdminPanel/standing/GetStanding"
import StandingSkeleton from "@/components/Standings/StandingSkeleton"
import { Suspense } from "react"

const GetStandingPage = () => {
    return (
        <div className="h-full">
            <h1 className="text-xl md:text-3xl font-bold text-white text-center py-6">
                Puan Durumu Görüntüleme
            </h1>

            <Suspense fallback={<StandingSkeleton />}>
                <GetStanding />
            </Suspense>
        </div>
    )
}

export default GetStandingPage
