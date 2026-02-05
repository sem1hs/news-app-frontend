import GetTodayFixture from "@/components/AdminPanel/fixture/GetTodayFixture";
import FixtureSkeleton from "@/components/AdminPanel/skeleton/FixtureSkeleton";
import { Suspense } from "react";

const GetTodayFixturePage = () => {
    return (
        <div className="h-full">
            <h1 className="text-xl md:text-3xl font-bold text-white text-center py-6">
                Bugünün Fikstürü
            </h1>

            <Suspense fallback={<FixtureSkeleton />}>
                <GetTodayFixture />
            </Suspense>
        </div>
    );
}

export default GetTodayFixturePage
