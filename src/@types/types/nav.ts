export type NavItem = {
  title: string
  url: string
  isAdmin: boolean
}

export type NavSection = {
  title: string
  url: string
  items: Array<NavItem>
}
