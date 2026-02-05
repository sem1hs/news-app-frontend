import { CreateFixtureRequest, FixtureResponse, TodayFixtureResponse, UpdateFixtureRequest } from "@/types/fixture";

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

export async function createFixture(
  fixture: CreateFixtureRequest
): Promise<FixtureResponse> {
  const res = await fetch("/api/fixtures", {
    method: "POST",
    credentials: "include",
    body: JSON.stringify(fixture),
  });

  if (!res.ok) {
    throw new Error("Fikstür Oluşturulamadı");
  }

  return res.json();
}

export async function updateFixture(fixture: UpdateFixtureRequest): Promise<FixtureResponse> {
  const res = await fetch(`/api/fixtures/${fixture.id}`, {
    method: "PATCH",
    credentials: "include",
    body: JSON.stringify(fixture),
  });

  if (!res.ok) {
    throw new Error("Fikstür Güncellenemedi");
  }

  return res.json();
}

export async function deleteFixture(id: number): Promise<void> {
  const res = await fetch(`/api/fixtures/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("Fikstür Silinemedi");
  }

  return res.json();
}
