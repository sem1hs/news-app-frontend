import { useQuery } from "@tanstack/react-query";
import { getMe } from "@/api/auth/auth";

export function useUser() {
  const getUser = useQuery({
    queryKey: ["user"],
    queryFn: getMe,
    staleTime: 1000 * 60 * 15,
    retry: false,
    refetchOnWindowFocus: false,
  });

  const user = getUser.data?.user ?? null;

  return { user, status: getUser.status };
}
