import { useRoutes } from 'react-router-dom'
import { lazy } from 'react'

const Index = lazy(() => import('../pages/index'))
const ToDoList = lazy(() => import('../pages/todo'))
const UseReducer = lazy(() => import('../pages/useReducer'))

const routes = [
  {
    path: '/',
    element: <Index />,
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
