import {
  Index,
  Project,
  Chatscripter,
  Wtw,
  Hellosanta,
  Apro,
  Excel,
  Anli,
  Fhjh,
  Hkm,
  ToDoList,
  UseReducer,
} from './RouterComponents'

export const routes = [
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
        path: 'chatscripter',
        element: <Chatscripter />,
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
