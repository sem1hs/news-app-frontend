"use client"
import { useLeagues } from '@/hooks/useLeagues';
import { createleagueSchema, leagueInitialValues } from '@/schemas/leagueSchema';
import { CreateLeagueRequest } from '@/types/league';
import { Form, Formik } from 'formik';
import FormRow from './FormRow';
import FormInput from './FormInput';

const LeagueCreateForm = () => {
    const { createLeague } = useLeagues();

    const handleSubmit = async (
        values: CreateLeagueRequest,
        { resetForm }: { resetForm: () => void }
    ) => {
        createLeague({ league: values });
        resetForm();
    };

    return (
        <div className="px-6 mt-6 w-full">
            <Formik
                initialValues={leagueInitialValues}
                validationSchema={createleagueSchema}
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
                                    name: "country",
                                    placeholder: "Ülke",
                                    type: "text",
                                }}
                            />
                        </FormRow>


                        <FormRow>
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
                            {isSubmitting ? "Kaydediliyor..." : "Lig Oluştur"}
                        </button>

                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LeagueCreateForm
