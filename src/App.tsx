import { Suspense } from 'react'
import { useRoutes, Link } from 'react-router-dom'
import routes from './router'

import Loading from '@/components/loading'

function App() {
  return (
    <div className="App">
      <div className="nav">
        <Link to="/discover">发现音乐</Link>
        <Link to="/mine">我的音乐</Link>
        <Link to="/focus">关注</Link>
        <Link to="/download">下载客户端</Link>
      </div>

      {/* Suspense 主要用作处理路由实现懒加载后 页面还没加载时的要展示的内容 */}
      <Suspense fallback={<Loading />}>
        <div className="main">
          {
            // 初始化router
            useRoutes(routes)
          }
        </div>
      </Suspense>
    </div>
  )
}


export default App
