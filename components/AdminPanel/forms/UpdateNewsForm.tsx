import { newsUpdateSchema } from "@/schemas/newsSchema";
import { ErrorMessage, Field, Form, Formik } from "formik";
import FormRow from "./FormRow";
import FormTextArea from "./FormTextArea";
import { NewsResponse, UpdateNewsRequest } from "@/types/news";
import { createTagsArray } from "@/lib/createTagsArray";
import FormInput from "./FormInput";
import { useNews } from "@/hooks/useNews";
import TeamSelect from "./TeamSelect";
import { useLeagues } from "@/hooks/useLeagues";

type Props = {
  news: NewsResponse;
  onClose: () => void;
};

const UpdateNewsForm = ({ news, onClose }: Props) => {
  const { updateNews } = useNews();
  const { leagues } = useLeagues();

  const handleSubmit = async (
    values: UpdateNewsRequest,
    { resetForm }: { resetForm: () => void }
  ) => {
    const request: UpdateNewsRequest = {
      ...values,
      id: values.id ?? news.id,
      tags: values.tags ? createTagsArray(values.tags as string) : undefined,
      views: values.views ?? 0,
    };
    updateNews({ news: request });
    onClose();
    resetForm();
  };

  return (
    <div className="overflow-x-auto px-6 mt-6 w-full">
      <Formik
        initialValues={{ ...news, tags: news.tags?.join(", ") || "" }}
        validationSchema={newsUpdateSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => {
          return (
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
              </FormRow>

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
                  <option value="0" disabled>
                    Lig
                  </option>
                  {leagues?.map((league) => (
                    <option key={league.id} value={league.id}>
                      {league.name}
                    </option>
                  ))}
                </Field>

                <TeamSelect />
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
                {isSubmitting ? "Kaydediliyor..." : "Haberi Güncelle"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default UpdateNewsForm;
