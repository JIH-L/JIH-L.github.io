import { ImCss3, ImHtmlFive } from 'react-icons/im'
import { FaSass, FaVuejs, FaReact, FaPhp, FaNodeJs } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiTailwindcss, SiNuxtdotjs, SiAdobephotoshop } from 'react-icons/si'
import { BiLogoJquery, BiLogoGithub, BiLogoTypescript } from 'react-icons/bi'
import { TbApi } from 'react-icons/tb'
import { GrMysql } from 'react-icons/gr'
import { TbZeppelin } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'

const frontendSkills = [
  { icon: <ImHtmlFive />, name: 'HTML5' },
  { icon: <ImCss3 />, name: 'CSS3' },
  { icon: <FaSass />, name: 'Sass' },
  { icon: <SiTailwindcss />, name: 'Tailwindcss' },
  { icon: <RiJavascriptFill />, name: 'Javascript' },
  { icon: <BiLogoJquery />, name: 'jQuery' },
  { icon: <BiLogoTypescript />, name: 'Typescript' },
  { icon: <FaReact />, name: 'React' },
  { icon: <FaVuejs />, name: 'Vue.js' },
  { icon: <SiNuxtdotjs />, name: 'Nuxt.js' },
]

const backendSkills = [
  { icon: <FaPhp />, name: 'PHP' },
  { icon: <GrMysql />, name: 'Mysql' },
  { icon: <FaNodeJs />, name: 'Node.js' },
  { icon: <TbApi />, name: 'RESTful API' },
]

const otherSkills = [
  { icon: <BiLogoGithub />, name: 'Git' },
  { icon: <SiAdobephotoshop />, name: 'Photoshop' },
  { icon: <FiFigma />, name: 'Figma' },
  { icon: <TbZeppelin />, name: 'Zeplin' },
]

export default function Skills() {
  return (
    <div className="grid gap-6 md:flex md:gap-1">
      <SkillCategory title="Frontend" skills={frontendSkills} />
      <SkillCategory title="Backend" skills={backendSkills} />
      <SkillCategory title="Other" skills={otherSkills} />
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: any[] }) {
  const wrap = title === 'Frontend' ? 'basis-2/4' : 'basis-1/4'
  return (
    <div className={wrap}>
      <h3 className="mb-2 text-2xl font-semibold dark:text-white md:text-xl xl:text-2xl">
        {title}
      </h3>
      <ul
        className={`text-base dark:text-gray-300 md:text-sm xl:text-base ${
          skills.length > 5 ? 'grid grid-cols-2' : ''
        }`}
      >
        {skills.map((skill, index) => (
          <li key={index} className="flex items-center gap-2">
            {skill.icon}
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
