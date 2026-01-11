"use client";
import { fetchTeams } from "@/api/teams/teams";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useTeams = (leagueId?: number) => {
  const queryClient = useQueryClient();

  const getAllTeams = useQuery({
    queryKey: ["teams", leagueId],
    queryFn: () => fetchTeams(leagueId as number),
    staleTime: 1000 * 60 * 10,
    enabled: !!leagueId,
  });

  return {
    teams: getAllTeams.data,
    isLoading: getAllTeams.isLoading,
  };
};
