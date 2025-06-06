import { Separator } from '@radix-ui/react-separator'
import { SidebarTrigger } from '../ui/sidebar'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from '@/components/ui/navigation-menu'
import UserPhoto from '@/assets/user.png'
import Navigation from '@/components/header/navigation'

export default function Header({ isAdminNav = false }: { isAdminNav: boolean }) {
  return (
    <header className="p-4 flex  bg-blue-900 text-white items-center justify-between w-full">
      <div className="lg:hidden flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
      </div>

      <Navigation isAdminNav={isAdminNav}/>

      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <img src={UserPhoto} alt="User Photo" className="w-[30px]" />
              <span className="ml-2">Admin</span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href='/'>Perfil</NavigationMenuLink>
              <NavigationMenuLink href="/docs">Deslogar</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  )
}
