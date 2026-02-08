import StandingCreateForm from '@/components/AdminPanel/forms/StandingCreateForm'
import StandingSkeleton from '@/components/Standings/StandingSkeleton'
import React, { Suspense } from 'react'

const CreateStandingPage = () => {
    return (
        <div className="h-full">
            <h1 className="text-3xl font-bold text-white text-center py-6">
                Puan Durumu Oluştur
            </h1>

            <Suspense fallback={<StandingSkeleton />}>
                <StandingCreateForm />
            </Suspense>
        </div>
    )
}

export default CreateStandingPage
