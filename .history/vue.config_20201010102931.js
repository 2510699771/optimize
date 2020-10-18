const productionGzipExtensions = ['html', 'js', 'css'] // 需要拆分文件的类型
const UglifyJsPlugin = require('uglifyjs-webpack-plugin') // 清除所有的打印
 
const isPro = process.env.NODE_ENV === 'production'
module.exports = {
  publicPath: isPro ? './' : '/',
  devServer: {
    host: '0.0.0.0',
    proxy: {
      '/api': {
        ws: false,
        target: 'http://49.233.66.125:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
  chainWebpack: config => {
    // 移除 prefetch 插件
    config.plugins.delete("prefetch")
    // 移除 preload 插件
    config.plugins.delete('preload')
    // 压缩代码
    config.optimization.minimize(true)
    // 分割代码
    config.optimization.splitChunks({
      chunks: 'all'
    })
  },
  configureWebpack: config => {
    if (isPro) {
      // cdn引入
      config.externals = {
        // 键值对: 键是你要cdn引用的插件名, 值是固定的, 只能百度
        'vue': 'Vue',
        'vuex': 'Vuex',
        'vue-router': 'VueRouter',
        'Axios': 'axios',
        'element-ui': 'ELEMENT',
        'echarts': 'echarts',
        'lodash': '_',
        'core-js': 'core-js'
      }
      config.plugins.push(
          new UglifyJsPlugin({
            uglifyOptions: {
              compress: {
                drop_debugger: true,
                drop_console: true,
              },
            },
            sourceMap: false,
            parallel: true,
          })
      )
    }
  },
  productionSourceMap: false
}
