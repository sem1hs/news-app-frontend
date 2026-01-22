import { fetchTodayFixture } from "@/api/fixtures/fixture";
import { useQuery } from "@tanstack/react-query";

const useFixtureToday = () => {
    const getTodayFixture = useQuery({
        queryKey: ["fixture", "today"],
        queryFn: fetchTodayFixture,
        staleTime: 1000 * 60 * 10,
    });

    return {
        fixture: getTodayFixture.data,
        isLoading: getTodayFixture.isLoading
    }
}

export default useFixtureToday
