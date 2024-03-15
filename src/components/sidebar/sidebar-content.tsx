/* eslint-disable @typescript-eslint/no-misused-promises */
'use client'
import type { Category } from '@/interfaces/category'

import { EditIcon } from 'lucide-react'
import React, { useState } from 'react'
import axios from 'axios'

import { EditCategory } from '../categories/edit-category'
import { CreateCategory } from '../categories/create-category'
import { Button } from '../ui/button'
import { RemoveCategory } from '../categories/remove-category'
import { useToast } from '../ui/use-toast'
import { Category as CategoryComponent } from '../categories/category'

export function SidebarContent({ categories }: Readonly<{ categories: Category[] }>) {
  const { toast } = useToast()

  const [isOpenForm, setIsOpenForm] = useState({
    edit: false,
    create: false,
    remove: false
  })
  const [category, setCategory] = useState<Category>({
    id: '',
    name: '',
    date: new Date()
  })

  const handleDialogCreate = () => {
    setIsOpenForm({
      ...isOpenForm,
      create: !isOpenForm.create
    })
  }

  const handleDialogEdit = () => {
    setIsOpenForm({
      ...isOpenForm,
      edit: !isOpenForm.edit
    })
  }

  const handleDialogRemove = () => {
    setIsOpenForm({
      ...isOpenForm,
      remove: !isOpenForm.remove
    })
  }

  const editCategory = async (id: string, name: string) => {
    const response = await axios.patch(`http://localhost:4001/categories/${id}`, { name })

    if (response.status !== 200)
      return toast({
        description: 'No se pudo editar la categoría'
      })

    toast({
      description: 'Categoría editada correctamente'
    })
    handleDialogEdit()
  }

  const getCategoryToEdit = (id: string, name: string) => {
    setCategory({ id, name, date: new Date() })
    handleDialogEdit()
  }

  const getCategoryToRemove = (id: string, name: string) => {
    setCategory({ id, name, date: new Date() })
    handleDialogRemove()
  }

  return (
    <div className="mt-4 grid gap-4">
      <div className="pl-4 pr-2">
        <Button className="flex w-full items-center justify-between bg-transparent px-2 text-secondary hover:bg-primary-foreground/10" variant="default" onClick={handleDialogCreate}>
          Agregar categoría
          <EditIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <ul className="flex h-[calc(100vh-170px)] flex-col gap-2 overflow-y-auto py-2 pl-4 pr-[calc(1rem-8px)]">
        {categories.map((category) => (
          <li key={category.id} className="h-fit">
            <CategoryComponent {...category} getCategoryToEdit={getCategoryToEdit} getCategoryToRemove={getCategoryToRemove} />
          </li>
        ))}
      </ul>

      <CreateCategory isOpen={isOpenForm.create} onClose={handleDialogCreate} />
      <EditCategory category={category} editCategory={editCategory} isOpen={isOpenForm.edit} onClose={handleDialogEdit} />
      <RemoveCategory category={category} isOpen={isOpenForm.remove} onClose={handleDialogRemove} />
    </div>
  )
}
