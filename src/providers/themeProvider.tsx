import { useState, ReactNode } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(
    (localStorage.getItem('ui.theme') as 'light' | 'dark') || 'dark',
  )

  const toggleTheme = (): void => {
    const val = theme === 'light' ? 'dark' : 'light'
    setTheme(val)
    localStorage.setItem('ui.theme', val)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
