"use client";
import { useCallback, useState } from "react";
import NewsTable from "../tables/NewsTable";
import { useNews } from "@/hooks/useNews";

const GetNews = () => {
  const { getAllNews, isLoading } = useNews();
  const [visible, setVisible] = useState<boolean>(false);

  const handleClick = useCallback(
    async (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      setVisible(true);
    },
    []
  );

  return (
    <>
      <button
        onClick={handleClick}
        className="cursor-pointer block mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
      >
        {isLoading ? "Yükleniyor..." : "Haberleri Getir"}
      </button>

      {visible && getAllNews.data && (
        <NewsTable data={getAllNews.data?.content} />
      )}
    </>
  );
};

export default GetNews;
