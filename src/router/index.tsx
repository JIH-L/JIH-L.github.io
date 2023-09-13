import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const Index = lazy(() => import('../pages/index'))
const Project = lazy(() => import('../pages/project/index'))
const Wtw = lazy(() => import('../pages/project/wtw'))
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
