"use client";

import { createNews, deleteNews, fetchNews } from "@/api/news/news";
import { NewsResponse, NewsCreateRequest } from "@/types/news";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useNews = () => {
  const queryClient = useQueryClient();

  const getAllNews = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
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

  const deleteNewsMutation = useMutation({
    mutationFn: async (id: number) => await deleteNews(id),

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["news"] });
    },
  });

  return {
    createNews: createNewsMutation.mutate,
    deleteNews: deleteNewsMutation.mutate,
    getAllNews,
    isLoading: getAllNews.isLoading,
  };
};
