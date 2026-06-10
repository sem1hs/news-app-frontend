"use client";

import { fetchLeagueByName } from "@/api/leagues/leagues";
import { useQuery } from "@tanstack/react-query";

export const useLeagueByName = (leagueName?: string) => {

    const getLeagueByName = useQuery({
        queryKey: ["league", "name", leagueName],
        queryFn: () => fetchLeagueByName(leagueName as string),
        enabled: !!leagueName,
        staleTime: 1000 * 60 * 10,
    });

    return {
        league: getLeagueByName.data,
        isLoading: getLeagueByName.isLoading,
    };
};