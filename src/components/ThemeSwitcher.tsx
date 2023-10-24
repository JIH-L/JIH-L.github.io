import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CgDarkMode } from 'react-icons/cg'

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <div className="flex items-center p-6 md:p-1">
      <label htmlFor="switch" className="cursor-pointer">
        <CgDarkMode size={20} />
        <input
          type="checkbox"
          id="switch"
          name="theme"
          onChange={toggleTheme}
          checked={theme === 'dark'}
          className="hidden"
        />
      </label>
    </div>
  )
}

export default ThemeSwitcher
