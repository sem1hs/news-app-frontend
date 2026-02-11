"use client";
import { createTeam, deleteTeam, fetchTeams, updateTeam } from "@/api/teams/teams";
import { TeamCreateRequest, TeamUpdateRequest } from "@/types/teams";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type Params = {
  leagueId?: number;
}

export const useTeams = ({ leagueId }: Params) => {
  const queryClient = useQueryClient();

  const getAllTeams = useQuery({
    queryKey: ["teams", leagueId],
    queryFn: () => fetchTeams(leagueId as number),
    staleTime: 1000 * 60 * 10,
    enabled: !!leagueId,
  });

  const createTeamMutation = useMutation({
    mutationFn: async ({
      team,
      resetForm,
    }: {
      team: TeamCreateRequest;
      resetForm?: () => void;
    }) => await createTeam(team),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["teams", variables.team.leagueId] });
      variables.resetForm?.();
    },
  });

  const updateTeamMutation = useMutation({
    mutationFn: async ({ team }: { team: TeamUpdateRequest }) => await updateTeam(team),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["teams", variables.team.leagueId] });
    },
  });

  const deleteTeamMutation = useMutation({
    mutationFn: async (teamId: number) => await deleteTeam(teamId),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["teams"] });
    },
  });


  return {
    teams: getAllTeams.data,
    isLoading: getAllTeams.isLoading,
    createTeam: createTeamMutation.mutate,
    deleteTeam: deleteTeamMutation.mutate,
    updateTeam: updateTeamMutation.mutate
  };
};
