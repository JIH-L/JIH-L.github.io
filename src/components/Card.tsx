import { BiChevronRight } from 'react-icons/bi'
import { NavLink } from 'react-router-dom'
interface CardProps {
  title: string
  description: string
  image: string
  link: string
}
export default function Card({ title, description, image, link }: CardProps) {
  return (
    <div className=" cursor-pointer rounded-lg bg-gray-50 p-4 pb-6 duration-300 hover:bg-gray-100 dark:bg-neutral-700 dark:hover:bg-neutral-600">
      <img
        src={image}
        alt="image"
        className="mb-4 min-h-[190px] w-full rounded-lg object-cover"
      />
      <h4 className="mb-4 text-xl font-semibold dark:text-white">{title}</h4>
      <p className="mb-4 min-h-[40px] text-sm text-gray-500 dark:text-gray-300">
        {description}
      </p>
      <NavLink
        to={link}
        className="inline-flex items-center rounded-md border border-black bg-black px-4 py-2 text-xs text-white duration-200 hover:scale-105"
      >
        View Project <BiChevronRight />
      </NavLink>
    </div>
  )
}
