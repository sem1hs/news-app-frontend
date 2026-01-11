"use client";

import { NewsResponse } from "@/types/news";
import UpdateNewsForm from "../forms/UpdateNewsForm";

interface Props {
  news: NewsResponse;
  onClose: () => void;
}

export default function UpdateNewsModal({ news, onClose }: Props) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div className="w-full max-w-2xl rounded bg-[#111517] p-6 text-white">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Haberi Güncelle</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white text-xl cursor-pointer"
          >
            ✕
          </button>
        </div>

        <UpdateNewsForm news={news} onClose={onClose} />
      </div>
    </div>
  );
}
