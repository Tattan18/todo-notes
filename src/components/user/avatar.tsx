import { AvatarImage, Avatar as AvatarCustom, AvatarFallback } from '../ui/avatar'

export function Avatar({ src, alt }: Readonly<{ src?: string | null; alt?: string | null }>) {
  return (
    <AvatarCustom className="flex items-center gap-4 text-white">
      <AvatarImage alt={`Foto de perfil del usuario ${alt ?? 'User'}`} className="rounded-full" height={40} src={src ?? 'https://github.com/shadcn.png'} width={40} />
      <AvatarFallback>CN</AvatarFallback>
    </AvatarCustom>
  )
}
