import { auth } from '@/app/auth'
import { ProfileForm } from '@/components/profile/profile-form'
import { Separator } from '@/components/ui/separator'

export default async function Profile() {
  const isAuth = await auth()

  if (!isAuth) return null

  const { user } = isAuth

  return (
    <section className="flex w-full flex-1 items-center justify-center pl-8 pt-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-xl font-bold text-primary">My perfil</h1>
        <Separator className="mb-6 mt-8" />
        <ProfileForm
          values={{
            name: user?.name ?? 'Jhon',
            lastName: user?.name ?? 'Doe',
            email: user?.email ?? 'email@email.com'
          }}
        />
      </div>
    </section>
  )
}
