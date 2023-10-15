import ProjectLayout from '../../layouts/projectLayout'
import hellosanta from '../../assets/images/hellosanta.webp'
import { BiChevronRight } from 'react-icons/bi'

export default function Wtw() {
  return (
    <ProjectLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          Hello Santa
        </h1>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          Official website of a design company specializing in custom web
          development.
        </p>
        <a
          target="_blank"
          href="https://www.hellosanta.com.tw/"
          className="flex items-center border-2 border-black bg-black px-6 py-2 text-base text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white md:text-sm xl:text-base"
        >
          Visit Website <BiChevronRight />
        </a>
      </div>
      <div>
        <img src={hellosanta} alt="hellosanta" />
      </div>
      <div className="px-16 text-sm">
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Features
        </h2>
        <ul className="ml-4 list-disc leading-loose dark:text-gray-300 ">
          <li>
            Utilized Twig, SCSS, jQuery, and Bootstrap for frontend development.
          </li>
          <li>Responsible for crafting StyleGuide and Layout.</li>
          <li>
            Developed key pages including homepage, about us, contact form, and
            article content pages.
          </li>
          <li>
            Implemented CSS animations and interactive elements for user
            engagement.
          </li>
          <li>Integrated LazyLoad and Swiper plugins.</li>
          <li>Developed responsive frontend pages based on design mockups.</li>
        </ul>
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Skills
        </h2>
        <p>Twig, SCSS, jQuery, Bootstrap, Swiper, LazyLoad, RWD</p>
      </div>
    </ProjectLayout>
  )
}
