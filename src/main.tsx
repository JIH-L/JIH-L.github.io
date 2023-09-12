import { StrictMode, Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import Nav from './components/Nav.tsx'
import Router from './router/index.tsx'
import Loading from './components/Loading.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Nav />
        <Router />
      </Suspense>
    </BrowserRouter>
  </StrictMode>,
)
