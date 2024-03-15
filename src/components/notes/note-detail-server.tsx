import type { Note } from '@/interfaces/note'

import axios from 'axios'

import { NoteDetail } from './note-detail'

export async function NoteDetailServer({ noteId }: Readonly<{ noteId: string }>) {
  const response = await axios.get<Note | undefined>(`http://localhost:4001/notes/${noteId}`)

  if (!response.data) return null

  const note = response.data

  return <NoteDetail note={note} />
}
