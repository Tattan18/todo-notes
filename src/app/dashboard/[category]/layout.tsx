import { Suspense } from 'react'

import { HeaderNotes } from '@/components/notes/header-notes'
import { NoteServer } from '@/components/notes/note-server'
import { NotesSkeleton } from '@/components/skeletons/notes-skeleton'

interface NotesLayoutProps {
  children: React.ReactNode
  params: { category: string; note: string }
}

export default function NotesLayout({ children, params }: Readonly<NotesLayoutProps>) {
  return (
    <div className="flex flex-1">
      <section className="h-screen w-80 overflow-y-auto bg-gray-300 px-2 pb-6">
        <HeaderNotes />
        <section className="grid gap-1">
          <Suspense fallback={<NotesSkeleton />}>
            <NoteServer categoryId={params.category} />
          </Suspense>
        </section>
      </section>
      <section className="flex h-screen w-full flex-1 pb-2 pl-8 pt-8">{children}</section>
    </div>
  )
}
