import type { Category } from '@/interfaces/category'

import { SettingsIcon } from 'lucide-react'
import { Suspense } from 'react'
import axios from 'axios'
import { notFound } from 'next/navigation'

import { Button } from '@components/ui/button'

import { UserInfo } from '../user/user-info'
import { UserOptions } from '../user/user-options'
import { Tooltip } from '../commons/tooltip'
import { UserInfoSkeleton } from '../skeletons/user-info-skeleton'

import { SidebarContent } from './sidebar-content'

export async function Sidebar() {
  const response = await axios.get<Category[] | undefined>('http://localhost:4001/categories/get-all-categories')

  if (!response.data) return notFound()

  const categories = response.data

  return (
    <aside className="flex h-screen w-72 flex-col justify-between bg-primary py-2">
      <SidebarContent categories={categories} />

      <div className="flex flex-col gap-4 pb-4">
        <span className="flex items-center gap-4 px-4">
          <Suspense fallback={<UserInfoSkeleton />}>
            <UserInfo />
          </Suspense>
          <UserOptions>
            <span>
              <Tooltip text="Ajustes">
                <Button className="group hover:bg-primary-foreground/10" size="icon" type="button" variant="ghost">
                  <SettingsIcon className="h-5 w-5 cursor-pointer text-gray-400 group-hover:text-gray-500" />
                </Button>
              </Tooltip>
            </span>
          </UserOptions>
        </span>
      </div>
    </aside>
  )
}
