import { useQuery } from "@tanstack/react-query";
import { fetchBreakingNews } from "@/api/news/news";

export const breakingNewsMock = [
    {
        id: 1,
        title: "Derbide ilk 11'ler açıklandı",
        slug: "derbide-ilk-11ler-aciklandi",
    },
    {
        id: 2,
        title: "Transfer resmen bitti: Yıldız oyuncu imzayı attı",
        slug: "transfer-resmen-bitti",
    },
    {
        id: 3,
        title: "Maç sonrası teknik direktörden sert açıklamalar",
        slug: "mac-sonrasi-sert-aciklamalar",
    },
    {
        id: 4,
        title: "Hakem kararı gündem oldu",
        slug: "hakem-karari-gundem-oldu",
    },
];

const useBreakingNews = () => {
    const query = useQuery({
        queryKey: ["breaking-news"],
        queryFn: () => fetchBreakingNews(),
        refetchInterval: 1000 * 60 * 10,
    });

    return {
        breakingNews: breakingNewsMock,
        isLoading: query.isLoading,
    };
};

export default useBreakingNews;
