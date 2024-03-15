'use client'

import type { Category } from '@/interfaces/category'

import axios from 'axios'

import { useToast } from '../ui/use-toast'
import { Button } from '../ui/button'
import { Dialog } from '../commons/dialog'

interface EditCategoryProps {
  onClose: () => void
  isOpen: boolean
  category: Category
}

export function RemoveCategory({ onClose, isOpen, category }: Readonly<EditCategoryProps>) {
  const { toast } = useToast()

  const removeCategory = async (id: string) => {
    const response = await axios.delete(`http://localhost:4001/categories/${id}`)

    if (response.status !== 200)
      return toast({
        description: 'No se pudo eliminar la categoría'
      })

    toast({
      description: 'Categoría eliminada correctamente'
    })
    onClose()
  }

  return (
    <Dialog isOpen={isOpen} title={`Eliminar categoría: ${category.name}`} onClose={onClose}>
      <>
        <p>¿Estás seguro que quieres eliminar la categoría? Esta acción no se puede deshacer.</p>
        <div className="mt-4 flex w-full items-center justify-end gap-4">
          <Button
            type="submit"
            variant="outline"
            onClick={() => {
              removeCategory('')
            }}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            variant="destructive"
            onClick={() => {
              removeCategory(category.id)
            }}
          >
            Eliminar
          </Button>
        </div>
      </>
    </Dialog>
  )
}
