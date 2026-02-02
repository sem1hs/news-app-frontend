import { TABS } from "@/constants/LATEST_NEWS";
import { LEAGUES } from "@/types/league";
import { NewsCategory } from "@/types/news";

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

export const formatCategoryName = (category: NewsCategory): string | undefined => {
  return TABS.find(tabs => tabs.key === category)?.label
}
