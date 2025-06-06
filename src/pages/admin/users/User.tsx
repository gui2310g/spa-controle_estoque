import { AppSidebar } from '@/components/app-sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Header from '@/components/header/Header'
import { DataTable } from '@/components/ui/data-table'
import { columns } from '@/utils/columns'
import { getData } from '@/utils/getData'

export default function AdminUser() {
  const data = getData()

  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true} isSidebar={true} />
      <SidebarInset>
        <Header isAdminNav={true} />
        <DataTable columns={columns} data={data} />
      </SidebarInset>
    </SidebarProvider>
  )
}
