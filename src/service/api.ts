import Vue from 'vue'
import axios from 'axios'
import config from './config'
import store from '../store/store'
// 取消重复请求
let pending: Array<{
	url: string
	cancel: Function
}> = []

/**
 * 解决错误：  Property '$loading' does not exist on type 'VueConstructor<Vue>'.
 */
let myThis: any = Vue

const cancelToken = axios.CancelToken
const removePending = (config: any) => {
	for (let p in pending) {
		let item: any = p
		let list: any = pending[p]
		// 当前请求在数组中存在时执行函数体
		if (list.url === config.url + '&request_type=' + config.method) {
			// 执行取消操作
			list.cancel()
			// 从数组中移除记录
			pending.splice(item, 1)
		}
	}
}

const service = axios.create(config)
// 添加请求拦截器
service.interceptors.request.use(
	(config) => {
		myThis.$loading.show()
		removePending(config)
		config.cancelToken = new cancelToken((c) => {
			pending.push({ url: config.url + '&request_type=' + config.method, cancel: c })
		})
		config.headers.Authorization = 'Bear 123'
		return config
	},
	(error) => {
		myThis.$loading.hide()
		return Promise.reject(error)
	}
)

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
	(res) => {
		setTimeout(() => {
			myThis.$loading.hide()
		}, 500)
		removePending(res.config)
		return res.data
	},
	(error) => {
		myThis.$loading.hide()
		return Promise.reject(error)
	}
)

export default service
