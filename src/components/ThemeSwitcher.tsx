import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import { CgDarkMode } from 'react-icons/cg'

const ThemeSwitcher = () => {
  const { toggleTheme, theme } = useContext(ThemeContext)

  return (
    <div style={{ textAlign: 'center' }}>
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
