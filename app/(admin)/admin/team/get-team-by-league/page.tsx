import { TeamTableSkeleton } from "@/components/AdminPanel/skeleton/TeamTableSkeleton"
import GetTeamByLeague from "@/components/AdminPanel/team/GetTeamByLeague"
import { Suspense } from "react"

const GetTeamByLeaguePage = () => {
    return (
        <div className="h-full">
            <h1 className="text-xl md:text-3xl font-bold text-white text-center py-6">
                Lige Göre Takım Görüntüle
            </h1>

            <Suspense fallback={<TeamTableSkeleton />}>
                <GetTeamByLeague />
            </Suspense>
        </div>
    )
}

export default GetTeamByLeaguePage
