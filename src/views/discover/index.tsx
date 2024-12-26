import { memo, Suspense } from 'react'
import type { FC, ReactNode } from 'react'
import { Outlet, Link } from 'react-router-dom'

import Loading from '@/components/loading'

interface IProps {
  children?: ReactNode
}

const Discover: FC<IProps> = () => {
  return (
    <div>
      <div>
        <Link to="/discover/recommend">推荐</Link>
        <Link to="/discover/ranking">排行榜</Link>
        <Link to="/discover/songs">歌单</Link>
        <Link to="/discover/djradio">主播电台</Link>
        <Link to="/discover/artist">歌手</Link>
        <Link to="/discover/album">新碟上架</Link>
      </div>
      {/* 给二级路由占位 这里使用Suspense是因为在切换二级路由的时候，不需要重新加载上面DOM，只需要重新加载二级路由的内容 */}
      <Suspense fallback={<Loading />}>
        <Outlet></Outlet>
      </Suspense>
    </div>
  )
}

export default memo(Discover)
