import Nav from '../components/nav/Nav'
import { useContext, ReactNode } from 'react'
import { ThemeContext } from '../context/ThemeContext'

export default function DefaultLayout({ children }: { children: ReactNode }) {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === 'dark' ? 'dark' : ''}>
      <Nav />
      <div className="dark:bg-neutral-800">
        <div className="grid gap-12 p-16 md:m-auto md:max-w-3xl md:px-0">
          {children}
        </div>
      </div>
    </div>
  )
}
