import { formatCategoryName } from "@/lib/helper";
import { NewsCategory } from "@/types/news";
import Image from "next/image";
import Link from "next/link";

type SmallNewsCardProps = {
  title: string;
  imageUrl: string;
  category: string;
  slug: string;
};

export default function SmallNewsCard({
  title,
  imageUrl,
  category,
  slug,
}: SmallNewsCardProps) {
  const formattedCategory = formatCategoryName(category as NewsCategory)

  return (
    <Link
      href={`/news/${slug}`}
      className="group relative block h-[200px] overflow-hidden rounded-xl bg-[#111517]"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 z-10 w-full p-4 text-white">
        <span className="mb-2 inline-block w-max rounded bg-amber-500 px-2 py-0.5 text-[10px] font-semibold text-black">
          {formattedCategory}
        </span>

        <h4 className="line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
          {title}
        </h4>
      </div>
    </Link>
  );
}
