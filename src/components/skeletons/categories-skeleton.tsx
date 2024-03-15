import { Skeleton } from '../ui/skeleton'

export function CategoriesSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-4 flex-1 rounded-full" />
      <Skeleton className="h-6 w-6 rounded-full" />
    </div>
  )
}
