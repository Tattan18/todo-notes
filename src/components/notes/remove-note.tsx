import type { Note } from '@/interfaces/note'

import axios from 'axios'

import { Dialog } from '../commons/dialog'
import { Button } from '../ui/button'
import { useToast } from '../ui/use-toast'

interface RemoveNoteProps {
  isOpen: boolean
  onClose: () => void
  note: Note
}

export function RemoveNote({ isOpen, onClose, note }: Readonly<RemoveNoteProps>) {
  const { toast } = useToast()
  const removeNote = async (id: string) => {
    const response = await axios.delete(`http://localhost:4001/notes/${id}`)

    if (response.status !== 200)
      return toast({
        description: 'No se pudo eliminar la nota'
      })

    toast({
      description: 'Nota eliminada correctamente'
    })
    onClose()
  }

  return (
    <Dialog isOpen={isOpen} title={`Eliminar nota ${note.title}`} onClose={onClose}>
      <>
        <p>¿Estás seguro que quieres eliminar la categoría? Esta acción no se puede deshacer.</p>
        <div className="mt-4 flex w-full items-center justify-end gap-4">
          <Button
            type="submit"
            variant="outline"
            onClick={() => {
              removeNote('')
            }}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="destructive"
            onClick={() => {
              removeNote(note.id)
            }}
          >
            Eliminar
          </Button>
        </div>
      </>
    </Dialog>
  )
}
