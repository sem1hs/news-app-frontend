import { Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PopularNewsCardProps = {
  title: string;
  imageUrl: string;
  category: string;
  viewCount?: number;
  slug: string;
};

export default function PopularNewsCard({
  title,
  imageUrl,
  category,
  viewCount,
  slug,
}: PopularNewsCardProps) {
  return (
    <Link href={`/news/${slug}`}>
      <article className="group overflow-hidden rounded-xl border bg-[#111517] transition hover:shadow-lg">
        <div className="relative h-40 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/20 to-transparent" />
        </div>
        <div className="flex h-[120px] flex-col justify-between p-4 text-white">
          <h3 className="line-clamp-2 text-sm font-semibold leading-snug transition-colors group-hover:text-primary">
            {title}
          </h3>
          <div className="w-full flex items-center">
            <span className="rounded bg-amber-500 px-2 py-1 text-xs font-semibold text-black w-max">
              {category}
            </span>
            {viewCount !== undefined && (
              <span className="ml-auto block text-xs text-muted-foreground flex items-center gap-1">
                <Eye width={16} /> {viewCount.toLocaleString("tr-TR")}
              </span>
            )}
          </div>
        </div>
      </article>
    </Link>
  );
}
