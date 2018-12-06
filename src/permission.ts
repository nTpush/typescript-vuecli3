import router, { constantRouterMap } from './router/router'
import store from './store/store'
import Home from './views/Home.vue'
import Not404 from './error/error404.vue'

const whiteList = [ '/login', '/authredirect' ] // 不重定向白名单

router.beforeEach((to, from, next) => {
	// router.addRoutes([
	// 	{
	// 		path: '/user',
	// 		component: Home
	// 	}
	// ])
	next()
})

router.afterEach((to, from) => {
	console.log(to, from)
})

var getLastUrl = (str: String, yourStr: any) => str.slice(str.lastIndexOf(yourStr)) //取到浏览器出现网址的最后"/"出现的后边的字符
