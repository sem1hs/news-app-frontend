import { LeagueResponse, UpdateLeagueRequest } from '@/types/league';
import { Form, Formik } from 'formik';
import React from 'react'
import FormRow from './FormRow';
import FormInput from './FormInput';
import { useLeagues } from '@/hooks/useLeagues';

type Props = {
    league: LeagueResponse;
    onClose: () => void;
}

type LeagueFormValues = {
    name: string;
    country: string;
    logoUrl: string;
};


const UpdateLeagueForm = ({ league, onClose }: Props) => {
    const { updateLeague } = useLeagues()

    const handleSubmit = async (
        values: LeagueFormValues,
        { resetForm }: { resetForm: () => void }
    ) => {
        const request: UpdateLeagueRequest = {
            ...values,
            id: league.id
        };

        updateLeague({ league: request });

        onClose();
        resetForm();
    };

    return (
        <div className="overflow-x-auto px-6 mt-6 w-full">
            <Formik<LeagueFormValues>
                initialValues={{
                    name: league.name ?? "",
                    country: league.country ?? "",
                    logoUrl: league.logoUrl ?? "",
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
                                    placeholder: "Lig İsmi",
                                }}
                            />
                            <FormInput
                                formInput={{
                                    name: "country",
                                    type: "text",
                                    placeholder: "Ülke İsmi",
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

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
                        >
                            {isSubmitting ? "Kaydediliyor..." : "Ligi Güncelle"}
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default UpdateLeagueForm
