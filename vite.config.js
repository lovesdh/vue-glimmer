import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      // 设置别名 这里的./指的是 vite.config.js 的所载目录（根目录）下面的 src
      '@': path.join(__dirname, 'src'),
    },
    //extensions数组的意思是在import组件的时候自动补全.vue等文件后缀
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  server:{
		host:'0.0.0.0',
		port:4000,    //设置服务启动端口
		// open:true,    //设置服务启动时是否自动打开浏览器
		cors:true,    //允许跨域

		//设置代理
		proxy:{
			// 字符串简写写法
			// '/api': 'http://localhost:8060',
			// // 选项写法
			// '/urlApi':{
			// 	target:'http://localhost:8060',
			// 	changeOrigin: true,       //是否跨域
			// 	ws: true,            //是否代理 websockets
			// 	secure: true,          //是否https接口
			// 	// rewrite:(path) => path.replace('/urlApi/','/')
			// 	rewrite: (path) => path.replace(/^\/urlApi/, '')
			// },
			// 正则表达式写法
			'^/urlApi/.*': {
				target: 'http://localhost:8060',
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/urlApi/, '')
			},
		}
	}

})