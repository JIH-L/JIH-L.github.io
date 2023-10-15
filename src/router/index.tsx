import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const Index = lazy(() => import('../pages/index'))
const Project = lazy(() => import('../pages/project/index'))
const Wtw = lazy(() => import('../pages/project/wtw'))
const Hellosanta = lazy(() => import('../pages/project/hellosanta'))
const Apro = lazy(() => import('../pages/project/apro'))
const Excel = lazy(() => import('../pages/project/excel'))
const Anli = lazy(() => import('../pages/project/anli'))
const Fhjh = lazy(() => import('../pages/project/fhjh'))
const Hkm = lazy(() => import('../pages/project/hkm'))
const ToDoList = lazy(() => import('../pages/todo'))
const UseReducer = lazy(() => import('../pages/useReducer'))

const routes = [
  {
    path: '/',
    element: <Index />,
  },
  {
    path: '/project',
    children: [
      {
        path: '',
        element: <Project />,
      },
      {
        path: 'wtw',
        element: <Wtw />,
      },
      {
        path: 'hellosanta',
        element: <Hellosanta />,
      },
      {
        path: 'apro',
        element: <Apro />,
      },
      {
        path: 'excel',
        element: <Excel />,
      },
      {
        path: 'anli',
        element: <Anli />,
      },
      {
        path: 'fhjh',
        element: <Fhjh />,
      },
      {
        path: 'hkm',
        element: <Hkm />,
      },
    ],
  },
  {
    path: '/todo',
    element: <ToDoList />,
  },
  {
    path: '/useReducer',
    element: <UseReducer />,
  },
]

export default () => useRoutes(routes)
