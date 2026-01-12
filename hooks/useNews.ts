"use client";

import {
  createNews,
  deleteNews,
  fetchNews,
  fetchNewsBySlug,
  updateNews,
} from "@/api/news/news";
import { NewsCreateRequest, UpdateNewsRequest } from "@/types/news";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useNews = (slug?: string) => {
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
    isLoading: getAllNews.isLoading,
  };
};
