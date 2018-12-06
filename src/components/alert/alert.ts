import AlertComponent from '@/components/alert/index.vue'
let $vm: any
export default {
	install(Vue: any, options: any) {
		if (!$vm) {
			const AlertPlugin = Vue.extend(AlertComponent)
			$vm = new AlertPlugin({
				el: document.createElement('div')
			})
			document.body.appendChild($vm.$el)
			console.log($vm.$el, 'el')
		}
		$vm.show = true
		$vm.type = 'error'
		let alert = {
			show(text: string = '数据加载中...', type: string = 'info') {
				$vm.show = true
				$vm.text = text
				$vm.type = type
			},
			hide() {
				$vm.show = false
			}
		}
		if (!Vue.$alert) {
			Vue.$alert = alert
		}
		// Vue.prototype.$loading = Vue.$loading;
		Vue.mixin({
			created() {
				this.$alert = Vue.$alert
			}
		})
	}
}
