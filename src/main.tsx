import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/index.tsx'
import Loading from './components/Loading.tsx'
import './index.css'
import { ThemeProvider } from './providers/themeProvider'
import ScrollToTop from './helpers/ScrollToTop.ts'

//Import i18n.ts
import './i18n.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
