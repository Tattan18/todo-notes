import { Dialog as DialogCustom, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface DialogProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
  title: string
}

export function Dialog({ children, isOpen, title, onClose }: Readonly<DialogProps>) {
  return (
    <DialogCustom open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-primary">{title}</DialogTitle>
          <DialogDescription asChild>{children}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </DialogCustom>
  )
}
