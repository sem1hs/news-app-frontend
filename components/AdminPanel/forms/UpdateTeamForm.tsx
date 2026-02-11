import { useTeams } from '@/hooks/useTeams';
import { TeamResponse, TeamUpdateRequest } from '@/types/teams';
import { Form, Formik } from 'formik';
import React from 'react'
import FormRow from './FormRow';
import FormInput from './FormInput';

type Props = {
    team: TeamResponse;
    onClose: () => void;
}

type TeamFormValues = {
    name: string;
    shortName: string;
    logoUrl: string;
    leagueId: number;
};

const UpdateTeamForm = ({ team, onClose }: Props) => {
    const { updateTeam } = useTeams({})

    const handleSubmit = async (
        values: TeamFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {
        const request: TeamUpdateRequest = {
            ...values,
            id: team.id
        };

        updateTeam({ team: request });

        onClose();
        resetForm();
    };

    return (
        <div className="overflow-x-auto px-6 mt-6 w-full">
            <Formik<TeamFormValues>
                initialValues={{
                    name: team.name ?? "",
                    shortName: team.shortName ?? "",
                    logoUrl: team.logoUrl ?? "",
                    leagueId: team.leagueId ?? 0,
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-auto flex flex-col gap-4 max-w-xl">

                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "name",
                                    type: "text",
                                    placeholder: "Takım İsmi",
                                }}
                            />
                            <FormInput
                                formInput={{
                                    name: "shortName",
                                    type: "text",
                                    placeholder: "Kısa Ad",
                                }}
                            />
                        </FormRow>

                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "logoUrl",
                                    type: "text",
                                    placeholder: "Logo Url",
                                }}
                            />
                        </FormRow>

                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "leagueId",
                                    type: "number",
                                    placeholder: "Lig Id",
                                }}
                            />
                        </FormRow>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
                        >
                            {isSubmitting ? "Kaydediliyor..." : "Takımı Güncelle"}
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UpdateTeamForm
