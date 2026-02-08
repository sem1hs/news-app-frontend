import { StandingCreateRequest } from "@/types/standing";
import * as Yup from "yup";

export const createStandingSchema = Yup.object({
    leagueId: Yup.number().min(1, "Lig seçilmeli").required(),
    teamId: Yup.number().min(1, "Takım seçilmeli").required(),

    played: Yup.number().min(0).required(),
    won: Yup.number().min(0).required(),
    draw: Yup.number().min(0).required(),
    lost: Yup.number().min(0).required(),

    goalsFor: Yup.number().min(0).required(),
    goalsAgainst: Yup.number().min(0).required(),
});

export const standingInitialValues: StandingCreateRequest = {
    leagueId: 0,
    teamId: 0,
    played: 0,
    won: 0,
    draw: 0,
    lost: 0,
    goalsFor: 0,
    goalsAgainst: 0,
};
