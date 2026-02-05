"use client";

import { Field, Form, Formik } from "formik";
import { FixtureResponse, UpdateFixtureRequest } from "@/types/fixture";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import useFixture from "@/hooks/useFixture";
import { updateFixtureSchema } from "@/schemas/fixtureSchema";

type Props = {
    fixture: FixtureResponse;
    onClose: () => void;
};

export default function UpdateFixtureForm({ fixture, onClose }: Props) {
    const { updateFixture } = useFixture();

    const handleSubmit = async (
        values: UpdateFixtureRequest,
        { resetForm }: { resetForm: () => void }
    ) => {
        const request: UpdateFixtureRequest = {
            ...values,
            id: values.id ?? fixture.id,
            matchDate: values.matchDate || undefined,
            stadium: values.stadium || undefined,
            season: values.season || undefined,
            homeScore: values.homeScore !== undefined ? values.homeScore : undefined,
            awayScore: values.awayScore !== undefined ? values.awayScore : undefined,
            status: values.status || undefined,
        };

        updateFixture({ fixture: request });
        onClose();
        resetForm();
    };

    return (
        <div className="mt-6 w-full overflow-x-auto px-6">
            <Formik
                initialValues={{ ...fixture }}
                validationSchema={updateFixtureSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-auto flex max-w-xl flex-col gap-4">
                        <FormRow>
                            <FormInput formInput={{ name: "matchDate", placeholder: "Maç Tarihi" }} />
                        </FormRow>

                        <FormRow>
                            <FormInput formInput={{ name: "homeScore", placeholder: "Ev Sahibi Skor" }} />
                            <FormInput formInput={{ name: "awayScore", placeholder: "Deplasman Skor" }} />
                        </FormRow>

                        <FormRow>
                            <FormInput formInput={{ name: "stadium", placeholder: "Stadyum" }} />
                            <FormInput formInput={{ name: "season", placeholder: "Sezon (2024/25)" }} />
                        </FormRow>

                        <FormRow>
                            <Field as="select" name="status" className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white">
                                <option value="SCHEDULED">SCHEDULED</option>
                                <option value="LIVE">LIVE</option>
                                <option value="FINISHED">FINISHED</option>
                            </Field>
                        </FormRow>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] transition hover:bg-amber-400"
                        >
                            {isSubmitting ? "Kaydediliyor..." : "Fikstürü Güncelle"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
