import { ProductCardSkeleton } from "./ProductCardSkeleton";

export default function ProductsSkeleton({ reps = 3 }: { reps?: number }) {
  return (
    <>
      <p className="pb-1">Loading products...</p>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: reps }).map((_, i) => (
          <ProductCardSkeleton key={i} />
        ))}
      </div>
    </>
  );
}
