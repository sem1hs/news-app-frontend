"use client";

import { Field, useFormikContext } from "formik";
import { useTeams } from "@/hooks/useTeams";

type Props = {
  name: "homeTeamId" | "awayTeamId" | "teamId";
  excludeTeamId?: number;
};

export default function TeamSelect({ name, excludeTeamId }: Props) {
  const { values } = useFormikContext<any>();
  const { teams, isLoading } = useTeams({ leagueId: values.leagueId });

  return (
    <Field
      as="select"
      name={name}
      disabled={!values.leagueId || isLoading}
      className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white disabled:opacity-50"
    >
      <option value={0} disabled>
        {isLoading ? "Takımlar yükleniyor..." : "Takım"}
      </option>

      {teams
        ?.filter((team) => team.id !== excludeTeamId)
        .map((team) => (
          <option key={team.id} value={team.id}>
            {team.name}
          </option>
        ))}
    </Field>
  );
}
