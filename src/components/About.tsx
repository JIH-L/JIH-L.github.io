import { BiChevronRight } from 'react-icons/bi'

export default function About() {
  return (
    <>
      <div className="pt-10 md:basis-1/2">
        <p className="mb-7 text-base text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          Hello there 👋
        </p>
        <h1 className="mb-7 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          Hello, I'm J, a Frontend Developer with a strong focus on attention to
          detail and stability.
        </h1>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          My decision-making process typically relies on facts and reliability,
          and I strive to ensure the stability and maintainability of projects.
          Additionally, I possess a collaborative spirit, working effectively
          with individuals of diverse backgroun ds and roles to achieve common
          goals.
        </p>
        <div className="flex gap-6">
          <a
            href="/#skill"
            className="flex items-center border-2 border-black bg-black px-6 py-2 text-base text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white md:text-sm xl:text-base"
          >
            My Skill <BiChevronRight />
          </a>
          <a
            href="/#project"
            className="flex items-center border-2 border-gray-200 px-6 py-2 text-base duration-200 hover:border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black md:text-sm xl:text-base"
          >
            My Project <BiChevronRight />
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:basis-1/2">
        <div className="absolute z-0 hidden h-[520px] w-[520px] rounded-full bg-gray-400 opacity-10 xl:block"></div>
        <img
          className="z-10 rounded-xl duration-200 hover:rotate-[-4deg] hover:scale-105"
          src={'https://picsum.photos/400/500.webp?grayscale'}
        ></img>
      </div>
    </>
  )
}