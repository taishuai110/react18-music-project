import { useRoutes } from 'react-router-dom'
import routes from './router'

/* 
  函数式组件，可以选props形参, 表示该组件需要传递的参数  
  还可以对函数直接声明React.FC类型表示该函数是一个React函数组件 例如 function App(): React.Fc<类型A>(props: 类型A) {}
*/
function App() {
  return (
    <div className="App">
      {
        // 初始化router
        useRoutes(routes)
      }
    </div>
  )
}

/* 
  设置组件传递参数的默认值
  App.defaultProps = {
    name: "wwww"
  }
*/

export default App
