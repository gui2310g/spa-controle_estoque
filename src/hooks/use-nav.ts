import type { NavSection } from '@/@types/types/nav'
import { navMain } from '@/utils/nav-util'

export function useNav(isAdmin: boolean): Array<NavSection> {
  const basePath = isAdmin ? '/admin' : '/user'

  return navMain().map((section) => ({
    ...section,
    items: section.items.map((item) => ({
      title: item.title,
      url: `${basePath}/${item.path}`,
      isAdmin,
    })),
  }))
}
