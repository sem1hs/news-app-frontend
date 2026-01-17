const NewsSkeleton = () => {
  return (
    <article className="max-w-4xl mx-auto px-4 py-10 animate-pulse">
      <div className="flex gap-2 mb-4">
        <div className="h-6 w-24 rounded-full bg-gray-700" />
        <div className="h-6 w-28 rounded-full bg-gray-700" />
      </div>

      <div className="space-y-3 mb-6">
        <div className="h-8 w-3/4 bg-gray-700 rounded" />
        <div className="h-8 w-1/2 bg-gray-700 rounded" />
      </div>

      <div className="w-full h-[420px] bg-gray-700 rounded-xl mb-8" />

      <div className="space-y-4">
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-11/12 bg-gray-700 rounded" />
        <div className="h-4 w-10/12 bg-gray-700 rounded" />
        <div className="h-4 w-full bg-gray-700 rounded" />
        <div className="h-4 w-9/12 bg-gray-700 rounded" />
      </div>
    </article>
  );
};

export default NewsSkeleton;
