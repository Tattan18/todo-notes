'use client'

import type { Note } from '@/interfaces/note'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface NoteProps {
  categoryId: string
  note: Note
  isActive?: boolean
}

export function Note({ categoryId, note, isActive }: Readonly<NoteProps>) {
  const [noteId] = useSelectedLayoutSegments()

  return (
    <Link href={`/dashboard/${categoryId}/${note.id}`}>
      <Card className={cn('h-30 grid gap-1.5 p-2 text-primary', isActive || noteId === note.id ? 'bg-primary text-white' : 'hover:bg-secondary/90')}>
        <CardHeader className="p-0">
          <CardTitle className={cn('text-base', isActive ? 'text-white' : '')}>{note.title}</CardTitle>
        </CardHeader>
        <CardContent className="clamp-overflow p-0 text-xs text-gray-500">{note.description}</CardContent>
        <CardFooter className="flex justify-end gap-2 p-0 text-gray-400" />
      </Card>
    </Link>
  )
}
