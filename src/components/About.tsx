import { BiChevronRight } from 'react-icons/bi'
import snowman from '../assets/images/snowman.webp'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'

export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <div className="pt-10 md:basis-1/2">
        <p className="mb-7 text-base text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          {t('about-intro')}
        </p>
        <h1 className="mb-7 text-3xl font-semibold leading-normal tracking-widest dark:text-white md:text-2xl xl:text-3xl">
          {t('about-name')}
          <br />
          {t('about-career')}
        </h1>
        <p className="mb-7 whitespace-break-spaces text-base leading-8 text-gray-500 dark:text-gray-300 md:text-sm xl:text-base">
          {t('about-description')}
        </p>
        <div className="flex gap-6">
          <a
            href="/#skill"
            className="flex items-center border-2 border-black bg-black px-6 py-2 text-base text-white duration-200 hover:border-gray-200 hover:bg-white hover:text-black dark:bg-white dark:text-black dark:hover:bg-black dark:hover:text-white md:text-sm xl:text-base"
          >
            {t('my-skills')} <BiChevronRight />
          </a>
          <a
            href="/#project"
            className="flex items-center border-2 border-gray-200 px-6 py-2 text-base duration-200 hover:border-black hover:bg-black hover:text-white dark:bg-black dark:text-white dark:hover:bg-white dark:hover:text-black md:text-sm xl:text-base"
          >
            {t('my-projects')} <BiChevronRight />
          </a>
        </div>
      </div>
      <div className="relative flex items-center justify-center md:basis-1/2">
        <div className="absolute z-0 hidden h-[520px] w-[520px] rounded-full bg-gray-400 opacity-10 xl:block"></div>
        <LazyLoadImage
          className="z-10 max-w-[400px] rounded-xl grayscale duration-200 hover:rotate-[-4deg] hover:scale-105 hover:grayscale-0"
          src={snowman}
          alt="snowman"
          effect="opacity"
        ></LazyLoadImage>
      </div>
    </>
  )
}
