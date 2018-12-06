interface storageParam {}
export default class SteStorageExpired {
	_expired: number // 实例属性
	// 构造函数
	constructor() {
		this._expired = 60
	}
	// @param expired 单位分
	setExpired(expired: number) {
		this._expired = expired * 60
	}
}
