"use client";
import { createLeague, deleteLeague, fetchLeagues, updateLeague } from "@/api/leagues/leagues";
import { CreateLeagueRequest, UpdateLeagueRequest } from "@/types/league";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useLeagues = () => {
  const queryClient = useQueryClient();

  const getAllLeagues = useQuery({
    queryKey: ["leagues"],
    queryFn: fetchLeagues,
    staleTime: 1000 * 60 * 10,
  });

  const createLeagueMutation = useMutation({
    mutationFn: async ({
      league,
      resetForm,
    }: {
      league: CreateLeagueRequest;
      resetForm?: () => void;
    }) => await createLeague(league),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["leagues"] });
      variables.resetForm?.();
    },
  });

  const updateLeagueMutation = useMutation({
    mutationFn: async ({ league }: { league: UpdateLeagueRequest }) => await updateLeague(league),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["leagues"] });
    },
  });

  const deleteLeagueMutation = useMutation({
    mutationFn: async (leagueId: number) => await deleteLeague(leagueId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["leagues"] });
    },
  });

  return {
    leagues: getAllLeagues.data,
    isLoading: getAllLeagues.isLoading,
    createLeague: createLeagueMutation.mutate,
    updateLeague: updateLeagueMutation.mutate,
    deleteLeague: deleteLeagueMutation.mutate
  };
};
