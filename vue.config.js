const path = require('path');
const webpack = require('webpack');

function resolve(dir) {
  return path.resolve(__dirname, '.', dir);
}

const testing = JSON.stringify(process.env.TESTING !== undefined);
const clientID = JSON.stringify(process.env.CLIENT_ID);
const uaString = JSON.stringify(process.env.UA_STRING);
const enableAnalytics =
  typeof process.env.ANALYTICS === 'undefined' ?
  process.env.NODE_ENV === 'production' :
  process.env.ANALYTICS;

module.exports = {
  baseUrl: './',
  pages: {
    admin: './src/admin/index.js',
    component: './src/component/index.js',
    config: './src/config/index.js',
    live: './src/live/index.js',
    mobile: './src/mobile/index.js',
    overlay: './src/overlay/index.js'
  },

  configureWebpack: {
    resolve: {
      alias: {
        globals$: resolve('src/shared/js/globals.ts'),
        libs: resolve('libs'),
        shared: resolve('src/shared'),
        static: resolve('src/shared/static')
      }
    },

    plugins: [
      new webpack.DefinePlugin({
        GLOBAL_PRODUCTION: JSON.stringify(process.env.NODE_ENV === 'production'),
        GLOBAL_CLIENT_ID: clientID,
        GLOBAL_TESTING: testing,
        GLOBAL_UA_STRING: uaString,
        GLOBAL_ANALYTICS: JSON.stringify(enableAnalytics)
      })
    ]
  },

  devServer: {
    host: 'localhost',
    https: true,
    port: 4000
  }
}
