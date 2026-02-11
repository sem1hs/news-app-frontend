import TeamCreateForm from "@/components/AdminPanel/forms/TeamCreateForm"
import { TeamTableSkeleton } from "@/components/AdminPanel/skeleton/TeamTableSkeleton"
import { Suspense } from "react"

const CreateTeamPage = () => {
    return (
        <div className="h-full">
            <h1 className="text-3xl font-bold text-white text-center py-6">
                Takım Oluştur
            </h1>

            <Suspense fallback={<TeamTableSkeleton />}>
                <TeamCreateForm />
            </Suspense>
        </div>
    )
}

export default CreateTeamPage
