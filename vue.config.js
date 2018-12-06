module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? '' : '/',
  devServer: {
    // 对开发服务的设置
    // Various Dev Server settings
    host: '0.0.0.0',
    port: 9999, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    open: true, // 自动调用默认浏览器打开
    https: false // 是否使用https, https使用node的一个内部默认的ca证书
  }
}
