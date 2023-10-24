import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import ThemeSwitcher from '../components/ThemeSwitcher'
import Translate from '../components/Translate'

interface ILink {
  href: string
  label: string
}
function ALink({ label, href }: ILink) {
  return (
    <a
      href={href}
      className="rounded-lg p-6 text-sm duration-500 hover:bg-gray-100 dark:hover:bg-neutral-700 md:p-3"
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
  const initToggle = false
  const [toggle, setToggle] = useState(initToggle)
  const toggleMenu = () => {
    setToggle(!toggle)
  }

  return (
    <nav className="sticky top-0 z-40 flex items-center bg-white p-6 shadow-md dark:bg-neutral-800 dark:text-white">
      <NavLink to="/" className="mr-auto text-xl font-semibold">
        J.L.
      </NavLink>
      <span
        className={`${
          toggle
            ? 'border-opacity-0 before:rotate-45 after:bottom-1/2 after:rotate-[135deg] dark:border-opacity-0'
            : 'before:rotate-0 after:bottom-0 after:rotate-0'
        } relative h-4 w-5 cursor-pointer border-t-2 border-black before:absolute before:top-[calc(50%_-_2px)] before:block before:h-[2px] before:w-full before:bg-black before:transition-all after:absolute after:bottom-0 after:block after:h-[2px] after:w-full after:bg-black after:transition-all dark:border-white dark:before:bg-white dark:after:bg-white md:hidden`}
        onClick={toggleMenu}
      ></span>
      <ul
        className={`absolute left-0 top-[76px] mr-2 grid min-h-full w-full bg-white transition-opacity dark:bg-neutral-800 md:relative md:top-0 md:flex md:justify-end ${
          toggle ? 'grid' : 'hidden'
        }`}
      >
        {links.map((link) => (
          <ALink key={link.href} href={link.href} label={link.label} />
        ))}
        <div className="flex">
          <ThemeSwitcher />
          <Translate />
        </div>
      </ul>
    </nav>
  )
}
