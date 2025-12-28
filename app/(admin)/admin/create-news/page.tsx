import NewsCreateForm from "@/components/AdminPanel/forms/NewsCreateForm";
import { Suspense } from "react";
const CreateNewsPage = () => {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold text-white text-center py-6">
        Haber Oluştur
      </h1>

      <Suspense fallback={<p>Yükleniyor...</p>}>
        <NewsCreateForm />
      </Suspense>
    </div>
  );
};

export default CreateNewsPage;
