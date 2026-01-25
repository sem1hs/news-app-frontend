import { FixtureResponse, TodayFixtureResponse } from "@/types/fixture";

type FixtureByLeagueAndWeekParams = {
  leagueId: number;
  week: number;
};

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

export async function fetchFixtureByLeagueAndWeek({
  leagueId,
  week,
}: FixtureByLeagueAndWeekParams): Promise<FixtureResponse[]> {
  const params = new URLSearchParams();

  params.append("leagueId", leagueId.toString());
  params.append("week", week.toString());

  const res = await fetch(`/api/fixtures?${params.toString()}`, {
    method: "GET",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Haberler getirilemedi");
  }

  return res.json();
}
