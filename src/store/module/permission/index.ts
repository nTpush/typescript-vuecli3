import request from '@/service/api.ts'
import { State } from './interface'
import { Commit } from 'vuex'

interface LoginParam {
	name: String
	password: String
}

const state: State = {}

const getters = {}

const mutations = {}

const actions = {
	async login(context: { commit: Commit }, params: LoginParam) {
		return request.post('/api/user/login', { ...params })
	}
}

let home = {
	state,
	getters,
	mutations,
	actions
}

export default home
