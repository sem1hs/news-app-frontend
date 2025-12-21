"use client";

import NewsTable from "@/components/AdminPanel/tables/NewsTable";
import { useNews } from "@/hooks/useNews";
import { useState } from "react";

const GetNewsPage = () => {
  const { getAllNews, isLoading } = useNews();
  const [visible, setVisible] = useState(false);

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setVisible(true);
  };
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold text-white text-center py-6">
        Tüm Haberler
      </h1>

      <button
        onClick={handleClick}
        className="block mx-auto w-fit rounded-lg bg-amber-500 px-6 py-2 font-semibold text-[#1a1f26] hover:bg-amber-400 transition disabled:opacity-60"
      >
        {isLoading ? "Yükleniyor..." : "Haberleri Getir"}
      </button>

      {visible && getAllNews.data && (
        <NewsTable data={getAllNews.data?.content} />
      )}
    </div>
  );
};

export default GetNewsPage;
