import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import tailwindcss from 'tailwindcss'

// https://vite.dev/config/
export default ({ mode }: { mode: string }) => {
  /* 
    获取环境变量
     mode: 判断生产production还是开发development
   *  第二个参数: env的路径
   *  第三个参数[可选], 接受一个string || string[] 里面规定能读取哪些前缀变量
  */
  const env = loadEnv(mode, `${__dirname}/env`, ['VITE_']) || {}

  return defineConfig({
    // env存在的文件夹
    envDir: './env',

    plugins: [react()],

    resolve: {
      alias: {
        '@': resolve(__dirname, './src')
      }
    },

    // css配置
    css: {
      postcss: {
        plugins: [tailwindcss()]
      }
    },

    server: {
      host: env.VITE_DEV_HOST, // 本地地址
      open: false, // 是否自动启动浏览器
      port: Number(env.VITE_DEV_PORT), // 端口号
      // 跨域配置
      proxy: {
        '/api': {
          target: `${env.VITE_API_URL}:${env.VITE_API_PORT}`,
          changeOrigin: true,
          // 重写/api路径
          rewrite: (path) => path.replace(/^\/api/, '')
        }
      }
    }
  })
}
