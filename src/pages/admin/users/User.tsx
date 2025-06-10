import { AppSidebar } from '@/components/app-sidebar'

import { SidebarInset, SidebarProvider } from '@/components/ui/sidebar'
import Header from '@/components/header/Header'
import { DataTable } from '@/components/data-table/data-table'
import { columns } from '@/utils/columns'
import { getData } from '@/utils/getData'

export default function AdminUser() {
  const data = getData()

  return (
    <SidebarProvider>
      <AppSidebar isAdmin={true} isSidebar={true} />
      <SidebarInset>
        <Header isAdminNav={true} />
        <DataTable
          columns={columns}
          data={data}
          filterColumn="email"
          filterPlaceholder="Filtrar emails..."
          dialogTitle="Adicionar Usuarios"
          dialogDescription="Preencha os campos para adicionar um novo usuario"
          dialogContent={
            <form>
              <input
                type="text"
                placeholder="Nome"
                className="w-full border rounded p-2 mb-2"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded p-2 mb-2"
              />
            </form>
          }
          onDialogConfirm={() => console.log('usuario adicionado!')}
        />
      </SidebarInset>
    </SidebarProvider>
  )
}
