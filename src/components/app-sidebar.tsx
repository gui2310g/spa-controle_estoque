import * as React from 'react'
import { Link } from '@tanstack/react-router'
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
import { useNav } from '@/hooks/use-nav'

export function AppSidebar({
  isAdmin,
  isSidebar = true,
  ...props
}: React.ComponentProps<typeof Sidebar> & {
  isAdmin: boolean
  isSidebar?: boolean
}) {
  const data = useNav(isAdmin)

  return (
    <Sidebar {...props}>
      <SidebarContent>
        {data.map((section) => (
          <SidebarGroup key={section.title}>
            {isSidebar && (
              <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            )}
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((menuItem) => (
                  <SidebarMenuItem key={menuItem.title}>
                    <SidebarMenuButton asChild>
                      <Link to={menuItem.url}>{menuItem.title}</Link>
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
