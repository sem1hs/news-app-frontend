import { CreateLeagueRequest } from "@/types/league";
import * as Yup from "yup";

export const createleagueSchema = Yup.object({
    name: Yup.string().required("Takım adı zorunlu"),
    country: Yup.string().required("Ülke zorunlu"),
    logoUrl: Yup.string(),
});


export const leagueInitialValues: CreateLeagueRequest = {
    name: "",
    country: "",
    logoUrl: "",
}