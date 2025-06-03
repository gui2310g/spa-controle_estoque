import * as React from 'react'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar'
import useNav from '@/hooks/use-nav'


const data = useNav();

export function AppSidebar({
  isAdmin,
  isSidebar = true, 
  ...props
}: React.ComponentProps<typeof Sidebar> & { isAdmin: boolean; isSidebar?: boolean }) {
  return (
    <Sidebar {...props}>
      <SidebarContent>
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            {isSidebar && <SidebarGroupLabel>{item.title}</SidebarGroupLabel>}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items
                  .filter((menuItem) => isAdmin || !menuItem.isAdminPage)
                  .map((menuItem) => (
                    <SidebarMenuItem key={menuItem.title}>
                      <SidebarMenuButton asChild>
                        <a href={menuItem.url}>{menuItem.title}</a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}