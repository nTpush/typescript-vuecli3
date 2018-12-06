import Vue from 'vue'
import Vuex from 'vuex'

import home from '@/store/module/home'
import permission from '@/store/module/permission'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		home,
		permission
	}
})
export default store
