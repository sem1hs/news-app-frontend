"use client";

import NewsCreateForm from "@/components/AdminPanel/forms/NewsCreateForm";
import NewsTable from "@/components/AdminPanel/tables/NewsTable";
import { useNews } from "@/hooks/useNews";

const CreateNewsPage = () => {
  const { news, loading } = useNews();

  const handleClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold text-white text-center py-6">
        Haber Oluştur
      </h1>

      <NewsCreateForm />
    </div>
  );
};

export default CreateNewsPage;
