import type { Note } from '@/interfaces/note'

import axios from 'axios'
import { notFound } from 'next/navigation'

import { Note as NoteComponent } from '@/components/notes/note'

export async function NoteServer({ noteId, categoryId }: Readonly<{ noteId?: string; categoryId: string }>) {
  const response = await axios.get<Note[] | undefined>('http://localhost:4001/notes', { params: { categoryId } })

  if (!response.data) return notFound()

  const notes = response.data

  return notes.length > 0 ? (
    notes.map((note) => <NoteComponent key={note.id} categoryId={categoryId} isActive={noteId === note.id} note={note} />)
  ) : (
    <div className="flex w-full items-center justify-center text-base font-semibold text-gray-500">No hay notas</div>
  )
}
