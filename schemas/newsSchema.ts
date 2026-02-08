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

  leagueId: Yup.number().required("Lig seçilmeli"),
  teamId: Yup.number().required("Takım seçilmeli"),

  tags: Yup.string().required("En az bir etiket girilmeli"),

  imageUrl: Yup.string().required("Görsel URL zorunlu"),
});

export const newsUpdateSchema = Yup.object({
  title: Yup.string().required("Başlık zorunlu").optional(),
  slug: Yup.string()
    .matches(/^[a-z0-9-]+$/, "Slug sadece küçük harf ve - içermeli")
    .optional(),
  spot: Yup.string().optional(),
  content: Yup.string().optional(),
  category: Yup.string().optional(),
  leagueId: Yup.number().optional(),
  teamId: Yup.number().optional(),
  imageUrl: Yup.string().optional(),
});

export const newsInitialValues: NewsCreateRequest = {
  title: "",
  slug: "",
  content: "",
  spot: "",
  category: "",
  leagueId: 0,
  teamId: 0,
  tags: [""],
  imageUrl: "",
  isBreaking: false
};
