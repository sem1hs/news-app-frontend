import Fixture from "@/components/Fixture/Fixture";
import FixtureCardSkeleton from "@/components/Fixture/FixtureCardSkeleton";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import MobileHeader from "@/components/Header/mobile/MobileHeader";
import { Suspense } from "react";

const FixturePage = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
    return (
        <>
            <Header />
            <MobileHeader />
            <Suspense fallback={<FixtureCardSkeleton />}>
                <main>
                    <Fixture queryParam={searchParams} />
                </main>
            </Suspense>
            <Footer />
        </>
    );
};

export default FixturePage;
