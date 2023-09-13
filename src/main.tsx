import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Router from './router/index.tsx'
import Loading from './components/Loading.tsx'
import './index.css'
import { ThemeProvider } from './providers/themeProvider'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <ThemeProvider>
          <Router />
        </ThemeProvider>
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
