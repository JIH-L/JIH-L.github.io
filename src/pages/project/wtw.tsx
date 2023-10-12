import ProjectLayout from '../../layouts/projectLayout'
import wtw from '../../assets/images/wtw.webp'
import { BiChevronRight } from 'react-icons/bi'

export default function Wtw() {
  return (
    <ProjectLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          Wtw
        </h1>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          An interactive platform for exploring movie details and summaries.
        </p>
        <a
          target="_blank"
          href="https://jih-l.github.io/Wtw/"
          className="flex items-center border-2 border-black bg-black px-6 py-2 text-base text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white md:text-sm xl:text-base"
        >
          Visit Website <BiChevronRight />
        </a>
      </div>
      <div>
        <img src={wtw} alt="wtw" />
      </div>
      <div className="px-16 text-sm">
        <p className="leading-loose dark:text-gray-300 ">
          This website offers the opportunity to explore currently trending
          movies and TV shows. It empowers users to tailor their viewing
          experience by filtering content based on various genres, ratings, and
          popularity levels.
        </p>
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Features
        </h2>
        <ul className="ml-4 list-disc leading-loose dark:text-gray-300 ">
          <li>
            Developed web applications using Vue CLI, Vue 3, and Vue Router.
          </li>
          <li>Implemented responsive design and styling using SCSS.</li>
          <li>Integrated with TheMovieDB API to fetch and display data.</li>
          <li>Developed the Google login interface for user authentication.</li>
          <li>
            Implemented Lazy Loading and Infinite Scroll effects for enhanced
            user experience without relying on external packages.
          </li>
        </ul>
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Skills
        </h2>
        <p>Vue.js, SCSS, Swiper, GoogleAuth</p>
      </div>
    </ProjectLayout>
  )
}
