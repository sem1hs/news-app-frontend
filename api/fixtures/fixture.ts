import { TodayFixtureResponse } from "@/types/fixture";

export async function fetchTodayFixture(): Promise<TodayFixtureResponse> {
    const res = await fetch("/api/fixtures/today", {
        method: "GET",
        credentials: "include",
    });

    if (!res.ok) {
        throw new Error("Fikstür getirilemedi");
    }

    return res.json();
}