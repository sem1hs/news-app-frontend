import * as Yup from "yup";
import type { NewsCreateRequest } from "@/types/news";

export const newsSchema = Yup.object({
  title: Yup.string().required("Başlık zorunlu"),

  slug: Yup.string()
    .matches(/^[a-z0-9-]+$/, "Slug sadece küçük harf ve - içermeli")
    .required("Slug zorunlu"),

  spot: Yup.string().required("Spot zorunlu"),

  content: Yup.string().required("İçerik zorunlu"),

  category: Yup.string().required("Kategori seçilmeli"),

  subCategory: Yup.string().required("Alt kategori zorunlu"),

  tags: Yup.string().required("En az bir etiket girilmeli"),

  imageUrl: Yup.string().required("Görsel URL zorunlu"),
});

export const newsInitialValues: NewsCreateRequest = {
  title: "",
  slug: "",
  content: "",
  spot: "",
  category: "",
  subCategory: "",
  tags: [""],
  imageUrl: "",
};
