import { Link } from '@tanstack/react-router'
import { useNav } from '@/hooks/use-nav'

type Props = { isAdminNav?: boolean }

export default function Navigation({ isAdminNav = false }: Props) {
  const nav = useNav(isAdminNav)

  return (
    <nav className="lg:flex flex-row text-white hidden">
      {nav.map((section) => (
        <div key={section.title} className="flex gap-2">
          {section.items.map((item) => (
            <Link
              key={item.title}
              to={item.path}
              className="px-2 font-bold hover:text-gray-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  )
}
