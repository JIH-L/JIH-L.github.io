import snowman from '../../assets/images/snowman.webp'
import { useTranslation } from 'react-i18next'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/opacity.css'
import styles from './about.module.css'
import Button from './../button'

export default function About() {
  const { t } = useTranslation()
  return (
    <>
      <div className="pt-10 md:basis-1/2">
        <p
          className={`${styles['dynamic-text']} mb-7 text-base text-gray-500 dark:text-gray-300 md:text-sm xl:text-base`}
        >
          Hello there!
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
          <Button text={t('my-skills')} href={'/#skill'} />
          <Button text={t('my-projects')} href={'/#project'} />
        </div>
      </div>
      <div className="relative flex items-center justify-center md:basis-1/2">
        <span
          className={`${styles['circle']} absolute z-0 m-0 hidden h-[520px] w-[520px] overflow-hidden bg-gray-400 p-0 opacity-10 xl:block`}
        ></span>
        <LazyLoadImage
          className="z-10 max-w-[400px] rounded-xl grayscale duration-200 hover:rotate-[-4deg] hover:scale-105 hover:grayscale-0"
          src={snowman}
          alt="snowman"
          effect="opacity"
          width={400}
          height={535}
        ></LazyLoadImage>
      </div>
    </>
  )
}
