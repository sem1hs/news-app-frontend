import { SearchQuery } from "@/types/SearchQuery";
import * as Yup from "yup";

export const searchBarSchema = Yup.object({
  searchQuery: Yup.string().required("Lütfen arama metini yazınız !"),
});

export const searchBarInitialValues: SearchQuery = {
  searchQuery: "",
};
