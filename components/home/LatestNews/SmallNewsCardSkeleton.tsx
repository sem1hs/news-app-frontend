export default function SmallNewsCardSkeleton() {
  return (
    <div className="relative h-[200px] overflow-hidden rounded-xl bg-[#1a1f26]">
      <div className="absolute inset-0 bg-black/30 animate-pulse" />

      <div className="absolute bottom-0 w-full p-4">
        <div className="mb-2 h-4 w-20 rounded bg-white/20 animate-pulse" />

        <div className="space-y-2">
          <div className="h-4 w-full rounded bg-white/20 animate-pulse" />
          <div className="h-4 w-3/4 rounded bg-white/20 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
