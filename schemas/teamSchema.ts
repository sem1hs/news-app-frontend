import { TeamCreateRequest } from "@/types/teams";
import * as Yup from "yup";

export const createTeamSchema = Yup.object({
    name: Yup.string().required("Takım adı zorunlu"),
    shortName: Yup.string().required("Kısa ad zorunlu"),
    logoUrl: Yup.string(),
    leagueId: Yup.number().min(0, "Lig seçiniz"),
});


export const teamInitialValues: TeamCreateRequest = {
    name: "",
    shortName: "",
    logoUrl: "",
    leagueId: 0,
}