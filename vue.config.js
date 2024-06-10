const { defineConfig } = require('@vue/cli-service')
const path = require('path');

module.exports = defineConfig({
  outputDir: path.join(__dirname, 'dist'),
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  transpileDependencies: true,
  chainWebpack: config => {
    config.externals({
      // Exclude dependencies from node_modules directory
      'electron': 'commonjs electron',
      'fs': 'commonjs fs',
      'path': 'commonjs path'
      // Add other modules that should be treated as external
    });

    config.resolve.alias
      .set('path', 'path-browserify')
      // Add other aliases or modifications as needed
  }
})
