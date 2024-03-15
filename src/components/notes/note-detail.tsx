'use client'

import type { Note } from '@/interfaces/note'

import { useState } from 'react'

import { NoteActions } from './note-actions'
import { NoteDetailHeader } from './note-detail-header'
import { EditNote } from './edit-note'
import { RemoveNote } from './remove-note'

export function NoteDetail({ note }: Readonly<{ note: Note }>) {
  const [isOpenDialog, setIsOpenDialog] = useState({
    edit: false,
    remove: false
  })

  const handleEditNote = () => {
    setIsOpenDialog({
      ...isOpenDialog,
      edit: !isOpenDialog.edit
    })
  }

  const handleRemoveNote = () => {
    setIsOpenDialog({
      ...isOpenDialog,
      remove: !isOpenDialog.remove
    })
  }

  return (
    <div className="flex max-h-screen w-full flex-col gap-8 overflow-y-auto pr-16 text-justify">
      <div className="sticky top-0 z-10 flex justify-between bg-white pb-4">
        <NoteDetailHeader date={note.date} title={note.title} />
        <NoteActions handleEdit={handleEditNote} handleRemove={handleRemoveNote} />
      </div>

      <p>
        {note.description.split('\n').map((_note) => (
          <span key={_note}>
            {_note}
            <br />
          </span>
        ))}
      </p>

      <EditNote isOpen={isOpenDialog.edit} note={note} onClose={handleEditNote} />
      <RemoveNote isOpen={isOpenDialog.remove} note={note} onClose={handleRemoveNote} />
    </div>
  )
}
