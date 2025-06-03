import { AppSidebar } from '@/components/app-sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Header from '@/components/header/Header'

export default function AdminUser() {
  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true} isSidebar={true}/>
      <SidebarInset>
        <Header isAdminNav={true}/>
      </SidebarInset>
    </SidebarProvider>
  )
}
