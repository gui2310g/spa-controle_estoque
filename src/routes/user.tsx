import { Outlet, createFileRoute } from '@tanstack/react-router'
import { AppSidebar } from '@/components/app-sidebar'
import Header from '@/components/header/Header'
import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'

export const Route = createFileRoute('/user')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <SidebarProvider>
      <AppSidebar isAdmin={false} isSidebar={true} />
      <SidebarInset>
        <Header isAdminNav={false} />
        <Outlet /> 
      </SidebarInset>
    </SidebarProvider>
  )
}
