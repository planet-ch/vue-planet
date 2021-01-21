module.exports = {
  publicPath: '',
  lintOnSave: true,
  css: { // loader
    loaderOptions: {
      sass: {
        prependData: '@import "@/assets/base.scss";'
      }
    }
  },
  devServer: {
    // 服务端压缩是否开启
    compress: true,
    // 配置服务端口号
    host: '0.0.0.0',
    port: 8090,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7001',
        ws: true,
        pathRewrite: {
          '^/api': '/'
        },
        changeOrigin: true
      }
    }
  }
}
