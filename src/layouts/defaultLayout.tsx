import Nav from '../components/Nav'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function DefaultLayout({ children }: any) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Nav />
      <div className="dark:bg-neutral-800">{children}</div>
    </div>
  )
}
