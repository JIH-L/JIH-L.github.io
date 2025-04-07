import ProjectLayout from '../../layouts/projectLayout'
import chatscripter from '../../assets/images/chatscripter.webp'
import { BiChevronRight } from 'react-icons/bi'

export default function Wtw() {
  return (
    <ProjectLayout>
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-2 text-3xl font-semibold leading-normal dark:text-white md:text-2xl xl:text-3xl">
          Side Project ChatScripter
        </h1>
        <p className="mb-7 text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          A creative platform for generating personalized scripts.
        </p>
        <a
          target="_blank"
          href="https://www.chatscripter.com/"
          className="flex items-center border-2 border-black bg-black px-6 py-2 text-base text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white md:text-sm xl:text-base"
        >
          Visit Website <BiChevronRight />
        </a>
      </div>
      <div>
        <img src={chatscripter} alt="chatscripter" />
      </div>
      <div className="px-16 text-sm">
        <p className="leading-loose dark:text-gray-300 ">
          ChatScripter is a creative script ideation platform designed to help
          users quickly build content structures for novels, screenplays, and
          game plots. This is a front-end prototype version focused on UX
          design, content categorization, and workflow planning. Future versions
          will integrate AI services to generate both text and images, allowing
          users to create full scripts more efficiently.
        </p>
        <h2 className="mb-6 mt-8 text-xl font-semibold leading-normal dark:text-white md:text-lg xl:text-xl">
          Tech Stack
        </h2>
        <ul className="ml-4 list-disc leading-loose dark:text-gray-300 ">
          <li>
            Frontend: React + Next.js (App Router), TypeScript, Tailwind CSS
          </li>
          <li>Backend: Bun runtime with custom API routes in Next.js</li>
          <li>Database: MongoDB (for storing script articles)</li>
          <li>
            Authentication: Google OAuth Cloud Storage: AWS S3 for image uploads
          </li>
          <li>Deployment: Hosted on Vercel</li>
        </ul>
      </div>
    </ProjectLayout>
  )
}
