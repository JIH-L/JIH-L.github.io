import { ImCss3, ImHtmlFive } from 'react-icons/im'
import { FaSass, FaVuejs, FaReact, FaPhp, FaNodeJs } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiTailwindcss, SiNuxtdotjs } from 'react-icons/si'
import { BiLogoJquery, BiLogoGithub, BiLogoTypescript } from 'react-icons/bi'
import { TbApi } from 'react-icons/tb'
import { GrMysql } from 'react-icons/gr'

export default function Skill() {
  return (
    <div className="flex">
      <div className="basis-2/4">
        <h3 className="mb-2 text-2xl font-semibold">Frontend</h3>
        <ul className="grid grid-cols-2">
          <li className="mb-1 flex items-center gap-2">
            <ImHtmlFive />
            <p>HTML5</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <ImCss3 />
            <p>CSS3</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <FaSass />
            <p>Sass</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <SiTailwindcss />
            <p>Tailwindcss</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <RiJavascriptFill />
            <p>Javascript</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <BiLogoJquery />
            <p>JQuery</p>
          </li>
          <li className="flex items-center gap-2">
            <BiLogoTypescript />
            <p>Typescript</p>
          </li>
          <li className="flex items-center gap-2">
            <FaReact />
            <p>React.js</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <FaVuejs />
            <p>Vue.js</p>
          </li>
          <li className="mb-1 flex items-center gap-2">
            <SiNuxtdotjs />
            <p>Nuxt.js</p>
          </li>
        </ul>
      </div>
      <div className="basis-1/4">
        <h3 className="mb-2 text-2xl font-semibold">Backend</h3>
        <ul>
          <li className="flex items-center gap-2">
            <FaPhp />
            <p>PHP</p>
          </li>
          <li className="flex items-center gap-2">
            <GrMysql />
            <p>MySQL</p>
          </li>
          <li className="flex items-center gap-2">
            <FaNodeJs />
            <p>Node.js</p>
          </li>
          <li className="flex items-center gap-2">
            <TbApi />
            <p>RESTful API</p>
          </li>
        </ul>
      </div>
      <div className="basis-1/4">
        <h3 className="mb-2 text-2xl font-semibold">Other</h3>
        <ul>
          <li className="flex items-center gap-2">
            <BiLogoGithub />
            <p>Git</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
