module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'router': '@/router',
        'common': '@/common',
        'network': '@/network',
        'components': '@/components',
        'view': '@/view'
      }
    }
  }
}