import { PencilIcon, TrashIcon } from 'lucide-react'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

interface CategoryActionsProps {
  children: React.ReactNode
  handleEdit: React.MouseEventHandler<HTMLDivElement>
  handleRemove: React.MouseEventHandler<HTMLDivElement>
}

export function CategoryActions({ children, handleEdit, handleRemove }: Readonly<CategoryActionsProps>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-600">
        <DropdownMenuItem className="flex cursor-pointer gap-4 hover:!text-gray-600" onClick={handleEdit}>
          <PencilIcon width={18} />
          Editar
        </DropdownMenuItem>
        <DropdownMenuItem className="flex cursor-pointer gap-4 text-red-500 hover:!text-red-500" onClick={handleRemove}>
          <TrashIcon width={18} />
          Eliminar
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
