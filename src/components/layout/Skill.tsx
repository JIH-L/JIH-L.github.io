import { ImCss3, ImHtmlFive } from 'react-icons/im'
import { FaSass, FaVuejs, FaReact, FaPhp, FaNodeJs } from 'react-icons/fa'
import { RiJavascriptFill } from 'react-icons/ri'
import { SiTailwindcss, SiNuxtdotjs, SiAdobephotoshop } from 'react-icons/si'
import { BiLogoJquery, BiLogoGithub, BiLogoTypescript } from 'react-icons/bi'
import { TbApi } from 'react-icons/tb'
import { GrMysql } from 'react-icons/gr'
import { TbZeppelin } from 'react-icons/tb'
import { FiFigma } from 'react-icons/fi'
import skillsData from '../../data/skills.json'
import { Skill } from '../../types'

const iconMap: { [key: string]: JSX.Element } = {
  ImHtmlFive: <ImHtmlFive />,
  ImCss3: <ImCss3 />,
  FaSass: <FaSass />,
  SiTailwindcss: <SiTailwindcss />,
  RiJavascriptFill: <RiJavascriptFill />,
  BiLogoJquery: <BiLogoJquery />,
  BiLogoTypescript: <BiLogoTypescript />,
  FaReact: <FaReact />,
  FaVuejs: <FaVuejs />,
  SiNuxtdotjs: <SiNuxtdotjs />,
  FaPhp: <FaPhp />,
  GrMysql: <GrMysql />,
  FaNodeJs: <FaNodeJs />,
  TbApi: <TbApi />,
  BiLogoGithub: <BiLogoGithub />,
  SiAdobephotoshop: <SiAdobephotoshop />,
  FiFigma: <FiFigma />,
  TbZeppelin: <TbZeppelin />,
}

export default function Skills() {
  const skills = skillsData

  return (
    <div className="grid gap-6 md:flex md:gap-1">
      <SkillCategory title="Frontend" skills={skills.frontendSkills} />
      <SkillCategory title="Backend" skills={skills.backendSkills} />
      <SkillCategory title="Other" skills={skills.otherSkills} />
    </div>
  )
}

function SkillCategory({ title, skills }: { title: string; skills: Skill[] }) {
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
            {iconMap[skill.icon as keyof typeof iconMap]}
            <p>{skill.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
