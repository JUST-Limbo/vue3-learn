// 引入不再是vue构造函数,而是一个createApp工厂函数
import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例对象
const app = createApp(App)
app.mount('#app')

/**
 *
 * vue2
  new Vue({
    render: (h) => h(App)
  }).$mount('#app')
 */
