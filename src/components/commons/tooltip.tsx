import { Tooltip as TooltipCustom, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

interface SidebarContentProps {
  text: string
  children: React.ReactNode
}

export function Tooltip({ children, text }: Readonly<SidebarContentProps>) {
  return (
    <TooltipProvider delayDuration={200}>
      <TooltipCustom>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent>
          <p>{text}</p>
        </TooltipContent>
      </TooltipCustom>
    </TooltipProvider>
  )
}
