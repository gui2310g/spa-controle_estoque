import type { ReusableDialogProps } from "@/@types/ReusableDialogProps"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

export function ReusableDialog({
  trigger,
  title,
  description,
  children,
  onConfirm,
  confirmText = "Confirmar"
}: ReusableDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>
        <div>{children}</div>
        <div className="flex justify-end gap-2 mt-4">
          {onConfirm && (
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={onConfirm}
            >
              {confirmText}
            </button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}