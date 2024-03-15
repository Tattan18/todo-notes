import { Skeleton } from '../ui/skeleton'

export function NotesSkeleton() {
  return (
    <div className="flex flex-col items-center gap-1 px-1">
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
      <Skeleton className="h-20 w-full rounded-md bg-primary/30" />
    </div>
  )
}
