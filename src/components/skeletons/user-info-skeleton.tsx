import { Skeleton } from '../ui/skeleton'

export function UserInfoSkeleton() {
  return (
    <div className="flex items-center gap-4">
      <Skeleton className="h-10 w-10 rounded-full" />
      <Skeleton className="h-4 flex-1 rounded-full" />
    </div>
  )
}
