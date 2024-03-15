'use client'
import { EditIcon } from 'lucide-react'
import { useState } from 'react'

import { Button } from '../ui/button'

import { CreateNote } from './create-note'

export function CreateNoteButton() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const handleDialogCreate = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="flex w-full justify-end">
      <Button variant="default" onClick={handleDialogCreate}>
        Agregar nota
        <EditIcon className="ml-2 h-4 w-4" />
      </Button>
      <CreateNote isOpen={isOpen} onClose={handleDialogCreate} />
    </div>
  )
}
