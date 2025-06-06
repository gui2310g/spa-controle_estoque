import { Link } from '@tanstack/react-router'
import useNav from '@/utils/navMain'

const nav = useNav()

export default function Navigation({
  isAdminNav = false,
}: {
  isAdminNav: boolean
  isSidebar?: boolean
}) {
  return (
    <nav className="lg:flex flex-row text-white hidden">
      {nav.map((item) => (
        <div key={item.title}>
          {item.items
            .filter((menuItem) => isAdminNav || !menuItem.isAdminPage)
            .map((menuItem) => (
              <Link
                key={menuItem.title}
                to={menuItem.url}
                className="px-2 font-bold hover:text-gray-300"
              >
                {menuItem.title}
              </Link>
            ))}
        </div>
      ))}
    </nav>
  )
}
