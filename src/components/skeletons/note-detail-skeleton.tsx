import { Skeleton } from '../ui/skeleton'

export function NoteDetailSkeleton() {
  return (
    <div className="grid h-fit w-full gap-1">
      <Skeleton className="h-4 w-60 rounded-md bg-primary/30" />
      <Skeleton className="h-8 w-96 rounded-md bg-primary/30" />
    </div>
  )
}
