import NotFound from "@/components/NotFound/NotFound";

export default function NewsNotFoundPage() {
  return (
    <NotFound
      title="Haber bulunamadı"
      description="Aradığınız haber mevcut değil veya kaldırılmış olabilir."
      backHref="/news"
      backText="Haber Listesine Dön"
    />
  );
}
