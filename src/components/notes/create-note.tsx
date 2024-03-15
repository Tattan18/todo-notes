import axios from 'axios'
import { useParams } from 'next/navigation'

import { Dialog } from '../commons/dialog'
import { toast } from '../ui/use-toast'

import { NoteForm } from './note-form'

interface CreateNoteProps {
  isOpen: boolean
  onClose: () => void
}

export function CreateNote({ isOpen, onClose }: Readonly<CreateNoteProps>) {
  const params = useParams()

  const createNote = async ({ title, content }: { title: string; content: string }) => {
    const categoryId = params.category
    const response = await axios.post(`http://localhost:4001/notes`, {
      title,
      description: content,
      category: categoryId
    })

    if (response.status !== 201)
      return toast({
        description: 'No se pudo crear la nota'
      })

    toast({
      description: 'Nota creada correctamente'
    })
    onClose()
  }

  return (
    <Dialog isOpen={isOpen} title="Crear nota" onClose={onClose}>
      <NoteForm
        buttonLabel="Crear"
        getValues={({ title, content }) => {
          createNote({ title, content })
        }}
      />
    </Dialog>
  )
}
