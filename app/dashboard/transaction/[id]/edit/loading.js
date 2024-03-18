import Skeleton from "@/components/skeleton"

export default function Loading() {
  return <>
    <h1 className="text-4xl font-semibold mb-8">Edit Transaction</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Skeleton className="h-12" />
      <Skeleton className="h-12" />
      <Skeleton className="h-12" />
      <Skeleton className="h-12" />
      <Skeleton className="h-12" />
      <Skeleton className="h-12" />
      <Skeleton className="h-12 md:col-span-2" />
    </div>
  </>
}