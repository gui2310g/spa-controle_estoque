import { Outlet, createFileRoute } from '@tanstack/react-router'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header/Header'

export const Route = createFileRoute('/admin')({
  component: AdminLayout,
})

function AdminLayout() {
  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true} isSidebar={true} />
      <SidebarInset>
        <Header isAdminNav={true} />
        <Outlet /> 
      </SidebarInset>
    </SidebarProvider>
  )
}
