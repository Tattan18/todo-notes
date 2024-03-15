'use client'

import type { Category } from '@/interfaces/category'

import { Dialog } from '../commons/dialog'

import { CategoryForm } from './category-form'

interface EditCategoryProps {
  onClose: () => void
  isOpen: boolean
  category: Category
  editCategory: (id: string, name: string) => void
}

export function EditCategory({ onClose, isOpen, category, editCategory }: Readonly<EditCategoryProps>) {
  return (
    <Dialog isOpen={isOpen} title={`Editar categoría: ${category.name}`} onClose={onClose}>
      <CategoryForm
        buttonLabel="Editar"
        getValues={({ name }) => {
          editCategory(category.id, name)
        }}
        values={{ name: category.name }}
      />
    </Dialog>
  )
}
