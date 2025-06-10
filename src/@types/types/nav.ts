type NavItem = {
  title: string
  adminUrl?: string
  userUrl?: string
  isAdminPage?: boolean
}

export type NavSection = {
  title: string
  url: string
  items: Array<NavItem>
}
