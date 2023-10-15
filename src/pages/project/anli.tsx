import ProjectLayout from '../../layouts/projectLayout'
import anli from '../../assets/images/anli.webp'
import { BiChevronRight } from 'react-icons/bi'

export default function Wtw() {
  return (
    <ProjectLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          Anli International Co., Ltd
        </h1>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          Official Website of a Professional Heat Dissipation Key Component
          Supplier.
        </p>
        <a
          target="_blank"
          href="https://www.anli-group.com/"
          className="flex items-center border-2 border-black bg-black px-6 py-2 text-base text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white md:text-sm xl:text-base"
        >
          Visit Website <BiChevronRight />
        </a>
      </div>
      <div>
        <img src={anli} alt="anli" />
      </div>
      <div className="px-16 text-sm">
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Features
        </h2>
        <ul className="ml-4 list-disc leading-loose dark:text-gray-300 ">
          <li>
            Utilized Twig, SCSS, jQuery, and Bootstrap for frontend development.
          </li>
          <li>
            Responsible for header, footer, about us, product information
            listing page, article content page, corporate governance, and
            investor relations section.
          </li>
          <li>
            Implemented CSS animations and interactive elements for user
            engagement.
          </li>
          <li>Developed responsive frontend pages based on design mockups.</li>
        </ul>
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Skills
        </h2>
        <p>Twig, SCSS, jQuery, Bootstrap, RWD</p>
      </div>
    </ProjectLayout>
  )
}
