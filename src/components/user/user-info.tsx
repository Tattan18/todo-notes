import { auth } from '@/app/auth'

import { Avatar } from './avatar'

export async function UserInfo() {
  const isAuth = await auth()

  if (!isAuth) return null

  const { user } = isAuth

  return (
    <section className="flex flex-1 items-center gap-4 text-white">
      <Avatar alt={user?.name} src={user?.image} />
      <div className="flex flex-col font-semibold text-gray-300">
        <span className="max-w-[150px] overflow-hidden text-ellipsis text-sm">{user?.name}</span>
        <span className="max-w-[150px] overflow-hidden text-ellipsis text-xs text-gray-400">{user?.email}</span>
      </div>
    </section>
  )
}
