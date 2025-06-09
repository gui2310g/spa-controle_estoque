export interface ReusableDialogProps {
  trigger: React.ReactNode
  title: string
  description?: string
  children?: React.ReactNode
  onConfirm?: () => void
  confirmText?: string
  cancelText?: string
}