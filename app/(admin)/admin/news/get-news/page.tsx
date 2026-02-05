import GetNews from "@/components/AdminPanel/news/GetNews";

const GetNewsPage = () => {
  return (
    <div className="h-full">
      <h1 className="text-3xl font-bold text-white text-center py-6">
        Tüm Haberler
      </h1>

      <GetNews />
    </div>
  );
};

export default GetNewsPage;
