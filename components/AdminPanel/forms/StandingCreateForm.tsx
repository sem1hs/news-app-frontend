"use client"

import { useLeagues } from '@/hooks/useLeagues';
import useStanding from '@/hooks/useStanding';
import { createStandingSchema, standingInitialValues } from '@/schemas/standingSchema';
import { StandingCreateRequest } from '@/types/standing';
import { Field, Form, Formik } from 'formik';
import FormRow from './FormRow';
import TeamSelect from './TeamSelect';
import FormInput from './FormInput';

const StandingCreateForm = () => {
    const { createStanding } = useStanding();
    const { leagues } = useLeagues();

    const handleSubmit = async (
        values: StandingCreateRequest,
        { resetForm }: { resetForm: () => void }
    ) => {
        createStanding({ standing: values });
        resetForm();
    };

    return (
        <div className="px-6 mt-6 w-full">
            <Formik
                initialValues={standingInitialValues}
                validationSchema={createStandingSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue, values }) => (
                    <Form className="mx-auto flex flex-col gap-4 max-w-xl">
                        <FormRow>
                            <Field
                                as="select"
                                name="leagueId"
                                className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
                                onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                    const value = Number(e.target.value);
                                    setFieldValue("leagueId", value);
                                    setFieldValue("teamId", 0);
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
                        </FormRow>

                        <FormRow>
                            <TeamSelect
                                name="teamId"
                            />
                        </FormRow>

                        <FormRow>
                            <FormInput formInput={{ name: "played", placeholder: "Oynanan", type: "number" }} />
                            <FormInput formInput={{ name: "won", placeholder: "Galibiyet", type: "number" }} />
                        </FormRow>

                        <FormRow>
                            <FormInput formInput={{ name: "draw", placeholder: "Beraberlik", type: "number" }} />
                            <FormInput formInput={{ name: "lost", placeholder: "Mağlubiyet", type: "number" }} />
                        </FormRow>

                        <FormRow>
                            <FormInput formInput={{ name: "goalsFor", placeholder: "Atılan Gol", type: "number" }} />
                            <FormInput
                                formInput={{ name: "goalsAgainst", placeholder: "Yenilen Gol", type: "number" }}
                            />
                        </FormRow>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
                        >
                            {isSubmitting ? "Kaydediliyor..." : "Puan Durumu Oluştur"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}

export default StandingCreateForm
