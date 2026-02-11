"use client";

import { Formik, Form } from "formik";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import { StandingResponse, StandingUpdateRequest } from "@/types/standing";
import useStanding from "@/hooks/useStanding";

type Props = {
    standing: StandingResponse;
    onClose: () => void;
};

type StandingFormValues = {
    played: number;
    won: number;
    draw: number;
    lost: number;
    goalsFor: number;
    goalsAgainst: number;
};

const UpdateStandingForm = ({ standing, onClose }: Props) => {
    const { updateStanding } = useStanding();

    const handleSubmit = async (
        values: StandingFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {
        const request: StandingUpdateRequest = {
            ...values,
            leagueId: standing.leagueId,
            teamId: standing.teamId,
        };

        updateStanding({ standing: request });

        onClose();
        resetForm();
    };

    return (
        <div className="overflow-x-auto px-6 mt-6 w-full">
            <Formik<StandingFormValues>
                initialValues={{
                    played: standing.played,
                    won: standing.won,
                    draw: standing.draw,
                    lost: standing.lost,
                    goalsFor: standing.goalsFor,
                    goalsAgainst: standing.goalsAgainst,
                }}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="mx-auto flex flex-col gap-4 max-w-xl">
                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "played",
                                    type: "number",
                                    placeholder: "Oynanan Maç Sayısı",
                                }}
                            />
                            <FormInput
                                formInput={{
                                    name: "won",
                                    type: "number",
                                    placeholder: "Kazanılan Maç Sayısı",
                                }}
                            />
                        </FormRow>

                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "draw",
                                    type: "number",
                                    placeholder: "Beraberlik Maç Sayısı",
                                }}
                            />
                            <FormInput
                                formInput={{
                                    name: "lost",
                                    type: "number",
                                    placeholder: "Kaybedilen Maç Sayısı",
                                }}
                            />
                        </FormRow>

                        <FormRow>
                            <FormInput
                                formInput={{
                                    name: "goalsFor",
                                    type: "number",
                                    placeholder: "Atılan Gol",
                                }}
                            />
                            <FormInput
                                formInput={{
                                    name: "goalsAgainst",
                                    type: "number",
                                    placeholder: "Yenen Gol",
                                }}
                            />
                        </FormRow>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
                        >
                            {isSubmitting ? "Kaydediliyor..." : "Puan Durumunu Güncelle"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default UpdateStandingForm;
