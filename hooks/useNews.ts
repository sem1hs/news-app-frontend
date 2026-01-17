"use client";

import {
  createNews,
  deleteNews,
  fetchNews,
  fetchNewsByLeagueName,
  fetchNewsBySlug,
  updateNews,
} from "@/api/news/news";
import { NewsCreateRequest, UpdateNewsRequest } from "@/types/news";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

type NewsProps = {
  slug?: string;
  leagueName?: string;
}
export const useNews = ({ slug, leagueName }: NewsProps = {}) => {
  const queryClient = useQueryClient();

  const getAllNews = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 10,
  });

  const getBySlug = useQuery({
    queryKey: ["team", "slug", slug],
    queryFn: () => fetchNewsBySlug(slug as string),
    enabled: !!slug,
    staleTime: 1000 * 60 * 10,
  });

  const getByLeagueName = useQuery({
    queryKey: ["leagueName", leagueName],
    queryFn: () => fetchNewsByLeagueName({ leagueName }),
    enabled: !!leagueName,
    staleTime: 1000 * 60 * 10,
  });

  const createNewsMutation = useMutation({
    mutationFn: async ({
      news,
      resetForm,
    }: {
      news: NewsCreateRequest;
      resetForm?: () => void;
    }) => await createNews(news),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
      variables.resetForm?.();
    },
  });

  const updateNewsMutation = useMutation({
    mutationFn: async ({ news }: { news: UpdateNewsRequest }) =>
      await updateNews(news),

    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });

  const deleteNewsMutation = useMutation({
    mutationFn: async (id: number) => await deleteNews(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });

  return {
    updateNews: updateNewsMutation.mutate,
    createNews: createNewsMutation.mutate,
    deleteNews: deleteNewsMutation.mutate,
    news: getAllNews.data,
    newsBySlug: getBySlug.data,
    newsBySlugLoading: getBySlug.isLoading,
    newsByLeagueName: getByLeagueName.data,
    newsByLeagueNameLoading: getByLeagueName.isLoading,
    isLoading: getAllNews.isLoading,
  };
};
