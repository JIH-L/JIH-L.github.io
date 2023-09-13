import { useEffect } from 'react'
import DefaultLayout from '../layouts/defaultLayout'
import Skill from '../components/Skill'
import Project from '../components/Project'
import About from '../components/About'
import Contact from '../components/Contact'

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
        <About />
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
          <Contact />
        </div>
      </div>
    </DefaultLayout>
  )
}
