import { Link as LinkType } from '../../types'

export default function Link({ label, href }: LinkType) {
  return (
    <a
      href={href}
      className="mb-2 rounded-lg px-6 py-1 text-sm duration-500 hover:bg-gray-100 dark:hover:bg-neutral-700 md:mb-0 md:p-3"
    >
      {label}
    </a>
  )
}
