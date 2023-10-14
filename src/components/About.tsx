import { BiChevronRight } from 'react-icons/bi'
import me from '../assets/images/me.webp'

export default function About() {
  return (
    <>
      <div className="pt-10 md:basis-1/2">
        <p className="mb-7 text-base text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          Hello there 👋
        </p>
        <h1 className="mb-7 text-3xl font-semibold leading-normal tracking-widest dark:text-white md:text-2xl xl:text-3xl">
          I'm Sun,
          <br /> a Frontend Developer.
        </h1>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          I have an optimistic and positive personality, am courageous in facing
          challenges, and possess strong resilience under pressure. I am
          observant of interpersonal dynamics, enjoy listening to others'
          opinions, and excel in problem-solving. I am passionate about
          teamwork, curious about new things, continuously self-learn, and
          constantly strive for self-improvement.
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
          className="z-10 max-w-[400px] rounded-xl grayscale duration-200 hover:rotate-[-4deg] hover:scale-105 hover:grayscale-0"
          src={me}
        ></img>
      </div>
    </>
  )
}
