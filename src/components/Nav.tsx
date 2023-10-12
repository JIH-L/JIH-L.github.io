import { NavLink } from 'react-router-dom'
import ThemeSwitcher from '../components/ThemeSwitcher'
interface ILink {
  href: string
  label: string
}
function ALink({ label, href }: ILink) {
  return (
    <a
      href={href}
      className="rounded-lg p-3 text-sm duration-500 hover:bg-gray-100 dark:hover:bg-neutral-700"
    >
      {label}
    </a>
  )
}
const links: ILink[] = [
  { href: '/#about', label: 'About' },
  { href: '/#skill', label: 'Skill' },
  { href: '/#project', label: 'Project' },
  { href: '/#contact', label: 'Contact' },
]
export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 flex items-center bg-white p-6 shadow-md dark:bg-neutral-800 dark:text-white">
      <NavLink to="/" className="mr-auto text-xl font-semibold">
        J.L.
      </NavLink>
      <ul className="mr-2 flex">
        {links.map((link) => (
          <ALink key={link.href} href={link.href} label={link.label} />
        ))}
      </ul>
      <ThemeSwitcher />
    </nav>
  )
}
