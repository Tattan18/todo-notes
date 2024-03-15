import { LogOut, UserIcon } from 'lucide-react'
import Link from 'next/link'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '../ui/dropdown-menu'

export function UserOptions({ children }: Readonly<{ children?: React.ReactNode }>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="text-gray-600">
        <Link href="/dashboard/profile">
          <DropdownMenuItem className="flex cursor-pointer gap-4 hover:!text-gray-600">
            <UserIcon width={18} />
            Perfil
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <Link className="flex gap-4 hover:!text-gray-600" href="/api/auth/signout">
            <LogOut width={18} />
            Cerrar sesión
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
