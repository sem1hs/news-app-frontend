"use client";

import { useNews } from "@/hooks/useNews";
import { NewsResponse } from "@/types/news";
import { useCallback, useState } from "react";
import UpdateNewsModal from "../modal/UpdateNewsModal";

export default function NewsTable({ data }: { data: NewsResponse[] }) {
  const { deleteNews } = useNews();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsResponse | null>(null);

  const handleDelete = useCallback(
    (newsId: number) => {
      const confirmed = confirm("Bu haberi silmek istiyor musunuz?");
      if (!confirmed) return;
      deleteNews(newsId);
    },
    [deleteNews]
  );

  const handleUpdate = useCallback((news: NewsResponse) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  }, []);

  return (
    <div className="overflow-x-auto px-6 mt-6 custom-scrollbar">
      <table className="w-full bg-[#111517] text-sm text-white">
        <thead className="bg-amber-500 text-black">
          <tr>
            <th className="p-2 border">ID</th>
            <th className="p-2 border">Başlık</th>
            <th className="p-2 border">Kategori</th>
            <th className="p-2 border">Alt Kategori</th>
            <th className="p-2 border">Slug</th>
            <th className="p-2 border">Spot</th>
            <th className="p-2 border">İçerik</th>
            <th className="p-2 border">Görsel</th>
            <th className="p-2 border">Etiketler</th>
            <th className="p-2 border">Görüntülenme</th>
            <th className="p-2 border">Oluşturan</th>
            <th className="p-2 border">Tarih</th>
            <th className="p-2 border">İşlemler</th>
          </tr>
        </thead>

        <tbody>
          {data.map((news) => (
            <tr key={news.id}>
              <td className="p-2 border border-amber-500 text-center">
                {news.id}
              </td>

              <td className="p-2 border border-amber-500 font-medium">
                {news.title}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.category}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.subCategory}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.slug}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.spot}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.content}
              </td>

              <td className="p-2 border border-amber-500">{news.imageUrl}</td>

              <td className="p-2 border border-amber-500">
                <div className="flex flex-wrap gap-1">
                  {news.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="rounded bg-amber-500 text-black px-2 py-0.5 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.views}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {news.createdBy}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                {new Date(news.createdDate).toLocaleString("tr-TR")}
              </td>

              <td className="p-2 border border-amber-500 text-center">
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => handleUpdate(news)}
                    className="cursor-pointer rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black hover:bg-amber-400 transition"
                  >
                    Düzenle
                  </button>

                  <button
                    onClick={() => handleDelete(news.id)}
                    className="cursor-pointer rounded bg-red-500 px-3 py-1 text-xs font-semibold text-white hover:bg-red-400"
                  >
                    Sil
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && selectedNews && (
        <UpdateNewsModal
          news={selectedNews}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
}
