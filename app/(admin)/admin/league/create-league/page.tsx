import LeagueCreateForm from '@/components/AdminPanel/forms/LeagueCreateForm'
import { LeagueTableSkeleton } from '@/components/AdminPanel/skeleton/LeagueTableSkeleton'
import React, { Suspense } from 'react'

const CreateLeaguePage = () => {
    return (
        <div className="h-full">
            <h1 className="text-3xl font-bold text-white text-center py-6">
                Lig Oluştur
            </h1>

            <Suspense fallback={<LeagueTableSkeleton />}>
                <LeagueCreateForm />
            </Suspense>
        </div>
    )
}

export default CreateLeaguePage
