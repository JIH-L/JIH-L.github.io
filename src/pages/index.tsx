import { useEffect } from 'react'
import { BiChevronRight } from 'react-icons/bi'
import DefaultLayout from '../layouts/defaultLayout'
import Skill from '../components/Skill'
import Project from '../components/Project'

export default function Index() {
  useEffect(() => {
    console.log('render')

    return () => {
      console.log('cleanup function')
    }
  }, [])

  return (
    <DefaultLayout>
      <div className="anchor-container" id="about"></div>
      <div className="mx-auto flex flex-wrap justify-center gap-10 px-16 dark:bg-neutral-800 md:flex-nowrap xl:max-w-5xl xl:px-0 xl:pb-20 xl:pt-10">
        <div className="pt-10 md:basis-1/2">
          <p className="mb-7 text-base text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
            Hello there 👋
          </p>
          <h1 className="mb-7 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
            My name is J, and I’m a Frontend Developer with a strong emphasis on
            attention to detail, stability!
          </h1>
          <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
            My decision-making process typically relies on facts and
            reliability, and I strive to ensure the stability and
            maintainability of projects. Additionally, I possess a collaborative
            spirit, working effectively with individuals of diverse backgrounds
            and roles to achieve common goals.
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
      </div>
      <div className="anchor-container" id="skill"></div>
      <div className="bg-gray-50 dark:bg-neutral-700">
        <div className="mx-auto max-w-5xl bg-gray-50 px-16 py-20 dark:bg-neutral-700 lg:px-0">
          <div>
            <h2 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
              My Skill
            </h2>
            <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
              Check Out All Skill.
            </p>
          </div>
          <Skill />
        </div>
      </div>
      <div className="anchor-container" id="project"></div>
      <div className="mx-auto flex max-w-5xl flex-wrap px-16 py-20 lg:px-0">
        <div>
          <h2 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
            My Project
          </h2>
          <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
            Check Out All Project.
          </p>
        </div>
        <Project />
      </div>
      <div className="anchor-container" id="contact"></div>
      <div className="bg-gray-50 dark:bg-neutral-700">
        <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-10 bg-gray-50 px-16 py-20 dark:bg-neutral-700 md:flex-nowrap lg:px-0">
          <div className="w-1/2 justify-center md:flex md:items-center">
            <img
              className="rounded-xl"
              src={'https://picsum.photos/400/500.webp?grayscale'}
            ></img>
          </div>
          <div className="pt-3 md:w-1/2">
            <h2 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
              Contact
            </h2>
            <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
              If you're in search of a Frontend Engineer who not only possesses
              technical expertise but also prioritizes attention to detail and
              stability. Let's Connect!
            </p>
            <div className="flex justify-between gap-4">
              <input
                type="text"
                placeholder="Name"
                className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
              />
              <input
                type="text"
                placeholder="Email"
                className="mb-4 w-1/2 rounded-lg bg-gray-200 p-4 opacity-50"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Message"
              className="mb-4 w-full rounded-lg bg-gray-200 p-4 opacity-50"
            ></textarea>
            <button className="w-full rounded-lg bg-black px-6 py-2 text-base text-white duration-200 hover:opacity-75 dark:bg-white dark:text-black md:text-sm xl:text-base">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </DefaultLayout>
  )
}
