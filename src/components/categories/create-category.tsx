'use client'

import axios from 'axios'

import { Dialog } from '../commons/dialog'
import { useToast } from '../ui/use-toast'

import { CategoryForm } from './category-form'

interface CreateCategoryProps {
  onClose: () => void
  isOpen: boolean
}

export function CreateCategory({ onClose, isOpen }: Readonly<CreateCategoryProps>) {
  const { toast } = useToast()

  const createCategory = async (name: string) => {
    const response = await axios.post(`http://localhost:4001/categories`, { name })

    if (response.status !== 201)
      return toast({
        description: 'No se pudo crear la categoría'
      })

    toast({
      description: 'Categoría creada correctamente'
    })
    onClose()
  }

  return (
    <Dialog isOpen={isOpen} title="Crear categoría" onClose={onClose}>
      <CategoryForm
        buttonLabel="Crear"
        getValues={({ name }) => {
          createCategory(name)
        }}
      />
    </Dialog>
  )
}
