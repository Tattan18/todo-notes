import { format } from 'date-fns'

export function NoteDetailHeader({
  date,
  title
}: Readonly<{
  date: Date
  title: string
}>) {
  const formattedDate = format(date, 'dd/MM/yyyy hh:mm a')

  return (
    <div>
      <span className="text-gray-400">{formattedDate}</span>
      <h1 className="text-xl font-bold text-primary">{title}</h1>
    </div>
  )
}
