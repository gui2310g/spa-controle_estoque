import { createFileRoute } from '@tanstack/react-router'
import AdminUser from '@/pages/admin/users/User'

export const Route = createFileRoute('/admin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AdminUser />
}
