import { navMain } from '@/utils/nav-util'

export const useNav = (isAdmin: boolean) => {
  return navMain(isAdmin)
}
