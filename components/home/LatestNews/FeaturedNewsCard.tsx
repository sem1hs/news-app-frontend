import Image from "next/image";
import Link from "next/link";

type FeaturedNewsCardProps = {
  title: string;
  imageUrl: string;
  category: string;
  slug: string;
  publishedAt?: string;
};

export default function FeaturedNewsCard({
  title,
  imageUrl,
  category,
  slug,
  publishedAt,
}: FeaturedNewsCardProps) {
  return (
    <Link
      href={`/news/${slug}`}
      className="group relative block h-full overflow-hidden rounded-xl"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/40 to-transparent" />

      <div className="absolute bottom-0 z-10 w-full p-6 text-white">
        <span className="mb-3 inline-block w-max rounded bg-amber-500 px-3 py-1 text-xs font-semibold text-black">
          {category}
        </span>

        <h3 className="mb-2 line-clamp-3 text-xl font-bold leading-snug transition-colors group-hover:text-primary">
          {title}
        </h3>

        {publishedAt && (
          <span className="text-sm text-white/70">{publishedAt}</span>
        )}
      </div>
    </Link>
  );
}
