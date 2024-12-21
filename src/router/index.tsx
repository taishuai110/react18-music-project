import { type RouteObject, Navigate } from 'react-router-dom'
import { lazy } from 'react'

import DiscoverChild from './discover'

// 动态路由的目的，1是优化页面，2是做权限控制
const Discover = lazy(() => import('@/views/discover'))
const Mine = lazy(() => import('@/views/mine'))
const Focus = lazy(() => import('@/views/focus'))
const Download = lazy(() => import('@/views/download'))

const routers: RouteObject[] = [
  {
    path: '/',
    // 路由重定向
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />,
    children: [
      {
        path: '/discover',
        element: <Navigate to="/discover/recommend" />
      },
      // 解构出来的是一个数组，所以直接展开
      ...DiscoverChild
    ],
  },
  {
    path: '/mine',
    element: <Mine />,
  },
  {
    path: '/focus',
    element: <Focus />
  },
  {
    path: '/download',
    element: <Download />
  }
]

export default routers
