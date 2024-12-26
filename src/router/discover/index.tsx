import { lazy } from 'react'
import { type RouteObject } from 'react-router-dom'

const Recommend = lazy(() => import('@/views/discover/c-views/recommend'))
const Ranking = lazy(() => import('@/views/discover/c-views/ranking'))
const Songs = lazy(() => import('@/views/discover/c-views/songs'))
const Djradio = lazy(() => import('@/views/discover/c-views/djradio'))
const Artist = lazy(() => import('@/views/discover/c-views/artist'))
const Album = lazy(() => import('@/views/discover/c-views/album'))

const DiscoverChild: RouteObject[] = [
  {
    path: '/discover/recommend',
    element: <Recommend />
  },
  {
    path: '/discover/ranking',
    element: <Ranking />
  },
  {
    path: '/discover/songs',
    element: <Songs></Songs>
  },
  {
    path: '/discover/djradio',
    element: <Djradio></Djradio>
  },
  {
    path: '/discover/artist',
    element: <Artist></Artist>
  },
  {
    path: '/discover/album',
    element: <Album></Album>
  }
]

export default DiscoverChild
