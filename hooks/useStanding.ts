import { createStanding, deleteStanding, updateStanding } from '@/api/standings/standings';
import { StandingCreateRequest, StandingUpdateRequest } from '@/types/standing';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const useStanding = () => {
    const queryClient = useQueryClient();

    const createStandingMutation = useMutation({
        mutationFn: async ({
            standing,
            resetForm,
        }: {
            standing: StandingCreateRequest;
            resetForm?: () => void;
        }) => await createStanding(standing),

        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["standings", data.leagueId] });
            variables.resetForm?.();
        },
    });

    const updateStandingMutation = useMutation({
        mutationFn: async ({ standing }: { standing: StandingUpdateRequest }) => await updateStanding(standing),

        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["standings", variables.standing.leagueId] });
        },
    });

    const deleteStandingMutation = useMutation({
        mutationFn: async ({ leagueId, teamId }: { leagueId: number, teamId: number }) => await deleteStanding({ leagueId, teamId }),

        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["standings", variables.leagueId] });
        },
    });

    return { createStanding: createStandingMutation.mutate, deleteStanding: deleteStandingMutation.mutate, updateStanding: updateStandingMutation.mutate }
}

export default useStanding
