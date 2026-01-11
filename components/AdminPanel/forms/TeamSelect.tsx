"use client";

import { Field, useFormikContext } from "formik";
import { useTeams } from "@/hooks/useTeams";
import { NewsCreateRequest } from "@/types/news";

export default function TeamSelect() {
  const { values } = useFormikContext<NewsCreateRequest>();
  const { teams, isLoading } = useTeams(values.leagueId);

  return (
    <Field
      as="select"
      name="teamId"
      disabled={!values.leagueId || isLoading}
      className="w-full rounded-lg bg-[#1a1f26] px-4 py-2.5 text-white disabled:opacity-50"
    >
      <option value="0" disabled>
        {isLoading ? "Takımlar yükleniyor..." : "Takım"}
      </option>

      {teams?.map((team) => (
        <option key={team.id} value={team.id}>
          {team.name}
        </option>
      ))}
    </Field>
  );
}
