import Link from "next/link";

type Props = {
  title?: string;
  description?: string;
  backHref?: string;
  backText?: string;
};

const NotFound = ({
  title = "İçerik Bulunamadı",
  description = "Aradığınız içerik kaldırılmış veya hiç var olmamış olabilir.",
  backHref = "/",
  backText = "Anasayfaya Dön",
}: Props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-24 px-4">
      <h1 className="text-4xl font-bold text-white mb-4">404</h1>

      <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>

      <p className="text-gray-400 max-w-md mb-6">{description}</p>

      <Link
        href={backHref}
        className="px-5 py-2 rounded-lg bg-[#272C33] text-white text-sm"
      >
        {backText}
      </Link>
    </div>
  );
};

export default NotFound;
