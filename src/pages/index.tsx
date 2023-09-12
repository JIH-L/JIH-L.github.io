import { useEffect } from 'react'
import { BiChevronRight } from 'react-icons/bi'
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
    <div>
      <div className="anchor-container" id="about"></div>
      <div className="mx-auto flex max-w-5xl justify-center gap-10 pb-20 pt-10">
        <div className="basis-1/2 pt-10">
          <p className="mb-7 text-gray-600">Hello there 👋</p>
          <h1 className="mb-7 text-3xl font-semibold leading-normal">
            My name is J, and I’m a Frontend Developer with a strong emphasis on
            attention to detail, stability!
          </h1>
          <p className="mb-7 leading-8 text-gray-500">
            My decision-making process typically relies on facts and
            reliability, and I strive to ensure the stability and
            maintainability of projects. Additionally, I possess a collaborative
            spirit, working effectively with individuals of diverse backgrounds
            and roles to achieve common goals.
          </p>
          <div className="flex gap-6">
            <a
              href="/#skill"
              className="flex items-center border-2 border-black bg-black px-6 py-2 text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black"
            >
              My Skill <BiChevronRight />
            </a>
            <a
              href="/#project"
              className="flex items-center border-2 border-gray-200 px-6 py-2"
            >
              My Project <BiChevronRight />
            </a>
          </div>
        </div>
        <div className="relative flex basis-1/2 items-center justify-center">
          <div className="absolute z-0 h-full w-full rounded-full bg-gray-400 opacity-10"></div>
          <img
            className="z-10 rounded-xl duration-200 hover:rotate-[-4deg] hover:scale-105"
            src={'https://picsum.photos/400/500.webp?grayscale'}
          ></img>
        </div>
      </div>
      <div className="anchor-container" id="skill"></div>
      <div className="bg-gray-50">
        <div className="mx-auto max-w-5xl bg-gray-50 py-20">
          <div>
            <h2 className="mb-2 text-3xl font-semibold leading-normal">
              My Skill
            </h2>
            <p className="mb-7 leading-8 text-gray-500">Check Out All Skill.</p>
          </div>
          <Skill />
        </div>
      </div>
      <div className="anchor-container" id="project"></div>
      <div className="mx-auto flex max-w-5xl flex-wrap py-20">
        <div>
          <h2 className="mb-2 text-3xl font-semibold leading-normal">
            My Project
          </h2>
          <p className="mb-7 leading-8 text-gray-500">Check Out All Project.</p>
        </div>
        <Project />
      </div>
      <div className="anchor-container" id="contact"></div>
      <div className="bg-gray-50">
        <div className="mx-auto flex max-w-5xl gap-10 bg-gray-50 py-20">
          <div className="basis-1/2">
            <img
              className="mx-auto rounded-xl"
              src={'https://picsum.photos/400/500.webp?grayscale'}
            ></img>
          </div>
          <div className="basis-1/2 pt-3">
            <h2 className="mb-2 text-3xl font-semibold leading-normal">
              Contact
            </h2>
            <p className="mb-7 leading-8 text-gray-500">
              If you're in search of a Frontend Engineer who not only possesses
              technical expertise but also prioritizes attention to detail and
              stability. Let's Connect!
            </p>
            <div className="flex justify-between gap-4">
              <input
                type="text"
                placeholder="Name"
                className=" mb-4 rounded-lg bg-gray-200 p-4 opacity-50"
              />
              <input
                type="text"
                placeholder="Email"
                className=" mb-4 rounded-lg bg-gray-200 p-4 opacity-50"
              />
            </div>
            <textarea
              rows={5}
              placeholder="Message"
              className="mb-4 w-full rounded-lg bg-gray-200 p-4 opacity-50"
            ></textarea>
            <button className="w-full rounded-lg bg-black px-6 py-2 text-white duration-200 hover:opacity-75">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
