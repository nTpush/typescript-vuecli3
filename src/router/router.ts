import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Not404 from '../error/error404.vue'

Vue.use(Router)

export const constantRouterMap = [
	{
		path: '/',
		redirect: '/login'
		// hidden: true
	},
	{
		path: '/login',
		name: '登录页面',
		// hidden: true,
		component: () => import(/* webpackChunkName: 'system' */ '@/views/login/index.vue')
	},
	{
		path: '/Readme',
		// name: 'Readmehome',
		index: 'Readme',
		meta: {
			title: 'Readme',
			icon: 'el-icon-menu'
		},
		component: Home,
		children: [
			{
				name: 'Readme',
				path: '/',
				meta: { title: 'Readme', icon: 'el-icon-menu' },
				component: Home
			}
		]
	},
	{
		path: '*',
		component: Not404
	}
]

export default new Router({
	mode: 'history',
	routes: constantRouterMap
})
// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
	{
		path: '/permission',
		// name: 'permissionhome',
		meta: {
			title: 'permission',
			icon: 'el-icon-setting',
			roles: [ 'admin' ]
		},
		component: Home,
		children: [
			{
				name: 'permission',
				path: '/permission',
				meta: {
					title: 'permission',
					icon: 'el-icon-menu',
					roles: [ 'admin' ]
				},
				component: Home
			}
		]
	},
	{ path: '*', redirect: '/404', hidden: true }
]
