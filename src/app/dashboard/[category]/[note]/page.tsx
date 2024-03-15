import { Suspense } from 'react'

import { NoteDetailServer } from '@/components/notes/note-detail-server'
import { NoteDetailSkeleton } from '@/components/skeletons/note-detail-skeleton'

export default async function DetailNotePage({ params }: Readonly<{ params: { note: string } }>) {
  return (
    <section className="flex w-full flex-1 pl-8 pt-8">
      <Suspense fallback={<NoteDetailSkeleton />}>
        <NoteDetailServer noteId={params.note} />
      </Suspense>
    </section>
  )
}
