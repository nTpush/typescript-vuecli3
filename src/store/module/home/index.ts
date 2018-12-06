import request from '@/service/api.ts'
import router from '@/router/router.ts'
import { State } from './interface'
import { Commit } from 'vuex'

interface GetTodayWeatherParam {
	city: string
}

interface GetAuthRouterParam {}

const state: State = {
	count: 0,
	test1: []
}

const getters = {
	count: (state: State) => state.count
}

const mutations = {
	INCREMENT(state: State, num: number) {
		state.count += num
	}
}

const actions = {
	async getTodayWeather(context: { commit: Commit }, params: GetTodayWeatherParam) {
		return request.get('/api/test', { params: params })
	},
	async getAuthRouter(context: { commit: Commit }, params: GetAuthRouterParam) {
		return request.get('/api/test', { data: params })
	}
}

let home = {
	state,
	getters,
	mutations,
	actions
}

export default home
