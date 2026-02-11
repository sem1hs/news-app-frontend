"use client"
import { useLeagues } from '@/hooks/useLeagues';
import { useTeams } from '@/hooks/useTeams'
import { createTeamSchema, teamInitialValues } from '@/schemas/teamSchema';
import { TeamCreateRequest } from '@/types/teams';
import { Field, Form, Formik } from 'formik';
import FormRow from './FormRow';
import FormInput from './FormInput';

const TeamCreateForm = () => {
    const { createTeam } = useTeams({})
    const { leagues } = useLeagues();

    const handleSubmit = async (
        values: TeamCreateRequest,
        { resetForm }: { resetForm: () => void }
    ) => {
        createTeam({ team: values });
        resetForm();
    };


    return (
        <div className="px-6 mt-6 w-full">
            <Formik
                initialValues={teamInitialValues}
                validationSchema={createTeamSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue }) => (
                    <Form className="mx-auto flex flex-col gap-4 max-w-xl">

                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "name",
                                    placeholder: "Takım Adı",
                                    type: "text",
                                }}
                            />
                            <FormInput
                                formInput={{
                                    name: "shortName",
                                    placeholder: "Kısa Ad",
                                    type: "text",
                                }}
                            />
                        </FormRow>


                        <FormRow>
                            <div className='w-full'>
                                <Field
                                    as="select"
                                    name="leagueId"
                                    className="w-full rounded-lg bg-[#1a1f26] px-4 py-3 text-white"
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        const value = Number(e.target.value);
                                        setFieldValue("leagueId", value);
                                    }}
                                >
                                    <option value={0} disabled>
                                        Lig
                                    </option>

                                    {leagues?.map((league) => (
                                        <option key={league.id} value={league.id}>
                                            {league.name}
                                        </option>
                                    ))}
                                </Field>
                            </div>
                            <FormInput
                                formInput={{
                                    name: "logoUrl",
                                    placeholder: "Logo URL",
                                    type: "text",
                                }}
                            />

                        </FormRow>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
                        >
                            {isSubmitting ? "Kaydediliyor..." : "Takım Oluştur"}
                        </button>

                    </Form>
                )}
            </Formik>
        </div>

    )
}

export default TeamCreateForm
