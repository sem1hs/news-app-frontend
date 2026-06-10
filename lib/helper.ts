import { TABS } from "@/constants/LATEST_NEWS";
import { WORLD_CUP_GROUPS } from "@/constants/WORLD_CUP_GROUPS";
import { FixtureResponse } from "@/types/fixture";
import { LEAGUES } from "@/types/league";
import { NewsCategory } from "@/types/news";
import { StandingResponse } from "@/types/standing";

export const formatMatchDayLabel = (isoDate: string) => {
  const matchDate = new Date(isoDate);
  const today = new Date();
  const tomorrow = new Date();

  today.setHours(0, 0, 0, 0);
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const matchDay = new Date(matchDate);
  matchDay.setHours(0, 0, 0, 0);

  if (matchDay.getTime() === today.getTime()) {
    return "Bugün";
  }

  if (matchDay.getTime() === tomorrow.getTime()) {
    return "Yarın";
  }

  return matchDate.toLocaleDateString("tr-TR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};

export const formatMatchTime = (isoDate: string) => {
  const date = new Date(isoDate);

  return date.toLocaleTimeString("tr-TR", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

export const getLeagueIdByLabel = (label: string): number | undefined => {
  return LEAGUES.find((league) => league.name === label)?.id;
};

export const getMaxWeekByLeagueId = (leagueId: number): number => {
  return LEAGUES.find((league) => league.id === leagueId)?.maxWeek as number;
};

export const formatCategoryName = (category: NewsCategory): string | undefined => {
  return TABS.find(tabs => tabs.key === category)?.label
}

export type FixtureGroup = {
  groupName: string;
  fixtures: FixtureResponse[];
};

export const groupWorldCupFixtures = (
  fixtures: FixtureResponse[]
): FixtureGroup[] => {
  return Array.from(
    { length: Math.ceil(fixtures.length / 2) },
    (_, index) => ({
      groupName: String.fromCharCode(65 + index),
      fixtures: fixtures.slice(index * 2, index * 2 + 2),
    })
  );
};

export const groupFixturesByWorldCupGroup = (
  fixtures: FixtureResponse[]
) => {
  const grouped: Record<string, FixtureResponse[]> = {};

  fixtures.forEach((fixture) => {
    const groupName = Object.entries(WORLD_CUP_GROUPS).find(
      ([_, teams]) =>
        teams.includes(fixture.homeTeamName) ||
        teams.includes(fixture.awayTeamName)
    )?.[0];

    if (!groupName) return;

    if (!grouped[groupName]) {
      grouped[groupName] = [];
    }

    grouped[groupName].push(fixture);
  });

  return grouped;
};

export type StandingGroup = {
  groupName: string;
  standings: StandingResponse[];
};

export const groupStandingsByWorldCupGroup = (
  standings: StandingResponse[]
): StandingGroup[] => {
  return Object.keys(WORLD_CUP_GROUPS)
    .map((groupName) => ({
      groupName,
      standings: standings.filter((standing) =>
        WORLD_CUP_GROUPS[groupName].includes(standing.teamName)
      ),
    }))
    .filter((group) => group.standings.length > 0);
};