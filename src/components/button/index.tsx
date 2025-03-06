import { BiChevronRight } from 'react-icons/bi'

interface ButtonProps {
  text: string
  href?: string
}

export default function Button(props: ButtonProps) {
  const { text, href } = props

  return (
    <button className="group relative hidden overflow-hidden border-2 border-gray-200 bg-black px-6 py-2 text-white dark:border-white dark:bg-white dark:text-black xl:block">
      <a
        {...(href ? { href } : {})}
        className="relative z-10 flex items-center transition-colors duration-300 group-hover:text-black dark:group-hover:text-white"
      >
        {text}
        <BiChevronRight />
      </a>
      <span className="absolute left-0 top-0 h-full w-0 bg-white transition-all duration-300 group-hover:w-full dark:bg-black"></span>
    </button>
  )
}
