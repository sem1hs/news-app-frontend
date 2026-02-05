import FixtureCreateForm from '@/components/AdminPanel/forms/FixtureCreateForm'
import FixtureSkeleton from '@/components/AdminPanel/skeleton/FixtureSkeleton'
import React, { Suspense } from 'react'

const CreateFixturePage = () => {
    return (
        <div className="h-full">
            <h1 className="text-3xl font-bold text-white text-center py-6">
                Fikstür Oluştur
            </h1>

            <Suspense fallback={<FixtureSkeleton />}>
                <FixtureCreateForm />
            </Suspense>
        </div>
    )
}

export default CreateFixturePage
