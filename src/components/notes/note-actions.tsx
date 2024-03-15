'use client'

import { PencilIcon, TrashIcon } from 'lucide-react'

import { Button } from '../ui/button'

interface NoteActionsProps {
  handleEdit: React.MouseEventHandler<HTMLButtonElement>
  handleRemove: React.MouseEventHandler<HTMLButtonElement>
}

export function NoteActions({ handleEdit, handleRemove }: Readonly<NoteActionsProps>) {
  return (
    <div className="flex gap-4">
      <Button className="flex gap-2" onClick={handleEdit}>
        <PencilIcon width={16} />
        Editar
      </Button>
      <Button className="flex gap-2" variant="destructive" onClick={handleRemove}>
        <TrashIcon width={16} />
        Eliminar
      </Button>
    </div>
  )
}
