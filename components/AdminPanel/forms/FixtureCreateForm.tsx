"use client";

import { Formik, Form, Field } from "formik";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import TeamSelect from "./TeamSelect";
import { useLeagues } from "@/hooks/useLeagues";
import useFixture from "@/hooks/useFixture";
import { createFixtureSchema, fixtureInitialValues } from "@/schemas/fixtureSchema";
import { CreateFixtureRequest } from "@/types/fixture";

export default function FixtureCreateForm() {
    const { createFixture } = useFixture();
    const { leagues } = useLeagues();

    const handleSubmit = async (
        values: CreateFixtureRequest,
        { resetForm }: { resetForm: () => void }
    ) => {
        createFixture({ fixture: values });
        resetForm();
    };

    return (
        <div className="px-6 mt-6 w-full">
            <Formik
                initialValues={fixtureInitialValues}
                validationSchema={createFixtureSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting, setFieldValue, values }) => {
                    return (
                        <Form className="mx-auto flex flex-col gap-4 max-w-xl">
                            <FormRow>
                                <Field
                                    as="select"
                                    name="leagueId"
                                    className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
                                    onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
                                        const value = Number(e.target.value);
                                        setFieldValue("leagueId", value);
                                        setFieldValue("homeTeamId", 0);
                                        setFieldValue("awayTeamId", 0);
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
                                <FormInput formInput={{ name: "week", placeholder: "Hafta", }} />
                                <FormInput
                                    formInput={{
                                        name: "matchDate",
                                        type: "datetime-local",
                                        step: 900,
                                        placeholder: "Maç Tarihi",
                                    }}
                                />
                            </FormRow>

                            <FormRow>
                                <TeamSelect name="homeTeamId" excludeTeamId={values.awayTeamId} />
                                <TeamSelect name="awayTeamId" excludeTeamId={values.homeTeamId} />
                            </FormRow>

                            <FormRow>
                                <FormInput formInput={{ name: "stadium", placeholder: "Stadyum" }} />
                                <FormInput formInput={{ name: "season", placeholder: "2025-2026" }} />
                            </FormRow>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
                            >
                                {isSubmitting ? "Kaydediliyor..." : "Fikstür Oluştur"}
                            </button>
                        </Form>
                    );
                }}
            </Formik>
        </div>
    );
}
