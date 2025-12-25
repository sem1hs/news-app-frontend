export default function NewsCarouselSkeleton() {
  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-xl bg-[#1a1f26]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/100 to-transparent" />

      <div className="absolute bottom-0 p-6 w-full">
        <div className="mb-3 h-6 w-24 rounded bg-white/20 animate-pulse" />

        <div className="space-y-2">
          <div className="h-6 w-3/4 rounded bg-white/20 animate-pulse" />
          <div className="h-6 w-2/3 rounded bg-white/20 animate-pulse" />
        </div>

        <div className="mt-3 h-4 w-32 rounded bg-white/20 animate-pulse" />
      </div>
    </div>
  );
}
