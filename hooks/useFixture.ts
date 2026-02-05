import { createFixture, deleteFixture, updateFixture } from '@/api/fixtures/fixture';
import { CreateFixtureRequest, UpdateFixtureRequest } from '@/types/fixture';
import { useMutation, useQueryClient } from '@tanstack/react-query';


const useFixture = () => {
    const queryClient = useQueryClient();

    const createFixtureMutation = useMutation({
        mutationFn: async ({
            fixture,
            resetForm,
        }: {
            fixture: CreateFixtureRequest;
            resetForm?: () => void;
        }) => await createFixture(fixture),

        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["fixture"] });
            variables.resetForm?.();
        },
    });

    const updateFixtureMutation = useMutation({
        mutationFn: async ({ fixture }: { fixture: UpdateFixtureRequest }) => await updateFixture(fixture),
        onSuccess: (data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["fixture"] });
        },
    });

    const deleteFixtureMutation = useMutation({
        mutationFn: async (id: number) => await deleteFixture(id),

        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["fixture"] });
        },
    });

    return { createFixture: createFixtureMutation.mutate, updateFixture: updateFixtureMutation.mutate, deleteFixture: deleteFixtureMutation.mutate, }
}

export default useFixture
