import navMain from "@/utils/nav-util"

type Role = 'admin' | 'user'

export const useNav = (role: Role = 'user') => {
  const isAdmin = role === 'admin'

  return navMain().map(section => ({
    ...section,
    items: section.items
      .filter((item) => role === 'admin' || !item.isAdminPage)
      .map(item => ({
        ...item,
        url: isAdmin ? `/${item.adminUrl}` : `/${item.userUrl}`, 
      }))
      .filter(item => item.url),
  }))
}

