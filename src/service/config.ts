import qs from 'qs'
import { AxiosResponse, AxiosRequestConfig } from 'axios'

const axiosConfig: AxiosRequestConfig = {
	baseURL: 'http://new-practice.local/',
	// 请求后的数据处理
	transformResponse: [
		function(data: AxiosResponse) {
			return data
		}
	],
	// 查询对象序列化函数
	transformRequest: [
		function(data: any) {
			// Do whatever you want to transform the data
			let ret = ''
			for (let it in data) {
				ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
			}
			return ret
		}
	],
	// 超时设置s
	timeout: 30000,
	// 跨域是否带Token
	withCredentials: false,
	responseType: 'json',
	// xsrf 设置
	xsrfCookieName: 'XSRF-TOKEN',
	xsrfHeaderName: 'X-XSRF-TOKEN',
	// 最多转发数，用于node.js
	maxRedirects: 5,
	// 最大响应数据大小
	maxContentLength: 2000,
	// 自定义错误状态码范围
	validateStatus: function(status: number) {
		return status >= 200 && status < 300
	}
	// 用于node.js
}

export default axiosConfig
