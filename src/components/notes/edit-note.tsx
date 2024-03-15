import type { Note } from '@/interfaces/note'

import axios from 'axios'

import { Dialog } from '../commons/dialog'
import { useToast } from '../ui/use-toast'

import { NoteForm } from './note-form'

interface EditNoteProps {
  isOpen: boolean
  onClose: () => void
  note: Note
}

export function EditNote({ isOpen, onClose, note }: Readonly<EditNoteProps>) {
  const { toast } = useToast()

  const editNote = async (id: string, title: string, content: string) => {
    const response = await axios.patch(`http://localhost:4001/notes/${id}`, { title, description: content })

    if (response.status !== 200)
      return toast({
        description: 'No se pudo editar la nota'
      })

    toast({
      description: 'Nota editada correctamente'
    })
    onClose()
  }

  return (
    <Dialog isOpen={isOpen} title={`Editar nota: ${note.title}`} onClose={onClose}>
      <NoteForm
        buttonLabel="Editar"
        getValues={({ content, title }) => {
          editNote(note.id, title, content)
        }}
        note={note}
      />
    </Dialog>
  )
}
