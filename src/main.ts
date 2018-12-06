import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import Home from './views/Home.vue'
import Not404 from './error/error404.vue'
import '@/permission' // 路由权限控制

import loading from '@/components/loading/loading.ts'
import alert from '@/components/alert/alert.ts'

Vue.use(loading)
Vue.use(alert)

Vue.config.productionTip = false

console.log('----------')
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app')
