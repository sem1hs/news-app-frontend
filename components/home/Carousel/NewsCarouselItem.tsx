import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  category: string;
  imageUrl: string;
  slug: string;
  date: string;
};

export default function NewsCarouselItem({
  title,
  category,
  imageUrl,
  slug,
  date,
}: Props) {
  return (
    <Link
      href={`/haber/${slug}`}
      className="relative block h-[260px] sm:h-[320px] md:h-[420px] w-full overflow-hidden rounded-xl"
    >
      <Image
        src={imageUrl}
        alt={title}
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 1200px"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      <div className="absolute bottom-0 p-6 text-white">
        <span className="mb-2 inline-block rounded bg-amber-500 px-2 py-1 text-xs font-semibold text-black">
          {category}
        </span>

        <h2 className="text-2xl font-bold leading-tight">{title}</h2>

        <p className="mt-2 text-sm text-white/80">{date}</p>
      </div>
    </Link>
  );
}
