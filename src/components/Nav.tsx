import { NavLink } from 'react-router-dom'
export default function Nav() {
  return (
    <nav className="sticky top-0 z-40 flex items-center bg-white p-6 shadow-md">
      <NavLink to="/" className="mr-auto text-xl font-semibold">
        J.L.
      </NavLink>
      <ul className="flex">
        <li className="mr-3">
          <a
            href="/#about"
            className="rounded-lg p-3 text-sm duration-500 hover:bg-gray-100"
          >
            About
          </a>
        </li>
        <li className="mr-3">
          <a
            href="/#skill"
            className="rounded-lg p-3 text-sm duration-500 hover:bg-gray-100"
          >
            Skill
          </a>
        </li>
        <li className="mr-3">
          <a
            href="/#project"
            className="rounded-lg p-3 text-sm duration-500 hover:bg-gray-100"
          >
            Project
          </a>
        </li>
        <li>
          <a
            href="/#contact"
            className="rounded-lg p-3 text-sm duration-500 hover:bg-gray-100"
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  )
}
