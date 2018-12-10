import AlertComponent from '@/components/alert/index.vue'
let $vm: any
let timer: any
export default {
	install(Vue: any, options: any) {
		if (!$vm) {
			const AlertPlugin = Vue.extend(AlertComponent)
			$vm = new AlertPlugin({
				el: document.createElement('div')
			})
			document.body.appendChild($vm.$el)
		}
		$vm.show = true
		$vm.type = 'error'
		$vm.time = 2000
		let alert = {
			show(text: string = '数据加载中...') {
				$vm.show = true
				$vm.text = text
				$vm.type = 'info'
				this.autoHide()
			},
			info(text: string = '数据加载中...') {
				$vm.show = true
				$vm.text = text
				$vm.type = 'info'
				this.autoHide()
			},
			success(text: string = '数据加载中...') {
				$vm.show = true
				$vm.text = text
				$vm.type = 'success'
				this.autoHide()
			},
			error(text: string = '数据加载中...') {
				$vm.show = true
				$vm.text = text
				$vm.type = 'error'
				this.autoHide()
			},
			warning(text: string = '数据加载中...') {
				$vm.show = true
				$vm.text = text
				$vm.type = 'warning'
				this.autoHide()
			},
			primary(text: string = '数据加载中...') {
				$vm.show = true
				$vm.text = text
				$vm.type = 'primary'
				this.autoHide()
			},
			hide() {
				$vm.show = false
			},
			autoHide() {
				clearTimeout(timer)
				timer = setTimeout(() => {
					$vm.show = false
				}, $vm.time)
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
