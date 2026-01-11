"use client";
import { fetchLeagues } from "@/api/leagues/leagues";
import { useQuery, useQueryClient } from "@tanstack/react-query";

export const useLeagues = () => {
  const queryClient = useQueryClient();

  const getAllLeagues = useQuery({
    queryKey: ["leagues"],
    queryFn: fetchLeagues,
    staleTime: 1000 * 60 * 10,
  });

  return {
    leagues: getAllLeagues.data,
    isLoading: getAllLeagues.isLoading,
  };
};
