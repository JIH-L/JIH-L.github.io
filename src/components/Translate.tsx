import { useTranslation } from 'react-i18next'
import { RiTranslate } from 'react-icons/ri'

const Translate = () => {
  const { i18n } = useTranslation()
  const changeLanguage = () => {
    const language = i18n.language === 'en' ? 'zhTW' : 'en'
    i18n.changeLanguage(language)
  }

  return (
    <div
      className="flex items-center p-6 hover:cursor-pointer md:p-1"
      onClick={changeLanguage}
    >
      <RiTranslate size={20} />
    </div>
  )
}

export default Translate
