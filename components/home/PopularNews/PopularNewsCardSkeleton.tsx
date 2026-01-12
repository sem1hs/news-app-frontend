export default function PopularNewsCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-xl border bg-[#111517]">
      <div className="relative h-40 w-full bg-[#1a1f26]">
        <div className="absolute inset-0 bg-black/20 animate-pulse" />
      </div>
      <div className="flex h-[120px] flex-col justify-between p-4">
        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-white/20 animate-pulse" />
          <div className="h-4 w-3/4 rounded bg-white/20 animate-pulse" />
        </div>
        <div className="flex items-center">
          <div className="h-5 w-20 rounded bg-white/20 animate-pulse" />
          <div className="ml-auto h-4 w-12 rounded bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
