import type { NavSection } from '@/@types/types/nav'
import { navMain } from '@/utils/user-nav'
import { AdminNav } from '@/utils/admin-nav'

export function useNav(isAdmin: boolean): Array<NavSection> {
  const basePath = isAdmin ? '/admin' : '/user'
  const navData = isAdmin ? AdminNav() : navMain()

  return navData.map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      title: item.title,
      url: `${basePath}/${item.path}`,
      isAdmin: isAdmin,
    })),
  }))
}
