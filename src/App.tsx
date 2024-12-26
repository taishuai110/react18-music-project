import { Suspense } from 'react'
import Routes from './router'
import Loading from '@/components/loading'

function App() {
  return (
    <div className="App">
      {/* Suspense 主要用作处理路由实现懒加载后 页面还没加载时的要展示的内容 */}
      <Suspense fallback={<Loading />}>
        <div className="main">
          {
            // 初始化router
            <Routes></Routes>
          }
        </div>
      </Suspense>
    </div>
  )
}

export default App
