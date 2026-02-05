import { CreateFixtureRequest } from "@/types/fixture";
import * as Yup from "yup";

export const updateFixtureSchema = Yup.object({
    matchDate: Yup.string().nullable().notRequired(),
    stadium: Yup.string().nullable().notRequired(),
    season: Yup.string().nullable().notRequired(),
    homeScore: Yup.number().nullable().min(0, "Skor negatif olamaz").notRequired(),
    awayScore: Yup.number().nullable().min(0, "Skor negatif olamaz").notRequired(),
    status: Yup.mixed<"SCHEDULED" | "LIVE" | "FINISHED">().oneOf(["SCHEDULED", "LIVE", "FINISHED"]).notRequired(),
});

export const fixtureInitialValues: CreateFixtureRequest = {
    leagueId: 0,
    week: 0,
    matchDate: "",
    homeTeamId: 0,
    awayTeamId: 0,
    stadium: "",
    season: "",
};

export const createFixtureSchema = Yup.object({
    leagueId: Yup.number().required("Lig zorunlu"),
    week: Yup.number().required("Hafta zorunlu"),
    matchDate: Yup.string().required("Maç tarihi zorunlu"),
    homeTeamId: Yup.number().required("Ev sahibi takım zorunlu").notOneOf([Yup.ref("awayTeamId")], "Takımlar aynı olamaz"),
    awayTeamId: Yup.number().required("Deplasman takım zorunlu"),
    stadium: Yup.string().notRequired(),
    season: Yup.string().notRequired(),
});
