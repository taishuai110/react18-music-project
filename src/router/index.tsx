import { type RouteObject, Navigate } from 'react-router-dom'
import Discover from '@/views/discover'
import Mine from '@/views/mine'
import Focus from '@/views/focus'
import Download from '@/views/download'

const routers: RouteObject[] = [
  {
    path: '/',
    // 路由重定向
    element: <Navigate to="/discover" />
  },
  {
    path: '/discover',
    element: <Discover />
  },
  {
    path: '/mine',
    element: <Mine />
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
