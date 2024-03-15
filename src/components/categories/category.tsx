'use client'

import type { Category } from '@/interfaces/category'

import Link from 'next/link'
import { EllipsisIcon } from 'lucide-react'
import { useSelectedLayoutSegments } from 'next/navigation'

import { cn } from '@/lib/utils'

import { Badge } from '../ui/badge'
import { Tooltip } from '../commons/tooltip'

import { CategoryActions } from './category-actions'

interface CategoryProps extends Category {
  getCategoryToEdit: (id: string, name: string) => void
  getCategoryToRemove: (id: string, name: string) => void
}

export function Category({ name, id, getCategoryToEdit, getCategoryToRemove, notes }: Readonly<CategoryProps>) {
  const [categoryId] = useSelectedLayoutSegments()
  const countFormatted = notes && notes.length > 9 ? '9+' : notes?.length

  return (
    <Link
      className={cn('flex h-10 w-full items-center justify-between gap-4 rounded-md px-2', categoryId === id ? 'bg-gray-400/80 hover:bg-gray-400' : 'text-gray-300 hover:bg-primary-foreground/10')}
      href={`/dashboard/${id}`}
    >
      <p className={cn(categoryId === id ? 'font-bold text-primary' : 'text-gray-300')}>{name}</p>
      <span className="flex items-center gap-2">
        {countFormatted ? <Badge className="grid w-1 place-content-center rounded-full bg-gray-400 text-primary hover:bg-secondary">{countFormatted}</Badge> : null}
        <CategoryActions
          handleEdit={(event) => {
            event.stopPropagation()
            getCategoryToEdit(id, name)
          }}
          handleRemove={(event) => {
            event.stopPropagation()
            getCategoryToRemove(id, name)
          }}
        >
          <Tooltip text="Más opciones">
            <EllipsisIcon className={cn('h-4 w-4 cursor-pointer hover:text-gray-500', categoryId === id ? 'text-secondary' : 'text-gray-400')} />
          </Tooltip>
        </CategoryActions>
      </span>
    </Link>
  )
}
