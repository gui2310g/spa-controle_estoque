import type { Users } from '@/hooks/columns'
import { AppSidebar } from '@/components/app-sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Header from '@/components/header/Header'
import { DataTable } from '@/components/ui/data-table'
import { columns } from '@/hooks/columns'

async function getData(): Promise<Array<Users>> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      nome: "Guilherme Fontes",
      DataCriacao: new Date(2023, 9, 1),
      email: "m@example.com",
    },
    // ...
  ]
}
 
export default async function AdminUser() {

  const data = await getData()
  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true} isSidebar={true}/>
      <SidebarInset>
        <Header isAdminNav={true}/>
        <DataTable columns={columns} data={data} />
      </SidebarInset>
    </SidebarProvider>
  )
}
