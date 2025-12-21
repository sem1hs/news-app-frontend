"use client";

import { newsInitialValues, newsSchema } from "@/schemas/newsSchema";
import { NewsCreateRequest } from "@/types/news";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FormRow from "./FormRow";
import FormInput from "./FormInput";
import FormTextArea from "./FormTextArea";
import { useNews } from "@/hooks/useNews";
import { createTagsArray } from "@/lib/createTagsArray";

export default function CreateNewsForm() {
  const { createNews } = useNews();

  const handleSubmit = async (
    values: NewsCreateRequest,
    { resetForm }: { resetForm: () => void }
  ) => {
    const request = {
      ...values,
      tags: createTagsArray(values.tags as string),
      views: 0,
    };
    createNews({ news: request });
    resetForm();
  };

  return (
    <div className="overflow-x-auto px-6 mt-6 w-full">
      <Formik
        initialValues={newsInitialValues}
        validationSchema={newsSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mx-auto flex flex-col gap-4 max-w-xl">
            <FormRow>
              <FormInput
                formInput={{
                  name: "title",
                  placeholder: "Başlık",
                }}
              />

              <FormInput
                formInput={{
                  name: "slug",
                  placeholder: "Slug",
                }}
              />
            </FormRow>

            <FormRow>
              <FormTextArea
                formTextArea={{ name: "spot", placeholder: "Spot" }}
              />
              <FormTextArea
                formTextArea={{ name: "content", placeholder: "İçerik" }}
              />
            </FormRow>

            <FormRow>
              <div className="w-full">
                <Field
                  as="select"
                  name="category"
                  className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white"
                >
                  <option value="" disabled>
                    Kategori Seç
                  </option>
                  <option value="SUPER_LIG">Süper Lig</option>
                  <option value="PREMIER_LEAGUE">Premier League</option>
                  <option value="LA_LIGA">La Liga</option>
                  <option value="BUNDESLIGA">Bundesliga</option>
                  <option value="SERIE_A">Serie A</option>
                  <option value="LIGUE_1">Ligue 1</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-400 text-xs mt-1"
                />
              </div>

              <FormInput
                formInput={{ name: "subCategory", placeholder: "Alt Kategori" }}
              />
            </FormRow>

            <FormRow>
              <FormInput
                formInput={{
                  name: "tags",
                  placeholder: "Etiketler (virgülle)",
                }}
              />
              <FormInput
                formInput={{ name: "imageUrl", placeholder: "Görsel URL" }}
              />
            </FormRow>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 rounded-lg bg-amber-500 py-2.5 font-semibold text-[#1a1f26] hover:bg-amber-400 transition"
            >
              {isSubmitting ? "Kaydediliyor..." : "Haberi Kaydet"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
